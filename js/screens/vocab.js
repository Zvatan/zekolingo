import { $, $$, esc, sayBtn, shuffle, sample, speak, pct, same, ICON } from '../util.js';
import * as store from '../store.js';
import { level, loadVocab } from '../../data/catalog.js';
import { levelChips, bindChips } from './learn.js';
import { sheet } from '../session.js';

const has = L => !!L.vocab;
const keyOf = (lv, w) => `${lv}:${w[0]}`;
const stripArt = s => String(s).trim().replace(/^(to|a|an|the)\s+/i, '');

export async function vocabScreen(root) {
  const S = store.state();
  const L = has(level(S.level)) ? level(S.level) : level('A1');
  root.innerHTML = `<header class="hd"><h1>Kelime</h1><p class="sub">Bildiğin kelimeleri seyrek, zorlandıklarını sık sorar.</p></header>
    ${levelChips(L.id, has)}<div id="vbody"><p class="muted">Yükleniyor…</p></div>`;
  bindChips(root, has, () => vocabScreen(root));
  const route = location.hash;
  const themes = await loadVocab(L.id);
  if (location.hash !== route) return;

  const st = w => S.vocab[keyOf(L.id, w)];
  const all = themes.flatMap(t => t.words.map(w => ({ w, t })));
  const now = Date.now();
  const due = all.filter(({ w }) => st(w) && st(w).due <= now).sort((a, b) => st(a.w).due - st(b.w).due);
  const started = all.filter(({ w }) => st(w)).length;
  const learned = all.filter(({ w }) => st(w)?.b >= store.LEARNED_BOX).length;

  $('#vbody', root).innerHTML = `<div class="card">
      <div class="stats"><div><b>${all.length - started}</b><span>Yeni</span></div><div><b>${started - learned}</b><span>Öğreniliyor</span></div><div><b>${learned}</b><span>Öğrenildi</span></div></div>
      <div class="btns"><button class="btn" data-review ${due.length ? '' : 'disabled'}>${due.length ? `Tekrar et · ${due.length} kelime` : 'Şu an tekrar bekleyen kelime yok'}</button></div></div>
    <div class="sec">Temalar</div>
    <div class="list">${themes.map((t, k) => {
      const n = t.words.length, s = t.words.filter(st).length, l = t.words.filter(w => st(w)?.b >= store.LEARNED_BOX).length;
      return `<button class="card row" data-theme="${k}"><div class="num" style="font-size:21px">${t.icon}</div>
        <div class="grow"><div class="t">${esc(t.theme)}</div><div class="s">${n} kelime · ${s ? `${l} öğrenildi` : 'başlanmadı'}</div>
        <div class="pbar"><i style="width:${pct(s, n)}%"></i></div></div>${ICON.chev}</button>`;
    }).join('')}</div>`;

  const pool = all.map(x => x.w);
  $('[data-review]', root).onclick = () => study(root, L.id, [], due.slice(0, 30).map(x => x.w), pool);
  $$('[data-theme]', root).forEach(b => (b.onclick = () => {
    const t = themes[+b.dataset.theme];
    const fresh = t.words.filter(w => !st(w)).slice(0, S.settings.newWords);
    let rev = t.words.filter(w => st(w) && st(w).due <= now);
    if (!fresh.length && !rev.length) rev = sample(t.words, 12); // hepsi öğrenildiyse serbest tekrar
    study(root, L.id, fresh, rev, pool, t.words);
  }));
}

