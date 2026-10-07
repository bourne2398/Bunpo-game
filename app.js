/* ===== QUESTIONS DATA ===== */
const QUESTIONS = [
  {
    id: 1,
    template: ["_", "_", "_", "_"],
    options: [
      { text: "昨日", furi: "きのう" },
      { text: "どこで", furi: "" },
      { text: "友だちに", furi: "とも" },
      { text: "会いましたか", furi: "あ" }
    ],
    answer: ["昨日", "どこで", "友だちに", "会いましたか"],
    points: 10
  },
  {
    id: 2,
    template: ["いつも", "_", "_", "_", "_", "食べますか。"],
    options: [
      { text: "で", furi: "" },
      { text: "どこ", furi: "" },
      { text: "ごはん", furi: "" },
      { text: "を", furi: "" }
    ],
    answer: ["どこ", "で", "ごはん", "を"],
    points: 10
  },
  {
    id: 3,
    template: ["毎朝", "_", "_", "_", "_", "行きます。"],
    options: [
      { text: "学校", furi: "がっこう" },
      { text: "へ", furi: "" },
      { text: "電車", furi: "でんしゃ" },
      { text: "で", furi: "" }
    ],
    answer: ["電車", "で", "学校", "へ"],
    points: 10
  },
  {
    id: 4,
    template: ["わたしは", "_", "_", "_", "_", "。"],
    options: [
      { text: "おきます", furi: "" },
      { text: "6時", furi: "じ" },
      { text: "まいあさ", furi: "" },
      { text: "に", furi: "" }
    ],
    answer: ["まいあさ", "6時", "に", "おきます"],
    points: 10
  },
  {
    id: 5,
    template: ["_", "_", "と", "ベトナム", "_", "カンボジア", "_", "行きました。"],
    options: [
      { text: "去年", furi: "きょねん" },
      { text: "と", furi: "" },
      { text: "へ", furi: "" },
      { text: "友だち", furi: "とも" }
    ],
    answer: ["去年", "友だち", "と", "へ"],
    points: 12
  },
  {
    id: 6,
    template: ["_", "は", "_", "_", "_", "です。"],
    options: [
      { text: "土曜日", furi: "どようび" },
      { text: "日曜日", furi: "にちようび" },
      { text: "と", furi: "" },
      { text: "休み", furi: "やす" }
    ],
    answer: ["休み", "土曜日", "と", "日曜日"],
    points: 10
  },
  {
    id: 7,
    template: ["この", "_", "_", "_", "_", "ですか。"],
    options: [
      { text: "の", furi: "" },
      { text: "かばん", furi: "" },
      { text: "どこ", furi: "" },
      { text: "は", furi: "" }
    ],
    answer: ["かばん", "は", "どこ", "の"],
    points: 10
  },
  {
    id: 8,
    template: ["郵便局は", "_", "_", "_", "_", "です。"],
    options: [
      { text: "9時", furi: "じ" },
      { text: "5時", furi: "じ" },
      { text: "から", furi: "" },
      { text: "まで", furi: "" }
    ],
    answer: ["9時", "から", "5時", "まで"],
    points: 10
  },
  {
    id: 9,
    template: ["すみません、", "_", "_", "_", "_", "か。"],
    options: [
      { text: "どこ", furi: "" },
      { text: "は", furi: "" },
      { text: "トイレ", furi: "" },
      { text: "です", furi: "" }
    ],
    answer: ["トイレ", "は", "どこ", "です"],
    points: 10
  },
  {
    id: 10,
    template: ["_", "_", "_", "_", "じゃありません。"],
    options: [
      { text: "わたし", furi: "" },
      { text: "このノート", furi: "" },
      { text: "は", furi: "" },
      { text: "の", furi: "" }
    ],
    answer: ["このノート", "は", "わたし", "の"],
    points: 10
  },
  {
    id: 11,
    template: ["_", "_", "_", "_", "ですか。"],
    options: [
      { text: "は", furi: "" },
      { text: "カメラ", furi: "" },
      { text: "だれの", furi: "" },
      { text: "この", furi: "" }
    ],
    answer: ["この", "カメラ", "は", "だれの"],
    points: 10
  },
  {
    id: 12,
    template: ["すみません、", "_", "の", "_", "_", "_", "ですか。"],
    options: [
      { text: "カメラ", furi: "" },
      { text: "どこ", furi: "" },
      { text: "は", furi: "" },
      { text: "うりば", furi: "" }
    ],
    answer: ["カメラ", "うりば", "は", "どこ"],
    points: 12
  },
  {
    id: 13,
    template: ["_", "_", "_", "_", "せんせいです。"],
    options: [
      { text: "は", furi: "" },
      { text: "あのひと", furi: "" },
      { text: "PWだいがく", furi: "" },
      { text: "の", furi: "" }
    ],
    answer: ["あのひと", "は", "PWだいがく", "の"],
    points: 10
  },
  {
    id: 14,
    template: ["すみません、これ", "_", "_", "_", "_", "ですか。"],
    options: [
      { text: "どこ", furi: "" },
      { text: "カメラ", furi: "" },
      { text: "の", furi: "" },
      { text: "は", furi: "" }
    ],
    answer: ["は", "どこ", "の", "カメラ"],
    points: 10
  },
  {
    id: 15,
    template: ["_", "_", "_", "_", "です。"],
    options: [
      { text: "わたし", furi: "" },
      { text: "は", furi: "" },
      { text: "リー", furi: "" },
      { text: "はじめまして", furi: "" }
    ],
    answer: ["はじめまして", "わたし", "は", "リー"],
    points: 10
  }
];

