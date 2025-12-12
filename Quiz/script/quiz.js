// quiz.js
// Genererar HTML, låter dig välja alla eller specifika kapitel, kör flervalsfrågor.

import { QUIZ_CATALOG } from "./questions.js";

// === App-state ===
let selectedChapters = new Set();
let questionsPool = [];
let currentIndex = 0;
let score = 0;

// === HTML-bootstrap (genereras i JS) ===
document.body.innerHTML = `
  <div class="quiz-app">
    <header class="qa-header">
      <h1>Tech Quiz</h1>
      <p>Välj kapitel eller kör hela quizet. Flervalsfrågor med bubbliga knappar.</p>
    </header>

    <main class="qa-main">
      <section class="qa-setup">
        <div class="setup-controls">
          <button id="selectAllBtn" class="btn primary">Välj alla kapitel</button>
          <button id="clearAllBtn" class="btn">Rensa val</button>
        </div>

        <div id="chaptersList" class="chapters-grid" aria-label="Kapitel"></div>

        <div class="setup-actions">
          <label class="opt">
            <input type="checkbox" id="shuffleToggle" />
            <span>Blanda frågor</span>
          </label>
          <label class="opt">
            <input type="number" id="limitInput" min="1" placeholder="Antal frågor (valfritt)" />
            <span>Begränsa antal frågor</span>
          </label>
          <button id="startBtn" class="btn accent">Starta quiz</button>
        </div>
      </section>

      <section class="qa-run" id="quizRun" hidden>
        <div class="progressbar">
          <div class="progress" id="progressFill" style="width:0%"></div>
        </div>

        <div id="questionCard" class="card">
          <!-- Fråga + alternativ renderas här -->
        </div>

        <div class="run-actions">
          <button id="nextBtn" class="btn" disabled>Nästa</button>
          <button id="finishBtn" class="btn warn" hidden>Avsluta</button>
        </div>

        <div id="status" class="status">
          <span id="scoreView">Poäng: 0</span>
          <span id="counterView">Fråga: 0/0</span>
        </div>
      </section>

      <section class="qa-result" id="quizResult" hidden>
        <div class="card">
          <h2>Resultat</h2>
          <p id="finalScore"></p>
          <button id="restartBtn" class="btn accent">Starta om</button>
        </div>
      </section>
    </main>
  </div>
`;

// === Initiera kapitel-listan ===
const chaptersListEl = document.getElementById("chaptersList");
const allChapters = Object.keys(QUIZ_CATALOG);

function renderChapters() {
  chaptersListEl.innerHTML = allChapters
    .map((name) => {
      const count = QUIZ_CATALOG[name]?.length ?? 0;
      return `
        <label class="chapter-pill" data-chapter="${name}" title="${name}">
          <input type="checkbox" class="chapterCheck" value="${name}" />
          <span class="pill-text">${name}</span>
          <span class="pill-count">${count} frågor</span>
        </label>
      `;
    })
    .join("");
}
renderChapters();

// === Helpers ===
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function buildPool() {
  const chosen = selectedChapters.size ? [...selectedChapters] : allChapters;
  const list = [];
  chosen.forEach((ch) => {
    const qs = QUIZ_CATALOG[ch] || [];
    qs.forEach((q) => list.push({ ...q, chapter: ch }));
  });
  return list;
}

function updateProgress() {
  const total = questionsPool.length;
  const percent = total ? Math.round(((currentIndex) / total) * 100) : 0;
  document.getElementById("progressFill").style.width = `${percent}%`;
  document.getElementById("counterView").textContent = `Fråga: ${Math.min(currentIndex, total)}/${total}`;
  document.getElementById("scoreView").textContent = `Poäng: ${score}`;
}

function renderQuestion() {
  const card = document.getElementById("questionCard");
  const q = questionsPool[currentIndex];

  if (!q) {
    finishQuiz();
    return;
  }

  const optionsHtml = q.options
    .map((opt, idx) => `
      <label class="option-bubble" data-idx="${idx}">
        <input type="radio" name="answer" value="${idx}" />
        <span class="bubble">${opt}</span>
      </label>
    `)
    .join("");

  card.innerHTML = `
    <div class="q-meta">
      <span class="chip">${q.chapter}</span>
      <span class="chip">#${currentIndex + 1}</span>
    </div>
    <h2 class="q-text">${q.question}</h2>
    <div class="options-wrap">${optionsHtml}</div>
    <div class="feedback" id="feedback" aria-live="polite"></div>
  `;

  // Aktivera val
  document.querySelectorAll(".option-bubble input").forEach((input) => {
    input.addEventListener("change", onSelectAnswer);
  });

  document.getElementById("nextBtn").disabled = true;
  document.getElementById("finishBtn").hidden = currentIndex < questionsPool.length - 1;
  updateProgress();
}

function onSelectAnswer(e) {
  const chosenIdx = Number(e.target.value);
  const q = questionsPool[currentIndex];
  const feedbackEl = document.getElementById("feedback");

  const correct = chosenIdx === q.answerIndex;
  if (correct) {
    score += 1;
    feedbackEl.textContent = "Rätt svar! 🎉";
    feedbackEl.className = "feedback ok";
  } else {
    const right = q.options[q.answerIndex];
    feedbackEl.textContent = `Fel. Rätt svar: ${right}`;
    feedbackEl.className = "feedback err";
  }

  // Disable alla inputs efter val
  document.querySelectorAll(".option-bubble input").forEach((input) => {
    input.disabled = true;
  });

  document.getElementById("nextBtn").disabled = false;
  updateProgress();
}

function startQuiz() {
  // Bygg pool
  questionsPool = buildPool();

  // Shuffle?
  const doShuffle = document.getElementById("shuffleToggle").checked;
  if (doShuffle) shuffle(questionsPool);

  // Begränsa antal?
  const limitVal = Number(document.getElementById("limitInput").value);
  if (limitVal && limitVal > 0) {
    questionsPool = questionsPool.slice(0, Math.min(limitVal, questionsPool.length));
  }

  // Reset state
  currentIndex = 0;
  score = 0;

  // Visa körläge
  document.getElementById("quizRun").hidden = false;
  document.getElementById("quizResult").hidden = true;

  renderQuestion();
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex < questionsPool.length) {
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  document.getElementById("quizRun").hidden = true;
  document.getElementById("quizResult").hidden = false;

  const total = questionsPool.length;
  const pct = total ? Math.round((score / total) * 100) : 0;
  document.getElementById("finalScore").textContent = `Du fick ${score} av ${total} rätt (${pct}%).`;
}

// === Event wiring ===
document.getElementById("selectAllBtn").addEventListener("click", () => {
  selectedChapters = new Set(allChapters);
  document.querySelectorAll(".chapterCheck").forEach((el) => (el.checked = true));
});

document.getElementById("clearAllBtn").addEventListener("click", () => {
  selectedChapters.clear();
  document.querySelectorAll(".chapterCheck").forEach((el) => (el.checked = false));
});

document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("finishBtn").addEventListener("click", finishQuiz);

document.getElementById("chaptersList").addEventListener("change", (e) => {
  const cb = e.target;
  if (!cb.classList.contains("chapterCheck")) return;
  const name = cb.value;
  if (cb.checked) selectedChapters.add(name);
  else selectedChapters.delete(name);
});

document.getElementById("restartBtn").addEventListener("click", () => {
  // Till setup‑läge
  document.getElementById("quizResult").hidden = true;
  document.getElementById("quizRun").hidden = true;
  // Lämna val orörda så man kan köra igen
});

