export default {
  lesson: `
## Phrasal verb nedir?
Fiil + edat/zarf (up, down, on, off, out, away, back...) birleşip **yeni bir anlam** oluşturur. Anlam çoğu zaman parçalardan tahmin edilemez, bu yüzden kalıp olarak öğrenilir.
> **give** (vermek) + **up** → **give up** (bırakmak, vazgeçmek)
> **look** (bakmak) + **after** → **look after** (bakmak, ilgilenmek)

## En sık kullanılanlar
| Phrasal verb | Anlam | Örnek |
| get up | kalkmak (yataktan) | I **get up** at 7. |
| wake up | uyanmak | I **woke up** late. |
| turn on / off | açmak / kapatmak (cihaz) | **Turn off** the TV. |
| look for | aramak | I'm **looking for** my keys. |
| look after | bakmak, ilgilenmek | She **looks after** her grandmother. |
| look forward to | dört gözle beklemek | I'm **looking forward to** the holiday. |
| give up | bırakmak, vazgeçmek | He **gave up** smoking. |
| find out | öğrenmek, ortaya çıkarmak | I **found out** the truth. |
| put on / take off | giymek / çıkarmak | **Put on** your coat. / **Take off** your shoes. |
| fill in | doldurmak (form) | **Fill in** this form, please. |
| run out of | -i bitmek, tükenmek | We've **run out of** milk. |
| get on with | iyi geçinmek | I **get on** well **with** my sister. |
| set up | kurmak (şirket) | She **set up** her own company. |
| come back | geri gelmek | When are you **coming back**? |

## Nesnenin yeri
Ayrılabilen phrasal verb'lerde nesne ortaya da sona da gelebilir. Ama nesne **zamir** (it, them, him...) ise **mutlaka ortaya** gelir.
> Turn **the TV** off. = Turn off **the TV**.
> Turn **it** off. ("Turn off it" yanlış.)
x I took off them. => I took **them** off.
! Ayrılmayanlar (look for, look after, get on with) her zaman bitişik kalır: I'm looking **for it**.
`,
  ex: [
    { t: 'mc', q: "It's dark in here. Can you ___ the light?", o: ['turn on', 'turn off', 'turn up'], a: 0,
      w: { 1: `Karanlıkta ışık açılır, kapatılmaz.`, 2: `"turn up" = sesi açmak, ortaya çıkmak.` },
      e: `**turn on** = açmak (cihaz, ışık).` },
    { t: 'mc', q: "I'm ___ my glasses. Have you seen them?", o: ['looking for', 'looking after', 'looking at'], a: 0,
      w: { 1: `"look after" = bakmak, ilgilenmek (çocuk, hasta).`, 2: `"look at" = bir şeye bakmak. Kayıp eşya → look for.` },
      e: `**look for** = aramak.` },
    { t: 'mc', q: 'We have ___ of sugar. Can you buy some?', o: ['run out', 'run away', 'run into'], a: 0,
      w: { 1: `"run away" = kaçmak.`, 2: `"run into" = birine rastlamak.` },
      e: `**run out of** = tükenmek, bitmek.` },
    { t: 'mc', q: "Don't ___! You can do it!", o: ['give up', 'give back', 'give in'], a: 0,
      w: { 1: `"give back" = geri vermek.`, 2: `"give in" = boyun eğmek. Cesaretlendirmede "Don't give up!" kullanılır.` },
      e: `**give up** = vazgeçmek, pes etmek.` },
    { t: 'mc', q: "Hangisi doğru?", o: ['Take them off.', 'Take off them.', 'Take of them.'], a: 0,
      w: { 1: `Nesne zamir (them) ise ortaya gelir: take them off.`, 2: `"off" ile "of" farklıdır ve zamir ortaya gelir.` },
      e: `Zamir nesne **ortaya** gelir: take **them** off.` },
    { t: 'fill', q: 'Please ___ in this form with your name and address.', a: ['fill'],
      w: { full: `"fill in" = doldurmak. full = dolu.`, write: `Form doldurmak: fill in.` },
      e: `**fill in** a form = form doldurmak.` },
    { t: 'fill', q: 'Who looks ___ your children when you are at work?', a: ['after'],
      w: { for: `"look for" = aramak. Bakmak, ilgilenmek → look after.`, at: `"look at" = bir şeye bakmak. İlgilenmek → look after.` },
      e: `**look after** = bakmak, ilgilenmek.` },
    { t: 'fill', q: 'I get ___ well with my colleagues.', a: ['on'],
      w: { up: `"get up" = kalkmak. İyi geçinmek → get on with.`, along: `"get along with" da doğru ama burada kalıp "get on well with".` },
      e: `**get on (well) with** = iyi geçinmek.` },
    { t: 'fill', q: 'I need to find ___ what time the train leaves.', a: ['out'],
      w: { about: `Kalıp: find out (öğrenmek).` }, e: `**find out** = öğrenmek, ortaya çıkarmak.` },
    { t: 'order', tr: 'Ayakkabılarını çıkar lütfen.', a: 'Take off your shoes, please.', x: ['put'],
      w: { put: `"put on" = giymek. Çıkarmak → **take off**.` }, e: `**Take off** your shoes, please.` },
    { t: 'order', tr: 'Onu kapat (televizyonu).', a: 'Turn it off.', x: ['on'],
      w: { on: `Kapatmak → **off**. "turn on" = açmak.` }, e: `Turn **it** off. (zamir ortada)` },
    { t: 'fix', s: "I can't find my phone. Can you help me look after it?", i: 10, c: 'for',
      e: `Kaybolan bir şeyi aramak: look **for** it.` },
    { t: 'fix', s: 'It is cold. Put off your jacket.', i: 4, c: 'on',
      e: `Soğukta ceket giyilir: Put **on** your jacket. (put off = ertelemek)` },
    { t: 'fix', s: 'He set down his own company in 2015.', i: 2, c: 'up',
      e: `Şirket kurmak: set **up** a company.` },
  ],
};
