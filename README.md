# Jal Pathways · India Fisheries Handbook

A React website for climate-resilient freshwater aquaculture in India, built for **SELCO Foundation**.
It brings three things together in one app:

| Part | What it is | Address |
|---|---|---|
| **Jal Pathways** | Field platform for fish farmers, trainers and livelihood teams: species, farming systems, chapters, calculators, solar solutions, field stories, farm records | `/#/` |
| **Event** | *Catalysing Climate Action in Fisheries*, the National Convening on **07 October 2026** at SELCO Office, Guwahati: purpose, participants, full programme and expected outcomes | `/#/event` |
| **India Fisheries Handbook** | Interactive digital edition of the handbook: value-chain map, species photo guide, hatchery, biofloc, RAS, water quality, disease checker, processing, climate-resilient tech, record keeper, profit calculator | `/#/handbook` |

**Live site:** https://manthanselco.github.io/Fishery_Repo/
**Repository:** https://github.com/ManthanSelco/Fishery_Repo

---

## Contents

1. [Features](#features)
2. [Tech stack](#tech-stack)
3. [Run the project on your computer](#run-the-project-on-your-computer)
4. [Build for production](#build-for-production)
5. [Deploy to GitHub Pages](#deploy-to-github-pages)
6. [Project structure](#project-structure)
7. [How to change content](#how-to-change-content)
8. [All pages (routes)](#all-pages-routes)
9. [Where user data is saved](#where-user-data-is-saved)
10. [Troubleshooting](#troubleshooting)

---

## Features

**Jal Pathways**
- Home with key sector statistics, the 8-step fisheries value chain, farming systems, species and tools
- 20 handbook chapters, each with Quick View, Step-by-Step and Technical Detail tabs, and Listen (text-to-speech)
- Species explorer: 27 species with filters, local names, traits, risks and suitable systems
- Tools: water-quality reference with a status checker, stocking density calculator, feed & FCR calculator, solar solution matcher, pond preparation checklist, farming-system comparison
- Farm records for 10 record types, with CSV export
- Solar technology library with capex, ROI and field-validated impact
- Field stories from Assam, Jharkhand, Odisha and Tamil Nadu
- Help Me Decide, Glossary, Search, Saved items, low-bandwidth mode

**Event page**
- Live countdown badge (`In 6 days` → `Tomorrow` → `Today` → `Happening now` → `Held on …`), worked out from India time
- Full programme timeline (9:00–17:15) with the focus and agenda points of every session
- A red **Now** marker on the session in progress on the event day
- **Add to calendar** button (downloads an `.ics` file)

**India Fisheries Handbook**
- Clickable value-chain diagram with a detail panel for every node
- Species photo guide, chapter sections with field photographs
- Disease checker (pick symptoms, get likely conditions and treatment)
- Farm record keeper and profitability calculator

Works on desktop, tablet and phone, in light and dark mode.

---

## Tech stack

| | |
|---|---|
| UI | [React 18](https://react.dev) |
| Routing | [React Router 6](https://reactrouter.com) (`HashRouter`, so links look like `/#/event`) |
| Build tool | [Vite 5](https://vitejs.dev) |
| Styling | Plain CSS with design tokens (`src/styles.css`) |
| Hosting | GitHub Pages via GitHub Actions |

There is no backend or database. Everything runs in the browser.

---

## Run the project on your computer

### 1. Install the requirements (one time)

| Tool | Version | Download |
|---|---|---|
| Node.js | 18 or newer (20 LTS recommended) | https://nodejs.org |
| Git | any recent version | https://git-scm.com/downloads |

Check they are installed:

```bash
node -v
npm -v
git --version
```

### 2. Get the code

```bash
git clone https://github.com/ManthanSelco/Fishery_Repo.git
cd Fishery_Repo
```

### 3. Install the packages

```bash
npm install
```

This creates the `node_modules` folder. Run it again whenever `package.json` changes.

### 4. Start the development server

```bash
npm run dev
```

Open the address it prints, usually **http://localhost:5173**.

- Jal Pathways: http://localhost:5173/#/
- Event: http://localhost:5173/#/event
- Handbook: http://localhost:5173/#/handbook

Changes you save in `src/` show up in the browser straight away. Press `Ctrl + C` in the terminal to stop the server.

---

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the finished website: `index.html`, `assets/`, `images/` and the PDFs.

To check the built site locally, use either option:

```bash
npm run preview          # opens http://localhost:4173
```

```bash
cd dist
python -m http.server 8000   # then open http://localhost:8000
```

> Opening `dist/index.html` by double-clicking it does **not** work, because browsers block the app's scripts on `file://`. Always use one of the servers above.

The `dist/` folder can be uploaded to any static host (GitHub Pages, Netlify, Vercel, a shared server). `vite.config.js` uses `base: './'`, so the site works from any sub-folder.

---

## Deploy to GitHub Pages

Deployment is automatic. The workflow file `.github/workflows/deploy.yml` builds the site and publishes it every time code is pushed to the `main` branch.

### First-time setup (already done for this repo)

1. Make sure the repository is **Public**. Free GitHub accounts only get Pages on public repos.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Do **not** click *Configure* on the suggested "Jekyll" or "Static HTML" workflows. This project already has its own workflow.

### Publishing a change

```bash
git add .
git commit -m "Describe your change"
git push
```

Then:

1. Open the **Actions** tab of the repository.
2. Wait for **Deploy to GitHub Pages** to show a green tick. This takes about 1–2 minutes.
3. Open the live site and press `Ctrl + F5` to skip the browser cache.

To re-run a deployment without changing code, open **Actions → Deploy to GitHub Pages → Run workflow**.

### Using your own domain (optional)

1. In **Settings → Pages → Custom domain**, enter the domain, for example `fisheries.example.org`.
2. At your domain provider, add a **CNAME** record pointing that name to `manthanselco.github.io`.
3. Tick **Enforce HTTPS** once GitHub has issued the certificate.

---

## Project structure

```
Fishery_Repo/
├── .github/workflows/deploy.yml   GitHub Pages build & deploy
├── index.html                     HTML shell, fonts
├── package.json                   scripts and dependencies
├── vite.config.js                 Vite settings (base './')
├── public/                        copied as-is into the build
│   ├── logo.png                   SELCO logo: browser-tab icon, top bar and Handbook sidebar
│   ├── images/                    hb-*.jpg handbook photos, sp-*.jpg species photos
│   └── India_Fisheries_Handbook*.pdf
└── src/
    ├── main.jsx                   app entry and all routes
    ├── styles.css                 colours, fonts, layout for the whole site
    ├── components/
    │   ├── AppState.jsx           toast, popup, saved items, low-bandwidth mode, storage helpers
    │   ├── download.js            saves CSV / calendar files in the browser
    │   └── Icon.jsx               SVG icon set
    ├── data/                      ← content lives here
    │   ├── jal.js                 species, farming systems, chapters, solar tech, stories,
    │   │                          water quality, feed table, diseases, glossary, decision paths, tools
    │   ├── event.js               National Convening details, programme, outcomes
    │   ├── handbook.js            value-chain panel text, disease-checker database
    │   └── icons.js               icon shapes
    ├── jal/                       Jal Pathways pages
    │   ├── Layout.jsx             top bar, menu, search, footer, bottom nav (phone)
    │   ├── Home.jsx               home page
    │   ├── Event.jsx              event page (+ home event card)
    │   ├── Explore.jsx            chapters list and chapter page
    │   ├── Species.jsx            species list and species page
    │   ├── Tools.jsx              calculators, checklist, comparison
    │   ├── Records.jsx            farm records
    │   ├── Misc.jsx               saved, search, decide, solar, stories, glossary
    │   └── media.jsx              photos and coloured tiles
    └── handbook/                  India Fisheries Handbook
        ├── Handbook.jsx           layout, sidebar, hero
        ├── common.jsx             section heading + smooth scroll helper
        ├── ValueChain.jsx         value-chain diagram
        ├── Chapters.jsx           hatchery, biofloc, RAS, processing
        ├── Sections.jsx           species guide, water quality, climate-resilient tech
        └── Tools.jsx              disease checker, record keeper, profit calculator
```

---

## How to change content

Most text and numbers live in **`src/data/`**, so you rarely need to touch page code.

| I want to change… | Edit this file |
|---|---|
| Event date, venue, participants, programme, outcomes | `src/data/event.js` |
| A species, farming system, chapter, solar technology, field story, glossary term | `src/data/jal.js` |
| Value-chain panel text or disease-checker results in the Handbook | `src/data/handbook.js` |
| Handbook chapter text and photo captions | `src/handbook/Chapters.jsx`, `src/handbook/Sections.jsx` |
| Top menu items, footer links | `NAV` list and the `<footer>` in `src/jal/Layout.jsx` |
| Colours and fonts | the tokens in section 1 of `src/styles.css` (light values first, then dark) |

**Adding a photo**
1. Put the image in `public/images/`. Use a JPG under about 300 KB.
2. For a species photo, name it `sp-<species id>.jpg` and add the id to `PHOTO_IDS` in `src/jal/media.jsx`.

**Changing the event date**
Update `start`, `end`, `dateLabel`, `dateShort`, `day`, `month` and `year` in `src/data/event.js`. Use India time (`+05:30`) for `start` and `end`, because the countdown and the Now marker read from them. The calendar file times are set in `downloadICS()` in `src/jal/Event.jsx`, in UTC.

After any change: run `npm run dev` to check it, then commit and push to publish.

---

## All pages (routes)

The site uses hash routing, so every link starts with `/#/`.

| Page | Route |
|---|---|
| Home | `/#/` |
| Event (National Convening) | `/#/event` |
| India Fisheries Handbook | `/#/handbook` |
| Explore (value chain & chapters) | `/#/explore` |
| Chapter | `/#/chapter/ch1` … `/#/chapter/ch20` |
| Species list / one species | `/#/species`, `/#/species/catla` |
| Tools / one tool | `/#/tools`, `/#/tools/feed_calc` |
| Compare farming systems | `/#/compare` |
| Farm records | `/#/records` |
| Solar library / one technology | `/#/solar`, `/#/solar/sol_transport` |
| Field stories | `/#/stories` |
| Help Me Decide | `/#/decide` |
| Glossary | `/#/glossary` |
| Saved items | `/#/saved` |
| Search | `/#/search?q=carp` |

Tool ids: `water_quality`, `stocking_calc`, `feed_calc`, `solar_matcher`, `pond_checklist`, `system_compare`, `species_filter`.

---

## Where user data is saved

There is no server. Saved items, records and settings are stored in the **visitor's own browser** (`localStorage`):

| Key | Holds |
|---|---|
| `jp_saved` | bookmarked chapters and species |
| `jp_records` | Jal Pathways farm records |
| `jp_checklist` | pond preparation checklist ticks |
| `jp_lowband` | low-bandwidth mode on/off |
| `fish-recs` | Handbook record keeper entries |

This means:
- Data stays after a refresh or browser restart.
- It is **not** shared between browsers, devices or people.
- Clearing browser data deletes it. Use **Export CSV** on the records pages to keep a copy.

To share data across devices or a team, a backend such as Firebase or Supabase would need to be added.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `npm` or `node` is not recognised | Install Node.js, then close and reopen the terminal. |
| `npm install` fails | Delete `node_modules` and `package-lock.json`, then run `npm install` again. |
| Blank page after opening `dist/index.html` directly | Serve it instead: `npm run preview` or `python -m http.server` inside `dist/`. |
| Live site shows the old version | Wait for the green tick in **Actions**, then press `Ctrl + F5`. |
| GitHub site shows 404 | Check **Settings → Pages → Source** is *GitHub Actions* and the latest workflow run succeeded. |
| Red ❌ in Actions | Open the failed run and read the step that failed. Usually it is a code error you can reproduce with `npm run build` on your computer. |
| Fonts look different offline | Fonts load from Google Fonts. Without internet the browser uses system fonts. |
| `node_modules` or `dist` got committed | Run `git rm -r --cached node_modules dist`, commit and push. Both are listed in `.gitignore`. |

---

## Credits

Content is based on the **Fisheries Handbook developed for SELCO Foundation**, with field data from Assam, Jharkhand and Odisha. The National Convening agenda is from SELCO Foundation.