/* ===== STATE ===== */
let settings = {
  questionCount: 10,
  totalTime: 120
};

let state = {
  lives: 3,
  score: 0,
  timeLeft: 120,
  totalTime: 120,
  currentQ: 0,
  questions: [],
  answers: [],
  usedOptions: new Set(),
  timerId: null,
  isPlaying: false
};

const OWNER_PASSWORD = "mrllrja1";

/* ===== DOM ===== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const screens = {
  home: $("#homeScreen"),
  settings: $("#settingsScreen"),
  howto: $("#howtoScreen"),
  history: $("#historyScreen"),
  answerKey: $("#answerKeyScreen"),
  game: $("#gameScreen")
};

/* ===== NAVIGATION ===== */
function showScreen(name) {
  Object.values(screens).forEach(s => s && s.classList.remove("active"));
  if (screens[name]) screens[name].classList.add("active");
}

$("#playBtn").addEventListener("click", () => showScreen("settings"));
$("#howtoBtn").addEventListener("click", () => showScreen("howto"));
$("#historyBtn").addEventListener("click", () => {
  renderHistory();
  showScreen("history");
});
$$(".back-btn").forEach(btn => {
  btn.addEventListener("click", () => showScreen(btn.dataset.back));
});

/* ===== SECRET ANSWER KEY (tap logo 5 times) ===== */
let logoTaps = 0;
let logoTapTimer = null;

const logo = $("#secretLogo");
if (logo) {
  logo.addEventListener("click", () => {
    logoTaps++;
    clearTimeout(logoTapTimer);
    logoTapTimer = setTimeout(() => { logoTaps = 0; }, 1500);
    if (logoTaps >= 5) {
      logoTaps = 0;
      openPasswordModal();
    }
  });
}

function openPasswordModal() {
  $("#passwordInput").value = "";
  $("#passwordError").hidden = true;
  $("#passwordModal").classList.add("show");
  setTimeout(() => $("#passwordInput").focus(), 100);
}

function closePasswordModal() {
  $("#passwordModal").classList.remove("show");
}

$("#passwordCancel").addEventListener("click", closePasswordModal);

$("#passwordSubmit").addEventListener("click", checkPassword);
$("#passwordInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkPassword();
});

