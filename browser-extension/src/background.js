chrome.runtime.onInstalled.addListener(() => {
  console.log('Requirement Helper extension installed.');
});

chrome.action.onClicked.addListener((tab) => {
  console.log('Extension clicked on tab:', tab?.id);
});
