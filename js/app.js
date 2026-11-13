import { $, $$, speak, setVoicePrefs, toast, ICON } from './util.js';
import * as store from './store.js';
import { learnScreen, topicScreen, examScreen } from './screens/learn.js';
import { vocabScreen } from './screens/vocab.js';
import { readList, readScreen } from './screens/read.js';
import { mistakesScreen } from './screens/mistakes.js';
import { meScreen } from './screens/me.js';

const app = $('#app');

const TABS = [
  ['#/learn', 'Öğren', ICON.learn, /^#\/(learn|topic|exam)/],
  ['#/vocab', 'Kelime', ICON.vocab, /^#\/vocab/],
  ['#/read', 'Okuma', ICON.read, /^#\/read/],
  ['#/mistakes', 'Hatalar', ICON.mistakes, /^#\/mistakes/],
  ['#/me', 'İlerleme', ICON.me, /^#\/me/],
];

const ROUTES = [
  [/^#\/learn$/, () => learnScreen(app)],
  [/^#\/topic\/([\w-]+)$/, id => topicScreen(app, id)],
  [/^#\/exam\/(\w+)$/, lv => examScreen(app, lv)],
  [/^#\/vocab$/, () => vocabScreen(app)],
  [/^#\/read$/, () => readList(app)],
  [/^#\/read\/(\w+)\/([\w-]+)$/, (lv, id) => readScreen(app, lv, id)],
  [/^#\/mistakes$/, () => mistakesScreen(app)],
  [/^#\/me$/, () => meScreen(app)],
];

function renderTabs(hash) {
  const n = store.mistakeCount();
  $('#tabbar').innerHTML = TABS.map(([href, label, icon, re]) =>
    `<a href="${href}" class="${re.test(hash) ? 'on' : ''}">${icon}${label}${href === '#/mistakes' && n ? `<span class="badge">${n > 99 ? '99+' : n}</span>` : ''}</a>`).join('');
}

function route() {
  const hash = location.hash || '#/learn';
  document.body.classList.remove('session');
  $$('.sheet, .pop').forEach(el => el.remove());
  window.speechSynthesis?.cancel();
  renderTabs(hash);
  window.scrollTo(0, 0);
  for (const [re, fn] of ROUTES) {
    const m = hash.match(re);
    if (m) {
      Promise.resolve(fn(...m.slice(1))).catch(err => {
        console.error(err);
        app.innerHTML = `<div class="card empty"><div class="big">😕</div><p>Bir şeyler ters gitti.<br><span class="small muted">${String(err.message || err)}</span></p><a class="btn" href="#/learn">Ana sayfa</a></div>`;
      });
      return;
    }
  }
  location.replace('#/learn');
}

// Örnek cümlelerdeki hoparlör butonları
document.addEventListener('click', e => {
  const b = e.target.closest('[data-say]');
  if (b) { e.stopPropagation(); speak(b.dataset.say); }
}, true);

// Oturum sırasında hata sayısı rozetini güncel tut
window.addEventListener('hashchange', route);
window.addEventListener('pageshow', () => renderTabs(location.hash || '#/learn'));
document.addEventListener('visibilitychange', () => { if (!document.hidden && !document.body.classList.contains('session')) renderTabs(location.hash); });

const { accent, rate, voiceURI } = store.state().settings;
setVoicePrefs(accent, rate, voiceURI);
route();

// Çevrimdışı çalışma (yalnızca https üzerinde, yerelde geliştirirken kapalı)
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  const hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.register('sw.js').catch(console.warn);
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!hadController) return;
    if (document.body.classList.contains('session')) toast('Yeni sürüm hazır. Uygulamayı yeniden açınca yüklenecek.', 4000);
    else location.reload();
  });
}
