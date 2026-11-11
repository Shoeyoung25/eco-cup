# Eco Cup 2026

Score trackers for Eco Cup event hosts, served with GitHub Pages. No login needed: open the link on any phone.

**Site:** https://shoeyoung25.github.io/eco-cup/

| Event | Link for hosts | Source |
|---|---|---|
| Volleyball round robin (Mon, Nov 9) | https://shoeyoung25.github.io/eco-cup/volleyball/ | [`volleyball/index.html`](volleyball/index.html) |
| Any game: races, trivia, mini games (Tue, Nov 10 onward) | https://shoeyoung25.github.io/eco-cup/games/ | [`games/index.html`](games/index.html) |
| Game night: Uno, card game, Mario Kart, Smash 4-player, Smash 1v1, with token payouts (Wed, Nov 11) | https://shoeyoung25.github.io/eco-cup/game-night/ | [`game-night/index.html`](game-night/index.html) |
| **Live scores for members (view only):** game night games and team token standings | https://shoeyoung25.github.io/eco-cup-live/ | [eco-cup-live repo](https://github.com/Shoeyoung25/eco-cup-live) |

The live scores page lives in its own repo, [eco-cup-live](https://github.com/Shoeyoung25/eco-cup-live), so members can't reach the trackers by trimming its URL. Its `GAMES` payout table must match `GAMES` in `game-night/index.html`; `live/` here only redirects to it.

Each page is a single static HTML file with no build step. Games sync live across devices through the Firebase Realtime Database (volleyball games under `volleyball/games`, every other game under `games/results` as `{game, sides:[[{name,team}]], winners:["A"], at}`, and game night under `gamenight/results` as `{game, players:[{name,team}], order:["lowercase name", ...], at}` with tokens worked out from the payout table in the page), and every new game or edit saves automatically.
