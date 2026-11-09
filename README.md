# Eco Cup 2026

Score trackers for Eco Cup event hosts, served with GitHub Pages.

| Event | Page | Data |
|---|---|---|
| Volleyball round robin (Mon, Nov 9) | `volleyball/index.html` → `/volleyball/` | Firebase Realtime Database, `volleyball/games` |

Each page is a single static HTML file with no build step. Games sync live across devices through the Firebase Realtime Database REST API, so hosts don't need to log in.
