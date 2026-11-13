export default {
  lesson: `
## Geçmişin geçmişi
**Past Perfect**, geçmişteki bir olaydan **daha önce** olmuş şeyi anlatır. Türkçedeki "**-mıştı**" ile benzerdir: gitmiştim, yemişti, görmemiştik.
> When I arrived at the station, the train **had** already **left**. | İstasyona vardığımda tren çoktan kalkmıştı.
Burada iki geçmiş olay var:
| Sıra | Olay | Zaman |
| 1. (daha eski) | Tren kalktı | **Past Perfect**: had left |
| 2. (daha yeni) | Ben vardım | **Past Simple**: I arrived |

## Yapı: had + fiilin 3. hali (V3)
**had** bütün öznelerde aynıdır.
| | Örnek |
| Olumlu | I / she / they **had finished** (kısa: I'd finished) |
| Olumsuz | I **hadn't seen** him before. |
| Soru | **Had** you **met** her before? Yes, I **had**. / No, I **hadn't**. |
! **I'd** iki anlama gelebilir: I'd **finished** (had + V3) / I'd **like** (would + fiil). Arkasındaki fiile bak.

## Anlam farkı: tek kelime her şeyi değiştirir
| Cümle | Anlam |
| When I arrived, she **left**. | Ben gelince o çıktı. (Önce ben geldim, sonra o gitti. Belki karşılaştık.) |
| When I arrived, she **had left**. | Ben vardığımda o çoktan gitmişti. (Görüşemedik.) |
| When we got to the cinema, the film **started**. | Biz varınca film başladı. |
| When we got to the cinema, the film **had started**. | Biz vardığımızda film başlamıştı. (Başını kaçırdık.) |

## Sık kullanılan bağlaçlar ve zarflar
| Kelime | Örnek |
| when | When I got home, my sister **had cooked** dinner. |
| by the time (-dığında, -e kadar) | **By the time** the police arrived, the thief **had escaped**. |
| before / after | I **had never seen** the sea **before** I moved to Izmir. |
| because | She was sad **because** she **had lost** her job. |
| already, just, never, ever | He **had already** eaten when I called. |

## Sebep anlatmak
Geçmişteki bir durumun **sebebi** daha önce olmuşsa:
> I was hungry because I **hadn't eaten** all day. | Açtım çünkü bütün gün yemek yememiştim.
> She didn't recognise me because I **had changed** a lot. | Beni tanımadı çünkü çok değişmiştim.

## Ne zaman GEREK YOK?
Olaylar **oluş sırasına göre** anlatılıyorsa Past Perfect'e gerek yoktur. Hepsi Past Simple olur:
> I **got up**, **had** a shower and **left** the house. | Kalktım, duş aldım ve evden çıktım.
"before" ve "after" sırayı zaten gösterdiği için Past Simple de doğrudur:
> **After** she **finished** / **had finished** work, she went home. (İkisi de doğru.)

## Aktarılan sözlerde (Reported Speech)
Past Simple ve Present Perfect, aktarılırken Past Perfect'e dönüşür:
> "I **saw** the film." → He said he **had seen** the film.

## Kontrol listesi
- Geçmişte iki olay var mı? Daha eskisi → **had + V3**
- had bütün öznelerde aynı, arkasında **3. hal**
- Olaylar sırayla anlatılıyorsa → Past Simple yeter
`,
  anim: [
    { title: 'Geçmişte iki olay', time: [['dot', 0.12, '1. tren kalktı', 'v'], ['dot', 0.36, '2. ben vardım', 'q', 'b']],
      note: 'İkisi de geçmişte. Ama biri **daha önce** oldu. Tek cümlede bunu nasıl gösteririz?' },
    { time: [['dot', 0.12, 'had left (önce)', 'v'], ['dot', 0.36, 'arrived (sonra)', 'q', 'b'], ['arrow', 0.12, 0.36, '', 'x']],
      tr: [['Vardığımda', 'q'], [' tren', 'n'], [' kalkmıştı', 'v']], blocks: [['When', 'x'], ['I arrived,', 'q', '', 'sonra'], ['the train', 'n'], ['had left', 'v', 'hi', 'önce']],
      note: 'Daha **eski** olay → **had + V3** ("-mıştı"). Daha yeni olay → Past Simple.' },
    { title: 'Formül', blocks: [['had', 'x', 'hi', 'herkes için'], ['+', 'x'], ['V3', 'v', 'hi', '3. hal']],
      note: '**had** bütün öznelerde aynı: I had / she had / they had.' },
    { title: 'Tek kelime anlamı değiştirir', time: [['dot', 0.2, 'I arrived', 'q'], ['dot', 0.3, 'she left', 'v', 'b']],
      blocks: [['When I arrived,', 'q'], ['she', 's'], ['left', 'v', 'hi']],
      note: 'Önce ben geldim, **sonra** o çıktı. (Belki karşılaştık.)' },
    { time: [['dot', 0.1, 'she had left', 'v'], ['dot', 0.3, 'I arrived', 'q', 'b']],
      blocks: [['When I arrived,', 'q'], ['she', 's'], ['had left', 'v', 'hi']],
      note: 'O **ben gelmeden önce** gitmişti. Görüşemedik.' },
    { title: 'by the time: -dığında çoktan', time: [['dot', 0.1, 'escaped', 'v'], ['dot', 0.34, 'police arrived', 'q', 'b']],
      blocks: [['By the time', 'x', 'hi'], ['the police arrived,', 'q'], ['the thief', 'n'], ['had escaped', 'v', 'hi']],
      note: 'Polis vardığında hırsız çoktan kaçmıştı.' },
    { title: 'Sebep', time: [['bar', 0.08, 0.3, "hadn't eaten", 'neg'], ['dot', 0.34, 'I was hungry', 'q', 'b']],
      blocks: [['I was hungry', 'q'], ['because', 'x'], ['I', 's'], ["hadn't eaten", 'neg', 'hi'], ['all day', 't']],
      note: 'Geçmişteki bir durumun **sebebi** daha önce olmuşsa → Past Perfect.' },
    { title: 'Olumsuz ve soru', rows: [[['I', 's'], ["hadn't", 'neg', 'hi'], ['seen', 'v'], ['him before', 'n']], [['Had', 'q', 'hi'], ['you', 's'], ['met', 'v'], ['her before?', 'n']]],
      note: '**hadn\'t** + V3, soruda **Had** başa. Kısa cevap: Yes, I **had**.' },
    { title: 'Sırayla anlatırsan gerek yok', time: [['dot', 0.12, 'got up', 'v'], ['dot', 0.24, 'had a shower', 'v', 'b'], ['dot', 0.36, 'left', 'v']],
      blocks: [['I got up,', 'v'], ['had a shower', 'v'], ['and left', 'v']],
      note: 'Olaylar zaten **sırasıyla** anlatılıyorsa hepsi **Past Simple**.' },
    { title: 'Sık hata', blocks: [['When I arrived,', 'q'], ['the meeting', 'n'], ['has#H', 'x', 'no'], ['finished', 'v']],
      note: 'has şimdiye bağlar, cümle ise geçmişte...' },
    { blocks: [['When I arrived,', 'q'], ['the meeting', 'n'], ['had#H', 'x', 'ok'], ['finished', 'v']],
      note: '...geçmişten önceki olay → **had** finished.' },
    { title: 'Özet', time: [['dot', 0.12, 'had + V3', 'v'], ['dot', 0.36, 'Past Simple', 'q', 'b'], ['arrow', 0.12, 0.36, '', 'x']],
      note: 'Geçmişteki iki olaydan **daha eskisi** → **had + V3**.' },
  ],
  exExtra: [
    { t: 'mc', q: 'By the time we got to the party, everyone ___ .', o: ['had left', 'left', 'has left'], a: 0,
      w: { 1: `"By the time" ile, bizden önce gitmişlerdi → had left.`, 2: `Cümle geçmişte → had left.` },
      e: `By the time + Past Simple, **Past Perfect**.` },
    { t: 'mc', q: '"When I arrived, she left." ne demek?', o: ['Ben gelince o çıktı.', 'Ben vardığımda o çoktan gitmişti.', 'O gittikten sonra ben geldim.'], a: 0,
      w: { 1: `Bu anlam için "had left" gerekir.`, 2: `Bu anlam için "had left" gerekir.` },
      e: `left → **sırayla** oldu. had left → **önceden** olmuştu.` },
    { t: 'fill', q: "I didn't go to the cinema with them because I ___ (already / see) the film.", a: ["'d already seen", 'had already seen'],
      w: { 'already saw': `Gitmemekten önce olmuş → had already seen.`, 'have already seen': `Cümle geçmişte → had.` },
      e: `Sebep daha önce olmuş → **had already seen**.` },
    { t: 'fill', q: '___ you ever flown before your trip to London?', a: ['Had'],
      w: { have: `Geçmişteki bir noktadan önce → Had you ever...?`, did: `had + V3 sorusu: Had you...?` },
      e: `**Had** you ever flown before...?` },
    { t: 'fix', s: 'She was tired because she has worked all night.', i: 5, c: 'had',
      e: `Geçmişteki yorgunluğun sebebi daha önce → she **had** worked all night.` },
  ],
};
