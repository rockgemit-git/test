# Browser Extension Starter (Manifest V3)

This directory contains a minimal Chrome-compatible browser extension scaffold.

## Prerequisites

- Node.js 18+
- Google Chrome or a Chromium-based browser that supports Manifest V3

## Setup

```bash
cd browser-extension
npm install
npm run build
```

The build step outputs the distributable extension to the `dist/` folder.

## Loading the Extension for Development

1. Run `npm run build`.
2. Visit `chrome://extensions/` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the `dist/` folder.

## Project Structure

```
browser-extension/
├── package.json
├── src/
│   ├── manifest.json
│   ├── background.js
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
└── scripts/
    └── build.js
```

- `manifest.json` configures the extension.
- `background.js` sets up listeners for extension lifecycle events.
- `popup.html`, `popup.js`, and `popup.css` define the popup UI.
- `scripts/build.js` copies files into the `dist/` folder.

## Requirement Worksheet

- **Primary user problem:** _Describe what the extension should help users accomplish._
- **Key browser actions:** _Which pages or events should the extension react to?_ 
- **Popup features:** _What information or controls belong in the popup?_ 
- **Permissions needed:** _Tabs, storage, or other Chrome APIs?_ 
- **Data flow:** _What data is stored, synced, or displayed?_
- **Success criteria:** _How will you know the extension works as intended?_

Add answers here before handing the project to a developer or AI assistant.

## Next Steps for Engineers / AI Assistants

1. Expand the popup or background scripts according to the requirements.
2. Add options pages or content scripts if necessary.
3. Implement data persistence using `chrome.storage` or external APIs.
