export default {
  lesson: `
## Geçmişten daha önce: had + V3
**Past Perfect**, geçmişteki bir olaydan **daha önce** olmuş şeyi anlatır: -mıştı (gitmişti, yemiştim).
Formül: **had + fiilin 3. hali** (bütün öznelerde aynı)
> When I arrived at the station, the train **had** already **left**. | İstasyona vardığımda tren çoktan kalkmıştı.
> She was hungry because she **hadn't eaten** all day. | Aç idi çünkü bütün gün yemek yememişti.

## Zaman çizgisi
1. olay (daha eski) → **Past Perfect**: the train had left
2. olay (daha yeni) → **Past Simple**: I arrived
! Olaylar sırasıyla anlatılıyorsa Past Perfect'e gerek yoktur: I **got up**, **had** a shower and **left**.

## Sık kullanılan bağlaçlar
**when, before, after, by the time, because, already, never ... before**
> **By the time** we got there, the film **had started**. | Biz oraya vardığımızda film başlamıştı.
> I **had never seen** the sea **before** I moved to Izmir. | İzmir'e taşınmadan önce denizi hiç görmemiştim.

## Anlam farkı
- When I arrived, she **left**. → Ben varınca o çıktı (önce ben geldim, sonra o gitti).
- When I arrived, she **had left**. → Ben vardığımda o çoktan gitmişti (ben gelmeden gitti).

## Olumsuz ve soru
> I **hadn't seen** him for years. | Onu yıllardır görmemiştim.
> **Had** you **met** him before? | Onunla daha önce tanışmış mıydın?
x When I got home, my sister has cooked dinner. => ... my sister **had cooked** dinner.
`,
  anim: [
    { title: 'Geçmişte iki olay', rows: [[['1', 'x'], ['The train left', 'v', '', 'önce']], [['2', 'x'], ['I arrived', 'v', '', 'sonra']]],
      note: 'Önce tren kalktı, sonra ben vardım. Bunu tek cümlede nasıl söylerim?' },
    { tr: [['Vardığımda', 'q'], [' tren', 'n'], [' kalkmıştı', 'v']], blocks: [['When', 'x'], ['I arrived', 'q', '', 'sonra'], ['the train', 'n'], ['had left', 'v', 'hi', 'önce']],
      note: 'Daha **eski** olan olay → **had + 3. hal** (Past Perfect). "-mıştı"' },
    { title: 'Anlam farkı', rows: [[['When I arrived,', 'q'], ['she', 's'], ['left', 'v', 'hi', 'ben gelince çıktı']], [['When I arrived,', 'q'], ['she', 's'], ['had left', 'v', 'hi', 'ben gelmeden gitmişti']]],
      note: 'Tek kelime anlamı tamamen değiştirir.' },
    { title: 'Bütün öznelerde aynı', blocks: [['I · She · They', 's'], ['had', 'x', 'hi'], ['finished', 'v']],
      note: '**had** hiç değişmez. Arkasından **3. hal** gelir.' },
    { title: 'Sık hata', blocks: [['When I arrived,', 'q'], ['the meeting', 'n'], ['has#H', 'x', 'no'], ['finished', 'v']],
      note: 'Cümle geçmişte, "has" şimdiye bağlar...' },
    { blocks: [['When I arrived,', 'q'], ['the meeting', 'n'], ['had#H', 'x', 'ok'], ['finished', 'v']],
      note: '...geçmişten önceki olay → **had** finished.' },
    { title: 'Sırayla anlatırsan gerek yok', blocks: [['I got up,', 'v'], ['had a shower', 'v'], ['and left', 'v']],
      note: 'Olaylar zaten sırayla anlatılıyorsa hepsi **Past Simple** olur.' },
  ],
  ex: [
    { t: 'mc', q: 'When we got to the cinema, the film ___ .', o: ['had already started', 'has already started', 'already starts'], a: 0,
      w: { 1: `Geçmişteki bir olaydan (got to) önce → had started. "has" şimdiye bağlanır.`, 2: `Geçmişte olmuş bir şey anlatılıyor.` },
      e: `Daha eski olay → **had + V3**.` },
    { t: 'mc', q: "I didn't recognise him because he ___ a beard.", o: ['had grown', 'has grown', 'grows'], a: 0,
      w: { 1: `Tanımamamdan önce olmuş bir değişiklik → had grown.`, 2: `Geçmişte olmuş bir değişiklik → had grown.` },
      e: `Sebep daha önce olmuş → **had grown**.` },
    { t: 'mc', q: 'She ___ to London before, so she knew the city well.', o: ['had been', 'was being', 'has been'], a: 0,
      w: { 1: `Geçmişte bir noktadan önceki deneyim → had been.`, 2: `Cümle geçmişte (knew) → had been.` },
      e: `Geçmişten önceki deneyim → **had been**.` },
    { t: 'mc', q: 'I got up, ___ breakfast and went to work.', o: ['had', 'had had', 'have had'], a: 0,
      w: { 1: `Olaylar sırasıyla anlatılıyor, Past Perfect'e gerek yok.`, 2: `Sırayla anlatılan olaylar → Past Simple.` },
      e: `Sırayla anlatılan olaylar → **Past Simple**.` },
    { t: 'fill', q: 'By the time the ambulance arrived, the man ___ (die).', a: ['had died'],
      w: { died: `Ambulans gelmeden önce olmuş → had died.`, 'has died': `Geçmişteki bir andan önce → had died.` },
      e: `**had died** (ambulans gelmeden önce).` },
    { t: 'fill', q: "I was nervous because I ___ (never / fly) before.", a: ['had never flown', "'d never flown"],
      w: { 'had never flew': `had + 3. hal: fly → flew → flown.`, 'have never flown': `Cümle geçmişte → had never flown.` },
      e: `**had never flown** (fly → flew → flown).` },
    { t: 'fill', q: '___ you finished your homework when your friends called?', a: ['Had'],
      w: { have: `Geçmişteki bir andan önce → Had you finished...?`, did: `had + V3 sorusu: Had you finished...?` },
      e: `Soru: **Had** you finished...?` },
    { t: 'fill', q: "She couldn't pay because she ___ (lose) her wallet.", a: ['had lost', "'d lost"],
      w: { lost: `Ödeyememesinden önce olmuş → had lost.`, 'has lost': `Cümle geçmişte → had lost.` },
      e: `**had lost** (önce kaybetmiş, sonra ödeyememiş).` },
    { t: 'order', tr: 'Eve vardığımda herkes uyumuştu.', a: 'When I got home, everyone had gone to bed.', x: ['has'],
      w: { has: `Geçmişten önceki olay → **had** gone.` }, e: `When I got home, everyone **had gone** to bed.` },
    { t: 'order', tr: 'Onunla daha önce hiç tanışmamıştım.', a: 'I had never met him before.', x: ['have'],
      w: { have: `Geçmişte bir andan önce → **had**.` }, e: `I **had never met** him before.` },
    { t: 'fix', s: 'When I arrived, the meeting has finished.', i: 5, c: 'had',
      e: `Geçmişteki bir andan önce → the meeting **had** finished.` },
    { t: 'fix', s: 'He told me he had saw the film twice.', i: 5, c: 'seen',
      e: `had + 3. hal: see → saw → **seen**.` },
    { t: 'fix', s: 'I had never went abroad before 2019.', i: 3, c: 'been',
      e: `had + 3. hal. "Yurt dışına gitmek" deneyimi: I had never **been** abroad.` },
  ],
};
