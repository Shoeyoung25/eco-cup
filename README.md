# Eco Cup 2026

**Live scores for members (view only):** https://shoeyoung25.github.io/eco-cup/

The site root is the read-only scoreboard (game night games and team token standings). It only reads `gamenight/results` and has no way to edit. Its `GAMES` payout table must match the one in the game night tracker.

Host score trackers live in an unlisted folder (`host-…/`) (volleyball, games, game-night), so members who trim the scoreboard URL can't reach them. Share that link with hosts only. Old paths (`/volleyball/`, `/games/`, `/game-night/`) now redirect to the scoreboard via `404.html`.

Each page is a single static HTML file with no build step. Games sync live across devices through the Firebase Realtime Database (volleyball games under `volleyball/games`, every other game under `games/results` as `{game, sides:[[{name,team}]], winners:["A"], at}`, and game night under `gamenight/results` as `{game, players:[{name,team}], order:["lowercase name", ...], at}` with tokens worked out from the payout table in the page), and every new game or edit saves automatically.
