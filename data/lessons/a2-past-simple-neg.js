export default {
  lesson: `
## did: geçmişin yardımcı fiili
Present Simple'da do / does nasıl kullanılıyorsa, Past Simple'da da **did** kullanılır. Güzel tarafı, **bütün öznelerde aynıdır**.
| | Present Simple | Past Simple |
| Olumsuz | I **don't** / she **doesn't** work | I / she **didn't** work |
| Soru | **Do** you / **Does** she work? | **Did** you / she work? |

## Olumsuz: didn't + YALIN fiil
| Olumlu | Olumsuz |
| I went home. | I **didn't go** home. |
| She bought a car. | She **didn't buy** a car. |
| They watched the film. | They **didn't watch** the film. |
### Neden yalın fiil?
Geçmiş bilgisi zaten **did**'in içinde. Fiile bir daha geçmiş eki konmaz: went → **go**, bought → **buy**, watched → **watch**.
x I didn't went. => I didn't **go**.
x She didn't bought it. => She didn't **buy** it.

## Soru: Did + özne + YALIN fiil
| Olumlu | Soru |
| You saw the match. | **Did** you **see** the match? (Maçı izledin mi?) |
| He called you. | **Did** he **call** you? |
| They had fun. | **Did** they **have** fun? |
### Kısa cevaplar
| Soru | Evet | Hayır |
| Did you...? | Yes, I **did**. | No, I **didn't**. |
| Did she...? | Yes, she **did**. | No, she **didn't**. |
x Did you saw him? => Did you **see** him?
x Yes, I went. (kısa cevap) => Yes, I **did**.

## Soru kelimeleriyle
Soru kelimesi + **did** + özne + yalın fiil:
> **Where did** you **go** last summer? | Geçen yaz nereye gittin?
> **What did** she **say**? | Ne dedi?
> **When did** they **arrive**? | Ne zaman vardılar?
> **Why did** you **leave**? | Neden ayrıldın?
> **How did** it **happen**? | Nasıl oldu?
> **What did** you **do** yesterday? | Dün ne yaptın? (did yardımcı, do "yapmak")
x Where you went? => Where **did** you **go**?

## Özne soruları: did yok!
**Who** ya da **What** cümlenin **öznesini** soruyorsa did kullanılmaz ve fiil geçmiş halde kalır:
| Özne sorusu (did yok) | Nesne sorusu (did var) |
| **Who called** you? (Seni kim aradı?) | **Who did** you **call**? (Kimi aradın?) |
| **What happened**? (Ne oldu?) | **What did** you **do**? (Ne yaptın?) |
| **Who ate** my cake? (Pastamı kim yedi?) | **What did** you **eat**? (Ne yedin?) |
x What did happen? => What **happened**?

## did mi, was / were mi?
| Cümlede ne var? | Yardımcı | Örnek |
| Fiil var | **did** | **Did** you **sleep** well? / I **didn't sleep**. |
| Fiil yok (sıfat, yer, isim) | **was / were** | **Were** you tired? / I **wasn't** tired. |
x I didn't tired. => I **wasn't** tired.
x Did you at home? => **Were** you at home?
x Was you go out? => **Did** you go out?

## Kontrol listesi
- Olumsuz → **didn't + yalın fiil**
- Soru → **Did + özne + yalın fiil**
- Fiil yoksa → was / were
- "Kim yaptı? / Ne oldu?" (özne) → did yok
`,
  exExtra: [
    { t: 'mc', q: '"___?" "There was an accident on the motorway."', o: ['What happened', 'What did happen', 'What happen'], a: 0,
      w: { 1: `"What" özne olduğunda did kullanılmaz.`, 2: `Geçmiş: happened.` },
      e: `Özne sorusu: **What happened?** (Ne oldu?)` },
    { t: 'mc', q: 'Hangisi "Seni kim aradı?" demek?', o: ['Who called you?', 'Who did call you?', 'Who did you call?'], a: 0,
      w: { 1: `"Who" özne → did kullanılmaz.`, 2: `Bu "Kimi aradın?" demek.` },
      e: `Özne sorusu: **Who called** you? / Nesne sorusu: Who **did** you call?` },
    { t: 'fill', q: 'What ___ you do last weekend?', a: ['did'],
      w: { do: `"last weekend" geçmiş → did.`, were: `"do" bir fiil → did.` },
      e: `What **did** you do? (did yardımcı, do asıl fiil)` },
    { t: 'fill', q: '"Did you enjoy the film?" "Yes, I ___."', a: ['did'],
      w: { enjoyed: `Kısa cevapta fiil tekrar edilmez: Yes, I did.`, was: `Soru did ile → Yes, I did.` },
      e: `Did you...? → Yes, I **did**.` },
    { t: 'fix', s: 'Where did you went on holiday?', i: 3, c: 'go',
      e: `did varsa fiil yalın: Where did you **go**?` },
  ],
};
