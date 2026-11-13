// Alıştırma motoru: soru tiplerini çizer, cevabı kontrol eder, açıklamayı gösterir, hata defterine yazar.
import { $, $$, esc, inline, same, norm, shuffle, sayBtn, hash, pct, ICON } from './util.js';
import * as store from './store.js';

// Hata defteri kimliği. tools/build.mjs'deki ile aynı olmalı.
export const qid = (topic, ex) => topic + ':' + hash(JSON.stringify([ex.t, ex.q ?? ex.s ?? ex.tr ?? '', ex.a, ex.o ?? '']));

export const fmtQ = q => inline(q).replace(/_{3,}/g, '<span class="blank">&nbsp;</span>');
export const tokens = s => String(s).replace(/[.?!,]+(?=\s|$)/g, '').split(/\s+/).filter(Boolean);
const COMMON = new Set(('a an the is are am was were do does did have has had can could will would should must may might ' +
  'i you he she it we they this that these those there here my your his her its our their what where when who why how ' +
  'which whose not no yes please let some any every all to in on at for from with').split(' '));
const lowerFirst = w => (w !== 'I' && !/^I'/.test(w) && COMMON.has(w.toLowerCase()) ? w.toLowerCase() : w);

/** "She ___ (be) happy." + "is" -> "She **is** happy." */
function fullAnswer(ex, right) {
  if (ex.q && /_{3,}/.test(ex.q)) return ex.q.replace(/_{3,}(\s*\([^)]*\))?/, `**${right}**`);
  return right;
}

function lev(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 9;
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[b.length];
}

const tfToMc = ex => ({ ...ex, t: 'mc', o: ['True', 'False'], a: ex.a ? 0 : 1, keep: true, i: ex.i || 'Metne göre doğru mu (True), yanlış mı (False)?' });

const TYPES = {
  mc: {
    render(el, ex, ready) {
      const order = ex.keep ? ex.o.map((_, k) => k) : shuffle(ex.o.map((_, k) => k));
      el.innerHTML = `<p class="inst">${inline(ex.i || 'Doğru seçeneği işaretle')}</p><div class="q">${fmtQ(ex.q)}</div>
        <div class="opts">${order.map(k => `<button class="opt" data-k="${k}">${inline(ex.o[k])}</button>`).join('')}</div>`;
      const c = { sel: null, el };
      $$('.opt', el).forEach(b => (b.onclick = () => {
        if (c.done) return;
        $$('.opt', el).forEach(x => x.classList.toggle('sel', x === b));
        c.sel = +b.dataset.k; ready(true);
      }));
      return c;
    },
    check(ex, c) {
      c.done = true;
      $$('.opt', c.el).forEach(b => {
        const k = +b.dataset.k; b.classList.remove('sel');
        if (k === ex.a) b.classList.add('ok'); else if (k === c.sel) b.classList.add('bad');
      });
      const ok = c.sel === ex.a;
      return { ok, given: ex.o[c.sel], right: ex.o[ex.a], msg: ok ? null : ex.w?.[c.sel] };
    },
  },

  fill: {
    render(el, ex, ready, enter) {
      el.innerHTML = `<p class="inst">${inline(ex.i || 'Boşluğu doldur')}</p><div class="q">${fmtQ(ex.q)}</div>
        ${ex.h ? `<p class="hint">${ICON.bulb}<span>${inline(ex.h)}</span></p>` : ''}
        <input class="inp" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="Cevabını yaz">`;
      const inp = $('.inp', el);
      inp.oninput = () => ready(inp.value.trim().length > 0);
      inp.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); enter(); } };
      inp.focus({ preventScroll: true });
      return { inp };
    },
    check(ex, c) {
      const v = c.inp.value.trim(), acc = [].concat(ex.a);
      const ok = acc.some(a => same(a, v));
      c.inp.disabled = true; c.inp.classList.add(ok ? 'ok' : 'bad');
      let msg = null;
      if (!ok) {
        const k = ex.w && Object.keys(ex.w).find(k => same(k, v));
        if (k) msg = ex.w[k];
        else if (norm(acc[0]).length >= 4 && lev(norm(v), norm(acc[0])) <= 1) msg = `Çok yaklaştın! Harf harf karşılaştır: **${acc[0]}**`;
      }
      return { ok, given: v, right: acc[0], msg };
    },
  },

  order: {
    render(el, ex, ready) {
      const toks = tokens([].concat(ex.a)[0]);
      toks[0] = lowerFirst(toks[0]);
      const pool = shuffle([...toks.map(w => ({ w })), ...(ex.x || []).map(w => ({ w, x: true }))])
        .map((p, k) => ({ ...p, k, used: false }));
      el.innerHTML = `<p class="inst">${ex.tr ? 'Bu cümleyi İngilizce kur' : 'Kelimeleri doğru sıraya diz'}</p>
        ${ex.tr ? `<div class="q trq">${inline(ex.tr)}</div>` : ''}<div class="built"></div><div class="pool"></div>`;
      const c = { built: [], pool };
      const draw = () => {
        $('.built', el).innerHTML = c.built.map((p, n) => `<button class="tile" data-n="${n}">${esc(p.w)}</button>`).join('')
          || '<span class="ph">Aşağıdaki kelimelere sırayla dokun</span>';
        $('.pool', el).innerHTML = pool.map(p => `<button class="tile${p.used ? ' used' : ''}" data-k="${p.k}">${esc(p.w)}</button>`).join('');
        ready(c.built.length > 0);
      };
      el.onclick = e => {
        const b = e.target.closest('.tile');
        if (!b || c.done) return;
        if (b.dataset.n != null) c.built.splice(+b.dataset.n, 1)[0].used = false;
        else { const p = pool[+b.dataset.k]; if (p.used) return; p.used = true; c.built.push(p); }
        draw();
      };
      draw();
      return c;
    },
    check(ex, c) {
      c.done = true;
      const v = c.built.map(p => p.w).join(' '), acc = [].concat(ex.a);
      const ok = acc.some(a => same(a, v));
      const extra = !ok && c.built.find(p => p.x);
      const msg = extra ? (ex.w?.[extra.w] || `**${extra.w}** bu cümleye ait değil.`) : null;
      return { ok, given: v, right: acc[0], msg };
    },
  },

  fix: {
    render(el, ex, ready) {
      el.innerHTML = `<p class="inst">Cümlede bir hata var. Hatalı kelimeye dokun.</p>
        <div class="fixs">${ex.s.split(' ').map((w, k) => `<button class="w" data-k="${k}">${esc(w)}</button>`).join(' ')}</div>`;
      const c = { sel: null, el };
      $$('.w', el).forEach(b => (b.onclick = () => {
        if (c.done) return;
        $$('.w', el).forEach(x => x.classList.toggle('sel', x === b));
        c.sel = +b.dataset.k; ready(true);
      }));
      return c;
    },
    check(ex, c) {
      c.done = true;
      const words = ex.s.split(' ');
      $$('.w', c.el).forEach(b => {
        const k = +b.dataset.k; b.classList.remove('sel');
        if (k === ex.i) b.classList.add('ok'); else if (k === c.sel) b.classList.add('bad');
      });
      return { ok: c.sel === ex.i, given: words[c.sel], right: fixedSentence(ex), msg: null };
    },
  },
};

