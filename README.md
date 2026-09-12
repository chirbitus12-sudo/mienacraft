# Craft Archives — Game Versions Download Portal & Admin Suite

An inspiring, high-performance web platform for downloading official and legacy versions of "Craft", featuring an exciting cyber-emerald & obsidian gaming aesthetic, real-time search and categorization, verified SHA-256 integrity, a full-control authenticated Admin Dashboard, and a dedicated Advertisement Management Suite.

---

## ⚡ Quick Start

### 1. Requirements
- Node.js (v14+ recommended)

### 2. Run the Application
From the project root directory:
```bash
node server/server.js
```
or
```bash
npm start
```

### 3. Open in Browser
- **Public Game Portal**: [http://localhost:3000/](http://localhost:3000/)
- **Admin Dashboard**: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## 🔐 Default Admin Credentials

| Field | Default Value |
|---|---|
| **Username** | `admin` |
| **Password** | `craftadmin2026` |

*(You can modify your username and password at any time directly in the Admin Dashboard under the **Security & Password** tab)*.

---

## ✨ Feature Tour

### 1. Public Downloads Portal (`/`)
- **Inspiring Gaming Aesthetic**: Built with deep obsidian space background, glowing neon emerald accents, animated particle rings, and glassmorphic card elements.
- **Hero Spotlight Card**: Highlights the latest release (e.g., *Craft 1.21.4 Winter Drop*) with immediate download action and direct specs.
- **Instant Search & Filters**: Filter by **All**, **Full Releases**, **Betas**, **Classic Alphas**, and **Snapshots**, or search by keyword in real time.
- **Dedicated Download Buttons**: Prominent download button under every single version card.
- **Download Modal & Counter**: Clicking download opens a verified integrity modal with SHA-256 hash, triggers real-time server-side download tracking, and automatically starts the file download.
- **Changelog Explorer**: View full patch notes and system platform compatibility for every release.

### 2. Authenticated Admin Dashboard (`/admin`)
- **Protected Access**: Session token validation with protected REST API endpoints.
- **Live Metrics**: Real-time stats for total downloads, archived versions, active ad units, and category counts.
- **Versions Catalog (Full CRUD)**:
  - Add new Craft versions with custom version strings, titles, release dates, file sizes, direct mirrors, and changelog points.
  - Edit existing versions and feature them on the hero spotlight.
  - Delete outdated or retired releases.
- **Dedicated Advertisement Management Suite**:
  - Insert, modify, preview, or remove ad units without restarting the server or editing code files.
  - Pre-configured ad zones:
    1. **Header Leaderboard Banner**: Top of page above the hero banner.
    2. **In-Feed Versions Banner**: Strategically displayed between version download cards.
    3. **Sidebar / Info Widget**: Alongside filters and content.
    4. **Footer Partner Banner**: Across the bottom of all pages.
    5. **Download Interstitial Banner**: Inside the download progress popup.
  - Toggle each ad slot **Active** / **Disabled** with a single switch.
  - Supports Google AdSense `<script>` tags, Media.net, custom responsive HTML/CSS banners, and affiliate buttons.
  - Live preview sandbox to verify the visual layout before publishing.
  - Ability to create custom ad placements with custom identifiers.
- **Site Branding & Theme Customizer**:
  - Edit site title, header tagline, hero title & description, and footer text.
  - Global Announcement Bar with toggle on/off, custom text, and action link.
  - Instant Theme Switcher: **Neon Emerald**, **Cyber Cyan**, **Mystic Amethyst**, **Solar Gold**, and **Nether Crimson**.

---

## 📁 Project Structure

```
progecte26/
├── server/
│   ├── server.js        # Native HTTP server, REST API router, static file & download server
│   └── db.js            # Atomic persistent JSON database with seed releases & auth
├── public/
│   ├── index.html       # Public game versions download portal
│   ├── admin.html       # Admin dashboard & advertisement management suite
│   ├── css/
│   │   ├── style.css    # Exciting cyber gaming aesthetic & animations
│   │   └── admin.css    # Sleek dark-mode admin interface styling
│   └── js/
│       ├── app.js       # Public frontend logic (search, filter, download trigger, ads)
│       └── admin.js     # Admin dashboard logic (auth, CRUD, ad management, settings)
├── data/
│   └── store.json       # Persistent data storage (auto-generated on first run)
├── package.json         # Package configuration & scripts
└── README.md            # Documentation & setup guide
```
