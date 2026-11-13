export default {
  lesson: `
## En ...: the + -est / the most
Bir grubun içindeki en üst dereceyi anlatır. Önüne **the** gelir.
> Everest is **the highest** mountain in the world. | Everest dünyanın en yüksek dağıdır.
> This is **the most beautiful** city I know. | Bu bildiğim en güzel şehir.

## Kurallar
| Sıfat | Karşılaştırma | En üstünlük |
| cheap | cheaper | the cheapest |
| nice | nicer | the nicest |
| big | bigger | the biggest |
| easy | easier | the easiest |
| expensive | more expensive | the most expensive |
| good | better | **the best** |
| bad | worse | **the worst** |
| far | further | **the furthest** |

## in mi, of mu?
- Yer ya da grup adı → **in**: the tallest **in** the class, the biggest city **in** Turkey
- Sayı ya da "hepsi" → **of**: the best **of** all, the oldest **of** the three
> She is the youngest **in** her family. | Ailesinin en küçüğü.

## Present Perfect ile
"Gördüğüm en ...", "yediğim en ..." kalıbı:
> It's **the best** film I**'ve ever seen**. | İzlediğim en iyi film.

! "the" unutulmamalı: "She is best student" yanlış, "She is **the** best student" doğru.
x He is the most tallest. => He is **the tallest**.
x It is the bigger city in Turkey. => It is **the biggest** city in Turkey.
x the best of the world => the best **in** the world
`,
  ex: [
    { t: 'mc', q: 'Ali is ___ student in our class.', o: ['the tallest', 'taller', 'the most tall'], a: 0,
      w: { 1: `"in our class" bir grup → en üstünlük: the tallest.`, 2: `Tek heceli sıfat → -est: the tallest.` },
      e: `Grup içinde en ... → **the + -est**.` },
    { t: 'mc', q: 'This is ___ restaurant in town.', o: ['the best', 'the goodest', 'the better'], a: 0,
      w: { 1: `good düzensizdir: the best.`, 2: `"the better" iki şey arasında kullanılır. En iyi → the best.` },
      e: `good → better → **the best**.` },
    { t: 'mc', q: "It's ___ day of the year. It's 40 degrees!", o: ['the hottest', 'the hotest', 'the most hot'], a: 0,
      w: { 1: `Sesli + sessiz ile biten tek heceli sıfatta son harf ikilenir: ho**tt**est.`, 2: `Tek heceli sıfat → -est: the hottest.` },
      e: `hot → the ho**tt**est.` },
    { t: 'mc', q: 'Monday is ___ day of the week for me.', o: ['the worst', 'the baddest', 'the worse'], a: 0,
      w: { 1: `bad düzensizdir: the worst.`, 2: `"worse" iki şeyi karşılaştırır. En kötü → the worst.` },
      e: `bad → worse → **the worst**.` },
    { t: 'mc', q: 'Tokyo is one of the biggest cities ___ the world.', o: ['in', 'of', 'at'], a: 0,
      w: { 1: `Yer adlarıyla in kullanılır: in the world.`, 2: `Yer adlarıyla in kullanılır.` },
      e: `Yer, grup → **in**: in the world, in the class.` },
    { t: 'fill', q: 'This is ___ (expensive) hotel in the city.', a: ['the most expensive'],
      w: { 'most expensive': `the eksik: the most expensive.`, 'the expensivest': `Uzun sıfat → the most expensive.`, 'the more expensive': `En üstünlük → the most.` },
      e: `Uzun sıfat → **the most** expensive.` },
    { t: 'fill', q: 'That was ___ (easy) exam of the year.', a: ['the easiest'],
      w: { 'the easyest': `-y → iest: the easiest.`, easiest: `the eksik: the easiest.` },
      e: `easy → the eas**iest**.` },
    { t: 'fill', q: "It's the best film I've ever ___.", h: 'see (3. hali)', a: ['seen'],
      w: { saw: `Present Perfect'te fiilin 3. hali gelir: have seen.`, see: `'ve (have) + 3. hal: seen.` },
      e: `the best ... **I've ever seen** (izlediğim en iyi).` },
    { t: 'order', tr: 'O, ailemin en yaşlı kişisi.', a: 'She is the oldest person in my family.', x: ['of'],
      w: { of: `Grup adıyla (my family) **in** kullanılır.` }, e: `the oldest person **in** my family.` },
    { t: 'order', tr: 'Bu, dünyanın en uzun nehri.', a: 'This is the longest river in the world.', x: ['most'],
      w: { most: `"long" tek hecelidir → the long**est**. most kullanılmaz.` }, e: `the **longest** river in the world.` },
    { t: 'fix', s: 'He is the most tallest boy in the team.', i: 3, c: '',
      e: `tallest zaten en üstünlük. most eklenmez: the **tallest**.` },
    { t: 'fix', s: 'Istanbul is the bigger city in Turkey.', i: 3, c: 'biggest',
      e: `Bir grup içinde en ... → **the biggest** city in Turkey.` },
    { t: 'fix', s: 'She is best player in our team.', i: 2, c: 'the best',
      e: `En üstünlükte the gerekir: She is **the best** player.` },
  ],
};
