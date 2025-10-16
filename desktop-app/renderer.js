const environmentList = document.getElementById('environment-list');
const notesField = document.getElementById('notes');

function populateEnvironmentInfo() {
  const runtime = window.desktopApp || {};
  const entries = [
    ['Platform', runtime.platform],
    ['Node.js', runtime.nodeVersion],
    ['Chromium', runtime.chromeVersion],
    ['Electron', runtime.electronVersion],
  ];

  environmentList.innerHTML = '';

  entries
    .filter(([, value]) => Boolean(value))
    .forEach(([label, value]) => {
      const term = document.createElement('dt');
      term.textContent = label;

      const description = document.createElement('dd');
      description.textContent = value;

      environmentList.append(term, description);
    });
}

function restoreNotes() {
  const saved = localStorage.getItem('desktop-app-notes');
  if (saved) {
    notesField.value = saved;
  }
}

function persistNotes(event) {
  localStorage.setItem('desktop-app-notes', event.currentTarget.value);
}

populateEnvironmentInfo();
restoreNotes();
notesField.addEventListener('input', persistNotes);
