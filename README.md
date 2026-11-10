# Eco Cup 2026

Score trackers for Eco Cup event hosts, served with GitHub Pages. No login needed: open the link on any phone.

**Site:** https://shoeyoung25.github.io/eco-cup/

| Event | Link for hosts | Source |
|---|---|---|
| Volleyball round robin (Mon, Nov 9) | https://shoeyoung25.github.io/eco-cup/volleyball/ | [`volleyball/index.html`](volleyball/index.html) |
| Any game: races, trivia, mini games (Tue, Nov 10 onward) | https://shoeyoung25.github.io/eco-cup/games/ | [`games/index.html`](games/index.html) |

Each page is a single static HTML file with no build step. Games sync live across devices through the Firebase Realtime Database (volleyball games under `volleyball/games`, every other game under `games/results` as `{game, sides:[[{name,team}]], winners:["A"], at}`), and every new game or edit saves automatically.
