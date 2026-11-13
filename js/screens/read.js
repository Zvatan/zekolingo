import { $, $$, esc, inline, speak, ICON } from '../util.js';
import * as store from '../store.js';
import { level, loadReading } from '../../data/catalog.js';
import { levelChips, bindChips } from './learn.js';
import { runSession, showResults } from '../session.js';

const has = L => !!L.reading;
const words = t => t.split(/\s+/).filter(Boolean).length;

export async function readList(root) {
  const S = store.state();
  const L = has(level(S.level)) ? level(S.level) : level('A1');
  root.innerHTML = `<header class="hd"><h1>Okuma</h1><p class="sub">Kısa metinler. Altı çizili kelimelere dokununca anlamı çıkar.</p></header>
    ${levelChips(L.id, has)}<div class="list" id="rlist"><p class="muted">Yükleniyor…</p></div>`;
  bindChips(root, has, () => readList(root));
  const route = location.hash;
  const items = await loadReading(L.id);
  if (location.hash !== route) return;
  $('#rlist', root).innerHTML = items.map((r, k) => {
    const best = S.reading[r.id]?.best;
    return `<a class="card row" href="#/read/${L.id}/${r.id}"><div class="num${best >= 80 ? ' done' : ''}">${best >= 80 ? ICON.check : k + 1}</div>
      <div class="grow"><div class="t">${esc(r.title)}</div><div class="s">${words(r.text)} kelime · ${r.qs.length} soru</div></div>
      ${best != null ? `<span class="pill${best >= 80 ? ' ok' : ''}">%${best}</span>` : ''}${ICON.chev}</a>`;
  }).join('');
}

/** Metni paragraflara böler ve sözlükteki kelimeleri dokunulabilir yapar. */
function passageHTML(r) {
  const keys = Object.keys(r.gloss || {}).sort((a, b) => b.length - a.length);
  const re = keys.length ? new RegExp(`\\b(${keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi') : null;
  return r.text.trim().split(/\n\s*\n/).map(p => {
    let h = esc(p.replace(/\s+/g, ' '));
    if (re) h = h.replace(re, m => `<span class="g" data-g="${esc(keys.find(k => k.toLowerCase() === m.toLowerCase()))}">${m}</span>`);
    return `<p>${h}</p>`;
  }).join('');
}

function bindGloss(el, r) {
  el.onclick = e => {
    const g = e.target.closest('.g');
    $('.pop')?.remove();
    $$('.g.on').forEach(x => x.classList.remove('on'));
    if (!g) return;
    g.classList.add('on');
    const pop = document.createElement('div');
    pop.className = 'pop';
    pop.innerHTML = `<b>${esc(g.dataset.g)}</b> · ${esc(r.gloss[g.dataset.g])}`;
    document.body.append(pop);
    pop.onclick = () => pop.remove();
    clearTimeout(bindGloss.t);
    bindGloss.t = setTimeout(() => pop.remove(), 4000);
  };
}

export async function readScreen(root, lv, id) {
  const items = await loadReading(lv);
  const r = items.find(x => x.id === id);
  if (!r) return void (location.hash = '#/read');
  const best = store.state().reading[id]?.best;
  root.innerHTML = `<a class="back" href="#/read">${ICON.back} Okuma</a>
    <header class="hd"><h1>${esc(r.title)}</h1><p class="sub">${lv} · ${words(r.text)} kelime${best != null ? ` · en iyi %${best}` : ''}</p></header>
    <button class="btn ghost" data-listen style="margin-bottom:12px">${ICON.speaker} Metni dinle</button>
    <div class="card passage" id="psg">${passageHTML(r)}</div>
    ${r.tip ? `<div class="tip">${inline(r.tip)}</div>` : ''}
    <div style="height:72px"></div>
    <div class="dock"><button class="btn" data-q>Soruları çöz · ${r.qs.length} soru</button></div>`;
  bindGloss($('#psg', root), r);
  let speaking = false;
  const lbtn = $('[data-listen]', root);
  const label = () => (lbtn.innerHTML = `${ICON.speaker} ${speaking ? 'Durdur' : 'Metni dinle'}`);
  lbtn.onclick = () => {
    if (!('speechSynthesis' in window)) return;
    speaking = !speaking;
    if (speaking) speak(r.text.replace(/\s+/g, ' '), 0.85, () => { speaking = false; label(); });
    else speechSynthesis.cancel();
    label();
  };
  $('[data-q]', root).onclick = async () => {
    window.speechSynthesis?.cancel();
    $('.pop')?.remove();
    const ref = `<div class="passage" style="font-size:16px">${passageHTML(r)}</div>`;
    const res = await runSession(root, r.qs.map(ex => ({ ex, topic: id })), { ref, noMistakes: true });
    if (!res) return readScreen(root, lv, id);
    store.recordScore('reading', id, res.filter(x => x.ok).length, res.length);
    showResults(root, res, { title: r.title, onBack: () => (location.hash = '#/read') });
  };
}
