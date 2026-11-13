import { $, $$, esc, pct, toast, setVoicePrefs, speak, englishVoices, currentVoice, voicesReady } from '../util.js';
import * as store from '../store.js';
import { LEVELS, PASS } from '../../data/catalog.js';

const seg = (name, cur, opts) => `<div class="seg" data-seg="${name}">${opts.map(([v, l]) =>
  `<button data-v="${v}" class="${String(v) === String(cur) ? 'on' : ''}">${l}</button>`).join('')}</div>`;

export function meScreen(root) {
  const S = store.state();
  const learnedWords = Object.values(S.vocab).filter(w => w.b >= store.LEARNED_BOX).length;
  const readDone = Object.values(S.reading).filter(r => r.best >= 80).length;
  const levels = LEVELS.filter(L => L.topics.length && !L.soon);
  const topicsDone = levels.reduce((n, L) => n + L.topics.filter(([id]) => S.topics[id]?.best >= 80).length, 0);

  root.innerHTML = `<header class="hd"><h1>İlerleme</h1><p class="sub">Tüm veriler sadece bu cihazda saklanır.</p></header>
    <div class="card"><div class="stats">
      <div><b>${topicsDone}</b><span>Konu bitti</span></div><div><b>${learnedWords}</b><span>Kelime öğrenildi</span></div>
      <div><b>${readDone}</b><span>Metin okundu</span></div></div></div>
    <div class="sec">Kurlar</div>
    <div class="list">${levels.map(L => {
      const done = L.topics.filter(([id]) => S.topics[id]?.best >= 80).length, ex = S.exams[L.id];
      return `<div class="card"><div class="row"><div class="grow"><div class="t">${L.id} · ${L.name}</div>
        <div class="s">${done}/${L.topics.length} konu · ${ex ? `sınav en iyi %${ex.best}` : 'sınava girilmedi'}</div>
        <div class="pbar"><i style="width:${pct(done, L.topics.length)}%"></i></div></div>
        ${ex?.best >= PASS ? '<span class="pill ok">Geçti</span>' : ''}</div></div>`;
    }).join('')}</div>

    <div class="sec">Ayarlar</div>
    <div class="card">
      <div class="set-row"><span>Aksan</span>${seg('accent', S.settings.accent, [['en-US', 'Amerikan'], ['en-GB', 'İngiliz']])}</div>
      <div class="set-row"><span>Konuşma hızı</span>${seg('rate', S.settings.rate, [[0.75, 'Yavaş'], [0.9, 'Normal'], [1, 'Hızlı']])}</div>
      <div class="set-row"><span>Ses</span><select class="inp" id="voice" style="width:auto;max-width:65%;font-size:15px;padding:8px 10px"></select></div>
      <p class="small muted" id="voicehelp" style="margin:0"></p>
      <div class="set-row"><span>Oturumda yeni kelime</span>${seg('newWords', S.settings.newWords, [[5, '5'], [8, '8'], [12, '12']])}</div>
    </div>

    <div class="sec">Yedekleme</div>
    <div class="card">
      <p class="small muted" style="margin-top:0">Telefon değiştirirsen ya da uygulamayı silersen ilerlemen kaybolur. Ara sıra yedek al.</p>
      <div class="btns" style="margin-top:8px">
        <button class="btn ghost" data-copy>Yedeği panoya kopyala</button>
        <button class="btn ghost" data-dl>Yedeği dosya olarak indir</button>
        <details><summary class="btn ghost">Yedekten geri yükle</summary>
          <textarea class="inp" id="imp" placeholder="Yedek metnini buraya yapıştır" style="margin-top:10px"></textarea>
          <input type="file" id="impf" accept=".json,application/json,text/plain" style="margin:10px 0">
          <button class="btn" data-imp>Geri yükle</button></details>
      </div></div>
    <div class="btns"><button class="btn line" data-reset>Tüm ilerlemeyi sıfırla</button></div>
    <p class="small muted" style="text-align:center;margin-top:20px">Zekolingo · İngilizce öğrenme uygulaman</p>`;

  const applyVoice = () => { const s = store.state().settings; setVoicePrefs(s.accent, s.rate, s.voiceURI); };
  const fillVoices = () => {
    const sel = $('#voice', root);
    if (!sel) return;
    const vs = englishVoices(), chosen = store.state().settings.voiceURI, cur = currentVoice();
    sel.innerHTML = `<option value="">Otomatik${cur && !chosen ? ` (${esc(cur.name)})` : ''}</option>` +
      vs.map(v => `<option value="${esc(v.voiceURI)}"${v.voiceURI === chosen ? ' selected' : ''}>${esc(v.name)} · ${esc(v.lang)}</option>`).join('');
    $('#voicehelp', root).textContent = vs.length ? '' :
      'Cihazında İngilizce ses bulunamadı. iPhone: Ayarlar > Erişilebilirlik > Seslendirilen İçerik > Sesler > İngilizce bölümünden bir ses indir (ör. Samantha). Windows: Ayarlar > Saat ve dil > Konuşma > Ses ekle.';
  };
  fillVoices();
  voicesReady().then(fillVoices);
  $('#voice', root).onchange = e => {
    store.set(s => (s.settings.voiceURI = e.target.value));
    applyVoice();
    speak('Hello! This is how I sound.');
    fillVoices();
  };

  $$('[data-seg]', root).forEach(g => g.querySelectorAll('button').forEach(b => (b.onclick = () => {
    const name = g.dataset.seg, v = name === 'accent' ? b.dataset.v : +b.dataset.v;
    store.set(s => {
      s.settings[name] = v;
      if (name === 'accent') s.settings.voiceURI = ''; // aksan değişince sesi otomatik seç
    });
    applyVoice();
    g.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    if (name === 'accent') fillVoices();
    if (name !== 'newWords') speak('Hello! This is how I sound.');
  })));

  $('[data-copy]', root).onclick = async () => {
    try { await navigator.clipboard.writeText(store.exportData()); toast('Yedek panoya kopyalandı ✓'); }
    catch { toast('Kopyalanamadı, dosya olarak indirmeyi dene'); }
  };
  $('[data-dl]', root).onclick = () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([store.exportData()], { type: 'application/json' }));
    a.download = `zekolingo-yedek-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.append(a); a.click(); a.remove();
  };
  $('#impf', root).onchange = async e => { const f = e.target.files[0]; if (f) $('#imp', root).value = await f.text(); };
  $('[data-imp]', root).onclick = () => {
    const txt = $('#imp', root).value.trim();
    if (!txt) return toast('Önce yedek metnini yapıştır');
    try {
      store.importData(txt);
      applyVoice();
      toast('Yedek geri yüklendi ✓');
      meScreen(root);
    } catch (e) { toast(e.message || 'Yedek okunamadı'); }
  };
  $('[data-reset]', root).onclick = () => {
    if (!confirm('Tüm ilerleme, hata defteri ve kelime kartları silinecek. Emin misin?')) return;
    store.resetAll();
    toast('Sıfırlandı');
    meScreen(root);
  };
}
