export const $ = (s, el = document) => el.querySelector(s);
export const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
export const ICON = {
  learn: svg('<path d="M2 7l10-4 10 4-10 4z"/><path d="M6 9v5c0 1.7 2.7 3 6 3s6-1.3 6-3V9"/><path d="M22 7v6"/>'),
  vocab: svg('<rect x="3" y="5" width="13" height="16" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/><path d="M7 10h5M7 14h3"/>'),
  read: svg('<path d="M2 5c3-1.3 6.3-1.3 10 1 3.7-2.3 7-2.3 10-1v14c-3-1.3-6.3-1.3-10 1-3.7-2.3-7-2.3-10-1z"/><path d="M12 6v14"/>'),
  mistakes: svg('<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4M12 17.5v.5"/>'),
  me: svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
  speaker: svg('<path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>'),
  close: svg('<path d="M18 6L6 18M6 6l12 12"/>'),
  check: svg('<path d="M20 6L9 17l-5-5"/>'),
  x: svg('<circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/>'),
  ok: svg('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/>'),
  chev: svg('<path d="M9 6l6 6-6 6"/>'),
  back: svg('<path d="M15 6l-6 6 6 6"/>'),
  doc: svg('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>'),
};

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
/** Seslendirme için düz metin: ~~silinen~~ kısımlar okunmaz. */
export const plain = s => String(s ?? '').replace(/\s*~~.+?~~/g, '').replace(/\*\*/g, '');
/** Inline markup: **kalın**, __altı çizili__, ~~üstü çizili~~ */
export const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/__(.+?)__/g, '<u>$1</u>')
  .replace(/~~(.+?)~~/g, '<s class="del">$1</s>');

export const sayBtn = text => `<button class="say" data-say="${esc(plain(text))}" aria-label="Dinle">${ICON.speaker}</button>`;
export const exampleHTML = (en, tr) =>
  `<div class="ex">${sayBtn(en)}<div><div class="en">${inline(en)}</div>${tr ? `<div class="tr">${inline(tr)}</div>` : ''}</div></div>`;

/**
 * Mini markdown for lessons:
 *  ## / ### başlık · - madde · |a|b| tablo · > EN | TR örnek · ! ipucu · x yanlış => doğru
 */
export function md(src) {
  const out = []; let para = [], list = null, table = null;
  const flush = () => {
    if (para.length) { out.push(`<p>${inline(para.join(' '))}</p>`); para = []; }
    if (list) { out.push(`<ul>${list.map(li => `<li>${inline(li)}</li>`).join('')}</ul>`); list = null; }
    if (table) {
      const [head, ...rows] = table;
      const tr = (r, tag) => `<tr>${r.map(c => `<${tag}>${inline(c)}</${tag}>`).join('')}</tr>`;
      out.push(`<div class="tbl"><table><thead>${tr(head, 'th')}</thead><tbody>${rows.map(r => tr(r, 'td')).join('')}</tbody></table></div>`);
      table = null;
    }
  };
  for (const raw of String(src).trim().split('\n')) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    if (line.startsWith('### ')) { flush(); out.push(`<h3>${inline(line.slice(4))}</h3>`); }
    else if (line.startsWith('## ')) { flush(); out.push(`<h2>${inline(line.slice(3))}</h2>`); }
    else if (line.startsWith('- ')) { if (para.length || table) flush(); (list ||= []).push(line.slice(2)); }
    else if (line.startsWith('|')) { if (para.length || list) flush(); (table ||= []).push(line.replace(/^\||\|$/g, '').split('|').map(c => c.trim())); }
    else if (line.startsWith('> ')) { flush(); const [en, tr] = line.slice(2).split(' | '); out.push(exampleHTML(en, tr)); }
    else if (line.startsWith('! ')) { flush(); out.push(`<div class="tip">${inline(line.slice(2))}</div>`); }
    else if (line.startsWith('x ')) {
      flush(); const [bad, good] = line.slice(2).split(' => ');
      out.push(`<div class="mist"><span class="no">✗ ${inline(bad)}</span><span class="yes">✓ ${inline(good)}</span></div>`);
    }
    else { if (list || table) flush(); para.push(line); }
  }
  flush();
  return out.join('');
}

/** Cevap karşılaştırma: büyük/küçük harf, noktalama ve kısaltmalar (don't = do not) önemsiz. */
export function norm(s) {
  return String(s ?? '').toLowerCase()
    .replace(/[’‘`´]/g, "'").replace(/[.,!?;:"“”()]/g, ' ')
    .replace(/\b(am|ai)n't\b/g, '$1nt') // "amn't" diye bir kısaltma yok, doğru sayılmasın
    .replace(/\bcan't\b/g, 'can not').replace(/\bcannot\b/g, 'can not').replace(/\bwon't\b/g, 'will not')
    .replace(/n't\b/g, ' not').replace(/'m\b/g, ' am').replace(/'re\b/g, ' are')
    .replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will')
    .replace(/\b(he|she|it|that|what|there|here|who|where|how)'s\b/g, '$1 is')
    .replace(/\s+/g, ' ').trim();
}
export const same = (a, b) => norm(a) === norm(b);

export function hash(s) {
  let h = 2166136261;
  for (const c of s) { h ^= c.codePointAt(0); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36);
}
export function shuffle(a) {
  a = [...a];
  for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
export const sample = (a, n) => shuffle(a).slice(0, n);

export function toast(msg, ms = 2200) {
  let t = $('#toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.append(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), ms);
}

/* Sesli okuma (iOS'ta internetsiz çalışır) */
let voice = null, accent = 'en-US', rate = 0.9;
export function setVoicePrefs(a, r) { accent = a || accent; rate = r || rate; voice = null; }
function pickVoice() {
  const vs = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang));
  const ln = v => v.lang.replace('_', '-');
  voice = vs.find(v => ln(v) === accent && /enhanced|premium|samantha|daniel|karen|google/i.test(v.name))
    || vs.find(v => ln(v) === accent) || vs.find(v => /^en-(US|GB)$/.test(ln(v))) || vs[0] || null;
}
export function speak(text) {
  if (!('speechSynthesis' in window)) return toast('Bu cihazda sesli okuma desteklenmiyor');
  speechSynthesis.cancel();
  if (!voice) pickVoice();
  const u = new SpeechSynthesisUtterance(plain(text));
  if (voice) u.voice = voice;
  u.lang = voice?.lang || accent; u.rate = rate;
  speechSynthesis.speak(u);
}
if (typeof window !== 'undefined' && 'speechSynthesis' in window) speechSynthesis.onvoiceschanged = () => { voice = null; };

export const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
export const daysAgo = t => { const d = Math.floor((Date.now() - t) / 864e5); return d <= 0 ? 'bugün' : d === 1 ? 'dün' : `${d} gün önce`; };
