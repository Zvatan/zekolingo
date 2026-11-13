export default {
  lesson: `
## Hayali, gerçek dışı durumlar
**If + Past Simple, would + yalın fiil**: Şu an ya da gelecekte gerçek olmayan veya olma ihtimali çok düşük durumlar.
> **If** I **had** a lot of money, I **would buy** a house by the sea. | Çok param olsaydı deniz kenarında bir ev alırdım.
> **If** I **lived** in London, I**'d speak** better English. | Londra'da yaşasaydım daha iyi İngilizce konuşurdum.
! Fiil geçmiş zamanda (had, lived) olsa da anlam **şimdi / gelecek** ile ilgilidir. Geçmişten bahsetmez.

## First mü, second mı?
| First Conditional | Second Conditional |
| Gerçekçi, olası | Hayali, olası değil |
| If I **win**, I'**ll** buy a car. (Kazanma şansım var.) | If I **won** the lottery, I'**d** travel the world. (Pek olası değil.) |

## If I were you: tavsiye
Second conditional'da **I / he / she / it** ile **were** kullanılır (günlük dilde was da duyulur).
> **If I were you**, I**'d** talk to her. | Senin yerinde olsam onunla konuşurdum.
> If he **were** taller, he could be a basketball player. | Daha uzun olsaydı basketbolcu olabilirdi.

## would, could, might
- **would**: -ırdı, -erdi (kesin sonuç)
- **could**: -ebilirdi (yapabilme)
- **might**: belki -ırdı (ihtimal)
> If I had more time, I **could** learn the guitar. | Daha çok vaktim olsaydı gitar öğrenebilirdim.
x If I would have money, I would buy it. => If I **had** money, I would buy it.
x If I was you, I wouldn't go. => If I **were** you, I wouldn't go. (daha doğru)
`,
  anim: [
    { title: 'Gerçek olabilir', blocks: [['If', 'q'], ['I', 's'], ['win,#W', 'v'], ["I'll#R", 'x'], ['buy a car', 'v']],
      note: 'Kazanma şansım var → First Conditional (will)' },
    { title: 'Hayal: pek olası değil', tr: [['Piyango çıksa', 'v'], [' dünyayı gezerdim', 'x']], blocks: [['If', 'q'], ['I', 's'], ['won#W', 'v', 'hi', 'geçmiş biçim'], ["I'd#R", 'x', 'hi', 'would'], ['travel the world', 'v']],
      note: '**If + Past Simple, would + fiil**. Fiil geçmiş biçimde ama anlam **şimdi / gelecek**!' },
    { title: 'Bugünkü gerçek dışı durum', tr: [['Param', 'n'], [' olsaydı', 'v']], blocks: [['If', 'q'], ['I', 's'], ['had', 'v', 'hi'], ['money,', 'n'], ['I would buy it', 'x']],
      note: 'Şu an param **yok**, hayal ediyorum.' },
    { title: 'Tavsiye kalıbı', blocks: [['If', 'q'], ['I', 's'], ['were#B', 'v', 'hi'], ['you,', 'n'], ["I'd talk to her", 'x']],
      note: '"Senin yerinde olsam" → **If I were you**. I ile bile **were**.' },
    { title: 'Sık hata', blocks: [['If', 'q'], ['I', 's'], ['would have#H', 'v', 'no'], ['time,', 'n'], ['I would help', 'x']],
      note: 'if\'li tarafa would koyulmaz...' },
    { blocks: [['If', 'q'], ['I', 's'], ['had#H', 'v', 'ok'], ['time,', 'n'], ['I would help', 'x']],
      note: '...if tarafı **Past Simple**, sonuç tarafı **would**.' },
    { title: 'would · could · might', rows: [[['I would', 'x', 'hi'], ['-ırdım', 'n']], [['I could', 'x', 'hi'], ['-ebilirdim', 'n']], [['I might', 'x', 'hi'], ['belki -ırdım', 'n']]],
      note: 'Sonuç tarafında anlama göre seçilir.' },
  ],
  ex: [
    { t: 'mc', q: 'If I ___ rich, I would travel all over the world.', o: ['were', 'am', 'will be'], a: 0,
      w: { 1: `Hayali bir durum (zengin değilim) → Past Simple: were.`, 2: `if'li bölümde will kullanılmaz.` },
      e: `Second Conditional: **If + Past Simple** (I were).` },
    { t: 'mc', q: 'If she had a car, she ___ drive to work.', o: ['would', 'will', 'can'], a: 0,
      w: { 1: `Hayali durum (arabası yok) → would.`, 2: `Hayali durum → would / could.` },
      e: `Sonuç → **would** + yalın fiil.` },
    { t: 'mc', q: "If I ___ you, I'd apologise to him.", o: ['were', 'am', 'would be'], a: 0,
      w: { 1: `Kalıp: If I were you (senin yerinde olsam).`, 2: `if'li bölümde would kullanılmaz.` },
      e: `Tavsiye kalıbı: **If I were you**, I'd...` },
    { t: 'mc', q: "If it's sunny tomorrow, we ___ to the beach.", o: ["'ll go", "'d go", 'went'], a: 0,
      w: { 1: `Yarın güneşli olması gerçek bir ihtimal → First Conditional: will.`, 2: `Gerçekçi gelecek → will go.` },
      e: `Gerçekçi ihtimal → **First Conditional** (will).` },
    { t: 'mc', q: 'What would you do if you ___ the lottery?', o: ['won', 'win', 'would win'], a: 0,
      w: { 1: `Hayali durum → Past Simple: won.`, 2: `if'li bölümde would kullanılmaz.` },
      e: `Hayali durum → **if you won**.` },
    { t: 'fill', q: 'If I ___ (know) his number, I would call him.', a: ['knew'],
      w: { know: `Hayali durum (numarasını bilmiyorum) → Past Simple: knew.`, 'would know': `if'li bölümde would kullanılmaz.` },
      e: `If I **knew** his number...` },
    { t: 'fill', q: "If we lived closer, we ___ (see) each other more often.", a: ["'d see", 'would see', 'could see'],
      w: { 'will see': `Hayali durum → would see.`, saw: `Sonuç bölümünde would gerekir.` },
      e: `Sonuç → **would see**.` },
    { t: 'fill', q: "If I had more free time, I ___ learn to play the piano.", h: '-ebilirdim', a: ['could'],
      w: { can: `Hayali durum → could.`, would: `"-ebilirdim" (yapabilme) → could.` },
      e: `Yapabilme + hayali → **could**.` },
    { t: 'fill', q: "He wouldn't be so tired if he ___ (go) to bed earlier.", a: ['went'],
      w: { goes: `Hayali durum → Past Simple: went.`, 'would go': `if'li bölümde would kullanılmaz.` },
      e: `if he **went** to bed earlier.` },
    { t: 'order', tr: 'Senin yerinde olsam o işi kabul ederdim.', a: "If I were you, I'd accept that job.", x: ['was'],
      w: { was: `Tavsiye kalıbında **were** kullanılır: If I were you.` }, e: `**If I were you, I'd** accept that job.` },
    { t: 'order', tr: 'Arabam olsaydı seni götürürdüm.', a: "If I had a car, I'd take you.", x: ['will'],
      w: { will: `Hayali durum → **would** ('d).` }, e: `If I **had** a car, I**'d** take you.` },
    { t: 'fix', s: 'If I have more money, I would buy a new car.', i: 2, c: 'had',
      e: `Sonuç "would" ile verilmiş, yani hayali bir durum → if'li bölüm Past Simple: If I **had** more money...` },
    { t: 'fix', s: 'If I won the lottery, I will buy a big house.', i: 6, c: 'would',
      e: `Hayali durum (won) → sonuç **would**: I would buy a big house.` },
    { t: 'fix', s: 'If he spoke English, he can get a better job.', i: 5, c: 'could',
      e: `Second Conditional sonucu → **could** get a better job.` },
  ],
};