function checkPassword() {
  const val = $("#passwordInput").value.trim();
  if (val === OWNER_PASSWORD) {
    closePasswordModal();
    renderAnswerKey();
    showScreen("answerKey");
  } else {
    $("#passwordError").hidden = false;
    $("#passwordInput").value = "";
    $("#passwordInput").focus();
  }
}

function buildFullSentence(q) {
  let ansIdx = 0;
  return q.template.map(part => {
    if (part === "_") {
      return q.answer[ansIdx++];
    }
    return part;
  }).join("");
}

function renderAnswerKey() {
  const list = $("#answerKeyList");
  list.innerHTML = QUESTIONS.map((q, i) => {
    const sentence = buildFullSentence(q);
    return '<div class="answer-card"><div class="q-num">Q' + (i + 1) + ' · ' + q.points + ' pt</div><div class="sentence">' + sentence + '</div></div>';
  }).join("");
}

/* ===== SETTINGS ===== */
function setupOptionRow(rowId, key) {
  const row = $(rowId);
  if (!row) return;
  row.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      row.querySelectorAll(".option-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      settings[key] = parseInt(btn.dataset.value, 10);
    });
  });
}

setupOptionRow("#qCountOptions", "questionCount");
setupOptionRow("#timeOptions", "totalTime");

$("#startGameBtn").addEventListener("click", () => {
  startGame();
});

/* ===== GAME FLOW ===== */
function startGame() {
  const count = Math.min(settings.questionCount, QUESTIONS.length);
  const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
  state.questions = shuffled.slice(0, count);
  state.lives = 3;
  state.score = 0;
  state.totalTime = settings.totalTime;
  state.timeLeft = settings.totalTime;
  state.currentQ = 0;
  state.isPlaying = true;
  updateLives();
  updateScore();
  updateTimerUI();
  renderProgress();
  loadQuestion();
  showScreen("game");
  startTimer();
}

function startTimer() {
  clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      endGame(false);
    }
  }, 1000);
}

function updateTimerUI() {
  const m = Math.floor(state.timeLeft / 60);
  const s = state.timeLeft % 60;
  $("#timerText").textContent = m + ":" + s.toString().padStart(2, "0");
  const pct = (state.timeLeft / state.totalTime) * 100;
  const fill = $("#timerFill");
  fill.style.width = pct + "%";
  fill.classList.remove("warning", "danger");
  if (state.timeLeft <= 30) fill.classList.add("danger");
  else if (state.timeLeft <= 60) fill.classList.add("warning");
}

function updateLives() {
  const hearts = $$("#livesDisplay .heart");
  hearts.forEach((h, i) => {
    h.classList.toggle("lost", i >= state.lives);
  });
}

function updateScore() {
  $("#scoreText").textContent = state.score;
}

function renderProgress() {
  const dots = $("#progressDots");
  dots.innerHTML = state.questions.map((_, i) => {
    let cls = "";
    if (i < state.currentQ) cls = "done";
    if (i === state.currentQ) cls = "current";
    return '<span class="' + cls + '"></span>';
  }).join("");
}

function loadQuestion() {
  if (state.currentQ >= state.questions.length) {
    endGame(true);
    return;
  }
  const q = state.questions[state.currentQ];
  state.answers = new Array(q.answer.length).fill(null);
  state.usedOptions = new Set();

  const slotsEl = $("#sentenceSlots");
  slotsEl.innerHTML = "";
  let slotIdx = 0;
  q.template.forEach(part => {
    if (part === "_") {
      const slot = document.createElement("div");
      slot.className = "slot";
      slot.dataset.idx = slotIdx;
      slotsEl.appendChild(slot);
      slotIdx++;
    } else {
      const fixed = document.createElement("span");
      fixed.className = "fixed-word";
      fixed.textContent = part;
      slotsEl.appendChild(fixed);
    }
  });

  const bank = $("#wordBank");
  bank.innerHTML = "";
  const shuffled = [...q.options].sort(() => Math.random() - 0.5);
  shuffled.forEach((opt, i) => {
    const tile = document.createElement("div");
    tile.className = "word-tile";
    tile.dataset.text = opt.text;
    tile.dataset.idx = i;
    if (opt.furi) {
      tile.innerHTML = '<span class="furi">' + opt.furi + '</span>' + opt.text;
    } else {
      tile.textContent = opt.text;
    }
    setupDrag(tile);
    bank.appendChild(tile);
  });

  $("#checkBtn").disabled = true;
  renderProgress();
}

