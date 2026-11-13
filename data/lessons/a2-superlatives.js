export default {
  lesson: `
## En üstünlük: "en ..."
Bir grubun içindeki en üst dereceyi anlatır. Önüne **mutlaka the** gelir.
> Everest is **the highest** mountain in the world. | Everest dünyanın en yüksek dağıdır.
> This is **the most beautiful** city I know. | Bu, bildiğim en güzel şehir.
> He is **the best** player in the team. | Takımın en iyi oyuncusu.

## Üç basamak
| Sıfat | Karşılaştırma (daha) | En üstünlük (en) |
| cheap | cheaper | the cheapest |
| nice | nicer | the nicest |
| big | bigger | the biggest |
| easy | easier | the easiest |
| expensive | more expensive | the most expensive |
| good | better | **the best** |
| bad | worse | **the worst** |
| far | further | **the furthest** |
| many / much | more | **the most** |
| little | less | **the least** |
Kurallar karşılaştırmadakinin aynısıdır: kısa sıfat **-est**, uzun sıfat **the most**.
| Kural | Örnek |
| Tek heceli: **+ est** | old → the oldest, tall → the tallest |
| -e ile biten: **+ st** | large → the largest, nice → the nicest |
| Sesli + sessiz: harf ikilenir | big → the biggest, hot → the hottest |
| -y → **iest** | happy → the happiest, busy → the busiest |
| Uzun sıfat: **the most** | the most famous, the most interesting |

## in mi, of mu?
| Ne geliyor? | Edat | Örnek |
| Yer, grup, kurum adı | **in** | the tallest **in** the class, the biggest city **in** Turkey, the best **in** the world |
| Sayı, "hepsi", zaman dilimi | **of** | the oldest **of** the three, the best **of** all, the hottest day **of** the year |
x the best of the world => the best **in** the world

## Present Perfect ile: "...diğim en ..."
Türkçede "gördüğüm **en** güzel yer" deriz. İngilizcede:
> It's **the best** film **I've ever seen**. | İzlediğim en iyi film.
> She's **the funniest** person **I've ever met**. | Tanıdığım en komik insan.

## one of the ...: "en ...lerden biri"
**one of the + en üstünlük + ÇOĞUL isim**:
> Istanbul is **one of the biggest cities** in the world. | İstanbul dünyanın en büyük şehirlerinden biri.
x one of the biggest city => one of the biggest **cities**

## the least: "en az"
> This is **the least expensive** hotel. | Bu en az pahalı (en ucuz) otel.

## Kontrol listesi
- the **unutma**: the best, the tallest
- Kısa sıfat → **the -est**, uzun → **the most**
- Yer / grup → **in**, sayı / "hepsi" → **of**
- one of the ... → isim **çoğul**
`,
  exExtra: [
    { t: 'mc', q: 'Pamukkale is one of the most beautiful ___ in Turkey.', o: ['places', 'place'], a: 0,
      w: { 1: `"one of the ..." sonrası isim çoğul olur: places.` },
      e: `one of the + en üstünlük + **çoğul isim**.` },
    { t: 'mc', q: 'Monday is the busiest day ___ the week for me.', o: ['of', 'in', 'from'], a: 0,
      w: { 1: `Zaman dilimi içinden seçim → of the week.`, 2: `Kalıp: the ... of the week.` },
      e: `Zaman dilimi, sayı → **of**.` },
    { t: 'fill', q: 'August is ___ (hot) month of the year here.', a: ['the hottest'],
      w: { 'the hotest': `hot → hottest (harf ikilenir).`, hottest: `the eksik.` },
      e: `**the hottest** (the + harf ikilenmesi).` },
    { t: 'fill', q: 'She is ___ (happy) person I know.', a: ['the happiest'],
      w: { 'the happyest': `-y → iest: happiest.`, 'the most happy': `-y ile biten iki heceli sıfat → the happiest.` },
      e: `happy → **the happiest**.` },
    { t: 'fix', s: 'It was the worse day of my life.', i: 3, c: 'worst',
      e: `"en kötü" → **the worst**. "worse" = daha kötü.` },
  ],
};
