export default {
  lesson: `
## İki tür isim
| | Sayılabilen | Sayılamayan |
| Nedir? | Tek tek sayılabilen şeyler | Kütle, sıvı, soyut kavramlar |
| Örnek | apple, chair, book, friend, car | water, milk, money, bread, rice, sugar, time, music |
| Çoğul olur mu? | Evet: two apples | **Hayır**: "waters", "moneys" yanlış |
| a / an alır mı? | Evet: an apple | **Hayır**: "a water", "a bread" yanlış |
| Fiil | çoğulsa **are**: The apples **are** fresh. | her zaman tekil **is**: The water **is** cold. |
### Dikkat: Türkçede sayılan ama İngilizcede SAYILAMAYAN kelimeler
| İngilizce (sayılamaz) | Türkçe | Tek tanesi |
| information | bilgi(ler) | a piece of information |
| advice | tavsiye(ler) | a piece of advice |
| furniture | mobilya, eşyalar | a piece of furniture |
| luggage / baggage | bagaj, valizler | a suitcase / a bag |
| homework | ödev(ler) | a task / an exercise |
| news | haber(ler) | a piece of news |
| money | para | a coin / a note |
| hair | saç (kafadaki saçların tamamı) | a hair (tek bir tel) |
> The news **is** good. ("are" değil, -s ile bitse de tekil) | Haberler iyi.
> I need some **advice**. ("advices" yanlış) | Biraz tavsiyeye ihtiyacım var.
### Sayılamayanı saymak: kap ve ölçü
a glass of water, a cup of tea, a bottle of milk, a slice of bread, a piece of cake, a kilo of rice, two bags of sugar

## some / any
| Cümle türü | Sayılabilen (çoğul) | Sayılamayan |
| Olumlu → **some** | There are **some** eggs. | There is **some** milk. |
| Olumsuz → **any** | There aren't **any** eggs. | There isn't **any** milk. |
| Soru → **any** | Are there **any** eggs? | Is there **any** milk? |
! **İstisna:** Teklif ve ricalarda soru olsa da **some** kullanılır: Would you like **some** tea? / Can I have **some** water?

## much / many / a lot of
| | Sayılabilen | Sayılamayan |
| Olumsuz / soru | **many**: I don't have **many** friends. | **much**: I don't have **much** time. |
| Olumlu | **a lot of / lots of**: I have **a lot of** friends. | **a lot of**: We have **a lot of** time. |
| Soru kalıbı | **How many** books? | **How much** money? / How much is it? (fiyat) |
! Olumlu cümlelerde "much" pek doğal değildir: "I have much money" yerine **a lot of** money denir.
! **too much / too many** (gereğinden fazla) olumlu cümlede de kullanılır: There are **too many** cars. / I ate **too much**.

## a few / a little (biraz, birkaç)
| | Sayılabilen | Sayılamayan |
| Biraz, birkaç (olumlu) | **a few**: a few friends | **a little**: a little sugar |
| Çok az (olumsuz anlam) | **few**: few people came (pek az kişi) | **little**: little time (pek az vakit) |

## no / none
> There's **no** milk. = There isn't any milk. | Hiç süt yok.
> "How many cakes are left?" "**None**." | "Kaç kek kaldı?" "Hiç."

## Kontrol listesi
- Önce sor: **sayılabilir mi?**
- Olumlu → **some / a lot of**, olumsuz ve soru → **any / much / many**
- Sayılabilen → **many / a few / How many**. Sayılamayan → **much / a little / How much**
`,
  exExtra: [
    { t: 'mc', q: 'The news ___ very surprising.', o: ['was', 'were'], a: 0,
      w: { 1: `"news" -s ile bitse de sayılamaz ve tekildir → was.` },
      e: `news, information, advice → **tekil** fiil.` },
    { t: 'mc', q: 'Can I have ___ of cake, please?', o: ['a piece', 'a', 'some pieces cake'], a: 0,
      w: { 1: `Kalıp: a piece of cake (bir dilim kek).`, 2: `"of" eksik.` },
      e: `**a piece of** cake / a slice of bread / a cup of tea.` },
    { t: 'mc', q: 'There are ___ cars in this city. The traffic is terrible.', o: ['too many', 'too much', 'much'], a: 0,
      w: { 1: `"cars" sayılabilir → many.`, 2: `Olumlu cümlede ve sayılabilen isimle much kullanılmaz.` },
      e: `Gereğinden fazla + sayılabilen → **too many**.` },
    { t: 'fill', q: 'I need ___ advice about my career.', h: 'biraz', a: ['some', 'a little', 'a piece of'],
      w: { an: `"advice" sayılamaz, an almaz.`, any: `Olumlu cümle → some.` },
      e: `advice sayılamaz → **some** advice.` },
    { t: 'fill', q: 'Very ___ people came to the meeting. Only three!', h: 'pek az (olumsuz anlam)', a: ['few'],
      w: { 'a few': `"a few" olumlu anlamlıdır (birkaç). "Pek az" → few.`, little: `"people" sayılabilir → few.` },
      e: `**few** = pek az (olumsuz anlam), **a few** = birkaç.` },
    { t: 'fix', s: 'We have a lot of luggages.', i: 5, c: 'luggage.',
      e: `"luggage" sayılamaz, çoğul olmaz.` },
  ],
};