/** fresh: ilk kez gösterilecek kelimeler, rev: tekrar edilecekler. */
function study(root, lv, fresh, rev, pool, themeWords = pool) {
  const queue = [
    ...fresh.map(w => ({ kind: 'intro', w })),
    ...shuffle([...fresh.map(w => ({ kind: 'quiz', w, mode: 'en-tr' })), ...rev.map(w => ({ kind: 'quiz', w, mode: modeFor(lv, w) }))]),
  ];
  const total = queue.length, retried = new Set();
  let done = 0, right = 0, quizzes = 0;
  document.body.classList.add('session');
  const finish = () => {
    document.body.classList.remove('session');
    root.innerHTML = `<header class="hd"><h1>Oturum tamamlandı</h1></header>
      <div class="card" style="text-align:center"><div class="stats"><div><b>${fresh.length}</b><span>Yeni kelime</span></div>
      <div><b>${rev.length}</b><span>Tekrar</span></div><div><b>%${pct(right, quizzes)}</b><span>İlk denemede doğru</span></div></div></div>
      <div class="btns"><button class="btn" data-ok>Tamam</button></div>`;
    $('[data-ok]', root).onclick = () => vocabScreen(root);
  };
  const next = () => {
    const it = queue.shift();
    if (!it) return finish();
    done++;
    const top = `<div class="sess-top"><button class="icon-btn" data-x>${ICON.close}</button>
      <div class="bar"><i style="width:${Math.min(100, ((done - 1) / Math.max(total, done)) * 100)}%"></i></div></div>`;
    const [en, tr, exs] = it.w;
    if (it.kind === 'intro') {
      root.innerHTML = `${top}<p class="inst">Yeni kelime</p>
        <div class="card vcard"><div class="word">${esc(en)}</div>${sayBtn(en)}<div class="mean">${esc(tr)}</div>
        ${exs ? `<div class="exs">“${esc(exs)}”</div>` : ''}</div>
        <div class="dock"><button class="btn" data-next>Öğrendim, devam</button></div>`;
      speak(en);
      $('[data-next]', root).onclick = next;
    } else quiz(it, top);
    $('[data-x]', root).onclick = () => { if (confirm('Çıkılsın mı? Şimdiye kadarki cevapların kaydedildi.')) { document.body.classList.remove('session'); vocabScreen(root); } };
    window.scrollTo(0, 0);
  };

  function quiz(it, top) {
    const [en, tr] = it.w, mode = it.mode;
    const prompt = mode === 'en-tr' ? en : tr;
    const field = mode === 'en-tr' ? 1 : 0;
    let body;
    if (mode === 'type') {
      body = `<input class="inp" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="İngilizcesini yaz">`;
    } else {
      const near = themeWords.filter(w => w !== it.w && w[field] !== it.w[field]);
      const far = pool.filter(w => w !== it.w && w[field] !== it.w[field] && !near.includes(w));
      const opts = shuffle([it.w, ...sample(near, 3), ...sample(far, 3)].slice(0, 4));
      body = `<div class="opts">${opts.map(w => `<button class="opt" data-v="${esc(w[field])}">${esc(w[field])}</button>`).join('')}</div>`;
    }
    root.innerHTML = `${top}<p class="inst">${mode === 'en-tr' ? 'Bu kelimenin anlamı ne?' : mode === 'tr-en' ? 'İngilizcesi hangisi?' : 'İngilizcesini yaz'}</p>
      <div class="card vcard" style="padding:22px 18px"><div class="word" style="font-size:${mode === 'en-tr' ? 34 : 26}px">${esc(prompt)}</div>${mode === 'en-tr' ? sayBtn(en) : ''}</div>
      <div style="margin-top:16px">${body}</div>
      ${mode === 'type' ? '<div class="dock"><button class="btn" data-check disabled>Kontrol et</button></div>' : ''}`;
    if (mode === 'en-tr') speak(en);
    const answer = given => {
      const ok = mode === 'type' ? same(stripArt(given), stripArt(en)) : given === it.w[field];
      const key = keyOf(lv, it.w), retry = retried.has(key);
      if (!retry) { quizzes++; if (ok) right++; }
      if (retry && ok) store.set(s => (s.vocab[key].due = Date.now() + 20 * 36e5));
      else store.wordResult(key, ok);
      if (!ok && !retry) { retried.add(key); queue.push({ kind: 'quiz', w: it.w, mode: 'en-tr' }); }
      $$('.opt', root).forEach(b => { b.disabled = true; if (b.dataset.v === it.w[field]) b.classList.add('ok'); else if (b.dataset.v === given) b.classList.add('bad'); });
      sheet(`<div class="sheet-h">${ok ? ICON.ok + ' Doğru!' : ICON.x + ' Yanlış'}</div>
        <div class="ans">${sayBtn(en)}<div><b>${esc(en)}</b> = ${esc(tr)}</div></div>
        ${!ok && given ? `<div class="small muted">Senin cevabın: <s>${esc(given)}</s>${retry ? '' : ' · Bu kelime oturum sonunda tekrar sorulacak.'}</div>` : ''}
        ${it.w[2] ? `<div class="why">${sayBtn(it.w[2])} “${esc(it.w[2])}”</div>` : ''}`, ok ? 'is-ok' : 'is-bad', 'Devam', next);
    };
    if (mode === 'type') {
      const inp = $('.inp', root), btn = $('[data-check]', root);
      inp.oninput = () => (btn.disabled = !inp.value.trim());
      inp.onkeydown = e => { if (e.key === 'Enter' && inp.value.trim()) btn.click(); };
      btn.onclick = () => { btn.disabled = true; inp.disabled = true; inp.blur(); answer(inp.value); };
      inp.focus({ preventScroll: true });
    } else $$('.opt', root).forEach(b => (b.onclick = () => answer(b.dataset.v)));
  }
  next();
}

/* Kutu ilerledikçe soru zorlaşır: anlam seç → İngilizcesini seç → İngilizcesini yaz */
function modeFor(lv, w) {
  const b = store.state().vocab[keyOf(lv, w)]?.b || 0;
  return b <= 2 ? 'en-tr' : b <= 4 ? 'tr-en' : 'type';
}
