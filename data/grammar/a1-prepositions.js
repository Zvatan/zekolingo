export default {
  lesson: `
## Zaman: at / on / in
| Edat | Ne ile kullanılır? | Örnek |
| **at** | saatler, belirli anlar | at 7 o'clock, at noon, at night, at the weekend |
| **on** | günler ve tarihler | on Monday, on 5 May, on my birthday |
| **in** | ay, yıl, mevsim, gün dilimi | in June, in 2024, in winter, in the morning |
> The class starts **at** 9. | Ders 9'da başlıyor.
> I was born **on** 15 March. | 15 Mart'ta doğdum.
> We go on holiday **in** August. | Ağustosta tatile gideriz.
! Dikkat: **in** the morning / afternoon / evening, ama **at** night. Gün ve dilim birlikteyse **on**: **on** Monday morning.
! next, last, every, this ile edat kullanılmaz: **next** week, **every** day. "on next Monday" yanlıştır.

## Yer: in / on / at
| Edat | Anlam | Örnek |
| **in** | içinde (kapalı alan, şehir, ülke) | in the box, in the kitchen, in Istanbul |
| **on** | üstünde (yüzey) | on the table, on the wall, on the floor |
| **at** | bir noktada, adreste, etkinlikte | at the door, at the bus stop, at work, at home |
> The keys are **in** my bag. | Anahtarlar çantamda.
> There is a picture **on** the wall. | Duvarda bir resim var.
> I'm **at** home. | Evdeyim.
! Türkçedeki **-de / -da** eki bu üç edatın hepsine karşılık gelebilir: Ankara'da → **in** Ankara, masada → **on** the table, evde → **at** home.

## Sık yapılan hatalar
x I live at Istanbul. => I live **in** Istanbul.
x See you in Monday. => See you **on** Monday.
x The meeting is on 3 o'clock. => The meeting is **at** 3 o'clock.
x in the night => **at** night
`,
  anim: [
    { title: 'Türkçede tek ek: -de / -da', tr: [['evde', 'n'], [' · masada', 'n'], [' · Ankara\'da', 'n']],
      note: 'Türkçede hepsi aynı ek. İngilizcede ise **üç farklı edat** var: in, on, at.' },
    { title: 'in: içinde', tr: [['Ankara', 'n'], ['\'da', 't']], blocks: [['in', 't', 'hi', 'içinde'], ['Ankara', 'n']],
      note: 'Şehir, ülke, kapalı alan → **in** (in the box, in the kitchen)' },
    { title: 'on: üstünde', tr: [['masa', 'n'], ['da', 't']], blocks: [['on', 't', 'hi', 'üstünde'], ['the table', 'n']],
      note: 'Bir yüzeyin üstü → **on** (on the wall, on the floor)' },
    { title: 'at: bir noktada', tr: [['ev', 'n'], ['de', 't']], blocks: [['at', 't', 'hi', 'noktada'], ['home', 'n']],
      note: 'Belirli bir nokta, adres → **at** (at home, at work, at the bus stop)' },
    { title: 'Zaman: büyükten küçüğe', rows: [[['in', 't', 'hi'], ['June · 2024 · summer', 'n']], [['on', 't', 'hi'], ['Monday · 5 May', 'n']], [['at', 't', 'hi'], ['7 o\'clock · night', 'n']]],
      note: '**in** ay, yıl, mevsim · **on** gün, tarih · **at** saat' },
    { title: 'Dikkat', rows: [[['in', 't'], ['the morning', 'n']], [['at', 't', 'hi'], ['night', 'n']]],
      note: 'in the morning / evening, ama **at night**.' },
    { title: 'Edat yok!', blocks: [['See you', 'v'], ['on', 't', 'no'], ['next Monday', 'n']],
      note: 'next, last, every, this ile edat kullanılmaz...' },
    { blocks: [['See you', 'v'], ['next Monday', 'n', 'ok']],
      note: '...doğrusu: See you **next Monday**.' },
  ],
  ex: [
    { t: 'mc', q: "The film starts ___ 8 o'clock.", o: ['at', 'on', 'in'], a: 0,
      w: { 1: `on günler ve tarihler için kullanılır.`, 2: `in ay, yıl ve mevsimler için kullanılır.` },
      e: `Saatler → **at**.` },
    { t: 'mc', q: 'My birthday is ___ June.', o: ['in', 'on', 'at'], a: 0,
      w: { 1: `on belirli bir gün ya da tarih için kullanılır (on 5 June). Sadece ay varsa in.`, 2: `at saatler için kullanılır.` },
      e: `Aylar → **in** June.` },
    { t: 'mc', q: 'I have English lessons ___ Tuesday.', o: ['on', 'in', 'at'], a: 0,
      w: { 1: `Günlerle in kullanılmaz.`, 2: `at saatler için kullanılır.` },
      e: `Günler → **on** Tuesday.` },
    { t: 'mc', q: 'I usually read ___ night.', o: ['at', 'in', 'on'], a: 0,
      w: { 1: `in the morning / in the evening denir ama gece için **at night**.`, 2: `on günler için kullanılır.` },
      e: `İstisna: **at night** (ama in the morning, in the evening).` },
    { t: 'mc', q: 'Your phone is ___ the table.', o: ['on', 'in', 'at'], a: 0,
      w: { 1: `Telefon masanın içinde değil, üstünde → on.`, 2: `Bir yüzeyin üstü için on kullanılır.` },
      e: `Yüzeyin üstü → **on**.` },
    { t: 'mc', q: 'She lives ___ London.', o: ['in', 'at', 'on'], a: 0,
      w: { 1: `Şehir ve ülkelerle in kullanılır.`, 2: `Şehir ve ülkelerle in kullanılır.` },
      e: `Şehir, ülke → **in**.` },
    { t: 'fill', q: "I'm not at work today. I'm ___ home.", a: ['at'],
      w: { in: `Kalıp: **at home** (evde).` }, e: `Kalıplar: **at** home, **at** work, **at** school.` },
    { t: 'fill', q: 'We have a party ___ Saturday evening.', a: ['on'],
      w: { in: `Gün ve gün dilimi birlikteyse on kullanılır: on Saturday evening.`, at: `Gün varsa on kullanılır.` },
      e: `Gün + gün dilimi → **on** Saturday evening.` },
    { t: 'fill', q: 'The milk is ___ the fridge.', a: ['in'],
      w: { on: `Süt buzdolabının üstünde değil, içinde → in.`, at: `Bir şeyin içi için in kullanılır.` },
      e: `Kapalı bir şeyin içi → **in**.` },
    { t: 'fill', q: 'I was born ___ 2001.', a: ['in'],
      w: { on: `Yıllarla in kullanılır.`, at: `Yıllarla in kullanılır.` }, e: `Yıllar → **in** 2001.` },
    { t: 'fill', q: 'Wait for me ___ the bus stop.', a: ['at'],
      w: { in: `Otobüs durağı bir nokta → at.`, on: `Belirli bir nokta için at kullanılır.` },
      e: `Belirli bir nokta → **at** the bus stop.` },
    { t: 'order', tr: 'Pazartesi sabahları yüzerim.', a: 'I swim on Monday mornings.', x: ['in'],
      w: { in: `Gün ve gün dilimi birlikteyse **on** kullanılır.` }, e: `**on** Monday mornings.` },
    { t: 'fix', s: 'See you in Friday!', i: 2, c: 'on',
      e: `Günler → **on** Friday.` },
    { t: 'fix', s: 'I live at Izmir with my family.', i: 2, c: 'in',
      e: `Şehir → **in** Izmir.` },
    { t: 'fix', s: 'I see my grandmother on every Sunday.', i: 4, c: '',
      e: `every / next / last / this ile edat kullanılmaz: I see my grandmother **every Sunday**.` },
    { t: 'mc', q: 'Hangisi doğru?', o: ['in the morning', 'on the morning', 'at the morning'], a: 0,
      w: { 1: `on sadece belirli bir gün varsa kullanılır: on Monday morning.`, 2: `at sadece night ile kullanılır: at night.` },
      e: `**in** the morning / afternoon / evening.` },
  ],
};