/** Alt panel. onClose butona basıldığında (aynı dokunuş içinde) çağrılır. */
export function sheet(html, cls = '', label = 'Devam', onClose) {
  const s = document.createElement('div');
  s.className = 'sheet ' + cls;
  const bc = cls === 'is-ok' ? 'ok' : cls === 'is-bad' ? 'bad' : '';
  s.innerHTML = `<div class="sheet-in">${html}<button class="btn ${bc}" data-close>${label}</button></div>`;
  document.body.append(s);
  requestAnimationFrame(() => requestAnimationFrame(() => s.classList.add('show')));
  s.querySelector('[data-close]').onclick = () => { s.remove(); onClose?.(); };
  if (!cls) s.onclick = e => { if (e.target === s) s.remove(); };
}

export function feedbackHTML(ex, r) {
  return `<div class="sheet-h">${r.ok ? ICON.ok + ' Doğru!' : ICON.x + ' Yanlış'}</div>
    <div class="ans">${sayBtn(r.full)}<div><span class="lbl">${r.ok ? 'Cevap' : 'Doğru cevap'}</span>${inline(r.full)}</div></div>
    ${!r.ok && r.given ? `<div class="small muted">Senin cevabın: <s>${esc(r.given)}</s></div>` : ''}
    ${r.msg ? `<div class="why spec">${inline(r.msg)}</div>` : ''}
    ${ex.e ? `<div class="why">${inline(ex.e)}</div>` : ''}
    ${r.cleared ? '<div class="small" style="color:var(--ok);font-weight:600">✓ Bu soru hata defterinden çıktı.</div>' : ''}`;
}

/**
 * items: [{ ex, topic }]. opts: { mode: 'practice' | 'exam', ref: html, noMistakes }
 * Biten oturumun sonuçlarıyla, çıkılırsa null ile çözülür.
 */
