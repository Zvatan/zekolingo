export default {
  lesson: `
## will + yalın fiil
**will** bütün öznelerde aynıdır ve arkasından **yalın fiil** gelir. Kısa hali **'ll**, olumsuzu **won't (will not)**.
> I**'ll** help you. | Sana yardım edeceğim.
> It **won't** take long. | Uzun sürmeyecek.
> **Will** you come with me? | Benimle gelir misin?

## Ne zaman will?
### 1) Anlık kararlar (konuşurken verilen)
> The phone is ringing. I**'ll** answer it! | Telefon çalıyor. Ben bakarım!
> I'm cold. I**'ll** close the window. | Üşüdüm. Pencereyi kapatayım.
### 2) Söz, teklif, rica
> I**'ll** call you tomorrow, I promise. | Yarın seni ararım, söz.
> **Shall** I carry your bag? / I**'ll** carry it for you. | Çantanı taşıyayım mı?
### 3) Fikre dayalı tahmin (think, probably, maybe ile)
> I **think** Turkey **will** win. | Bence Türkiye kazanacak.
> She **will probably** be late. | Muhtemelen geç kalacak.

## will mi, going to mu?
| will | going to |
| Konuşma anında verilen karar | Önceden verilmiş karar, plan |
| "Ben açarım!" | "Yarın İzmir'e gideceğim." (bilet alındı) |
| Fikre dayalı tahmin: I think it will rain. | Kanıta dayalı tahmin: Look at the clouds! It's going to rain. |
x I will to call you. => I will **call** you.
x She wills come. => She **will** come.
x I think she won't to come. => I think she **won't come**.
`,
  anim: [
    { title: 'will + yalın fiil', tr: [['Sana', 'n'], [' yardım edeceğim', 'v']], blocks: [['I', 's'], ['will', 'x', 'hi', '-ecek'], ['help', 'v'], ['you', 'n']],
      note: '**will** bütün öznelerde aynıdır.' },
    { blocks: [['She#I', 's'], ['will', 'x'], ['help', 'v', 'hi'], ['you', 'n']],
      note: 'she ile de "will" ve "help" değişmez. -s yok, to yok!' },
    { title: 'Kısa halleri', rows: [[["I'll", 'x', 'hi', 'I will']], [["won't", 'neg', 'hi', 'will not']]],
      note: '"willn\'t" diye bir şey yok: **won\'t**' },
    { title: 'Anlık karar', tr: [['Telefon çalıyor.', 'x'], [' Ben bakarım!', 'v']], blocks: [["I'll", 'x', 'hi'], ['answer', 'v'], ['it', 'n']],
      note: 'Konuşurken o an verilen karar → **will**' },
    { title: 'will mi going to mu?', rows: [[["I'll", 'x'], ['answer it', 'v', '', 'şimdi karar verdim']], [["I'm going to", 't'], ['visit Rome', 'v', '', 'önceden planladım']]],
      note: 'Anlık karar → **will**. Önceden plan → **going to**.' },
    { title: 'Fikre dayalı tahmin', blocks: [['I think', 'x'], ['it', 's'], ['will', 'x', 'hi'], ['rain', 'v'], ['tomorrow', 't']],
      note: '"Bence ..." diye tahmin ederken **will**.' },
    { title: 'Sık hata', blocks: [['I', 's'], ['will', 'x'], ['to call#C', 'v', 'no'], ['you', 'n']],
      note: 'will\'den sonra to yok...' },
    { blocks: [['I', 's'], ['will', 'x'], ['call#C', 'v', 'ok'], ['you', 'n']],
      note: '...I will **call** you.' },
  ],
  ex: [
    { t: 'mc', q: '"I\'m thirsty." "I ___ get you some water."', o: ["'ll", "'m going to", 'am'], a: 0,
      w: { 1: `Su getirme kararı konuşma anında verildi → will.`, 2: `"am get" diye bir yapı yok.` },
      e: `Anlık karar → **will**: I'll get you some water.` },
    { t: 'mc', q: "We've bought the tickets. We ___ visit Rome in May.", o: ['are going to', 'will'], a: 0,
      w: { 1: `Biletler alındı, yani önceden yapılmış bir plan var → going to.` },
      e: `Önceden yapılmış plan → **going to**.` },
    { t: 'mc', q: 'I think it ___ be sunny tomorrow.', o: ['will', 'is going', 'wills'], a: 0,
      w: { 1: `Kalıp eksik: "is going to be" olmalı. "I think" ile will daha doğaldır.`, 2: `will hiçbir zaman -s almaz.` },
      e: `Fikre dayalı tahmin (I think) → **will**.` },
    { t: 'mc', q: "Don't worry. I ___ tell anyone your secret.", o: ["won't", "don't", "willn't"], a: 0,
      w: { 1: `Söz veriyorsun, gelecek → won't.`, 2: `"willn't" diye bir kısaltma yok: won't.` },
      e: `Söz: I **won't** tell anyone. (won't = will not)` },
    { t: 'mc', q: 'It\'s hot in here. ___ I open the window?', o: ['Shall', 'Will', 'Do'], a: 0,
      w: { 1: `Teklif ederken "Shall I...?" kullanılır.`, 2: `Teklif sorusu "Shall I...?" ile kurulur.` },
      e: `Teklif: **Shall I** open the window? (Pencereyi açayım mı?)` },
    { t: 'fill', q: 'She ___ (probably / be) late. The traffic is terrible.', a: ['will probably be', "'ll probably be"],
      w: { 'probably will be': `"probably" will'den sonra gelir: will probably be.`, 'will probably is': `will'den sonra yalın fiil: be.` },
      e: `will + probably + yalın fiil: She **will probably be** late.` },
    { t: 'fill', q: 'I promise I ___ (call) you when I arrive.', a: ['will call', "'ll call"],
      w: { 'will to call': `will'den sonra to gelmez.`, call: `Söz veriyorsun → will call.` },
      e: `Söz → **will call**.` },
    { t: 'fill', q: '___ you help me with this box, please?', a: ['Will', 'Can', 'Could'],
      w: { do: `Rica ederken Will / Can / Could you...? kullanılır.`, are: `Rica: Will you help me...?` },
      e: `Rica: **Will / Can / Could** you help me, please?` },
    { t: 'order', tr: 'Telefon çalıyor. Ben bakarım!', a: "The phone is ringing. I'll answer it!", x: ['answering'],
      w: { answering: `will'den sonra yalın fiil: **answer**.` }, e: `Anlık karar: I**'ll answer** it!` },
    { t: 'order', tr: 'Bence o sınavı geçecek.', a: 'I think she will pass the exam.', x: ['to'],
      w: { to: `will'den sonra **to** gelmez.` }, e: `I think she **will pass** the exam.` },
    { t: 'fix', s: 'I will to send you an email.', i: 2, c: '',
      e: `will'den sonra to gelmez: I will **send** you an email.` },
    { t: 'fix', s: 'He wills be here at six.', i: 1, c: 'will',
      e: `will hiçbir öznede -s almaz: He **will** be here.` },
    { t: 'fix', s: "I think it won't rains tomorrow.", i: 4, c: 'rain',
      e: `won't + yalın fiil: it won't **rain**.` },
  ],
};
