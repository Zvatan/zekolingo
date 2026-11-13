export default {
  lesson: `
## Phrasal verb nedir?
Bir fiil ile bir edat ya da zarf (up, down, on, off, in, out, away, back, over...) birleşerek **yeni bir anlam** oluşturabilir. Bu anlam çoğu zaman parçalardan tahmin edilemez:
| Fiil | + | Phrasal verb | Anlam |
| give (vermek) | up | **give up** | vazgeçmek, bırakmak |
| look (bakmak) | after | **look after** | bakmak, ilgilenmek |
| turn (çevirmek) | down | **turn down** | reddetmek; sesini kısmak |
| run (koşmak) | out of | **run out of** | -i bitmek, tükenmek |
Günlük İngilizcede çok sık kullanılırlar. Kalıp olarak, **örnek cümleyle birlikte** öğrenmek en iyisidir.

## En sık kullanılanlar
### Günlük hayat
| Phrasal verb | Anlam | Örnek |
| wake up | uyanmak | I **woke up** at 6. |
| get up | kalkmak (yataktan) | I **get up** at 7. |
| put on | giymek, takmak | **Put on** your coat. It's cold. |
| take off | çıkarmak (giysi); havalanmak (uçak) | **Take off** your shoes. / The plane **took off**. |
| turn on / off | açmak / kapatmak (cihaz, ışık) | **Turn off** the lights. |
| turn up / down | sesini açmak / kısmak | **Turn down** the music! |
| sit down / stand up | oturmak / ayağa kalkmak | Please **sit down**. |
| go out | dışarı çıkmak, eğlenmeye çıkmak | We **went out** last night. |
| come back / go back | geri gelmek / geri dönmek | When are you **coming back**? |
| eat out | dışarıda yemek | Let's **eat out** tonight. |
### Bulmak, aramak, öğrenmek
| Phrasal verb | Anlam | Örnek |
| look for | aramak | I'm **looking for** my keys. |
| find out | öğrenmek, ortaya çıkarmak | I **found out** the truth. |
| look up | (sözlükte, internette) bakmak | **Look up** the word in a dictionary. |
| fill in | doldurmak (form) | Please **fill in** this form. |
### İlişkiler ve duygular
| Phrasal verb | Anlam | Örnek |
| get on (well) with | iyi geçinmek | I **get on well with** my sister. |
| look after | bakmak, ilgilenmek | She **looks after** her grandmother. |
| look forward to | dört gözle beklemek | I'm **looking forward to** the weekend. |
| give up | bırakmak, vazgeçmek | Don't **give up**! / He **gave up** smoking. |
| break up (with) | ayrılmak (sevgili) | They **broke up** last year. |
| grow up | büyümek (insan) | I **grew up** in a village. |
### İş, para, plan
| Phrasal verb | Anlam | Örnek |
| set up | kurmak (şirket) | She **set up** her own company. |
| run out of | -i tükenmek | We've **run out of** milk. |
| pick up | almak (birini arabayla); yerden almak | I'll **pick** you **up** at 8. |
| call back | geri aramak | I'll **call** you **back** later. |
| put off | ertelemek | Don't **put off** your homework. |
| turn down | reddetmek | He **turned down** the job offer. |

## Nesnenin yeri: ayrılabilen ve ayrılmayan
### Ayrılabilenler (turn off, put on, pick up, fill in, look up...)
Nesne bir **isimse** ortaya da sona da gelebilir:
> Turn off **the TV**. = Turn **the TV** off.
Nesne bir **zamirse** (it, them, him, her...) **mutlaka ortaya** gelir:
> Turn **it** off. ("Turn off it" yanlış)
> Pick **me** up at 8. ("Pick up me" yanlış)
### Ayrılmayanlar (look for, look after, get on with, run out of...)
Fiil ve parçası **hep bitişik** kalır, nesne sona gelir:
> I'm looking **for it**. ("looking it for" yanlış)
> She looks **after them**.

## Nesne almayanlar
Bazı phrasal verb'lerin nesnesi yoktur: wake up, get up, go out, sit down, grow up, break up, give up (tek başına)
> I **woke up** late. / The plane **took off**.

## Kontrol listesi
- Anlamı parçalardan tahmin etme, kalıp olarak öğren.
- Nesne zamirse → **ortaya**: turn **it** off
- look for / look after / get on with → **ayrılmaz**
`,
  exExtra: [
    { t: 'mc', q: 'He ___ the job offer because the salary was too low.', o: ['turned down', 'turned off', 'put off'], a: 0,
      w: { 1: `"turn off" = kapatmak (cihaz).`, 2: `"put off" = ertelemek.` },
      e: `**turn down** = reddetmek.` },
    { t: 'mc', q: "Don't ___ your homework until tomorrow. Do it now!", o: ['put off', 'put on', 'take off'], a: 0,
      w: { 1: `"put on" = giymek.`, 2: `"take off" = çıkarmak.` },
      e: `**put off** = ertelemek.` },
    { t: 'mc', q: 'Hangisi doğru?', o: ["I'll pick you up at 8.", "I'll pick up you at 8.", "I'll pick you at 8 up."], a: 0,
      w: { 1: `Zamir (you) ortaya gelir: pick you up.`, 2: `up, zamirden hemen sonra gelir.` },
      e: `Zamir nesne → **ortaya**: pick **you** up.` },
    { t: 'fill', q: 'I grew ___ in a small village near the sea.', a: ['up'],
      w: { in: `"büyümek" = grow up.` }, e: `**grow up** = büyümek (insan).` },
    { t: 'fill', q: "If you don't know a word, look it ___ in the dictionary.", a: ['up'],
      w: { for: `"look for" = aramak (kayıp eşya). Sözlükte bakmak → look up.`, at: `Sözlükte bakmak → look up.` },
      e: `**look up** = sözlükte / internette bakmak.` },
    { t: 'order', tr: 'Çok gürültülü. Lütfen sesini kıs (onun).', a: "It's too loud. Please turn it down.",
      e: `Zamir (it) ortaya gelir: turn **it** down.` },
  ],
};