export function runSession(root, items, opts = {}) {
  return new Promise(resolve => {
    const exam = opts.mode === 'exam', results = [];
    let i = 0;
    document.body.classList.add('session');
    const end = val => { document.body.classList.remove('session'); $$('.sheet').forEach(s => s.remove()); resolve(val); };
    const step = () => {
      if (i >= items.length) return end(results);
      const it = items[i], ex = it.ex.t === 'tf' ? tfToMc(it.ex) : it.ex, T = TYPES[ex.t];
      root.innerHTML = `<div class="sess-top"><button class="icon-btn" data-x aria-label="Kapat">${ICON.close}</button>
        <div class="bar"><i style="width:${(i / items.length) * 100}%"></i></div><span class="cnt">${i + 1}/${items.length}</span>
        ${opts.ref ? `<button class="icon-btn" data-ref aria-label="Metni göster">${ICON.doc}</button>` : ''}</div>
        <div id="qbody"></div>
        <div class="dock"><button class="btn" data-check disabled>${exam ? 'Cevapla' : 'Kontrol et'}</button></div>`;
      window.scrollTo(0, 0);
      const btn = $('[data-check]', root);
      $('[data-x]', root).onclick = () => { if (!results.length || confirm('Oturumdan çıkılsın mı? Puanın kaydedilmez.')) end(null); };
      if (opts.ref) $('[data-ref]', root).onclick = () => sheet(opts.ref, '', 'Kapat');
      const ctl = T.render($('#qbody', root), ex, ready => (btn.disabled = !ready), () => !btn.disabled && btn.click());
      btn.onclick = () => {
        if (btn.disabled) return;
        btn.disabled = true;
        document.activeElement?.blur?.();
        const r = T.check(ex, ctl);
        Object.assign(r, { full: fullAnswer(ex, r.right), ex, topic: it.topic });
        if (!opts.noMistakes) {
          const id = qid(it.topic, it.ex);
          if (r.ok) r.cleared = store.mistakeCorrect(id);
          else store.addMistake(id, it.topic, r.given);
        }
        results.push(r);
        const next = () => { i++; step(); };
        if (exam) next();
        else sheet(feedbackHTML(ex, r), r.ok ? 'is-ok' : 'is-bad', 'Devam', next);
      };
    };
    step();
  });
}

/** Bir sorunun doğru cevabı, cümle içinde. */
export function answerOf(ex) {
  if (ex.t === 'mc') return fullAnswer(ex, ex.o[ex.a]);
  if (ex.t === 'fill') return fullAnswer(ex, [].concat(ex.a)[0]);
  if (ex.t === 'order') return [].concat(ex.a)[0];
  if (ex.t === 'fix') return fixedSentence(ex);
  return '';
}

/** Hatalı kelime düzeltilmiş hali: değişen kalın, silinmesi gereken üstü çizili. */
function fixedSentence(ex) {
  return ex.s.split(' ').map((w, k) => (k === ex.i ? (ex.c ? `**${ex.c}**` : `~~${w}~~`) : w)).join(' ');
}

export const questionHTML = ex =>
  ex.t === 'order' ? (ex.tr ? inline(ex.tr) : 'Kelimeleri sırala') : ex.t === 'fix' ? esc(ex.s) : fmtQ(ex.q);

const resItem = r => `<div class="card res-item"><div class="q2">${questionHTML(r.ex)}</div>
  <div class="yours">Senin cevabın: ${esc(r.given || '—')}</div><div class="right">Doğrusu: ${inline(r.full)}</div>
  ${r.msg ? `<div class="why spec">${inline(r.msg)}</div>` : ''}${r.ex.e ? `<div class="why">${inline(r.ex.e)}</div>` : ''}</div>`;

/** Sonuç ekranı. onRetry(yanlışItems) verilirse "Yanlışları tekrar çöz" butonu çıkar. */
export function showResults(root, results, { title, onRetry, onBack, note = '' }) {
  const ok = results.filter(r => r.ok).length, n = results.length, p = pct(ok, n);
  const cls = p >= 80 ? 'hi' : p >= 50 ? 'mid' : 'lo';
  const msg = p === 100 ? 'Kusursuz!' : p >= 80 ? 'Harika iş!' : p >= 50 ? 'İyi gidiyorsun. Yanlışlarına göz at.' : 'Konuyu bir kez daha okuyup yeniden dene.';
  const wrong = results.filter(r => !r.ok);
  root.innerHTML = `<header class="hd"><h1>${esc(title)}</h1></header>
    <div class="score ${cls}">%${p}</div>
    <p style="text-align:center;margin:0 0 6px"><b>${ok}/${n} doğru</b><br><span class="muted">${msg}</span></p>${note}
    ${wrong.length ? `<div class="sec">Yanlışların ve açıklamaları</div><div class="list">${wrong.map(resItem).join('')}</div>` : ''}
    <div class="btns">${wrong.length && onRetry ? '<button class="btn ghost" data-retry>Yanlışları tekrar çöz</button>' : ''}
    <button class="btn" data-back>Tamam</button></div>`;
  window.scrollTo(0, 0);
  $('[data-back]', root).onclick = onBack;
  if (wrong.length && onRetry) $('[data-retry]', root).onclick = () => onRetry(wrong.map(r => ({ ex: r.ex, topic: r.topic })));
}
