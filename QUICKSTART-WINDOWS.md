# Run Perimeter Academy on Windows 10/11

## 1. Install Node.js

Install Node.js **22.13 or newer**. After installation, close and reopen PowerShell or Windows Terminal, then check:

```powershell
node --version
npm --version
```

The project uses Node's built-in `node:sqlite` module and requires Node 22.13 or newer.

## 2. Extract the project

1. Download and extract the complete `perimeter-academy-local.zip` archive.
2. Open the extracted `perimeter-academy` folder.
3. Check that `server.js`, `package.json`, `perimeter-academy.html`, and `course-materials.json` are together in this same folder.

Do not open `perimeter-academy.html` by double-clicking it. The page needs the local server for registration, login, profiles, progress, and course access.

## 3. Create your local settings file

Open PowerShell in the extracted `perimeter-academy` folder. In File Explorer, you can open the folder, click the address bar, type `powershell`, and press Enter.

Run:

```powershell
Copy-Item .env.example .env
```

The default settings are suitable for a local free-course demo. Leave `COURSE_ACCESS_CODES` blank to keep the paid course locked.

To enable local demo enrollment, open `.env` in Notepad and set a private code, for example:

```dotenv
COURSE_ACCESS_CODES=MY-LOCAL-DEMO-CODE
```

Save the file. Do not share or publish a real enrollment code. This code-based setup is only a development/demo mechanism; there is no payment checkout.

## 4. Start the website

In the same PowerShell window and folder, run:

```powershell
npm start
```

Wait until the terminal says the server is listening at `http://localhost:3000`, then open that address in your browser:

**http://localhost:3000**

Create an account from **My Profile**. The SQLite database file `perimeter-academy.sqlite` is created automatically in the project folder and stores local accounts and learning progress.

Keep the terminal window open while using the website.

## 5. Stop and start it again

To stop the server, return to PowerShell and press `Ctrl+C`.

To start it again later, open PowerShell in the project folder and run:

```powershell
npm start
```

Your account and progress remain in `perimeter-academy.sqlite` unless you delete that file.

## 6. Run the included tests

With the server stopped, run:

```powershell
npm test
```

The test starts its own temporary server and temporary SQLite database. A successful run ends with a `PASS` message. It does not use or erase your personal `perimeter-academy.sqlite` database.

You can also check JavaScript syntax with:

```powershell
node --check server.js
```

## Troubleshooting

- **`node` or `npm` is not recognized:** install Node.js, then close and reopen PowerShell. Check `node --version` again.
- **`node:sqlite` cannot be found:** your Node.js version is too old. Install Node.js 22.13 or newer.
- **Port 3000 is already in use:** stop the other local server, or change `PORT=3000` in `.env` to `PORT=3001`; then visit `http://localhost:3001`.
- **`course-materials.json is missing`:** make sure you extracted the complete ZIP and that `course-materials.json` is next to `server.js`.
- **The page opens but registration/profile actions fail:** make sure you opened `http://localhost:3000`, not the HTML file using a `file:///` address, and check that the terminal still shows the server running.
- **Paid course is locked:** this is expected when `COURSE_ACCESS_CODES` is blank. Set a private local demo code in `.env`, restart the server, sign in, then enter that code in the professional-course enrollment area.

## Important limitations

This is a local development starter, not a finished public production service. Email verification, password recovery, payment integration, a production enrollment/admin workflow, production database operations, and a full privacy/legal review are not included. Do not expose this local server to the public internet or collect real customer data with it before completing the production work described in `README.md`.
