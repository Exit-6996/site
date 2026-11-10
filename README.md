# Perimeter Academy

A bilingual (English/Russian) information-security learning site with a free introductory pathway, a 16-module enrollment-restricted professional program, learner accounts, and a persistent learning record.

## What's included

- **Free introduction:** eight interactive lessons with knowledge checks, explanations, and a short defensive log-triage scenario.
- **Professional course:** 16 advanced modules, 96 lessons, 16 guided labs, 16 detailed field guides, 32 bilingual knowledge-check questions, and an integrated capstone (about 92 hours).
- **Learner accounts:** registration, sign-in, sign-out, editable profile, focus area, and short biography.
- **Progress:** server-recorded lesson completions and passed assessments, with XP, levels, current/longest streaks, and an activity heatmap.
- **Achievements:** milestones for starting, completing the introduction, passing modules, sustained activity, and the capstone.
- **Visual interface:** responsive design, bilingual navigation and content, animated security-network artwork, footer FAQs, contact configuration, and reduced-motion support.
- **Backend:** Node.js HTTP API and SQLite database. Passwords are stored as salted scrypt hashes; session tokens are stored as hashes and delivered in HttpOnly, SameSite=Strict cookies.

See `CURRICULUM.md` for the complete lesson-by-lesson course outline, assignment deliverables, teaching approach, and safe-practice boundaries.

## Files

- `perimeter-academy.html` — complete bilingual front end.
- `server.js` — API and static HTML server.
- `course-materials.json` — member-only course content. Keep this file on the server; do not publish it as a static asset.
- `CURRICULUM.md` — curriculum overview and detailed outline.
- `smoke-test.js` — repeatable local API/database smoke test.
- `package.json` — start and test scripts; no third-party npm packages are required.
- `.env.example` — example environment configuration.

## Requirements

- Node.js **22.13 or newer**. The server uses the built-in `node:sqlite` module, which is still marked experimental in some Node 22 releases. For a production deployment, consider moving the data layer to a managed PostgreSQL service or a mature SQLite adapter and review the runtime support policy.
- No npm dependencies are required for the local starter.

## Run locally

```bash
cp .env.example .env
# Edit .env only if you need to configure private enrollment codes.
npm start
```

Open `http://localhost:3000`. Set a private `COURSE_ACCESS_CODES` value in `.env` when you are ready to issue paid-course enrollment codes; leaving it blank keeps enrollment disabled. The free introduction, course overview, public syllabus, and sample log-analysis lab are available without enrollment. A learner can create a free account from **My Profile**. Registration requires a display name, valid email address, and password of at least 12 characters.

Set `DATABASE_PATH` to choose where the SQLite file is created. By default it is `perimeter-academy.sqlite` beside the server. Back up this database securely; it contains account records and learning history. Do not place it in a public static directory or commit it to source control.

### Enrollment codes

The paid course is separate from free registration. For local demonstration, configure one or more private enrollment codes in `COURSE_ACCESS_CODES`, separated by commas:

```bash
COURSE_ACCESS_CODES='CODE-FOR-LEARNER-1,CODE-FOR-LEARNER-2' node server.js
```

A signed-in learner can enter an issued code on the professional-program page. The server verifies it and stores the enrollment flag in SQLite. Codes are **not** embedded in the HTML. This starter mechanism is suitable for a controlled demonstration, not a full payment or subscription platform. Do not commit real enrollment codes.

### HTTPS deployment

When the site is served over HTTPS, set:

```bash
COOKIE_SECURE=1
NODE_ENV=production
```

Terminate TLS at a trusted reverse proxy or hosting platform, keep the database private, restrict filesystem access, use a persistent volume, and set up encrypted backups and restore testing. Do not use the local sample password/code settings for a public launch.

## Learner motivation model

The activity graph records learning events, not casual visits. It adds activity when a learner correctly completes an introductory lesson, marks a professional-course lesson complete, or passes a module assessment. Repeating the same event does not award XP again. The current streak counts consecutive calendar days with at least one recorded learning event; the longest streak is retained. XP levels advance every 250 points.

