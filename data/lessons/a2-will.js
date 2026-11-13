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
  anim: [
    { title: 'will: gelecek', time: [['dot', 0.78, 'yarın', 'v']], tr: [['Yarın', 't'], [' arayacağım', 'v']],
      blocks: [['I', 's'], ['will', 'x', 'hi', '-ecek'], ['call', 'v'], ['you', 'n'], ['tomorrow', 't']],
      note: '**will + yalın fiil**. Bütün öznelerde aynı.' },
    { title: 'Üç altın kural', rows: [[['She', 's'], ['wills', 'x', 'no', '-s yok']], [['She', 's'], ['will', 'x'], ['to call', 'v', 'no', 'to yok']], [['She', 's'], ['will', 'x', 'ok'], ['call', 'v', 'ok']]],
      note: 'will -s almaz, arkasından **to gelmez**, fiil **yalın**.' },
    { title: 'Kısa haller', rows: [[["I'll", 'x', 'hi', 'I will']], [["won't", 'neg', 'hi', 'will not']]],
      note: '"willn\'t" yok, doğrusu **won\'t**. (won\'t = vont, want = vant: karıştırma!)' },
    { title: 'Kullanım 1: Anlık karar', time: [['dot', 0.5, 'şimdi karar', 'q'], ['arrow', 0.5, 0.62, '', 'v']],
      tr: [['Telefon çalıyor.', 'x'], [' Ben bakarım!', 'v']], blocks: [["I'll", 'x', 'hi'], ['get', 'v'], ['it!', 'n']],
      note: 'Karar **konuşurken** verildi → will.' },
    { title: 'Kullanım 2: Söz ve teklif', rows: [[["I'll", 'x', 'hi'], ['call you,', 'v'], ['I promise', 'n', '', 'söz']], [["I'll", 'x', 'hi'], ['carry', 'v'], ['your bag', 'n', '', 'teklif']]],
      note: 'Söz vermek ve yardım teklif etmek → will.' },
    { title: 'Kullanım 3: Fikre dayalı tahmin', time: [['dot', 0.8, 'bence olacak', 'v']],
      blocks: [['I think', 'x', 'hi'], ['Turkey', 's'], ['will', 'x', 'hi'], ['win', 'v']],
      note: 'Kanıt yok, **fikrim** bu → will. I think / probably / I\'m sure ile.' },
    { title: 'Olumsuz tahmin', blocks: [["I don't think", 'neg', 'hi'], ['it', 's'], ['will', 'x'], ['rain', 'v']],
      note: 'Türkçe "Bence yağmayacak". İngilizcede olumsuzluk genelde **think**\'e geçer.' },
    { title: 'Soru ve shall', rows: [[['Will', 'q', 'hi'], ['you', 's'], ['help me?', 'v', '', 'rica']], [['Shall', 'q', 'hi'], ['I', 's'], ['open the window?', 'v', '', 'teklif']]],
      note: 'Rica → **Will you...?** Teklif / öneri (I, we) → **Shall I / we...?**' },
    { title: 'will mi, going to mu?', time: [['dot', 0.5, 'will: şimdi karar', 'q', 'b'], ['dot', 0.22, 'going to: önceden karar', 'v']],
      rows: [[["I'll", 'x', 'hi'], ['buy some milk', 'v', '', 'şimdi karar verdim']], [["I'm going to", 't', 'hi'], ['buy a car', 'v', '', 'çoktan karar verdim']]],
      note: 'Kararın **ne zaman** verildiğine bak.' },
    { title: 'Özet', time: [['dot', 0.78, 'gelecek', 'v']], blocks: [['will / won\'t', 'x', 'hi'], ['+ V1', 'v', 'hi']],
      note: 'Anlık karar, söz, teklif, fikre dayalı tahmin → **will**.' },
  ],
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
