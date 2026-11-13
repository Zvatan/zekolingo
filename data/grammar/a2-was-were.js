export default {
  lesson: `
## to be'nin geçmişi: was / were
"-dım, -dın, -dı" (evdeydim, yorgundun, hastaydı) anlamı **was / were** ile verilir.
| Özne | Geçmiş |
| I / he / she / it | **was** |
| you / we / they | **were** |
> I **was** at home yesterday. | Dün evdeydim.
> They **were** very tired. | Onlar çok yorgundu.
> The film **was** boring. | Film sıkıcıydı.
! Dikkat: I ile **was** kullanılır ("I were" yanlış). you ile her zaman **were** gelir, tekil olsa bile.

## Olumsuz
> I **wasn't** hungry. | Aç değildim.
> We **weren't** at school last Friday. | Geçen cuma okulda değildik.

## Soru ve kısa cevap
> **Were** you at the party? Yes, I **was**. / No, I **wasn't**. | Partide miydin?
> Where **was** she yesterday? | Dün neredeydi?
> How **was** your weekend? | Hafta sonun nasıldı?

## Geçmiş zaman ifadeleri
yesterday, last night / week / year, two days ago, in 2010, when I was a child
> **When I was a child**, I **was** afraid of dogs. | Çocukken köpeklerden korkardım.

## was born
"Doğmak" İngilizcede edilgen bir yapıdır: **I was born** in 1998. ("I born" ya da "I am born" yanlış.)
x I born in Izmir. => I **was born** in Izmir.
x Where you were yesterday? => Where **were you** yesterday?
`,
  ex: [
    { t: 'mc', q: 'I ___ at the cinema last night.', o: ['was', 'were', 'am'], a: 0,
      w: { 1: `I ile were kullanılmaz → was.`, 2: `"last night" geçmişi gösterir → was.` },
      e: `I / he / she / it → **was**.` },
    { t: 'mc', q: 'My parents ___ in Germany last month.', o: ['were', 'was', 'are'], a: 0,
      w: { 1: `"My parents" çoğul → were.`, 2: `"last month" geçmişi gösterir.` },
      e: `you / we / they → **were**.` },
    { t: 'mc', q: '___ you at home yesterday evening?', o: ['Were', 'Was', 'Did'], a: 0,
      w: { 1: `you ile her zaman were kullanılır.`, 2: `"at home" bir yer bildirir, fiil yok → be gerekir: Were you...?` },
      e: `Soru: **Were** you...?` },
    { t: 'mc', q: 'How ___ your holiday?', o: ['was', 'were', 'did'], a: 0,
      w: { 1: `"your holiday" tekil → was.`, 2: `Fiil yok, be gerekir: How was...?` },
      e: `How **was** your holiday? (Tatilin nasıldı?)` },
    { t: 'fill', q: 'It ___ (be) very cold yesterday.', a: ['was'],
      w: { were: `it → was.`, is: `"yesterday" geçmişi gösterir → was.` }, e: `it → **was**.` },
    { t: 'fill', q: 'We ___ (not / be) at school on Monday.', a: ["weren't", 'were not'],
      w: { "wasn't": `we → weren't.`, "didn't": `Fiil yok, be gerekir: weren't.` },
      e: `we → **weren't** (were not).` },
    { t: 'fill', q: 'I ___ born in 1999.', a: ['was'],
      w: { am: `Doğum geçmişte olmuş bir olay → was born.`, were: `I ile was kullanılır.` },
      e: `Doğmak: **was born**.` },
    { t: 'fill', q: '"Were you tired?" "Yes, I ___."', a: ['was'],
      w: { were: `Cevapta özne I → was.`, did: `Soru be ile → Yes, I was.` },
      e: `Were you...? → Yes, I **was**. / No, I **wasn't**.` },
    { t: 'fill', q: 'Where ___ your keys? I found them in the car.', a: ['were'],
      w: { was: `"your keys" çoğul → were.` }, e: `Çoğul → **were**.` },
    { t: 'order', tr: 'Dün neredeydin?', a: 'Where were you yesterday?', x: ['was'],
      w: { was: `you → **were**.` }, e: `**Where were you** yesterday?` },
    { t: 'order', tr: 'Ankara\'da doğdum.', a: 'I was born in Ankara.', x: ['am'],
      w: { am: `Doğum geçmişte → **was** born.` }, e: `I **was born** in Ankara.` },
    { t: 'fix', s: 'I born in a small village.', i: 1, c: 'was born',
      e: `"Doğmak" = **be born**: I **was born** in a small village.` },
    { t: 'fix', s: 'The children was very happy at the party.', i: 2, c: 'were',
      e: `"The children" çoğul → **were**.` },
    { t: 'fix', s: "I didn't hungry, so I didn't eat.", i: 1, c: "wasn't",
      e: `"hungry" sıfattır, olumsuzu be ile yapılır: I **wasn't** hungry.` },
  ],
};
