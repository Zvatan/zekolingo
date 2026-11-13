// Yazılı konu anlatımı: "## başlık"lara göre numaralı bölüm kartları, içindekiler ve okuma çubuğu.
import { $, $$, esc, inline, plain, md } from './util.js';

const kindOf = t => (/kontrol listesi|özet/i.test(t) ? 'sum' : /sık yapılan hata/i.test(t) ? 'mis' : '');
const shortTitle = t => {
  const s = plain(t).replace(/["“”]/g, '').split(/[:?]/)[0].trim();
  return s.length > 28 ? s.slice(0, 26).trim() + '…' : s;
};

export function lessonHTML(src) {
  let intro = '';
  const sections = [];
  for (const part of String(src).trim().split(/\n(?=## )/)) {
    if (!part.startsWith('## ')) { intro += md(part); continue; }
    const nl = part.indexOf('\n');
    const title = (nl < 0 ? part : part.slice(0, nl)).slice(3).trim().replace(/^\d+\)\s*/, '');
    sections.push({ title, body: nl < 0 ? '' : part.slice(nl + 1), kind: kindOf(title) });
  }
  let n = 0;
  sections.forEach(s => (s.badge = s.kind === 'sum' ? '✓' : s.kind === 'mis' ? '!' : ++n));
  return `<div class="ls-bar" aria-hidden="true"><div class="ls-bar-in"><span class="ls-bar-t"></span>
      <button class="ls-bar-up" type="button">İçindekiler ↑</button></div><i></i></div>
    <nav class="card toc"><div class="toc-h">Bu konuda<span>${sections.length} bölüm</span></div>
      <div class="toc-list">${sections.map((s, i) => `<button type="button" class="toc-i ${s.kind}" data-sec="${i}"><span class="tb">${s.badge}</span>${esc(shortTitle(s.title))}</button>`).join('')}</div></nav>
    ${intro ? `<section class="card ls">${intro}</section>` : ''}
    ${sections.map((s, i) => `<section class="card ls${s.kind ? ' ls-' + s.kind : ''}" id="ls-${i}" data-t="${esc(shortTitle(s.title))}">
      <h2 class="ls-h"><span class="lb">${s.badge}</span><span>${inline(s.title)}</span></h2>${md(s.body)}</section>`).join('')}`;
}

/** İçindekiler bağlantıları, okuma çubuğu ve yana kayan tablo ipuçları. */
export function bindLesson(el) {
  const secs = $$('.ls[id]', el), bar = $('.ls-bar', el), toc = $('.toc', el);
  const offset = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--st')) || 0;
  const go = target => window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset() - 64, behavior: 'smooth' });
  $$('[data-sec]', el).forEach(b => (b.onclick = () => go(secs[+b.dataset.sec])));
  $('.ls-bar-up', el).onclick = () => go(toc);

  $$('.tbl', el).forEach(t => {
    if (t.scrollWidth <= t.clientWidth + 4) return;
    t.classList.add('scrollx');
    t.insertAdjacentHTML('beforebegin', '<div class="scroll-hint">Tabloyu yana kaydır →</div>');
    t.addEventListener('scroll', () => t.classList.toggle('end', t.scrollLeft + t.clientWidth >= t.scrollWidth - 4), { passive: true });
  });

  const onScroll = () => {
    if (!document.contains(el)) return window.removeEventListener('scroll', onScroll);
    const r = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (window.innerHeight - r.top) / (r.height + window.innerHeight * 0.2)));
    let cur = 0;
    secs.forEach((s, i) => { if (s.getBoundingClientRect().top < window.innerHeight * 0.4) cur = i; });
    const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
    if (atEnd && secs.length && secs[secs.length - 1].getBoundingClientRect().top < window.innerHeight) cur = secs.length - 1;
    bar.classList.toggle('on', toc.getBoundingClientRect().bottom < 0 && r.bottom > 120);
    $('i', bar).style.width = `${p * 100}%`;
    $('.ls-bar-t', bar).textContent = secs.length ? `${cur + 1}/${secs.length} · ${secs[cur].dataset.t}` : '';
    $$('.toc-i', el).forEach((b, i) => b.classList.toggle('cur', i === cur));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