/* ===== DRAG & DROP (follows finger) ===== */
let dragData = null;

function setupDrag(tile) {
  tile.addEventListener("pointerdown", (e) => {
    if (tile.classList.contains("used")) return;
    e.preventDefault();
    tile.setPointerCapture(e.pointerId);

    dragData = {
      tile,
      text: tile.dataset.text
    };

    const clone = document.createElement("div");
    clone.className = "drag-clone";
    clone.innerHTML = tile.innerHTML;
    clone.style.left = e.clientX + "px";
    clone.style.top = e.clientY + "px";
    document.body.appendChild(clone);
    dragData.clone = clone;

    tile.classList.add("dragging");

    const onMove = (ev) => {
      if (!dragData) return;
      dragData.clone.style.left = ev.clientX + "px";
      dragData.clone.style.top = ev.clientY + "px";

      $$(".slot").forEach(s => s.classList.remove("drag-over"));
      const el = document.elementFromPoint(ev.clientX, ev.clientY);
      const slot = el && el.closest ? el.closest(".slot") : null;
      if (slot && !slot.classList.contains("filled")) {
        slot.classList.add("drag-over");
      }
    };

    const onUp = (ev) => {
      if (!dragData) return;
      try { tile.releasePointerCapture(e.pointerId); } catch(err){}
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);

      const el = document.elementFromPoint(ev.clientX, ev.clientY);
      const slot = el && el.closest ? el.closest(".slot") : null;
      if (slot && !slot.classList.contains("filled")) {
        placeInSlot(slot, dragData.text, dragData.tile);
      }

      if (dragData.clone) dragData.clone.remove();
      tile.classList.remove("dragging");
      $$(".slot").forEach(s => s.classList.remove("drag-over"));
      dragData = null;
    };

    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
  });
}

function placeInSlot(slot, text, tile) {
  const idx = parseInt(slot.dataset.idx);
  if (state.answers[idx]) {
    returnToBank(state.answers[idx]);
  }
  state.answers[idx] = text;
  state.usedOptions.add(text);
  tile.classList.add("used");

  const q = state.questions[state.currentQ];
  const opt = q.options.find(o => o.text === text);
  slot.classList.add("filled");
  if (opt && opt.furi) {
    slot.innerHTML = '<span class="furigana">' + opt.furi + '</span>' + text;
  } else {
    slot.textContent = text;
  }

  slot.onclick = () => {
    returnToBank(text);
    state.answers[idx] = null;
    slot.classList.remove("filled");
    slot.innerHTML = "";
    slot.onclick = null;
    checkReady();
  };

  checkReady();
}

function returnToBank(text) {
  state.usedOptions.delete(text);
  $$(".word-tile").forEach(t => {
    if (t.dataset.text === text) t.classList.remove("used");
  });
}

function checkReady() {
  const allFilled = state.answers.every(a => a !== null);
  $("#checkBtn").disabled = !allFilled;
}

