export default {
  lesson: `
## Karşılaştırma: "daha ..."
İki şeyi karşılaştırırken sıfat değişir ve Türkçedeki "**-den / -dan**" ekinin yerine **than** kullanılır.
> Ankara is **bigger than** Eskişehir. | Ankara Eskişehir'**den** daha büyük.
> This phone is **more expensive than** that one. | Bu telefon şundan daha pahalı.
> My sister is **taller than** me. | Kız kardeşim benden daha uzun.
! Türkçede "daha" ayrı bir kelimedir ama İngilizcede kısa sıfatlar **-er** ekini alır (bigger). Uzun sıfatlarda ise "daha" kelimesinin karşılığı **more**'dur.

## Kurallar: sıfatın uzunluğuna göre
| Sıfat türü | Kural | Örnekler |
| Tek heceli | **+ er** | cheap → cheaper, old → older, tall → taller, fast → faster |
| -e ile biten | **+ r** | nice → nicer, large → larger, safe → safer |
| Tek heceli, **sesli + sessiz** ile biten | son harf ikilenir **+ er** | big → bigger, hot → hotter, thin → thinner, sad → sadder |
| -y ile biten (iki heceli) | **y → ier** | easy → easier, happy → happier, busy → busier, heavy → heavier |
| İki ve daha fazla heceli | **more + sıfat** | more beautiful, more expensive, more interesting, more modern |
! İki heceli olup -y ile bitmeyen sıfatlar çoğunlukla **more** alır: more famous, more boring, more careful.

## Düzensizler
| Sıfat | Karşılaştırma | Anlam |
| good | **better** | daha iyi |
| bad | **worse** | daha kötü |
| far | **further / farther** | daha uzak |
| much / many | **more** | daha çok |
| little | **less** | daha az |
! "well" (iyi, sağlıklı) da **better** olur: I feel **better** today. (Bugün daha iyiyim.)

## İki yapı birlikte kullanılmaz
x more bigger => **bigger**
x more better => **better**
x more easier => **easier**

## than'den sonra zamir
Resmi dilde "than I", günlük dilde **than me** kullanılır. İkisi de doğrudur:
> She is taller **than me**. (günlük) = She is taller **than I am**. (resmi)

## Farkın büyüklüğü
| Kelime | Anlam | Örnek |
| much / a lot / far | çok daha | London is **much more expensive** than Istanbul. |
| a bit / a little / slightly | biraz daha | I feel **a bit better** today. |
x very bigger => **much** bigger ("very" karşılaştırmayla kullanılmaz)

## Eşitlik: as ... as
"... kadar" anlamında **as + sıfatın yalın hali + as** kullanılır:
> She is **as tall as** her brother. | Erkek kardeşi kadar uzun.
> This film is**n't as good as** the book. | Bu film kitap kadar iyi değil.
> It's **not as cold as** yesterday. | Dün kadar soğuk değil.
x as taller as => as **tall** as

## less: "daha az"
**more**'un tersidir: less + sıfat (uzun sıfatlarla).
> This hotel is **less expensive** than that one. | Bu otel şundan daha az pahalı.
(Kısa sıfatlarda genellikle "not as ... as" kullanılır: not as tall as.)

## Kalıp: gittikçe ...
**karşılaştırma + and + karşılaştırma**:
> It's getting **colder and colder**. | Hava gittikçe soğuyor.
> The city is getting **more and more crowded**. | Şehir gittikçe kalabalıklaşıyor.

## Kontrol listesi
- Kısa sıfat → **-er** (yazım kurallarına dikkat). Uzun sıfat → **more**
- "-den" → **than** (from değil)
- Eşitlik → **as ... as** (yalın sıfat)
`,
  exExtra: [
    { t: 'mc', q: 'This exercise is ___ easier than the last one.', o: ['much', 'very', 'more'], a: 0,
      w: { 1: `"very" karşılaştırma sıfatıyla kullanılmaz → much easier.`, 2: `"easier" zaten karşılaştırma, more eklenmez.` },
      e: `Fark büyüklüğü → **much / a lot / far** + karşılaştırma.` },
    { t: 'mc', q: 'It\'s getting ___.', i: '"Hava gittikçe soğuyor" demek istiyorsun.', o: ['colder and colder', 'more and more cold', 'cold and colder'], a: 0,
      w: { 1: `Kısa sıfatlarda kalıp: colder and colder.`, 2: `Kalıp: karşılaştırma + and + karşılaştırma.` },
      e: `Gittikçe → **colder and colder** / more and more crowded.` },
    { t: 'fill', q: 'My bag is ___ (heavy) than yours.', a: ['heavier'],
      w: { heavyer: `-y → ier: heavier.`, 'more heavy': `-y ile biten iki heceli sıfat → heavier.` },
      e: `heavy → heav**ier**.` },
    { t: 'fill', q: 'Today is not ___ hot as yesterday.', a: ['as'],
      w: { so: `Günümüzde en yaygın kalıp: not as ... as.`, than: `Eşitlik yapısı: as ... as.` },
      e: `**not as** hot **as** = ... kadar sıcak değil.` },
    { t: 'fill', q: 'I was ill yesterday, but I feel ___ today.', h: 'daha iyi', a: ['better'],
      w: { gooder: `good / well → better.`, 'more good': `good / well → better.` },
      e: `well → **better** (sağlık için de).` },
    { t: 'fix', s: 'Is Antalya hoter than Izmir in summer?', i: 2, c: 'hotter',
      e: `hot → ho**tt**er (son harf ikilenir).` },
  ],
};
