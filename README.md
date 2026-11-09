# Eco Cup 2026

Score trackers for Eco Cup event hosts, served with GitHub Pages. No login needed: open the link on any phone.

**Site:** https://shoeyoung25.github.io/eco-cup/

| Event | Link for hosts | Source |
|---|---|---|
| Volleyball round robin (Mon, Nov 9) | https://shoeyoung25.github.io/eco-cup/volleyball/ | [`volleyball/index.html`](volleyball/index.html) |

Each page is a single static HTML file with no build step. Games sync live across devices through the Firebase Realtime Database (volleyball games are stored under `volleyball/games`), and every new game or edit saves automatically.
