import { $, $$, esc, md, pct, sample, shuffle, toast, ICON } from '../util.js';
import * as store from '../store.js';
import { LEVELS, level, topicMeta, loadTopic, PASS, EXAM_SIZE } from '../../data/catalog.js';
import { runSession, showResults } from '../session.js';
import { playLesson } from '../anim.js';

/* Kur seçici (her sekmede ortak). has(L): o kurda içerik var mı? */
export const levelChips = (cur, has) =>
  `<div class="chips">${LEVELS.map(L =>
    `<button class="chip${L.id === cur ? ' on' : ''}${has(L) ? '' : ' soon'}" data-lv="${L.id}">${L.id} <small>${L.name}</small></button>`).join('')}</div>`;

export function bindChips(root, has, rerender) {
  $$('[data-lv]', root).forEach(b => (b.onclick = () => {
    const L = level(b.dataset.lv);
    if (!has(L)) return toast(`${L.id} içeriği yakında eklenecek`);
    store.set(s => (s.level = L.id));
    rerender();
  }));
}
const hasTopics = L => L.topics.length > 0 && !L.soon;

const topicRow = ([id, title, sub], n) => {
  const best = store.state().topics[id]?.best;
  const done = best >= 80;
  return `<a class="card row" href="#/topic/${id}">
    <div class="num${done ? ' done' : ''}">${done ? ICON.check : n + 1}</div>
    <div class="grow"><div class="t">${esc(title)}</div><div class="s">${esc(sub)}</div></div>
    ${best != null ? `<span class="pill${done ? ' ok' : ''}">%${best}</span>` : ''}${ICON.chev}</a>`;
};

export function learnScreen(root) {
  const S = store.state(), L = level(S.level);
  const mc = store.mistakeCount();
  const done = L.topics.filter(([id]) => S.topics[id]?.best >= 80).length;
  const ex = S.exams[L.id];
  const passed = ex?.best >= PASS;
  root.innerHTML = `<header class="hd"><h1>Öğren</h1><p class="sub">Konuyu oku, alıştırmayı çöz, hatalarından öğren.</p></header>
    ${levelChips(L.id, hasTopics)}
    <div class="card hero"><div class="t">${L.id} · ${L.name}</div>
      <div class="s">${done}/${L.topics.length} konu tamamlandı${passed ? ' · 🎓 kur sınavı geçildi' : ''}</div>
      <div class="pbar" style="background:rgba(255,255,255,.25)"><i style="width:${pct(done, L.topics.length)}%;background:#fff"></i></div></div>
    ${mc ? `<a class="card banner row" href="#/mistakes" style="margin-top:10px">${ICON.mistakes}<span class="grow">Hata defterinde ${mc} soru var</span><span>Tekrar et</span></a>` : ''}
    <div class="sec">Konular</div>
    <div class="list">${L.topics.map(topicRow).join('')}</div>
    <div class="sec">Kur sınavı</div>
    <a class="card row" href="#/exam/${L.id}"><div class="num${passed ? ' done' : ''}">${passed ? ICON.check : '🎓'}</div>
      <div class="grow"><div class="t">${L.id} Kur Sınavı</div>
      <div class="s">${EXAM_SIZE} karışık soru · geçme notu %${PASS}${ex ? ` · en iyi %${ex.best}` : ''}</div></div>${ICON.chev}</a>`;
  bindChips(root, hasTopics, () => learnScreen(root));
}

export async function topicScreen(root, id) {
  const meta = topicMeta(id);
  if (!meta) return void (location.hash = '#/learn');
  const route = location.hash;
  root.innerHTML = `<a class="back" href="#/learn">${ICON.back} ${meta.level} konuları</a>
    <header class="hd"><h1>${esc(meta.title)}</h1><p class="sub">${esc(meta.sub)}</p></header>
    <div class="card lesson" id="lesson"><p class="muted">Yükleniyor…</p></div>`;
  let topic;
  try { topic = await loadTopic(id); } catch (e) {
    console.warn(e);
    $('#lesson', root).innerHTML = '<p class="muted">Bu konunun içeriği yakında eklenecek.</p>';
    return;
  }
  if (location.hash !== route) return;
  const r = store.state().topics[id];
  $('#lesson', root).innerHTML = md(topic.lesson);
  if (topic.anim?.length) {
    $('#lesson', root).insertAdjacentHTML('beforebegin', `<button class="card hero anim-start" data-anim>
      <span class="play">▶</span><span class="grow"><span class="t">Anlatımı başlat</span><br>
      <span class="s">${topic.anim.length} adımda, kelimeler yerine otururken izle</span></span></button>`);
    $('[data-anim]', root).onclick = () => playLesson(root, topic.anim, {
      title: meta.title,
      onClose: () => topicScreen(root, id),
      onPractice: () => practice(root, meta, topic.ex.map(ex => ({ ex, topic: id })), true),
    });
  }
  root.insertAdjacentHTML('beforeend', `<div style="height:72px"></div>
    <div class="dock"><button class="btn" data-start>Alıştırmaya başla · ${topic.ex.length} soru${r ? ` · en iyi %${r.best}` : ''}</button></div>`);
  $('[data-start]', root).onclick = () => practice(root, meta, topic.ex.map(ex => ({ ex, topic: id })), true);
}

