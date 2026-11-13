export default {
  lesson: `
## Geçmişte devam eden eylem
**Past Continuous**, geçmişte belli bir anda **devam etmekte olan** eylemi anlatır. Türkçedeki "-yordu" ile benzerdir: okuyordum, uyuyordu, çalışıyorduk.
> At 8 o'clock last night, I **was watching** TV. | Dün akşam saat 8'de televizyon izliyordum.
> They **were playing** football at 5. | Saat 5'te futbol oynuyorlardı.
Eylem o anda **başlamış ama bitmemişti**. Past Simple ise bitmiş bir olayı anlatır:
| Past Simple | Past Continuous |
| I **read** a book yesterday. (Okudum, bitti.) | I **was reading** a book at 9. (Saat 9'da okumaktaydım.) |

## Yapı: was / were + fiil-ing
| Özne | Olumlu | Olumsuz | Soru |
| I / he / she / it | was working | wasn't working | Was he working? |
| you / we / they | were working | weren't working | Were they working? |
> I **wasn't listening**. | Dinlemiyordum.
> What **were** you **doing** at 10 last night? | Dün gece saat 10'da ne yapıyordun?
Kısa cevaplar: Yes, I **was**. / No, they **weren't**.
(-ing yazım kuralları Present Continuous ile aynıdır: making, running, lying.)

## En önemli kullanım: uzun eylem + kısa eylem
Bir hikâyede genellikle **arka planda süren uzun bir eylem** ve onu **bölen kısa bir olay** vardır:
- Uzun eylem (arka plan) → **Past Continuous**
- Kısa, bölen olay → **Past Simple**
> I **was having** a shower **when** the phone **rang**. | Telefon çaldığında duş alıyordum.
> **While** she **was cooking**, she **cut** her finger. | Yemek yaparken parmağını kesti.
> We **were walking** home **when** it **started** to rain. | Eve yürüyorduk ki yağmur başladı.

## when ve while
| Kelime | Genelde neyin önüne gelir? | Örnek |
| **when** (-dığında) | kısa olayın | I was sleeping **when** you called. |
| **while** (-ken) | uzun eylemin | **While** I was sleeping, you called. |
! **while**'dan sonra genelde -ing'li uzun eylem gelir: while I **was** sleep**ing**.

## Aynı anda süren iki uzun eylem
İkisi de Past Continuous olur:
> **While** I **was reading**, my brother **was playing** games. | Ben okurken kardeşim oyun oynuyordu.

## Arka plan anlatmak (hikâye başlangıcı)
> It **was raining** and people **were hurrying** home. Suddenly, I **saw** an old friend. | Yağmur yağıyordu ve insanlar aceleyle eve gidiyordu. Birden eski bir arkadaşımı gördüm.

## Durum fiilleri yine -ing almaz
know, want, like, need gibi fiiller Past Continuous ile değil **Past Simple** ile kullanılır:
x I was knowing the answer. => I **knew** the answer.

## Kontrol listesi
- Geçmişte belli bir anda devam eden mi? → **was / were + -ing**
- Bölen kısa olay mı? → **Past Simple** (when + ...)
- Uzun eylem, -ken → **while** + Past Continuous
`,
  anim: [
    { title: 'Past Continuous = -yordu', time: [['bar', 0.1, 0.38, 'TV izliyordum', 'v'], ['dot', 0.24, 'saat 8', 't', 'b']],
      tr: [['Dün saat 8\'de', 't'], [' TV izliyordum', 'v']], blocks: [['I', 's'], ['was watching#V', 'v', 'hi'], ['TV', 'n'], ['at 8', 't']],
      note: 'Saat 8\'de eylem **başlamıştı ama bitmemişti**, devam ediyordu.' },
    { title: 'Formül', blocks: [['Özne', 's'], ['was / were', 'x', 'hi', 'be (geçmiş)'], ['fiil + ing', 'v', 'hi', 'V-ing']],
      note: 'Present Continuous\'ın geçmişi: am/is/are → **was/were**.' },
    { rows: [[['I · he · she · it', 's'], ['was', 'x', 'hi'], ['working', 'v']], [['you · we · they', 's'], ['were', 'x', 'hi'], ['working', 'v']]],
      note: 'Bütün özneler.' },
    { title: 'En önemli kullanım', time: [['bar', 0.06, 0.4, 'duş alıyordum (uzun)', 'v']],
      blocks: [['I', 's'], ['was having#L', 'v', 'hi'], ['a shower', 'n']],
      note: 'Arka planda süren **uzun** bir eylem...' },
    { time: [['bar', 0.06, 0.4, 'duş alıyordum (uzun)', 'v'], ['dot', 0.26, 'telefon çaldı (kısa)', 'q', 'b']],
      blocks: [['I', 's'], ['was having#L', 'v'], ['a shower', 'n'], ['when', 't', 'hi'], ['the phone', 'n'], ['rang', 'q', 'hi', 'Past Simple']],
      note: '...ve onu **bölen kısa** bir olay. Kısa olay → **Past Simple**.' },
    { title: 'when ve while', rows: [[['when', 't', 'hi', '-dığında'], ['+ kısa olay', 'q']], [['while', 't', 'hi', '-ken'], ['+ uzun eylem', 'v']]],
      note: '**when** genelde kısa olayın, **while** uzun eylemin önüne gelir.' },
    { blocks: [['While', 't', 'hi'], ['I was cooking,', 'v', '', 'uzun'], ['I cut', 'q', '', 'kısa'], ['my finger', 'n']],
      note: 'Yemek yaparken parmağımı kestim.' },
    { title: 'Aynı anda iki uzun eylem', time: [['bar', 0.06, 0.4, 'I was reading', 'v'], ['bar2', 0.06, 0.4, 'he was sleeping', 's']],
      blocks: [['While', 't'], ['I was reading,', 'v', 'hi'], ['my brother', 's'], ['was sleeping', 'v', 'hi']],
      note: 'İkisi de sürüyordu → ikisi de **Past Continuous**.' },
    { title: 'Olumsuz ve soru', rows: [[['I', 's'], ["wasn't", 'neg', 'hi'], ['listening', 'v']], [['What', 'q'], ['were', 'q', 'hi'], ['you', 's'], ['doing?', 'v']]],
      note: '**wasn\'t / weren\'t**, soruda **was / were** başa.' },
    { title: 'Past Simple ile farkı', time: [['dot', 0.18, 'I read (bitti)', 'n'], ['bar', 0.24, 0.42, 'I was reading', 'v', 'b']],
      rows: [[['I', 's'], ['read', 'n', 'hi'], ['a book', 'x', '', 'okudum, bitti']], [['I', 's'], ['was reading', 'v', 'hi'], ['at 9', 't', '', 'okumaktaydım']]],
      note: 'Nokta = **bitmiş** olay. Çubuk = o anda **devam eden** eylem.' },
    { title: 'Sık hata', blocks: [['They', 's'], ['were', 'x'], ['eat#E', 'v', 'no'], ['dinner', 'n']], note: '-ing unutuldu...' },
    { blocks: [['They', 's'], ['were', 'x'], ['eating#E', 'v', 'ok'], ['dinner', 'n']], note: '...doğrusu: were **eating**.' },
    { title: 'Özet', time: [['bar', 0.1, 0.38, 'was / were + -ing', 'v'], ['dot', 0.26, 'Past Simple', 'q', 'b']],
      blocks: [['was / were', 'x', 'hi'], ['+', 'x'], ['V-ing', 'v', 'hi']],
      note: 'Geçmişte belli bir anda **süren** eylem. Bölen kısa olay → Past Simple.' },
  ],
  exExtra: [
    { t: 'mc', q: 'What ___ when the accident happened?', o: ['were you doing', 'did you do', 'you were doing'], a: 0,
      w: { 1: `Kaza olduğu anda devam eden eylem sorulur → were you doing.`, 2: `Soruda were özneden önce gelir.` },
      e: `O anda devam eden → **were you doing**?` },
    { t: 'mc', q: 'It was a beautiful morning. The sun ___ and the birds were singing.', o: ['was shining', 'shone', 'shines'], a: 0,
      w: { 1: `Hikâyede arka plan anlatılıyor → Past Continuous daha doğal.`, 2: `Hikâye geçmişte.` },
      e: `Arka plan → **was shining**.` },
    { t: 'fill', q: '___ I was waiting for the bus, I met my old teacher.', h: '-ken', a: ['While', 'When'],
      w: { during: `"during" isimle kullanılır (during the trip), cümleyle değil.` },
      e: `Uzun eylem + "-ken" → **While** I was waiting...` },
    { t: 'fill', q: 'We ___ (not / sleep) when you called.', a: ["weren't sleeping", 'were not sleeping'],
      w: { "didn't sleep": `O anda devam eden durum → weren't sleeping.`, "wasn't sleeping": `we → weren't.` },
      e: `**weren't sleeping**.` },
    { t: 'fix', s: 'While I was walk home, I saw a fox.', i: 3, c: 'walking',
      e: `was + fiil-ing: While I was **walking** home...` },
  ],
};
