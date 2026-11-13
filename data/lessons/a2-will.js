export default {
  lesson: `
## Yapı: will + yalın fiil
**will** bütün öznelerde **aynıdır**, -s almaz ve arkasından **to olmadan yalın fiil** gelir.
| | Uzun | Kısa | Örnek |
| Olumlu | will | 'll | I**'ll** help you. / She**'ll** be here at 6. |
| Olumsuz | will not | **won't** | It **won't** take long. |
| Soru | Will + özne + fiil? | | **Will** you come with me? |
Kısa cevaplar: Yes, I **will**. / No, I **won't**.
x She wills come. => She **will** come.
x I will to call you. => I will **call** you.
x I willn't go. => I **won't** go.
! **won't** (vont) ile **want** (vant, istemek) karıştırılmamalı.

## will ne zaman kullanılır?
| Kullanım | Örnek | Türkçe |
| **Anlık karar** (konuşurken veriliyor) | The phone is ringing. I**'ll** get it! | Ben bakarım! |
| **Teklif** | I**'ll** carry your bag. | Çantanı taşıyayım. |
| **Söz** | I**'ll** call you tomorrow, I promise. | Yarın ararım, söz. |
| **Rica** | **Will** you help me? | Yardım eder misin? |
| **Fikre dayalı tahmin** | I think it**'ll** rain tomorrow. | Bence yarın yağmur yağacak. |
| **Kesin gelecek bilgisi** | I**'ll** be 30 next year. | Seneye 30 olacağım. |
| **Ret / inat** (won't) | The car **won't** start. | Araba çalışmıyor. |

## Fikre dayalı tahmin kalıpları
Tahminlerde will genelde şu kelimelerle gelir:
| Kalıp | Örnek |
| I think ... will | I **think** she**'ll** pass the exam. |
| I don't think ... will | I **don't think** it**'ll** rain. (Bence yağmayacak.) |
| probably | He'**ll probably** be late. (will'den sonra) / He **probably won't** come. (won't'tan önce) |
| I'm sure | I'**m sure** you**'ll** like it. |
! Türkçede "Bence gelmeyecek" deriz. İngilizcede olumsuzluk genelde **think**'e geçer: I **don't think** he'll come. ("I think he won't come" de doğru ama daha az doğal.)

## shall: teklif ve öneri
**I** ve **we** ile soru şeklinde teklif ve öneri için kullanılır:
> **Shall I** open the window? | Pencereyi açayım mı?
> **Shall we** go to the cinema? | Sinemaya gidelim mi?

## will mi, going to mu?
| will | going to |
| Karar **konuşurken** veriliyor | Karar **önceden** verilmiş |
| "Su yok mu? Ben alırım!" → I**'ll** buy some. | "Malzemeleri aldım, kek yapacağım." → I**'m going to** make a cake. |
| **Fikre** dayalı tahmin: I think it'll rain. | **Kanıta** dayalı tahmin: Look at the clouds! It's going to rain. |

## Kontrol listesi
- Konuşurken karar, söz, teklif, fikir → **will**
- will + **yalın fiil** (to yok, -s yok)
- Olumsuz → **won't**. Teklif → **Shall I / we...?**
`,
  exExtra: [
    { t: 'mc', q: 'Hangisi "Bence yağmur yağmayacak" demenin en doğal yolu?', o: ["I don't think it'll rain.", "I think it won't to rain.", "I don't think it rains will."], a: 0,
      w: { 1: `won't'tan sonra to gelmez. Ayrıca İngilizcede olumsuzluk genelde think'e geçer.`, 2: `Yanlış sıralama.` },
      e: `**I don't think** + will: I don't think it'll rain.` },
    { t: 'mc', q: '___ we go for a walk? It\'s a lovely day.', o: ['Shall', 'Will', 'Do'], a: 0,
      w: { 1: `Öneri sunarken "Shall we...?" kullanılır.`, 2: `Öneri: Shall we...?` },
      e: `Öneri → **Shall we** go...? (Gidelim mi?)` },
    { t: 'mc', q: 'He ___ be late. He always is.', o: ["'ll probably", 'probably will to', 'wills probably'], a: 0,
      w: { 1: `will'den sonra to gelmez.`, 2: `will -s almaz.` },
      e: `will + **probably** + fiil.` },
    { t: 'fill', q: 'My computer ___ (not / start). I think it\'s broken.', a: ["won't start", 'will not start'],
      w: { "doesn't start": `Cihaz "çalışmayı reddediyor" anlamında won't kullanılır.`, "willn't start": `Kısa hal: won't.` },
      e: `Ret / çalışmama → **won't start**.` },
    { t: 'fix', s: "Don't worry, I will helps you.", i: 4, c: 'help',
      e: `will + yalın fiil: I will **help** you.` },
  ],
};