async function practice(root, meta, items, full) {
  const res = await runSession(root, items);
  if (!res) return topicScreen(root, meta.id);
  if (full) store.recordScore('topics', meta.id, res.filter(r => r.ok).length, res.length);
  showResults(root, res, {
    title: meta.title,
    onBack: () => (location.hash = '#/learn'),
    onRetry: wrong => practice(root, meta, wrong, false),
  });
}

async function buildExam(L) {
  const loaded = (await Promise.all(L.topics.map(([id]) => loadTopic(id).then(t => ({ id, t }), () => null)))).filter(Boolean);
  if (!loaded.length) return [];
  const per = Math.floor(EXAM_SIZE / loaded.length);
  let extra = EXAM_SIZE - per * loaded.length;
  const items = [];
  for (const { id, t } of shuffle(loaded)) {
    const k = per + (extra-- > 0 ? 1 : 0);
    items.push(...sample(t.ex, k).map(ex => ({ ex, topic: id })));
  }
  return shuffle(items);
}

export function examScreen(root, lv) {
  const L = level(lv), ex = store.state().exams[L.id];
  root.innerHTML = `<a class="back" href="#/learn">${ICON.back} Öğren</a>
    <header class="hd"><h1>${L.id} Kur Sınavı</h1><p class="sub">${L.name} seviyesinin tüm konularından karışık ${EXAM_SIZE} soru.</p></header>
    <div class="card"><ul style="margin:0;padding-left:20px">
      <li>Sınav sırasında doğru/yanlış gösterilmez.</li>
      <li>Sonunda tüm yanlışlarını açıklamalarıyla görürsün ve hepsi hata defterine eklenir.</li>
      <li>%${PASS} ve üzeri alırsan kuru geçmiş olursun.</li></ul>
      ${ex ? `<p class="muted small" style="margin:10px 0 0">En iyi: %${ex.best} · Son: %${ex.last} · ${ex.n} deneme</p>` : ''}</div>
    <div class="btns"><button class="btn" data-go>Sınava başla</button></div>`;
  $('[data-go]', root).onclick = async e => {
    e.target.disabled = true;
    const items = await buildExam(L);
    if (!items.length) { e.target.disabled = false; return toast('Bu kur için henüz soru yok'); }
    const res = await runSession(root, items, { mode: 'exam' });
    if (!res) return examScreen(root, lv);
    const p = store.recordScore('exams', L.id, res.filter(r => r.ok).length, res.length);
    const weak = {};
    res.filter(r => !r.ok).forEach(r => (weak[r.topic] = (weak[r.topic] || 0) + 1));
    const list = Object.entries(weak).sort((a, b) => b[1] - a[1]);
    const note = `<div class="card" style="margin-top:12px">${p >= PASS
      ? `<b>🎓 Tebrikler! ${L.id} kurunu geçtin.</b>`
      : `<b>Geçme notu %${PASS}.</b> Zayıf konularını çalışıp tekrar dene.`}
      ${list.length ? `<div class="small" style="margin-top:8px">Tekrar etmen gereken konular:</div>
      <ul class="small" style="margin:4px 0 0;padding-left:20px">${list.map(([id, n]) =>
        `<li><a href="#/topic/${id}">${esc(topicMeta(id)?.title || id)}</a> · ${n} yanlış</li>`).join('')}</ul>` : ''}</div>`;
    showResults(root, res, { title: `${L.id} Kur Sınavı`, note, onBack: () => (location.hash = '#/learn') });
  };
}
