export default {
  lesson: `
## Doğrudan ve dolaylı söz
| Doğrudan söz (direct) | Dolaylı söz (reported) |
| Ayşe: "**I am** tired." | Ayşe said (that) **she was** tired. |
| "Yorgunum." | Yorgun olduğunu söyledi. |
Türkçede dolaylı aktarırken "-dığını söyledi" ya da "-mış" kullanırız. İngilizcede ise üç şey değişir:
1. **Zamirler**: I → she, my → her, we → they
2. **Zaman**: bir adım geriye kayar (am → was)
3. **Zaman ve yer ifadeleri**: today → that day, here → there

## 1) Zaman kayması
Aktaran fiil geçmişte ise (said, told), cümlenin zamanı **bir adım geriye** gider:
| Doğrudan | Aktarılan | Örnek |
| Present Simple: "I **work** here." | Past Simple | He said he **worked** there. |
| Present Continuous: "I'**m leaving**." | Past Continuous | She said she **was leaving**. |
| Past Simple: "I **saw** it." | Past Perfect | He said he **had seen** it. |
| Present Perfect: "I'**ve finished**." | Past Perfect | She said she **had finished**. |
| will: "I'**ll** call you." | would | He said he **would** call me. |
| can: "I **can** swim." | could | She said she **could** swim. |
| must: "I **must** go." | had to (ya da must) | He said he **had to** go. |
| am going to | was going to | She said she **was going to** move. |
! Past Perfect, would, could, should, might **değişmez**.
! Söylenen şey **hâlâ doğruysa** zaman kaydırmak şart değildir: "I live in Izmir." → She said she **lives** in Izmir. (hâlâ orada yaşıyor)
! Aktaran fiil şimdiki zamandaysa (says) zaman değişmez: He **says** he **is** tired.

## 2) say mi, tell mi?
| Fiil | Kural | Örnek |
| **say** | kişi gelmez (gelirse **to** ile) | She **said** (that) she was busy. / She said **to me**... |
| **tell** | **mutlaka kişi** gelir (kime?) | She **told me** (that) she was busy. |
x He said me that he was hungry. => He **told** me that he was hungry.
x She told that she was late. => She **said** that she was late.
! **that** kelimesi günlük dilde çoğunlukla atılır: He said (that) he was tired.

## 3) Zaman ve yer ifadeleri
| Doğrudan | Aktarılan |
| now | then |
| today | that day |
| tonight | that night |
| tomorrow | the next day / the following day |
| yesterday | the day before / the previous day |
| next week | the following week |
| last week | the week before |
| ago | before |
| here | there |
| this | that |
> "I'll see you **tomorrow**." → He said he would see me **the next day**.

## Zamir değişimi örnekleri
> Ali: "**My** car is broken." → Ali said **his** car was broken.
> Elif: "**We**'re going to **our** village." → Elif said **they** were going to **their** village.
> You to me: "**I** like **you**." → You said **you** liked **me**.

## Kontrol listesi
- Zamirleri aktaran kişiye göre değiştir.
- Zamanı bir adım geri kaydır (said / told varsa).
- Kişi varsa **tell + kişi**, yoksa **say**.
- tomorrow → the next day, here → there.
(Soru ve emir cümlelerinin aktarımı B2'de anlatılıyor.)
`,
  exExtra: [
    { t: 'mc', q: '"I can\'t come tomorrow." → She said she ___ come the next day.', o: ["couldn't", "can't", "won't"], a: 0,
      w: { 1: `can't → couldn't olarak kayar.`, 2: `Cümlede can't vardı → couldn't.` },
      e: `can't → **couldn't**, tomorrow → **the next day**.` },
    { t: 'mc', q: '"I\'m going to buy a car." → He said he ___ buy a car.', o: ['was going to', 'is going to', 'will'], a: 0,
      w: { 1: `am going to → was going to olarak kayar.`, 2: `Cümlede going to vardı.` },
      e: `am going to → **was going to**.` },
    { t: 'fill', q: '"I saw her yesterday." → He said he had seen her the day ___.', a: ['before'],
      w: { yesterday: `yesterday → the day before.`, ago: `"the day before" kalıbı.` },
      e: `yesterday → the day **before**.` },
    { t: 'fill', q: '"My phone is broken." → Ayşe said ___ phone was broken.', a: ['her'],
      w: { my: `Zamir aktaran kişiye göre değişir: Ayşe → her.`, his: `Ayşe kadın → her.` },
      e: `my → **her** (Ayşe'nin telefonu).` },
    { t: 'fix', s: 'She said me that she would be late.', i: 1, c: 'told',
      e: `Kişi (me) varsa **told**: She told me...` },
  ],
};
