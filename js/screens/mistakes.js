import { $, esc, inline, daysAgo, ICON } from '../util.js';
import * as store from '../store.js';
import { loadTopic, topicMeta } from '../../data/catalog.js';
import { runSession, showResults, questionHTML, answerOf, qid } from '../session.js';

const REVIEW_SIZE = 15;

/** Defterdeki kayıtları soru içerikleriyle eşleştirir. İçeriği değişmiş sorular defterden silinir. */
async function resolve() {
  const ms = Object.values(store.state().mistakes);
  const loaded = {};
  await Promise.all([...new Set(ms.map(m => m.topic))].map(id => loadTopic(id).then(t => (loaded[id] = t), () => null)));
  const out = [];
  for (const m of ms) {
    const t = loaded[m.topic];
    if (!t) continue;
    const ex = t.ex.find(ex => qid(m.topic, ex) === m.id);
    if (ex) out.push({ m, ex });
    else store.set(s => delete s.mistakes[m.id]);
  }
  // En çok yanlış yapılan, sonra en eski önce
  return out.sort((a, b) => b.m.n - a.m.n || a.m.t - b.m.t);
}

export async function mistakesScreen(root) {
  root.innerHTML = `<header class="hd"><h1>Hata Defteri</h1>
    <p class="sub">Yanlış yaptığın her soru buraya gelir. Üst üste ${store.CLEAR_STREAK} kez doğru cevaplayınca defterden çıkar.</p></header>
    <div id="mbody"><p class="muted">Yükleniyor…</p></div>`;
  const route = location.hash;
  const list = await resolve();
  if (location.hash !== route) return;
  const body = $('#mbody', root);
  if (!list.length) {
    body.innerHTML = `<div class="card empty"><div class="big">🎉</div><p><b>Defterin boş!</b><br>Alıştırmalarda yanlış yaptığın sorular burada toplanır.</p></div>`;
    return;
  }
  const groups = {};
  list.forEach(x => (groups[x.m.topic] ||= []).push(x));
  body.innerHTML = `<div class="card"><div class="row"><div class="grow"><div class="t">${list.length} soru tekrar bekliyor</div>
      <div class="s">Her turda en fazla ${REVIEW_SIZE} soru sorulur.</div></div></div>
      <div class="btns"><button class="btn" data-go>Tekrar çöz</button></div></div>
    ${Object.entries(groups).map(([topic, xs]) => `<div class="sec">${esc(topicMeta(topic)?.title || topic)}</div>
      <div class="list">${xs.map(({ m, ex }) => `<details class="card">
        <summary class="row"><div class="grow">${questionHTML(ex)}</div><span class="pill bad">${m.n}×</span></summary>
        <div style="margin-top:10px">
          <div class="small" style="color:var(--bad)">Son cevabın: ${esc(m.given || '—')}</div>
          <div class="small" style="color:var(--ok);font-weight:600">Doğrusu: ${inline(answerOf(ex))}</div>
          ${ex.e ? `<div class="why">${inline(ex.e)}</div>` : ''}
          <div class="small muted">${daysAgo(m.t)} · ${m.streak}/${store.CLEAR_STREAK} doğru</div>
        </div></details>`).join('')}</div>`).join('')}`;

  $('[data-go]', root).onclick = async () => {
    const pick = list.slice(0, REVIEW_SIZE);
    const before = store.mistakeCount();
    const res = await runSession(root, pick.map(({ m, ex }) => ({ ex, topic: m.topic })));
    if (!res) return mistakesScreen(root);
    const cleared = before - store.mistakeCount();
    const note = cleared > 0 ? `<p style="text-align:center;color:var(--ok);font-weight:600">✓ ${cleared} soru defterden çıktı</p>` : '';
    showResults(root, res, { title: 'Hata Defteri', note, onBack: () => mistakesScreen(root) });
  };
}