/* ===== CHECK ANSWER ===== */
$("#checkBtn").addEventListener("click", () => {
  const q = state.questions[state.currentQ];
  const correct = q.answer.every((ans, i) => state.answers[i] === ans);

  if (correct) {
    state.score += q.points;
    updateScore();
    showToast("Correct! +" + q.points, "good");
    const dots = $$("#progressDots span");
    if (dots[state.currentQ]) dots[state.currentQ].classList.add("done");
    state.currentQ++;
    setTimeout(() => loadQuestion(), 600);
  } else {
    state.lives--;
    updateLives();
    showToast("Wrong…", "bad");
    const dots = $$("#progressDots span");
    if (dots[state.currentQ]) {
      dots[state.currentQ].classList.remove("current");
      dots[state.currentQ].classList.add("wrong");
    }
    if (state.lives <= 0) {
      setTimeout(() => endGame(false), 800);
    } else {
      setTimeout(() => loadQuestion(), 700);
    }
  }
});

$("#skipBtn").addEventListener("click", () => {
  state.lives--;
  updateLives();
  showToast("Skipped", "bad");
  const dots = $$("#progressDots span");
  if (dots[state.currentQ]) {
    dots[state.currentQ].classList.add("wrong");
  }
  if (state.lives <= 0) {
    endGame(false);
    return;
  }
  state.currentQ++;
  loadQuestion();
});

/* ===== END GAME ===== */
function endGame(finished) {
  clearInterval(state.timerId);
  state.isPlaying = false;

  const totalQ = state.questions.length;
  const correctCount = Math.min(state.currentQ, totalQ);
  const isPerfect = finished && state.lives === 3 && correctCount === totalQ;

  const history = getHistory();
  history.unshift({
    date: new Date().toISOString(),
    score: state.score,
    correct: correctCount,
    total: totalQ,
    timeLeft: state.timeLeft,
    perfect: isPerfect
  });
  if (history.length > 30) history.pop();
  localStorage.setItem("sentenceBuilderHistory", JSON.stringify(history));

  $("#finalScore").textContent = state.score;
  $("#finalCorrect").textContent = correctCount + "/" + totalQ;
  const m = Math.floor(state.timeLeft / 60);
  const s = state.timeLeft % 60;
  $("#finalTime").textContent = m + ":" + s.toString().padStart(2, "0");

  if (isPerfect) {
    $("#resultTitle").textContent = "Perfect!";
    $("#hanaMaru").hidden = false;
  } else if (finished) {
    $("#resultTitle").textContent = "Good job!";
    $("#hanaMaru").hidden = true;
  } else {
    $("#resultTitle").textContent = state.timeLeft <= 0 ? "Time's up…" : "Game Over";
    $("#hanaMaru").hidden = true;
  }

  $("#resultModal").classList.add("show");
}

$("#playAgainBtn").addEventListener("click", () => {
  $("#resultModal").classList.remove("show");
  showScreen("settings");
});
$("#homeFromResultBtn").addEventListener("click", () => {
  $("#resultModal").classList.remove("show");
  showScreen("home");
});

/* ===== HISTORY ===== */
function getHistory() {
  try {
    return JSON.parse(localStorage.getItem("sentenceBuilderHistory") || "[]");
  } catch {
    return [];
  }
}

function renderHistory() {
  const list = $("#historyList");
  const history = getHistory();
  if (!history.length) {
    list.innerHTML = '<p class="history-empty">No history yet</p>';
    return;
  }
  list.innerHTML = history.map(h => {
    const d = new Date(h.date);
    const dateStr = (d.getMonth()+1) + "/" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes().toString().padStart(2,"0");
    return '<div class="history-item"><div><div class="date">' + dateStr + '</div><div style="font-size:13px;color:var(--muted)">' + h.correct + '/' + h.total + ' correct</div></div><div style="text-align:right"><div class="pts">' + h.score + ' pt</div>' + (h.perfect ? '<span class="badge">Hana Maru</span>' : '') + '</div></div>';
  }).join("");
}

/* ===== TOAST ===== */
function showToast(msg, type) {
  const t = $("#toast");
  t.textContent = msg;
  t.className = "toast show " + (type || "");
  setTimeout(() => t.classList.remove("show"), 1600);
}

/* ===== PWA ===== */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
