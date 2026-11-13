export default {
  lesson: `
## Geçmişte devam eden eylem
**Past Continuous**, geçmişte belli bir anda devam etmekte olan eylemi anlatır: -yordu (okuyordum, uyuyordu).
Formül: **was / were + fiil-ing**
> At 8 o'clock last night, I **was watching** TV. | Dün gece saat 8'de televizyon izliyordum.
> They **were playing** football at 5. | Saat 5'te futbol oynuyorlardı.

## when ve while
Uzun süren (arka plan) eylem → **Past Continuous**. Onu bölen kısa eylem → **Past Simple**.
> I **was having** a shower **when** the phone **rang**. | Telefon çaldığında duş alıyordum.
> **While** she **was cooking**, she **cut** her finger. | Yemek yaparken parmağını kesti.
- **when** + genelde kısa eylem (Past Simple)
- **while** + genelde uzun eylem (Past Continuous)
! İki uzun eylem aynı anda sürüyorsa ikisi de continuous olur: **While** I **was reading**, my brother **was sleeping**.

## Olumsuz ve soru
> I **wasn't listening**. | Dinlemiyordum.
> What **were** you **doing** at 10 last night? | Dün gece saat 10'da ne yapıyordun?

## Past Simple ile farkı
- I **read** a book yesterday. → Okudum (bitti).
- I **was reading** a book at 9. → Saat 9'da okumaktaydım (devam ediyordu).
x When I arrived, they were eat dinner. => They **were eating** dinner.
x While I walked home, it started to rain. => While I **was walking** home, it started to rain.
`,
  ex: [
    { t: 'mc', q: 'At 7 a.m. yesterday, I ___ .', o: ['was sleeping', 'slept', 'am sleeping'], a: 0,
      w: { 1: `"Saat 7'de" o anda devam eden bir eylem → was sleeping.`, 2: `"yesterday" geçmişi gösterir.` },
      e: `Geçmişte belli bir anda devam eden eylem → **was + -ing**.` },
    { t: 'mc', q: 'The children ___ in the garden when it started to rain.', o: ['were playing', 'was playing', 'played'], a: 0,
      w: { 1: `"The children" çoğul → were.`, 2: `Oyun devam ederken yağmur başladı → uzun eylem: were playing.` },
      e: `Uzun eylem (were playing) + kısa eylem (started).` },
    { t: 'mc', q: 'I was walking home when I ___ an old friend.', o: ['saw', 'was seeing', 'see'], a: 0,
      w: { 1: `Görmek kısa bir eylem ve yürüyüşü bölüyor → Past Simple: saw.`, 2: `Geçmiş zaman → saw.` },
      e: `when + kısa eylem → **Past Simple**: when I **saw**...` },
    { t: 'mc', q: '___ I was cooking, my husband was setting the table.', o: ['While', 'When', 'During'], a: 0,
      w: { 1: `İki uzun eylem aynı anda sürüyor → While daha doğal.`, 2: `"during" isimle kullanılır (during the film), cümleyle değil.` },
      e: `Aynı anda süren iki uzun eylem → **While** ... , ...` },
    { t: 'fill', q: 'What ___ you doing at 9 last night?', a: ['were'],
      w: { was: `you → were.`, did: `"doing" (-ing) varsa yardımcı fiil be olur: were.` },
      e: `What **were** you doing...?` },
    { t: 'fill', q: 'She ___ (drive) when her phone rang.', a: ['was driving'],
      w: { drove: `Araba sürmek telefon çaldığında devam ediyordu → was driving.`, 'were driving': `she → was.` },
      e: `Uzun eylem → **was driving**.` },
    { t: 'fill', q: 'I ___ (not / listen) to the teacher, so I didn\'t understand.', a: ["wasn't listening", 'was not listening'],
      w: { "didn't listen": `Ders boyunca devam eden bir durum → wasn't listening daha doğal.`, "wasn't listen": `Fiil -ing almalı: listening.` },
      e: `**wasn't listening**.` },
    { t: 'fill', q: 'While we ___ (have) dinner, the lights went out.', a: ['were having'],
      w: { had: `"While" uzun eylemi gösterir → were having.`, 'was having': `we → were.` },
      e: `while + **were having** (uzun eylem).` },
    { t: 'order', tr: 'Sen aradığında duş alıyordum.', a: 'I was having a shower when you called.', x: ['had'],
      w: { had: `Devam eden eylem → **was having**.` }, e: `I **was having** a shower **when** you **called**.` },
    { t: 'order', tr: 'Saat 10\'da ne yapıyordun?', a: 'What were you doing at 10?', x: ['did'],
      w: { did: `Devam eden eylem sorusu → **were** you doing.` }, e: `What **were** you **doing** at 10?` },
    { t: 'fix', s: 'When I arrived, they were eat dinner.', i: 5, c: 'eating',
      e: `was/were + fiil**-ing**: they were **eating** dinner.` },
    { t: 'fix', s: 'My parents was watching TV when I got home.', i: 2, c: 'were',
      e: `"My parents" çoğul → **were** watching.` },
    { t: 'fix', s: 'He was study when I called him.', i: 2, c: 'studying',
      e: `was + fiil**-ing**: He was **studying**.` },
  ],
};
