# Copilot instructions for this repo

This is a small React single-page demo app (no router used). Key facts an AI agent should know to be productive immediately:

- Big picture
  - Entry: `src/App.js` implements a tiny client-side page switcher using local state (`currentPage`) and renders page components from `src/pages/*` (Home, Shop, Offers, Blog, Login, Register).
  - Header/top navigation is implemented twice: a fixed orange button bar in `src/App.js` (used for switching pages) and a visual header component in `src/components/header.jsx`. The orange bar is the primary navigation for the demo. Avoid duplicating navigation actions — prefer updating `src/App.js` when changing the main flow.
  - `src/components/Navbar.jsx` is a commented-out, more elaborate navbar implementation; it's not currently used but useful as a reference for a more complete navbar with icons and responsive behavior.

- Files to inspect first
  - `src/App.js` — main app state & primary navigation (orange buttons).
  - `src/components/header.jsx` — visual header shown inside pages; contains `getNavItems()` which historically duplicated "Home" links (now adjusted).
  - `src/components/Navbar.jsx` — alternative (commented) implementation for a richer navbar.
  - `src/pages/*` — page content components.

- Project conventions
  - No react-router: navigation is controlled by `useState('currentPage')` in `App.js`. When adding new pages, update the switch in `App.js` and add a corresponding button.
  - Tailwind CSS classes are used throughout (`tailwind.config.js`, `postcss.config.js`). Style changes should prefer adjusting class names rather than writing new CSS where possible.

- Build / run / test
  - Standard create-react-app style scripts are present in `package.json` (dev: `npm start`, build: `npm run build`, test: `npm test`). Use these for local verification.
  - The app is client-only and can be previewed with `npm start`.

- Patterns and gotchas
  - There are two navigation/UI layers: the fixed orange `nav` (in `App.js`) and the header component's links. This caused duplicated labels (Home/Home Page). Prefer a single source of truth for navigation.
  - `Navbar.jsx` is commented out; it can be restored and wired into `App.js` if a more complete layout is needed.
  - Pages expect to be rendered directly as components (not via URL routing). If you introduce routing (react-router), update `App.js` and page components accordingly.

- How to make common changes (examples)
  - Remove duplicate small-links under the header (example): edit `src/components/header.jsx` -> adjust `getNavItems()` to not include "Home" or "Home Page" (done).
  - Replace the orange demo nav with a real navbar: uncomment/refactor `src/components/Navbar.jsx`, add imports to `App.js`, and replace the inline `<nav>` in `App.js` with `<Navbar />`. Remember to wire any click handlers to set the `currentPage` state or switch to react-router.

- Where to add tests
  - Basic smoke tests: `src/App.test.js` already exists; add tests for `renderPage()` behavior to ensure correct page component is shown when `currentPage` changes.

If anything in this file is unclear, tell me which areas you'd like me to expand (routing migration, wiring `Navbar.jsx`, or adding tests for navigation).
