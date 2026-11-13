export default {
  lesson: `
## Sahiplik: have / has
"Benim ... var" demek için **have** kullanılır. He / she / it ile **has** olur.
| Özne | Fiil |
| I / you / we / they | have |
| he / she / it | has |
> I **have** a brother. | Bir erkek kardeşim var.
> She **has** blue eyes. | Onun mavi gözleri var.
> We **have** a big house. | Büyük bir evimiz var.

## have got (İngiliz İngilizcesi)
Özellikle İngiltere'de **have got / has got** da kullanılır. Anlamı aynıdır.
> I**'ve got** a car. | Bir arabam var.
> He**'s got** two children. | Onun iki çocuğu var.
! Buradaki **He's got** = He **has** got demektir, is değil.

## Olumsuz ve soru
İki yol var ve bunlar **karıştırılmamalı**:
| | have (do ile) | have got |
| Olumsuz | I don't have / She doesn't have | I haven't got / She hasn't got |
| Soru | Do you have...? / Does he have...? | Have you got...? / Has he got...? |
| Kısa cevap | Yes, I do. / No, he doesn't. | Yes, I have. / No, he hasn't. |
! does / doesn't'tan sonra **has değil have** gelir: Does she **have**...? She doesn't **have**...
x She doesn't has a car. => She doesn't **have** a car.
x Do you have got a pen? => **Have** you got a pen? ya da **Do** you **have** a pen?

## have ile kalıplar
have breakfast (kahvaltı yapmak), have a shower (duş almak), have a good time (iyi vakit geçirmek)
! Bu kalıplarda have got kullanılmaz: I have breakfast at 8. "I've got breakfast" yanlıştır.
`,
  ex: [
    { t: 'mc', q: 'My sister ___ long hair.', o: ['have', 'has', 'is'], a: 1,
      w: { 0: `"My sister" = she → has.`, 2: `"Saçı var" bir sahiplik bildirir → has.` },
      e: `he / she / it → **has**.` },
    { t: 'mc', q: 'We ___ a dog and two cats.', o: ['have', 'has', 'are'], a: 0,
      w: { 1: `"has" sadece he / she / it ile kullanılır.`, 2: `Sahiplik have ile anlatılır.` },
      e: `I / you / we / they → **have**.` },
    { t: 'mc', q: 'She ___ got a new phone.', o: ['has', 'have', 'is'], a: 0,
      w: { 1: `she → **has** got.`, 2: `"She's got" kısaltmasındaki 's aslında **has**'tir, is değil.` },
      e: `she + **has got**.` },
    { t: 'mc', q: '___ you have a pen?', o: ['Do', 'Have', 'Are'], a: 0,
      w: { 1: `"Have you...?" sorusu sadece got ile kurulur: Have you got a pen?`, 2: `Sahiplik sorusu be ile kurulmaz.` },
      e: `have fiiliyle soru: **Do** you have...?` },
    { t: 'mc', q: "He doesn't ___ a car.", o: ['have', 'has', 'having'], a: 0,
      w: { 1: `doesn't'tan sonra fiil yalın halde gelir: have.`, 2: `-ing hali burada kullanılmaz.` },
      e: `**doesn't + have** (yalın hal).` },
    { t: 'fill', q: 'I ___ (not / have) any brothers.', a: ["don't have", 'do not have', "haven't got", 'have not got'],
      w: { "haven't": `Sahiplik için "haven't" tek başına pek kullanılmaz: **don't have** ya da **haven't got**.`, "doesn't have": `I ile doesn't kullanılmaz → don't have.`, 'not have': `Olumsuzda do yardımcı fiili gerekir: don't have.` },
      e: `I **don't have** (ya da I **haven't got**) any brothers.` },
    { t: 'fill', q: '___ your brother got a car?', a: ['Has'],
      w: { have: `"your brother" = he → Has.`, does: `got ile kurulan soru Has / Have ile başlar.` },
      e: `have got sorusu: **Has** he got...?` },
    { t: 'fill', q: '"Do you have a bike?" "Yes, I ___."', a: ['do'],
      w: { have: `Soru "Do" ile sorulmuş, cevap da do ile verilir: Yes, I do.`, am: `Soru do ile sorulmuş → Yes, I do.` },
      e: `Do you...? → Yes, I **do**. / No, I **don't**.` },
    { t: 'fill', q: 'Does she ___ any children?', a: ['have'],
      w: { has: `does'tan sonra fiil yalın gelir: have.` },
      e: `**Does** she **have**...? (has değil)` },
    { t: 'order', tr: 'Onun (erkek) iki kız kardeşi var.', a: 'He has two sisters.', x: ['have'],
      w: { have: `he → **has**.` }, e: `He **has** two sisters.` },
    { t: 'order', tr: 'Arabanız var mı?', a: 'Do you have a car?', x: ['has'],
      w: { has: `you → have. Soru da do ile kurulur: Do you have...?` }, e: `**Do** you **have** a car?` },
    { t: 'fix', s: "She doesn't has a laptop.", i: 2, c: 'have',
      e: `doesn't + yalın fiil: She doesn't **have** a laptop.` },
    { t: 'fix', s: 'Has she got a sister? Yes, she does.', i: 7, c: 'has.',
      e: `Soru "Has she got" ile sorulmuş, cevap da **has** ile verilir: Yes, she has.` },
    { t: 'fix', s: 'My parents has a small house.', i: 2, c: 'have',
      e: `"My parents" = they → **have**.` },
    { t: 'mc', q: 'Hangisi doğru?', o: ['I have breakfast at 8.', 'I have got breakfast at 8.', 'I am breakfast at 8.'], a: 0,
      w: { 1: `"have breakfast" (kahvaltı yapmak) bir eylemdir. have got sadece sahiplik için kullanılır.`, 2: `Kahvaltı yapmak = have breakfast.` },
      e: `Eylem kalıplarında sadece **have** kullanılır: have breakfast, have a shower.` },
  ],
};
