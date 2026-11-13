// Zaman çizgisi: Geçmiş ── ŞİMDİ ── Gelecek ekseni üzerinde olaylar.
// Konum 0–1 arası: 0 = uzak geçmiş, 0.5 = şimdi, 1 = uzak gelecek.
//   ['dot',   p,    'etiket', rol, 'b']   tek seferlik olay (nokta)
//   ['bar',   a, b, 'etiket', rol, 'b']   devam eden eylem (çubuk)
//   ['bar2',  a, b, 'etiket', rol]        aynı anda süren ikinci eylem (eksenin altında ince çubuk)
//   ['arrow', a, b, 'etiket', rol, 'b']   bir noktadan diğerine uzanan etki (ok)
//   ['rep',   a, b, 'etiket', rol, 'b']   tekrarlanan eylem, alışkanlık (noktalar)
//   ['span',  a, b, 'etiket', rol]        süre parantezi (for / since)
// 'b' verilirse etiket eksenin altına yazılır. Roller anim.js ile aynı: s, v, n, x, neg, q, t.
import { esc } from './util.js';

const X = p => 14 + Math.min(1, Math.max(0, p)) * 292;
// Etiket kenardan taşmasın: yaklaşık genişliğe göre ortalama noktasını içeride tut
const LX = (x, text = '') => { const half = text.length * 3.3 + 4; return Math.min(318 - half, Math.max(half + 2, x)); };
const AXIS = 62;

export function timelineSVG(items = [], animate = true) {
  let k = 0;
  const delay = () => (animate ? ` style="animation-delay:${(0.2 + 0.22 * k++).toFixed(2)}s"` : '');
  const label = (x, text, role, pos) =>
    text ? `<text class="tl-l r-${role}${animate ? ' fade' : ''}" x="${LX(x, text)}" y="${pos === 'b' ? AXIS + 24 : AXIS - 18}" text-anchor="middle"${delay()}>${esc(text)}</text>` : '';
  const out = items.map(it => {
    const [type] = it;
    const isDot = type === 'dot';
    const a = it[1], b = isDot ? it[1] : it[2];
    const [text, role = 'v', pos] = isDot ? it.slice(2) : it.slice(3);
    const x1 = X(a), x2 = X(b), mid = (x1 + x2) / 2, cls = `r-${role}`;
    if (type === 'dot') return `<circle class="tl-dot ${cls}${animate ? ' pop' : ''}" cx="${x1}" cy="${AXIS}" r="7"${delay()}/>` + label(x1, text, role, pos);
    if (type === 'bar') return `<rect class="tl-bar ${cls}${animate ? ' grow' : ''}" x="${x1}" y="${AXIS - 7}" width="${Math.max(4, x2 - x1)}" height="14" rx="7"${delay()}/>` + label(mid, text, role, pos);
    if (type === 'bar2') return `<rect class="tl-bar ${cls}${animate ? ' grow' : ''}" x="${x1}" y="${AXIS + 10}" width="${Math.max(4, x2 - x1)}" height="10" rx="5"${delay()}/>` +
      (text ? `<text class="tl-l r-${role}${animate ? ' fade' : ''}" x="${LX(mid, text)}" y="${AXIS + 36}" text-anchor="middle"${delay()}>${esc(text)}</text>` : '');
    if (type === 'arrow') return `<g class="${cls}${animate ? ' grow' : ''}"${delay()}><line class="tl-arrow" x1="${x1}" y1="${AXIS}" x2="${x2 - 8}" y2="${AXIS}"/><path class="tl-head" d="M${x2 - 10} ${AXIS - 7}L${x2 + 1} ${AXIS}L${x2 - 10} ${AXIS + 7}z"/></g>` + label(mid, text, role, pos);
    if (type === 'rep') {
      const n = 5, dots = Array.from({ length: n }, (_, i) => `<circle class="tl-dot" cx="${x1 + ((x2 - x1) * i) / (n - 1)}" cy="${AXIS}" r="5"/>`).join('');
      return `<g class="${cls}${animate ? ' fade' : ''}"${delay()}>${dots}</g>` + label(mid, text, role, pos);
    }
    if (type === 'span') return `<path class="tl-span ${cls}${animate ? ' grow' : ''}" d="M${x1} ${AXIS - 30}V${AXIS - 36}H${x2}V${AXIS - 30}"${delay()}/>` +
      (text ? `<text class="tl-l r-${role}${animate ? ' fade' : ''}" x="${LX(mid, text)}" y="${AXIS - 42}" text-anchor="middle"${delay()}>${esc(text)}</text>` : '');
    return '';
  }).join('');
  return `<div class="tl"><svg viewBox="0 0 320 120" role="img" aria-label="Zaman çizgisi">
    <line class="tl-axis" x1="6" y1="${AXIS}" x2="306" y2="${AXIS}"/><path class="tl-axis-h" d="M304 ${AXIS - 5}L313 ${AXIS}L304 ${AXIS + 5}z"/>
    <line class="tl-now" x1="160" y1="${AXIS - 30}" x2="160" y2="${AXIS + 12}"/>
    <text class="tl-cap" x="6" y="116">Geçmiş</text><text class="tl-cap now" x="160" y="116" text-anchor="middle">ŞİMDİ</text>
    <text class="tl-cap" x="314" y="116" text-anchor="end">Gelecek</text>${out}</svg></div>`;
}
