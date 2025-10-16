import './style.css';

const app = document.querySelector('#app');

const container = document.createElement('main');
container.className = 'layout';

container.innerHTML = `
  <header>
    <h1>Web App Starter</h1>
    <p class="subtitle">Turn your requirements into an interactive web experience.</p>
  </header>

  <section class="card">
    <h2>Requirement Checklist</h2>
    <ul>
      <li>What problem is this web app solving?</li>
      <li>Who are the primary users?</li>
      <li>What actions should users perform?</li>
      <li>Which data needs to be collected or displayed?</li>
      <li>How should success be measured?</li>
    </ul>
  </section>

  <section class="card notes">
    <h2>Requirement Notes</h2>
    <textarea id="notes" placeholder="Capture user flows, rules, and edge cases here..."></textarea>
  </section>

  <section class="card">
    <h2>Feature Priorities</h2>
    <div class="priorities">
      <label>
        <span>Must have</span>
        <input id="must-have" type="text" placeholder="Essential features" />
      </label>
      <label>
        <span>Nice to have</span>
        <input id="nice-to-have" type="text" placeholder="Bonus enhancements" />
      </label>
      <label>
        <span>Future ideas</span>
        <input id="future-ideas" type="text" placeholder="Backlog concepts" />
      </label>
    </div>
  </section>
`;

app.appendChild(container);

const notesField = container.querySelector('#notes');
const mustField = container.querySelector('#must-have');
const niceField = container.querySelector('#nice-to-have');
const futureField = container.querySelector('#future-ideas');

const STORAGE_KEY = 'web-app-starter-notes';

function restoreForm() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    notesField.value = saved.notes || '';
    mustField.value = saved.mustHave || '';
    niceField.value = saved.niceToHave || '';
    futureField.value = saved.futureIdeas || '';
  } catch (error) {
    console.warn('Could not restore saved notes:', error);
  }
}

function persistForm() {
  const payload = {
    notes: notesField.value,
    mustHave: mustField.value,
    niceToHave: niceField.value,
    futureIdeas: futureField.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

[notesField, mustField, niceField, futureField].forEach((field) => {
  field.addEventListener('input', persistForm);
});

restoreForm();
