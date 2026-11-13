// Animasyonlu konu anlatımı: kelimeler renkli bloklar halinde adım adım yerine oturur.
//
// Adım biçimi (data/grammar/<konu>.js → anim: [...]):
//   { title, time, tr, blocks | rows, note }
//   time:   zaman çizgisi (bkz. timeline.js): [['bar', .1, .4, 'was cooking', 'v'], ['dot', .3, 'rang', 'q', 'b']]
//   tr:     Türkçe satır: [['Ben', 's'], [' öğrenci', 'n'], ['-yim', 'v']] (renkler bloklarla eşleşir)
//   blocks: tek satır blok: [metin, rol, bayraklar, etiket]  → ['am', 'v', 'hi', 'to be']
//   rows:   birden çok satır: [[blok, blok], [blok]]
// Metin 'works#V' yazılırsa blok kimliği V olur: kimliği aynı kalan blok bir sonraki adımda
// yeni yerine kayar, metni değiştiyse parlar. Roller: s özne, v fiil, n isim/tamamlayıcı,
// x diğer, neg olumsuz, q soru, t zaman. Bayraklar: hi (vurgula), no (yanlış), ok (doğru), gap (boşluk).
import { $, esc, inline, ICON } from './util.js';
import { timelineSVG } from './timeline.js';

const REDUCED = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const ms = n => (REDUCED ? 0 : n);

function rowsOf(step) {
  const rows = step.rows || (step.blocks ? [step.blocks] : []);
  return rows.map(r => r.map(b => (typeof b === 'string' ? [b] : b)));
}

function stageHTML(step) {
  const seen = new Set();
  const key = k => { let out = k, n = 1; while (seen.has(out)) out = `${k}~${++n}`; seen.add(out); return out; };
  const tr = typeof step.tr === 'string' ? [[step.tr]] : step.tr;
  const rows = rowsOf(step).map(r => `<div class="an-row">${r.map(([raw, role = 'x', flags = '', label]) => {
    const [text, id] = String(raw).split('#');
    return `<span class="blk r-${role} ${flags}" data-k="${esc(key(id || text))}"><span class="bt">${esc(text)}</span>${label ? `<small>${esc(label)}</small>` : ''}</span>`;
  }).join('')}</div>`).join('');
  return `${step.title ? `<div class="an-title">${inline(step.title)}</div>` : ''}
    ${step.time ? timelineSVG(step.time) : ''}
    ${tr ?`<div class="an-tr">${tr.map(([t, role = 'x']) => `<span class="trs r-${role}">${esc(t)}</span>`).join('')}</div>` : ''}
    <div class="an-rows">${rows}</div>
    ${step.note ? `<div class="an-note">${inline(step.note)}</div>` : ''}`;
}

/** Bir adımdan diğerine geçiş: kalan bloklar kayar, yeniler düşer, gidenler söner. */
function render(stage, step, animate) {
  const old = new Map();
  stage.querySelectorAll('.blk').forEach(el => old.set(el.dataset.k, { rect: el.getBoundingClientRect(), text: $('.bt', el).textContent, el }));
  stage.innerHTML = stageHTML(step);
  if (!animate) return;
  let n = 0;
  stage.querySelectorAll('.blk').forEach(el => {
    const o = old.get(el.dataset.k);
    if (o) {
      const r = el.getBoundingClientRect();
      const dx = o.rect.left - r.left, dy = o.rect.top - r.top;
      if (dx || dy) el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: ms(650), easing: 'cubic-bezier(.2,.8,.2,1)' });
      if (o.text !== $('.bt', el).textContent) el.classList.add('morph');
      old.delete(el.dataset.k);
    } else {
      el.animate([{ opacity: 0, transform: 'translateY(-18px) scale(.85)' }, { opacity: 1, transform: 'none' }],
        { duration: ms(450), delay: ms(250 + 110 * n++), fill: 'backwards', easing: 'cubic-bezier(.2,.8,.2,1.2)' });
    }
  });
  // Artık olmayan bloklar eski yerlerinde sönerek kaybolur
  for (const { rect, el } of old.values()) {
    const g = el.cloneNode(true);
    Object.assign(g.style, { position: 'fixed', left: rect.left + 'px', top: rect.top + 'px', width: rect.width + 'px', margin: 0, zIndex: 80, pointerEvents: 'none' });
    document.body.append(g);
    g.animate([{ opacity: 1 }, { opacity: 0, transform: 'translateY(16px) scale(.8)' }], { duration: ms(400), easing: 'ease-in' }).onfinish = () => g.remove();
  }
  for (const sel of ['.an-tr', '.an-note', '.an-title']) {
    stage.querySelector(sel)?.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }],
      { duration: ms(400), delay: ms(sel === '.an-note' ? 350 + 110 * n : 0), fill: 'backwards' });
  }
}

/** Anlatımı oynatır. onPractice verilirse son adımda "Alıştırmaya başla" çıkar. */
export function playLesson(root, steps, { title, onClose, onPractice }) {
  let i = 0;
  document.body.classList.add('session');
  root.innerHTML = `<div class="sess-top"><button class="icon-btn" data-x aria-label="Kapat">${ICON.close}</button>
      <div class="bar"><i></i></div><span class="cnt"></span></div>
    <div class="an-head">${esc(title)}</div>
    <div class="an-stage" id="stage"></div>
    <p class="an-hint">Devam etmek için ekrana dokun</p>
    <div class="dock"><div class="an-ctrl">
      <button class="btn ghost" data-prev aria-label="Geri">${ICON.back}</button>
      <button class="btn" data-next></button></div></div>`;
  window.scrollTo(0, 0);
  const stage = $('#stage', root), prev = $('[data-prev]', root), next = $('[data-next]', root);
  const close = () => { document.querySelectorAll('body > .blk').forEach(g => g.remove()); document.body.classList.remove('session'); onClose(); };
  const show = animate => {
    render(stage, steps[i], animate);
    $('.bar i', root).style.width = `${((i + 1) / steps.length) * 100}%`;
    $('.cnt', root).textContent = `${i + 1}/${steps.length}`;
    prev.disabled = i === 0;
    const last = i === steps.length - 1;
    next.innerHTML = last ? (onPractice ? 'Alıştırmaya başla' : 'Bitir') : `İleri ${ICON.chev}`;
    $('.an-hint', root).style.visibility = last ? 'hidden' : 'visible';
  };
  const forward = () => {
    if (i < steps.length - 1) { i++; show(true); }
    else { document.body.classList.remove('session'); (onPractice || onClose)(); }
  };
  next.onclick = forward;
  prev.onclick = () => { if (i > 0) { i--; show(true); } };
  stage.onclick = () => { if (i < steps.length - 1) forward(); };
  $('[data-x]', root).onclick = close;
  show(true);
}
