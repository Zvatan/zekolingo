export default {
  lesson: `
## Sahiplik: "...im var"
Türkçede sahipliği "var" ile anlatırız: Bir arabam **var**, iki kardeşi **var**. İngilizcede bunun için **have** fiili kullanılır. Kelimesi kelimesine "sahip olmak" demektir.
> I **have** a car. | Bir arabam var.
> She **has** two brothers. | İki erkek kardeşi var.
> We **have** a problem. | Bir sorunumuz var.

## Tam tablo
| Özne | have | have got (İngiliz İngilizcesi) |
| I | have | have got (I've got) |
| you | have | have got (you've got) |
| he / she / it | **has** | **has got** (he's got) |
| we | have | have got (we've got) |
| they | have | have got (they've got) |
! **has** sadece he / she / it ve tekil isimlerle: My sister **has** a cat. The house **has** a garden.
! **She's got** kısaltmasındaki **'s = has**'tir, "is" değil. (She's tired'daki 's ise "is"tir. Arkasındaki "got" farkı gösterir.)
**have** ve **have got** aynı anlama gelir. Amerikan İngilizcesinde çoğunlukla **have**, İngiliz İngilizcesinde konuşmada sık **have got** kullanılır. İkisini de anlamalısın ama **karıştırmamalısın**.

## Olumsuz
| | have (do ile) | have got |
| I / you / we / they | I **don't have** a car. | I **haven't got** a car. |
| he / she / it | She **doesn't have** a car. | She **hasn't got** a car. |
! **doesn't'tan sonra has değil have** gelir: She doesn't **have**. Çünkü -s bilgisi artık "does"un içindedir.
x She doesn't has a car. => She doesn't **have** a car.
x I haven't a car. => I **don't have** a car. / I **haven't got** a car.

## Soru ve kısa cevap
| | have (do ile) | have got |
| Soru | **Do** you **have** a pen? | **Have** you **got** a pen? |
| | **Does** he **have** a pen? | **Has** he **got** a pen? |
| Evet | Yes, I **do**. / Yes, he **does**. | Yes, I **have**. / Yes, he **has**. |
| Hayır | No, I **don't**. / No, he **doesn't**. | No, I **haven't**. / No, he **hasn't**. |
x Do you have got a pen? => **Do** you **have** a pen? ya da **Have** you **got** a pen?
x Have you a pen? => **Do you have** a pen?
! Kısa cevap soruyla uyumlu olur: "Do you have...?" → Yes, I **do**. "Have you got...?" → Yes, I **have**.

## Neler için kullanılır?
- Eşyalar: I have **a bike**.
- Aile ve arkadaşlar: She has **three sisters**.
- Görünüş: He has **blue eyes** / **short hair**. (Mavi gözlü / kısa saçlı.)
- Hastalıklar: I have **a headache** / **a cold**. (Başım ağrıyor / Nezleyim.)
- Zaman: I don't have **time**. (Vaktim yok.)

## have ile eylem kalıpları (have got KULLANILMAZ)
have bazen sahiplik değil, bir **eylem** anlatır. O zaman have got kullanılmaz ve olumsuz/soru her zaman do ile yapılır.
| Kalıp | Anlam |
| have breakfast / lunch / dinner | kahvaltı yapmak / öğle / akşam yemeği yemek |
| have a shower / a bath | duş / banyo yapmak |
| have a good time | iyi vakit geçirmek |
| have a rest / a break | dinlenmek / mola vermek |
> I **have breakfast** at 8. ("I've got breakfast" yanlış.)
> **Do** you **have** lunch at home? ("Have you got lunch" yanlış.)

## Kontrol listesi
- he / she / it → **has**, diğerleri → **have**
- Olumsuz/soru: **do/does + have** ya da **haven't/hasn't got**. İkisi karışmaz.
- doesn't / does'tan sonra → **have**
- Eylem kalıpları (have breakfast) → sadece have
`,
  exExtra: [
    { t: 'mc', q: 'My grandmother ___ white hair and blue eyes.', o: ['has', 'have', 'is'], a: 0,
      w: { 1: `"My grandmother" = she → has.`, 2: `Görünüş have ile anlatılır: has white hair.` },
      e: `Görünüş → **have / has**: She **has** blue eyes.` },
    { t: 'mc', q: 'Hangisi "Başım ağrıyor" demek?', o: ['I have a headache.', 'I am a headache.', 'My head has pain.'], a: 0,
      w: { 1: `Hastalıklar have ile söylenir.`, 2: `Doğal bir İngilizce kalıp değil.` },
      e: `Hastalık → **have**: I have a headache / a cold.` },
    { t: 'fill', q: '"Has your brother got a car?" "No, he ___."', a: ["hasn't", 'has not'],
      w: { "doesn't": `Soru "Has ... got" ile sorulmuş → No, he hasn't.`, "isn't": `Sahiplik sorusu → hasn't.` },
      e: `Has he got...? → Yes, he **has**. / No, he **hasn't**.` },
    { t: 'fill', q: "I'm sorry, I ___ (not / have) time today.", h: 'do ile yaz', a: ["don't have", 'do not have'],
      w: { "haven't": `Tek başına "haven't" sahiplikte kullanılmaz: don't have (ya da haven't got).`, "doesn't have": `I → don't.` },
      e: `I **don't have** time. (Vaktim yok.)` },
    { t: 'mc', q: 'Hangisi doğru?', o: ['We usually have dinner at 7.', "We've usually got dinner at 7.", 'We usually are dinner at 7.'], a: 0,
      w: { 1: `"have dinner" bir eylemdir, have got kullanılmaz.`, 2: `Yemek yemek: have dinner.` },
      e: `Eylem kalıbı → sadece **have**: have dinner.` },
  ],
};
