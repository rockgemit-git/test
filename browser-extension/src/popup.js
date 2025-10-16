const userStoryField = document.getElementById('userStory');
const acceptanceCriteriaField = document.getElementById('acceptanceCriteria');
const urlField = document.getElementById('currentUrl');
const saveButton = document.getElementById('saveButton');
const status = document.getElementById('status');

async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  return tab;
}

async function restoreForm() {
  const tab = await getActiveTab();
  urlField.textContent = tab?.url ?? 'Unavailable';

  if (!tab?.url) {
    return;
  }

  const { requirementDrafts = {} } = await chrome.storage.sync.get('requirementDrafts');
  const existing = requirementDrafts[tab.url];

  if (existing) {
    userStoryField.value = existing.userStory ?? '';
    acceptanceCriteriaField.value = existing.acceptanceCriteria ?? '';
  }
}

async function saveNotes() {
  const tab = await getActiveTab();
  if (!tab?.url) {
    status.textContent = 'Unable to detect the current tab.';
    return;
  }

  const { requirementDrafts = {} } = await chrome.storage.sync.get('requirementDrafts');

  requirementDrafts[tab.url] = {
    savedAt: new Date().toISOString(),
    userStory: userStoryField.value,
    acceptanceCriteria: acceptanceCriteriaField.value,
  };

  await chrome.storage.sync.set({ requirementDrafts });
  status.textContent = 'Saved!';
  setTimeout(() => {
    status.textContent = '';
  }, 1500);
}

saveButton.addEventListener('click', saveNotes);
restoreForm();
