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

## Trivia night (Fri, Nov 13)

| Page | Link | Source |
|---|---|---|
| **Operator dashboard (hosts only)** | https://shoeyoung25.github.io/eco-cup/trivia/ | [`trivia/index.html`](trivia/index.html) |
| Hub for players (QR code on the big screen) | https://shoeyoung25.github.io/eco-cup-live/trivia/ | eco-cup-live repo |
| Question screen for the projector | https://shoeyoung25.github.io/eco-cup-live/trivia/screen/ | eco-cup-live repo |

The operator page drives everything through Firebase under `trivia/live` (`state`, `config`, `q` = question text published when it opens, `answers`, `tokens`, `wagers`, `marks` = operator overrides, `reveal`, `results`, `teamResults`). Pictures and music are uploaded from the operator page to `trivia/media` so the question screen can run on any computer. The question pack (with answers) is loaded from a CSV or pasted sheet and stays in the operator's browser; [`trivia/sample-pack.csv`](trivia/sample-pack.csv) shows the columns.

`trivia/js/core.js` (rules and scoring), `trivia/js/db.js` (database and shared clock) and `trivia/js/base.css` are identical copies of the files in eco-cup-live; change both. Scoring tests live in eco-cup-live: `node --test trivia/tests/core.test.mjs`.
