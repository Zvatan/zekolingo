export default {
  lesson: `
## Ne kadar eminsin?
Bir şey hakkında tahmin yürütürken ne kadar emin olduğuna göre farklı modal kullanılır.
| Modal | Anlam | Eminlik |
| **must** | -malı, kesin öyle (mantıklı sonuç) | %90+ evet |
| **may / might / could** | belki, olabilir | %30–50 |
| **can't** | olamaz, kesin öyle değil | %90+ hayır |

> She's been working for 12 hours. She **must be** tired. | 12 saattir çalışıyor. Yorgun olmalı.
> He isn't answering. He **might be** asleep. | Cevap vermiyor. Uyuyor olabilir.
> That **can't be** Ali. Ali is in London. | O Ali olamaz. Ali Londra'da.

## must'ın zıttı can't'tir
! Tahminde must'ın olumsuzu **mustn't değil can't**'tir. mustn't "yasak" demektir.
x He mustn't be at home, his car isn't there. => He **can't** be at home.

## Şu an olan şeyler için: be + -ing
> They **must be having** dinner. | Akşam yemeği yiyor olmalılar.
> She **might be working** late. | Geç saate kadar çalışıyor olabilir.

## may / might / could farkı
Üçü de "olabilir" demektir ve çoğu zaman birbirinin yerine kullanılabilir. **might** biraz daha az emin bir tahmin bildirir.
> It **may / might / could** rain later. | Sonra yağmur yağabilir.
! Olumsuzda **couldn't** "olamaz" (can't gibi) anlamına gelir. "Belki değil" demek için **might not / may not** kullanılır: He **might not** come. (Gelmeyebilir.)
`,
  anim: [
    { title: 'Ne kadar eminsin?', tr: [['12 saattir çalışıyor', 'x']],
      note: 'Görmediğin bir şey hakkında tahmin yürütüyorsun...' },
    { tr: [['Yorgun', 'n'], [' olmalı', 'v']], blocks: [['She', 's'], ['must#M', 'v', 'hi', '%90 evet'], ['be tired', 'n']],
      note: 'Güçlü kanıt, mantıklı sonuç → **must**' },
    { tr: [['Yorgun', 'n'], [' olabilir', 'v']], blocks: [['She', 's'], ['might#M', 'v', 'hi', '%50'], ['be tired', 'n']],
      note: 'Emin değilim → **might / may / could**' },
    { tr: [['Yorgun', 'n'], [' olamaz', 'neg']], blocks: [['She', 's'], ["can't#M", 'neg', 'hi', '%90 hayır'], ['be tired', 'n']],
      note: 'Kesinlikle değil → **can\'t**' },
    { title: 'Tuzak: mustn\'t', blocks: [['He', 's'], ["mustn't#M2", 'neg', 'no'], ['be at home', 'n']],
      note: 'Tahminde must\'ın zıttı mustn\'t değildir. mustn\'t = **yasak**...' },
    { blocks: [['He', 's'], ["can't#M2", 'neg', 'ok'], ['be at home', 'n']],
      note: '...doğrusu **can\'t** be.' },
    { title: 'Şu an olan şey için', blocks: [['They', 's'], ['must', 'v'], ['be having', 'v', 'hi'], ['dinner', 'n']],
      note: '**must / might + be + -ing**: "Yemek yiyor olmalılar."' },
  ],
  ex: [
    { t: 'mc', q: "You've been walking all day. You ___ be exhausted.", o: ['must', "can't", 'might not'], a: 0,
      w: { 1: `Bütün gün yürümüş birinin yorgun olması mantıklı → must.`, 2: `Kanıt güçlü, emin bir tahmin → must.` },
      e: `Güçlü kanıt → **must** (kesin öyle).` },
    { t: 'mc', q: "That ___ be her husband. She isn't married.", o: ["can't", "mustn't", 'must'], a: 0,
      w: { 1: `Tahminde must'ın olumsuzu mustn't değil can't'tir.`, 2: `Evli değil, kocası olamaz → can't.` },
      e: `Kesin değil → **can't** (olamaz).` },
    { t: 'mc', q: "I'm not sure where Can is. He ___ be in the library.", o: ['might', 'must', "can't"], a: 0,
      w: { 1: `"Emin değilim" diyor → must çok kesin.`, 2: `"Emin değilim" diyor → might (olabilir).` },
      e: `Emin değil → **might / may / could**.` },
    { t: 'mc', q: "The lights are on. They ___ be at home.", o: ['must', "can't", 'might not'], a: 0,
      w: { 1: `Işıklar açık, yani evde olmaları mantıklı.`, 2: `Işıklar açık → must be (evde olmalılar).` },
      e: `Mantıklı sonuç → **must**.` },
    { t: 'mc', q: 'She ___ come to the party. She has an exam tomorrow.', o: ['might not', "mustn't", "doesn't might"], a: 0,
      w: { 1: `"mustn't" yasak demek. Belki gelmeyecek → might not.`, 2: `Modallar do ile olumsuz yapılmaz.` },
      e: `Belki değil → **might not** (gelmeyebilir).` },
    { t: 'fill', q: "He's not answering his phone. He ___ be driving.", h: 'olabilir (emin değilim)', a: ['might', 'may', 'could'],
      w: { must: `"Olabilir" deniyor, kesinlik yok → might / may / could.`, can: `Tahminde olumlu "can" kullanılmaz → might / may / could.` },
      e: `Olasılık → **might / may / could** be driving.` },
    { t: 'fill', q: "This ___ be the right address. There's no house number 45 on this street.", a: ["can't", 'cannot'],
      w: { "mustn't": `Tahminde must'ın olumsuzu can't'tir.`, "couldn't": `Bu anlamda can't daha doğal.` },
      e: `Olamaz → **can't** be.` },
    { t: 'fill', q: 'They ___ be very rich. They have three houses and a boat.', a: ['must'],
      w: { might: `Kanıt çok güçlü → must daha doğal.`, can: `Tahminde olumlu "can" kullanılmaz → must.` },
      e: `Güçlü kanıt → **must** be rich.` },
    { t: 'order', tr: 'Şaka yapıyor olmalısın!', a: 'You must be joking!', x: ['can'],
      w: { can: `Kalıp: **You must be joking!** (Şaka yapıyor olmalısın!)` }, e: `**You must be joking!**` },
    { t: 'order', tr: 'Bu doğru olamaz.', a: "This can't be true.", x: ["mustn't"],
      w: { "mustn't": `Tahminde "olamaz" → **can't**.` }, e: `This **can't be** true.` },
    { t: 'fix', s: "He mustn't be hungry. He has just eaten.", i: 1, c: "can't",
      e: `Tahminde must'ın olumsuzu can't'tir: He **can't** be hungry.` },
    { t: 'fix', s: "She must is at work. Her car isn't here.", i: 2, c: 'be',
      e: `Modal + yalın fiil: She must **be** at work. ("must is" yanlış)` },
    { t: 'fix', s: "Take an umbrella. It can rain later.", i: 4, c: 'might',
      e: `Gelecekteki belirli bir olasılık için might / may / could kullanılır: It **might** rain later.` },
  ],
};
