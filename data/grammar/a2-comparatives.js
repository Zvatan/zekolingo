export default {
  lesson: `
## Karşılaştırma: daha ...
İki şeyi karşılaştırırken sıfat değişir ve **than** (-den, -dan) kullanılır.
> Ankara is **bigger than** Eskişehir. | Ankara Eskişehir'den daha büyük.
> This phone is **more expensive than** that one. | Bu telefon şundan daha pahalı.

## Kurallar
| Sıfat | Kural | Örnek |
| Tek heceli | + er | cheap → cheaper, old → older |
| -e ile biten | + r | nice → nicer, large → larger |
| Sesli + sessiz ile biten tek heceli | son harf ikilenir | big → bigger, hot → hotter |
| -y ile biten | y → ier | easy → easier, happy → happier |
| İki ve daha fazla heceli | more + sıfat | more beautiful, more interesting |

## Düzensizler
| Sıfat | Karşılaştırma |
| good | **better** |
| bad | **worse** |
| far | **further / farther** |
| much / many | **more** |
| little | **less** |

! İki yapı birlikte kullanılmaz: "more bigger" ya da "more better" yanlıştır.
! Türkçedeki "-den" eki İngilizcede **than** olur, "from" değil: bigger **than** me.

## Eşitlik: as ... as
> She is **as tall as** her brother. | Erkek kardeşi kadar uzun.
> This film is**n't as good as** the book. | Bu film kitap kadar iyi değil.

## Fark büyüklüğü
much / a lot / a bit + karşılaştırma:
> London is **much more expensive** than Istanbul. | Londra İstanbul'dan çok daha pahalı.
> I feel **a bit better** today. | Bugün biraz daha iyiyim.
x She is more taller than me. => She is **taller** than me.
x My car is older from yours. => My car is older **than** yours.
`,
  ex: [
    { t: 'mc', q: 'A car is ___ than a bike.', o: ['faster', 'more fast', 'fastest'], a: 0,
      w: { 1: `"fast" tek hecelidir → -er alır: faster.`, 2: `fastest "en hızlı" demektir. İki şey karşılaştırılırken -er kullanılır.` },
      e: `Tek heceli sıfat + **er**: faster than.` },
    { t: 'mc', q: 'This book is ___ than the film.', o: ['more interesting', 'interestinger', 'interesting'], a: 0,
      w: { 1: `Uzun sıfatlar -er almaz, more kullanılır.`, 2: `Karşılaştırma için more gerekir.` },
      e: `Uzun sıfat → **more** interesting than.` },
    { t: 'mc', q: 'My English is ___ than last year.', o: ['better', 'gooder', 'more good'], a: 0,
      w: { 1: `good düzensizdir: better.`, 2: `good düzensizdir: better.` },
      e: `good → **better**.` },
    { t: 'mc', q: 'The weather today is ___ than yesterday. It\'s raining and cold.', o: ['worse', 'badder', 'more bad'], a: 0,
      w: { 1: `bad düzensizdir: worse.`, 2: `bad düzensizdir: worse.` },
      e: `bad → **worse**.` },
    { t: 'mc', q: 'Ali is ___ his brother. They are both 1.80 m.', o: ['as tall as', 'taller than', 'as taller as'], a: 0,
      w: { 1: `İkisi de aynı boyda, bu yüzden eşitlik yapısı kullanılır.`, 2: `as ... as arasında sıfatın yalın hali gelir: as tall as.` },
      e: `Eşitlik: **as + sıfat + as**.` },
    { t: 'fill', q: 'August is ___ (hot) than April.', a: ['hotter'],
      w: { hoter: `Sesli + sessiz ile biten tek heceli sıfatta son harf ikilenir: ho**tt**er.`, 'more hot': `Tek heceli → -er: hotter.` },
      e: `hot → ho**tt**er.` },
    { t: 'fill', q: 'Maths is ___ (easy) than physics for me.', a: ['easier'],
      w: { easyer: `-y ile biten sıfatlarda y → ier: easier.`, 'more easy': `-y ile biten iki heceli sıfatlar -ier alır: easier.` },
      e: `easy → eas**ier**.` },
    { t: 'fill', q: 'Istanbul is bigger ___ Ankara.', a: ['than'],
      w: { from: `Türkçedeki "-den" karşılaştırmada **than** olur.`, then: `"then" = sonra. Karşılaştırma için **than**.` },
      e: `Karşılaştırma + **than**.` },
    { t: 'fill', q: 'This hotel is ___ (comfortable) than the last one.', a: ['more comfortable'],
      w: { comfortabler: `Uzun sıfat → more comfortable.` }, e: `Uzun sıfat → **more** comfortable.` },
    { t: 'order', tr: 'Kız kardeşim benden daha uzun.', a: 'My sister is taller than me.', x: ['more'],
      w: { more: `"tall" tek hecelidir → taller. more ile birlikte kullanılmaz.` }, e: `My sister is **taller than** me.` },
    { t: 'order', tr: 'Bu çanta o çanta kadar pahalı değil.', a: "This bag isn't as expensive as that one.", x: ['than'],
      w: { than: `Eşitlik yapısı: as ... as. than burada kullanılmaz.` }, e: `**not as + sıfat + as**.` },
    { t: 'fix', s: 'She is more younger than her husband.', i: 2, c: '',
      e: `younger zaten karşılaştırma. more eklenmez: She is **younger** than...` },
    { t: 'fix', s: 'My new flat is bigger from my old one.', i: 5, c: 'than',
      e: `Karşılaştırmada **than** kullanılır: bigger **than**.` },
    { t: 'fix', s: 'I feel gooder than yesterday.', i: 2, c: 'better',
      e: `good düzensizdir: good → **better**.` },
  ],
};
