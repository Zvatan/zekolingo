export default {
  lesson: `
## Hayali, gerçek dışı durumlar
**Second Conditional**, şu an ya da gelecekte **gerçek olmayan** ya da **olma ihtimali çok düşük** durumları ve hayali sonuçlarını anlatır. Türkçedeki "**-sa / -se ... -ırdı / -erdi**" yapısına benzer.
> **If** I **had** a lot of money, I **would buy** a house by the sea. | Çok param **olsa** deniz kenarında bir ev **alırdım**. (Param yok.)
> **If** I **lived** in London, I**'d speak** better English. | Londra'da **yaşasam** daha iyi İngilizce **konuşurdum**. (Orada yaşamıyorum.)

## Yapı: If + Past Simple, would + yalın fiil
| if'li bölüm | sonuç bölümü |
| If + **Past Simple** (had, lived, knew, were) | **would / could / might** + yalın fiil |
! **Önemli:** if'li bölümdeki fiil geçmiş biçimde (had, lived) ama anlam **geçmiş değildir**, **şimdi / gelecek** ile ilgilidir. Geçmiş biçim burada "gerçek dışı" anlamı verir.
! **would** kısaltması **'d**'dir: I'd, you'd, she'd. would'dan sonra **to gelmez**.

## First mi, Second mı? Gerçekçilik meselesi
| First (gerçek ihtimal) | Second (hayali, düşük ihtimal) |
| If I **win** the match, I'**ll** be happy. (Kazanabilirim.) | If I **won** the lottery, I'**d** travel the world. (Pek olası değil.) |
| If it **rains**, we'**ll** stay in. | If it **snowed** in Antalya in July, I'**d** be shocked. |
| If I **see** him, I'**ll** tell him. | If I **saw** a ghost, I'**d** run away! |
Aynı durum, konuşanın ne kadar olası gördüğüne göre ikisiyle de söylenebilir:
> If I **get** the job, I'll buy a car. (Şansım olduğunu düşünüyorum.)
> If I **got** the job, I'd buy a car. (Pek ihtimal vermiyorum.)

## were: I / he / she / it ile bile
Second conditional'da **be** fiili bütün öznelerle **were** olur. (Günlük dilde was da duyulur, ama were daha doğrudur.)
> If I **were** taller, I'd play basketball. | Daha uzun olsam basketbol oynardım.
> If she **were** here, she'd know what to do. | Burada olsa ne yapacağını bilirdi.
### Tavsiye kalıbı: If I were you
> **If I were you**, I'd talk to her. | Senin yerinde olsam onunla konuşurdum.
> **If I were you**, I wouldn't buy that car. | Senin yerinde olsam o arabayı almazdım.

## would, could, might
| Kelime | Anlam | Örnek |
| **would** | -ırdı (kesin hayali sonuç) | If I had time, I **would** help you. |
| **could** | -ebilirdi (yapabilme) | If I had a car, I **could** drive you. |
| **might** | belki -ırdı (ihtimal) | If he studied, he **might** pass. |

## Soru ve olumsuz
> What **would** you **do** if you **won** the lottery? | Piyango çıksa ne yapardın?
> If I **didn't** have to work, I **wouldn't** get up early. | Çalışmak zorunda olmasam erken kalkmazdım.

## Sık yapılan hatalar
x If I would have money, I would buy it. => If I **had** money, I would buy it.
x If I had time, I will help you. => If I had time, I **would** help you.
x If I was you... => If I **were** you... (daha doğru)
x I would to go. => I would **go**.

## Kontrol listesi
- Gerçek dışı, hayali, düşük ihtimal → **If + Past Simple, would + fiil**
- if'li bölümde would **yok**
- be → **were** (bütün öznelerle)
- Tavsiye → **If I were you, I'd...**
`,
  exExtra: [
    { t: 'mc', q: 'What would you do if you ___ a famous person in the street?', o: ['saw', 'see', 'would see'], a: 0,
      w: { 1: `Hayali durum → if'li bölüm Past Simple: saw.`, 2: `if'li bölümde would kullanılmaz.` },
      e: `Hayali → if + **Past Simple**.` },
    { t: 'mc', q: 'If she ___ more confident, she would get a better job.', o: ['were', 'is', 'will be'], a: 0,
      w: { 1: `Hayali durum (kendine güveni yok) → were.`, 2: `if'li bölümde will kullanılmaz.` },
      e: `Second conditional'da be → **were**.` },
    { t: 'fill', q: "If I had a car, I ___ drive you to the airport.", h: '-ebilirdim', a: ['could'],
      w: { can: `Hayali durum → could.`, would: `"-ebilirdim" (yapabilme) → could.` },
      e: `Hayali yapabilme → **could**.` },
    { t: 'fill', q: "If I ___ (not / have) to work, I'd go to the beach.", a: ["didn't have", 'did not have'],
      w: { "don't have": `Hayali durum → Past Simple: didn't have.`, "wouldn't have": `if'li bölümde would kullanılmaz.` },
      e: `If I **didn't have** to work...` },
    { t: 'fix', s: "If I knew her number, I will call her.", i: 6, c: 'would',
      e: `Hayali durum (knew) → sonuç **would**: I would call her.` },
  ],
};
