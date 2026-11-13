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
