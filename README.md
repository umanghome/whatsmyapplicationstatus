# What's my university application status?
---

## Requirements:
- [Node](https://nodejs.org) v 10.0.0+
- npm

## Instructions

### Setup:
- Clone this repo
- Add info in `config.js` for each college.
- `npm i`

### Fetch status
You have two options here,
1. `npm run scrape` to scrape with headless Chromium.
2. `npm run scrape-with-gui` to scrape with a visible Chromium instance.

### Debug
- `npm run start`, nodemon will start in debug mode, with Chromium in visible mode.