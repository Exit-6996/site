'use strict';
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const root = __dirname;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'perimeter-academy-test-'));
const dbPath = path.join(dir, 'test.sqlite');
const port = 34000 + Math.floor(Math.random() * 15000);
const base = `http://127.0.0.1:${port}`;
const env = { ...process.env, PORT: String(port), DATABASE_PATH: dbPath, COURSE_ACCESS_CODES: 'SMOKE-TEST-ENROLL-2026' };
let child;

function startServer() {
  child = spawn(process.execPath, [path.join(root, 'server.js')], { env, stdio: ['ignore', 'pipe', 'pipe'] });
  let log = '';
  child.stdout.on('data', x => { log += x.toString(); });
  child.stderr.on('data', x => { log += x.toString(); });
  return (async () => {
    for (let i = 0; i < 100; i++) {
      if (child.exitCode !== null) throw new Error(`Server exited early:\n${log}`);
      try { const r = await fetch(`${base}/healthz`); if (r.ok) return; } catch {}
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error(`Server did not start:\n${log}`);
  })();
}
async function stopServer() {
  if (!child || child.exitCode !== null) return;
  child.kill('SIGTERM');
  await new Promise(resolve => {
    const timer = setTimeout(() => { try { child.kill('SIGKILL'); } catch {} resolve(); }, 3000);
    child.once('exit', () => { clearTimeout(timer); resolve(); });
  });
}
function cookieFrom(response) {
  const value = response.headers.get('set-cookie') || '';
  const match = value.match(/pa_session=[^;]+/);
  assert.ok(match, 'server should set HttpOnly session cookie');
  assert.match(value, /HttpOnly/i);
  assert.match(value, /SameSite=Strict/i);
  return match[0];
}
async function request(route, { method = 'GET', cookie = '', data, origin } = {}) {
  const headers = { Accept: 'application/json' };
  if (cookie) headers.Cookie = cookie;
  if (data !== undefined) headers['Content-Type'] = 'application/json';
  if (origin) headers.Origin = origin;
  return fetch(`${base}${route}`, { method, headers, body: data === undefined ? undefined : JSON.stringify(data) });
}

(async () => {
  try {
    await startServer();
    const health = await (await request('/healthz')).json();
    assert.equal(health.database, 'sqlite');
    assert.equal((await request('/course-materials.json')).status, 404, 'paid course JSON must not be served as a public static file');

    const registration = await request('/api/auth/register', {
      method: 'POST',
      data: { displayName: 'Test Learner', email: 'learner@example.test', password: 'CorrectHorseBatteryStaple!2026' }
    });
    assert.equal(registration.status, 201);
    let cookie = cookieFrom(registration);
    let profile = (await registration.json()).profile;
    assert.equal(profile.user.displayName, 'Test Learner');
    assert.equal(profile.stats.xp, 0);

    const duplicate = await request('/api/auth/register', {
      method: 'POST',
      data: { displayName: 'Test Learner', email: 'learner@example.test', password: 'CorrectHorseBatteryStaple!2026' }
    });
    assert.equal(duplicate.status, 409, 'duplicate email should be rejected');

    const saved = await request('/api/profile', {
      method: 'PATCH', cookie, data: { displayName: 'Alex Learner', bio: 'Interested in defensive security.', focusArea: 'SOC analysis' }
    });
    assert.equal(saved.status, 200);
    profile = (await saved.json()).profile;
    assert.equal(profile.user.displayName, 'Alex Learner');
    assert.equal(profile.user.focusArea, 'SOC analysis');

    const unauthorizedMaterials = await request('/api/course/materials?lang=en', { cookie });
    assert.equal(unauthorizedMaterials.status, 403, 'paid content must remain locked before enrollment');

    const wrongOrigin = await request('/api/profile', { method: 'PATCH', cookie, origin: 'https://attacker.invalid', data: { displayName: 'Attacker', bio: '', focusArea: '' } });
    assert.equal(wrongOrigin.status, 403, 'cross-origin profile mutation must be rejected');

    const wrongFreeAnswer = await request('/api/progress/free-lesson', { method: 'POST', cookie, data: { lessonIndex: 0, answerIndex: 0 } });
    assert.equal(wrongFreeAnswer.status, 400, 'server must validate free-lesson answer');

    const correctFreeAnswer = await request('/api/progress/free-lesson', { method: 'POST', cookie, data: { lessonIndex: 0, answerIndex: 1 } });
    assert.equal(correctFreeAnswer.status, 200);
    profile = (await correctFreeAnswer.json()).profile;
    assert.equal(profile.stats.xp, 20);
    assert.equal(profile.stats.freeLessonsCompleted, 1);
    assert.ok(profile.achievements.some(x => x.id === 'first-step'));

    const duplicateFreeAnswer = await request('/api/progress/free-lesson', { method: 'POST', cookie, data: { lessonIndex: 0, answerIndex: 1 } });
    assert.equal((await duplicateFreeAnswer.json()).profile.stats.xp, 20, 'repeating an event must not award XP twice');

    const noCode = await request('/api/course/enroll', { method: 'POST', cookie, data: { accessCode: 'NOT-VALID' } });
    assert.equal(noCode.status, 401);
    const enrolled = await request('/api/course/enroll', { method: 'POST', cookie, data: { accessCode: 'SMOKE-TEST-ENROLL-2026' } });
    assert.equal(enrolled.status, 200);

    const materialsEn = await request('/api/course/materials?lang=en', { cookie });
    assert.equal(materialsEn.status, 200);
    const modulesEn = (await materialsEn.json()).modules;
    assert.equal(modulesEn.length, 16);
    assert.equal(modulesEn[0].lessons.length, 6);

    const crossOriginLesson = await request('/api/progress/module-lesson', { method: 'POST', cookie, origin: 'https://attacker.invalid', data: { moduleId: '01', lessonIndex: 0 } });
    assert.equal(crossOriginLesson.status, 403, 'cross-origin course progress mutation must be rejected');

    const materialsRu = await request('/api/course/materials?lang=ru', { cookie });
    assert.equal(materialsRu.status, 200);
    assert.match((await materialsRu.json()).modules[0].title, /Основы|Безопасност/);

    const lesson = await request('/api/progress/module-lesson', { method: 'POST', cookie, data: { moduleId: '01', lessonIndex: 0 } });
    assert.equal(lesson.status, 200);
    profile = (await lesson.json()).profile;
    assert.equal(profile.stats.xp, 30);
    assert.equal(profile.stats.moduleLessonsCompleted, 1);
    const repeatedLesson = await request('/api/progress/module-lesson', { method: 'POST', cookie, data: { moduleId: '01', lessonIndex: 0 } });
    assert.equal((await repeatedLesson.json()).profile.stats.xp, 30, 'repeating a lesson completion must not award XP twice');

    const badAssessment = await request('/api/progress/module-assessment', { method: 'POST', cookie, data: { moduleId: '01', answers: [0, 0] } });
    assert.equal(badAssessment.status, 400);
    const goodAssessment = await request('/api/progress/module-assessment', { method: 'POST', cookie, data: { moduleId: '01', answers: modulesEn[0].assessment.map(x => x.answer) } });
    assert.equal(goodAssessment.status, 200);
    profile = (await goodAssessment.json()).profile;
    assert.equal(profile.stats.xp, 80);
    assert.equal(profile.stats.modulesCompleted, 1);
    assert.ok(profile.achievements.some(x => x.id === 'first-module'));
    assert.equal(profile.activityDays.reduce((n, d) => n + d.count, 0), 3);

    const logout = await request('/api/auth/session', { method: 'DELETE', cookie });
    assert.equal(logout.status, 204);
    const loggedOut = await request('/api/auth/session', { cookie });
    assert.equal(loggedOut.status, 401);

    await stopServer();
    await startServer();
    const login = await request('/api/auth/login', { method: 'POST', data: { email: 'learner@example.test', password: 'CorrectHorseBatteryStaple!2026' } });
    assert.equal(login.status, 200, 'account should survive server restart');
    cookie = cookieFrom(login);
    profile = (await login.json()).profile;
    assert.equal(profile.stats.xp, 80);
    assert.equal(profile.stats.modulesCompleted, 1);
    assert.equal(profile.user.displayName, 'Alex Learner');
    const restoredMaterials = await request('/api/course/materials?lang=en', { cookie });
    assert.equal(restoredMaterials.status, 200, 'enrollment should persist');

    console.log('PASS: registration, login, profile editing, origin protection, server-side answer validation, enrollment gating, bilingual delivery, XP, achievements, activity history, logout, SQLite persistence, and restart recovery.');
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    await stopServer();
    try { fs.rmSync(dir, { recursive: true, force: true }); } catch {}
  }
})();
