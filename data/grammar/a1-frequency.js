export default {
  lesson: `
## Ne sıklıkla?
| Zarf | Anlam | Sıklık |
| always | her zaman | %100 |
| usually | genellikle | %80 |
| often | sık sık | %60 |
| sometimes | bazen | %40 |
| rarely | nadiren | %10 |
| never | asla, hiç | %0 |

## Cümledeki yeri
### 1) Normal fiillerden ÖNCE
> I **always** get up at 7. | Her zaman 7'de kalkarım.
> She **never** drinks coffee. | O asla kahve içmez.
### 2) be (am / is / are) fiilinden SONRA
> He **is always** late. | O hep geç kalır.
> We **are usually** at home on Sundays. | Pazarları genellikle evde oluruz.
! Kısaca: **be'den sonra, diğer fiillerden önce.**
x I go always to the gym. => I **always go** to the gym.
x She always is happy. => She **is always** happy.

## never zaten olumsuzdur
never cümleyi kendi başına olumsuz yapar. Yanına not ya da don't eklenmez.
x I don't never eat fish. => I **never** eat fish.

## Olumsuz ve soru
> I **don't usually** walk to work. | Genellikle işe yürümem.
> **Do** you **often** go to the cinema? | Sık sık sinemaya gider misin?
> **How often** do you exercise? | Ne sıklıkla spor yaparsın?

## Sıklık ifadeleri (cümle sonunda)
every day (her gün), once a week (haftada bir), twice a month (ayda iki kez), three times a year (yılda üç kez)
> I go swimming **twice a week**. | Haftada iki kez yüzmeye giderim.
`,
  anim: [
    { title: 'Ne sıklıkla?', rows: [[['always', 't', '', '%100'], ['usually', 't', '', '%80'], ['often', 't', '', '%60']], [['sometimes', 't', '', '%40'], ['rarely', 't', '', '%10'], ['never', 't', '', '%0']]],
      note: 'Bunlara **sıklık zarfı** denir.' },
    { title: 'Kural 1: normal fiilden ÖNCE', tr: [['Her zaman', 't'], [' 7\'de kalkarım', 'v']], blocks: [['I', 's'], ['get up', 'v'], ['at 7', 'n']],
      note: '"always" nereye girecek?' },
    { tr: [['Her zaman', 't'], [' 7\'de kalkarım', 'v']], blocks: [['I', 's'], ['always', 't', 'hi'], ['get up', 'v'], ['at 7', 'n']],
      note: 'Özne ile fiilin **arasına**: I **always** get up at 7.' },
    { title: 'Kural 2: be\'den SONRA', tr: [['O', 's'], [' hep', 't'], [' geç kalır', 'v']], blocks: [['He', 's'], ['always#A', 't'], ['is#B', 'v'], ['late', 'n']],
      note: 'be fiilinde (am / is / are) sıra değişir...' },
    { tr: [['O', 's'], [' hep', 't'], [' geç kalır', 'v']], blocks: [['He', 's'], ['is#B', 'v', 'hi'], ['always#A', 't', 'hi'], ['late', 'n']],
      note: '...zarf be\'den **sonra** gelir: He **is always** late.' },
    { title: 'never zaten olumsuz', blocks: [['I', 's'], ["don't", 'neg', 'no'], ['never', 't'], ['eat fish', 'v']],
      note: '"I don\'t never" yanlış...' },
    { blocks: [['I', 's'], ['never', 't', 'ok'], ['eat fish', 'v']],
      note: '...**never** tek başına yeter: I never eat fish.' },
  ],
  ex: [
    { t: 'mc', q: 'Hangisi doğru?', o: ['I always get up early.', 'I get always up early.', 'Always I get up early.'], a: 0,
      w: { 1: `Sıklık zarfı normal fiilden ÖNCE gelir: always get up.`, 2: `Sıklık zarfı cümle başına değil, fiilden önceye gelir.` },
      e: `Normal fiilden **önce**: I **always get** up early.` },
    { t: 'mc', q: 'Hangisi doğru?', o: ['She is never late.', 'She never is late.', 'Never she is late.'], a: 0,
      w: { 1: `be fiilinden SONRA gelir: is never.`, 2: `Sıralama özne + be + never şeklinde olmalı.` },
      e: `be (am / is / are) fiilinden **sonra**: She **is never** late.` },
    { t: 'mc', q: 'I ___ eat fish. I hate it!', o: ['never', 'always', 'usually'], a: 0,
      w: { 1: `Balıktan nefret ettiğini söylüyor, her zaman yemesi mantıksız.`, 2: `Balıktan nefret ettiğini söylüyor, genellikle yemesi mantıksız.` },
      e: `**never** = asla.` },
    { t: 'mc', q: '___ do you go to the gym? Three times a week.', o: ['How often', 'How many', 'How much'], a: 0,
      w: { 1: `How many = kaç tane (sayılabilen isimler için).`, 2: `How much = ne kadar (miktar ya da fiyat).` },
      e: `Sıklık sorusu: **How often** (ne sıklıkla)?` },
    { t: 'mc', q: 'Hangisi doğru?', o: ['I never drink alcohol.', "I don't never drink alcohol.", 'I not never drink alcohol.'], a: 0,
      w: { 1: `never zaten olumsuz, don't eklenmez.`, 2: `never zaten olumsuz, not eklenmez.` },
      e: `**never** tek başına olumsuz anlam verir.` },
    { t: 'fill', q: 'We ___ go to the beach in summer.', h: 'genellikle (%80)', a: ['usually'],
      w: { always: `always = her zaman (%100). İpucu "genellikle" diyor.`, often: `often = sık sık. "genellikle" = usually.` },
      e: `**usually** = genellikle.` },
    { t: 'fill', q: 'He ___ late for work.', h: 'be + never (asla geç kalmaz)', a: ['is never'],
      w: { 'never is': `Sıklık zarfı be'den sonra gelir: is never.`, never: `be fiili eksik: is never.` },
      e: `be + sıklık zarfı: He **is never** late.` },
    { t: 'fill', q: 'I go swimming ___ a week.', h: 'haftada iki kez', a: ['twice', 'two times'],
      w: { two: `"iki kez" = twice (ya da two times).`, second: `"iki kez" = twice.` },
      e: `once (bir kez), **twice** (iki kez), three times (üç kez).` },
    { t: 'fill', q: 'She ___ tired after work.', h: 'be + sometimes (bazen yorgun olur)', a: ['is sometimes'],
      w: { 'sometimes is': `Sıklık zarfı be'den sonra gelir: is sometimes.`, sometimes: `be fiili eksik: is sometimes.` },
      e: `be + sıklık zarfı: She **is sometimes** tired.` },
    { t: 'order', tr: 'Babam her zaman gazete okur.', a: 'My father always reads the newspaper.', x: ['read'],
      w: { read: `"My father" = he → reads.` }, e: `Normal fiilden önce: always **reads**.` },
    { t: 'order', tr: 'Onlar genellikle evdedir.', a: 'They are usually at home.',
      e: `be + usually: They **are usually** at home.` },
    { t: 'order', tr: 'Ne sıklıkla sinemaya gidersin?', a: 'How often do you go to the cinema?', x: ['are'],
      w: { are: `"go" bir fiil → do you go.` }, e: `**How often do you** go to the cinema?` },
    { t: 'fix', s: "I don't never go to bed late.", i: 1, c: '',
      e: `never zaten olumsuz: I **never** go to bed late.` },
    { t: 'fix', s: 'How many do you visit your parents?', i: 1, c: 'often',
      e: `Sıklık sorusu: How **often** do you visit your parents?` },
    { t: 'fix', s: 'She sometimes go shopping on Saturdays.', i: 2, c: 'goes',
      e: `Sıklık zarfı fiilin -s ekini değiştirmez: She sometimes **goes** shopping.` },
    { t: 'mc', q: '"I rarely watch TV." ne demek?', o: ['Nadiren televizyon izlerim.', 'Her zaman televizyon izlerim.', 'Sık sık televizyon izlerim.'], a: 0,
      w: { 1: `"her zaman" = always.`, 2: `"sık sık" = often.` },
      e: `**rarely** = nadiren (neredeyse hiç).` },
  ],
};
