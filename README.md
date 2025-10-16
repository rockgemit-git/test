# Multi-Platform Starter Toolkit

This repository is organized to help you describe and prototype ideas for desktop applications, browser extensions, and web applications without needing to write large amounts of code yourself. Each subfolder contains a ready-to-run starter project with detailed instructions so that you can focus on the logic and requirements while delegating implementation work to an engineer or an AI assistant.

## Repository Layout

| Directory | Purpose |
|-----------|---------|
| `desktop-app/` | Minimal Electron app that can be expanded into a cross-platform desktop experience. |
| `browser-extension/` | Chrome-compatible Manifest V3 extension scaffold. |
| `web-app/` | Simple web application skeleton using vanilla HTML, CSS, and JavaScript. |

## How to Use This Toolkit

1. **Start with Requirements**  
   Write down what you want the app, extension, or website to accomplish in everyday language. Focus on the user actions, the data involved, and the expected outcomes.

2. **Pick a Target Platform**  
   - Choose `desktop-app` if you need an installable desktop experience.  
   - Choose `browser-extension` if you want to extend browser behavior.  
   - Choose `web-app` for a traditional website or web tool.

3. **Review the Corresponding README**  
   Each subfolder contains a `README.md` with platform-specific guidance, a feature checklist, and a place to store requirement notes. Fill in the TODO sections—this will make the implementation phase straightforward.

4. **Share Requirements with a Developer or AI**  
   Once your requirements are captured, send them to a developer (human or AI). They can iterate on the scaffolded code in that directory to bring your ideas to life.

5. **Test and Iterate**  
   Give feedback, log bugs, and request enhancements in plain language. Keep requirement notes updated so future work stays aligned with your vision.

## Getting Started Quickly

To get up and running with the example projects, install Node.js (>= 18) and run the commands documented in each project.

```bash
# Example for the desktop app
cd desktop-app
npm install
npm start
```

```bash
# Example for the web app
cd web-app
npm install
npm run dev
```

```bash
# Example for the browser extension (manual load)
cd browser-extension
npm install
npm run build
# Then load the generated `dist/` folder as an unpacked extension in Chrome.
```

> **Tip:** If you prefer not to run commands yourself, simply provide the requirements and let your engineer/assistant handle the technical steps.

## Contributing Requirements

- Use issue trackers, shared documents, or plain text notes in the relevant `README.md` to capture what you want to happen.  
- Describe user flows and business rules rather than code.  
- Update the documentation as ideas evolve.

With this structure in place, you can stay in your comfort zone—defining logic and requirements—while collaborators handle the coding.