The activity date is currently calculated in the server's timezone (normally UTC). If the deployed audience spans time zones, add a validated per-user IANA timezone field before relying on streaks for local-day reporting. Avoid streak designs that punish breaks: the feature is intended as encouragement, not a requirement to study every day.

## API overview

All routes are same-origin. Browser requests use `credentials: "include"`. Session IDs are random, held only in an HttpOnly cookie, and stored in SQLite as SHA-256 hashes.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/healthz` | Health check |
| POST | `/api/auth/register` | Create a free learner account and sign in |
| POST | `/api/auth/login` | Sign in to an existing account |
| GET | `/api/auth/session` | Restore the active session |
| DELETE | `/api/auth/session` | Revoke the current session |
| GET | `/api/profile` | Read profile and learning record |
| PATCH | `/api/profile` | Update display name, bio, and focus area |
| POST | `/api/course/enroll` | Verify an enrollment code and activate paid-course access |
| GET | `/api/course/materials?lang=en\|ru` | Return protected course content to enrolled users only |
| POST | `/api/progress/free-lesson` | Record a correct free-lesson answer |
| POST | `/api/progress/module-lesson` | Record an advanced lesson completion |
| POST | `/api/progress/module-assessment` | Verify and record a passed module assessment |

The progress endpoints award XP once per unique event. The server validates introductory and module-assessment answers. A browser cannot unlock paid course materials by setting a local flag.

## Tests

Run the included smoke test with:

```bash
npm test
```

It starts an isolated local server and temporary SQLite database, then checks registration, login, profile editing, authorization boundaries, enrollment, bilingual material delivery, progress/XP/achievements, and data persistence after a server restart.

You can also check syntax manually:

```bash
node --check server.js
```

## Important production gaps

This project is a functional learning-site starter, not yet a complete commercial identity and learning-management platform. Before a public or paid launch, add:

1. **Email verification and password recovery.** Neither is implemented; registration currently accepts an email address without proving ownership. Password reset must use single-use, expiring tokens and a secure mail provider.
2. **Payment integration.** No checkout is connected. Integrate a provider's verified server-side webhook with an enrollment/entitlement table. Never trust a browser redirect or client-supplied `paid=true` value.
3. **Enrollment management.** The environment-variable code list is a demo issuance mechanism. Replace it with per-learner entitlements, expiry, revocation, audit history, and an admin workflow.
4. **Persistent production database operations.** Use a supported database runtime, schema migrations, automated backups, monitoring, and documented restore procedures. Protect the SQLite file or move to managed PostgreSQL before scaling beyond a small deployment.
5. **Privacy and legal pages.** Add an operator identity, privacy notice, terms, refund policy, support contact, retention/deletion process, and applicable business disclosures for the operating jurisdiction.
6. **Security and accessibility review.** Add a formal threat model, dependency/runtime patch process, secure deployment headers, automated tests, keyboard/screen-reader checks, and independent review before taking real user data or payments.
7. **Lab execution and grading.** Lab briefs and deliverables are included, but isolated browser terminals, automatic grading of commands, instructor marking, and downloadable certificates are not yet implemented. Interactive terminal labs require separately provisioned, resettable per-learner environments with strict isolation and resource limits.

## Practice boundary

Course exercises are designed around fictional organizations, synthetic logs and configurations, prepared evidence, and learner-owned or expressly authorized environments. Do not test third-party systems without written authorization and clearly defined scope. Stop if the authorization or scope is unclear.

## Contact configuration

Before publishing, configure `SITE_CONTACT` in `perimeter-academy.html` with the academy's real `supportEmail`, optional `supportHours`, and official `socials`. No contact address or social account is invented. The reviews panel intentionally explains that verified learner feedback will be added after learners provide it and consent to publication; it does not fabricate testimonials.
