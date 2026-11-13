// Tüm ilerleme bu cihazda localStorage'da tutulur. "İlerleme" sekmesinden yedeklenebilir.
const KEY = 'zekolingo:v1';
const DAY = 864e5;
const fresh = () => ({
  v: 1, level: 'A1',
  topics: {},    // id -> { best, last, n, t }
  exams: {},     // level -> { best, last, n, t }
  mistakes: {},  // qid -> { id, topic, given, n, streak, t }
  vocab: {},     // "A1:apple" -> { b: kutu (1-6), due }
  reading: {},   // id -> { best, t }
  settings: { accent: 'en-US', rate: 0.9, newWords: 8, voiceURI: '' },
  created: Date.now(),
});

let S = load();
function load() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (d && d.v === 1) { const f = fresh(); return { ...f, ...d, settings: { ...f.settings, ...d.settings } }; }
  } catch (e) { console.warn(e); }
  return fresh();
}
export const state = () => S;
export function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { console.warn('Kaydedilemedi', e); }
}
export function set(fn) { fn(S); save(); }

export function recordScore(bucket, id, ok, total) {
  const p = total ? Math.round((ok / total) * 100) : 0;
  const r = S[bucket][id] || { best: 0, n: 0 };
  S[bucket][id] = { best: Math.max(r.best, p), last: p, n: r.n + 1, t: Date.now() };
  save();
  return p;
}

/* Hata defteri: yanlış yapılan soru eklenir, üst üste 2 doğru ile çıkar. */
export const CLEAR_STREAK = 2;
export function addMistake(id, topic, given) {
  const m = S.mistakes[id];
  S.mistakes[id] = { id, topic, given, n: (m?.n || 0) + 1, streak: 0, t: Date.now() };
  save();
}
/** Doğru cevapta çağrılır. Soru defterden çıktıysa true döner. */
export function mistakeCorrect(id) {
  const m = S.mistakes[id];
  if (!m) return false;
  m.streak++; m.t = Date.now();
  if (m.streak >= CLEAR_STREAK) delete S.mistakes[id];
  save();
  return !S.mistakes[id];
}
export const mistakeCount = () => Object.keys(S.mistakes).length;

/* Kelime kartları: Leitner kutuları. Kutu numarası arttıkça tekrar aralığı uzar. */
export const BOX_DAYS = [0, 1, 2, 4, 8, 16, 32];
export const LEARNED_BOX = 4;
export function wordResult(key, ok) {
  const w = S.vocab[key] || { b: 0 };
  w.b = ok ? Math.min(w.b + 1, 6) : 1;
  w.due = Date.now() + (ok ? BOX_DAYS[w.b] * DAY - 36e5 : 0);
  S.vocab[key] = w;
  save();
  return w;
}

export const exportData = () => JSON.stringify(S);
export function importData(txt) {
  const d = JSON.parse(txt);
  if (!d || d.v !== 1 || typeof d.topics !== 'object') throw new Error('Bu bir Zekolingo yedeği değil');
  localStorage.setItem(KEY, JSON.stringify(d));
  S = load();
}
export function resetAll() { S = fresh(); save(); }
