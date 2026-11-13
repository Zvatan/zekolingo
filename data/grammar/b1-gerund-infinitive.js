export default {
  lesson: `
## Fiil + -ing
Şu fiillerden sonra ikinci fiil **-ing** alır:
**avoid, suggest, consider, keep, mind, miss, practise, give up, imagine, can't stand, look forward to**
> I **avoid eating** fast food. | Fast food yemekten kaçınırım.
> He **suggested going** to the cinema. | Sinemaya gitmeyi önerdi.
> I **gave up smoking** last year. | Geçen yıl sigarayı bıraktım.
> I'm **looking forward to seeing** you. | Seni görmeyi dört gözle bekliyorum.
! "look forward **to**" kalıbındaki to bir edattır, bu yüzden -ing gelir: looking forward to **seeing** ("to see" yanlış).

## Fiil + to + yalın fiil
**agree, refuse, manage, offer, afford, seem, pretend, expect, promise, plan, hope, would like**
> She **refused to answer**. | Cevap vermeyi reddetti.
> We **managed to finish** on time. | Zamanında bitirmeyi başardık.
> I can't **afford to buy** a car. | Araba almaya gücüm yetmez.

## Fiil + kişi + to
**want, ask, tell, advise, invite, expect, allow** + kişi + to + fiil
> I **want you to** come. | Gelmeni istiyorum.
> She **asked me to** help her. | Ona yardım etmemi istedi.
x I want that you come. => I want **you to come**.

## make / let + kişi + yalın fiil (to yok!)
> My boss **made me work** late. | Patronum bana geç saate kadar çalıştırdı.
> My parents **let me go** to the party. | Ailem partiye gitmeme izin verdi.
x She let me to use her car. => She let me **use** her car.
`,
  anim: [
    { title: '-ing alanlar', rows: [[['avoid · suggest · consider · keep', 'v']], [['give up · mind · imagine', 'v'], ['+ -ing', 'x', 'hi']]],
      note: 'Bu fiillerden sonra ikinci fiil **-ing** olur.' },
    { blocks: [['He', 's'], ['gave up', 'v'], ['smoking', 'v', 'hi']],
      note: 'Sigarayı **bıraktı**: gave up **smoking**' },
    { title: 'to alanlar', rows: [[['agree · refuse · manage · offer', 'v']], [['afford · pretend · expect', 'v'], ['+ to', 'x', 'hi']]],
      note: 'Bunlardan sonra **to + yalın fiil**.' },
    { title: 'Kişi + to', tr: [['Gelmeni', 'v'], [' istiyorum', 'x']], blocks: [['I', 's'], ['want', 'v'], ['that you come#X', 'v', 'no']],
      note: 'Türkçe gibi "that" ile kurmak yanlış...' },
    { blocks: [['I', 's'], ['want', 'v'], ['you', 'n', 'hi'], ['to come#X', 'v', 'ok']],
      note: '...**want + kişi + to**: I want **you to come**.' },
    { title: 'make / let: to yok', blocks: [['She', 's'], ['let', 'v'], ['me', 'n'], ['to use#U', 'v', 'no'], ['her car', 'n']],
      note: 'make ve let istisnadır...' },
    { blocks: [['She', 's'], ['let', 'v'], ['me', 'n'], ['use#U', 'v', 'ok'], ['her car', 'n']],
      note: '...**make / let + kişi + yalın fiil**.' },
    { title: 'Tuzak: look forward to', blocks: [["I'm looking forward", 'v'], ['to', 'x', 'hi', 'edat!'], ['seeing', 'v', 'hi'], ['you', 'n']],
      note: 'Buradaki **to** bir edat, bu yüzden **-ing** gelir: "to see" değil.' },
  ],
  ex: [
    { t: 'mc', q: 'Would you mind ___ the window?', o: ['opening', 'to open', 'open'], a: 0,
      w: { 1: `"mind" fiilinden sonra -ing gelir.`, 2: `"mind" fiilinden sonra -ing gelir.` },
      e: `mind + **-ing**: Would you mind opening...? (Açar mısın?)` },
    { t: 'mc', q: 'He refused ___ the bill.', o: ['to pay', 'paying', 'pay'], a: 0,
      w: { 1: `"refuse" fiilinden sonra to gelir.`, 2: `to eksik.` },
      e: `refuse + **to** + fiil.` },
    { t: 'mc', q: "I'm looking forward to ___ you again.", o: ['seeing', 'see', 'saw'], a: 0,
      w: { 1: `"look forward to" kalıbındaki to bir edattır, sonrasında -ing gelir.`, 2: `Edattan sonra -ing gelir.` },
      e: `look forward to + **-ing**.` },
    { t: 'mc', q: 'My mother wants ___ a doctor.', o: ['me to become', 'that I become', 'me become'], a: 0,
      w: { 1: `"want that..." yapısı İngilizcede kullanılmaz. Doğru yapı: want + kişi + to.`, 2: `to eksik: want me to become.` },
      e: `want + kişi + **to**: She wants **me to become** a doctor.` },
    { t: 'mc', q: 'The teacher made us ___ the essay again.', o: ['write', 'to write', 'writing'], a: 0,
      w: { 1: `make + kişi + yalın fiil (to yok).`, 2: `make + kişi + yalın fiil.` },
      e: `make + kişi + **yalın fiil**.` },
    { t: 'fill', q: 'She finally managed ___ (pass) her driving test.', a: ['to pass'],
      w: { passing: `"manage" fiilinden sonra to gelir.`, pass: `to eksik: to pass.` },
      e: `manage + **to pass**.` },
    { t: 'fill', q: 'Have you considered ___ (move) abroad?', a: ['moving'],
      w: { 'to move': `"consider" fiilinden sonra -ing gelir.`, moveing: `move → moving (e düşer).` },
      e: `consider + **-ing**.` },
    { t: 'fill', q: 'He asked me ___ (help) him with his homework.', a: ['to help'],
      w: { help: `ask + kişi + to: asked me to help.`, helping: `ask + kişi + to.` },
      e: `ask + kişi + **to help**.` },
    { t: 'fill', q: 'You should give up ___ (eat) so much sugar.', a: ['eating'],
      w: { 'to eat': `"give up" fiilinden sonra -ing gelir.`, eat: `give up + -ing: eating.` },
      e: `give up + **-ing**.` },
    { t: 'order', tr: 'Annem partiye gitmeme izin verdi.', a: 'My mother let me go to the party.', x: ['going'],
      w: { going: `let + kişi + **yalın fiil**: let me **go**.` }, e: `let me **go** (to ya da -ing yok).` },
    { t: 'order', tr: 'Bana gelmemi söyledi.', a: 'She told me to come.', x: ['coming'],
      w: { coming: `tell + kişi + **to** + fiil.` }, e: `She told me **to come**.` },
    { t: 'fix', s: "I'm looking forward to see you.", i: 4, c: 'seeing',
      e: `look forward to + -ing: I'm looking forward to **seeing** you.` },
    { t: 'fix', s: 'My dad let me to drive his car.', i: 4, c: '',
      e: `let + kişi + yalın fiil: My dad let me **drive** his car.` },
    { t: 'fix', s: 'I want you call me tomorrow.', i: 2, c: 'you to',
      e: `want + kişi + to: I want **you to** call me tomorrow.` },
  ],
};
