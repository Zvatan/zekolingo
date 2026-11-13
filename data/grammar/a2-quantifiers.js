export default {
  lesson: `
## Sayılabilen / sayılamayan isimler
- **Sayılabilen**: tek tek sayılır, çoğul olur → an apple, two apples, a chair, three chairs
- **Sayılamayan**: sayılmaz, çoğul olmaz, a/an almaz → water, milk, money, bread, rice, sugar, information, advice, furniture, luggage, homework, news
! Türkçede "bilgiler, tavsiyeler, eşyalar" deriz ama İngilizcede **information, advice, furniture** sayılamaz: "informations" ya da "an advice" yanlıştır. Tek tek saymak için: a piece of advice, two pieces of information.

## some / any
| | Sayılabilen çoğul | Sayılamayan |
| Olumlu: some | some eggs | some milk |
| Olumsuz: any | any eggs | any milk |
| Soru: any | Are there any eggs? | Is there any milk? |
! Teklif ve ricalarda soru olsa da **some** kullanılır: Would you like **some** tea? Can I have **some** water?

## much / many / a lot of
| | Sayılabilen | Sayılamayan |
| Çok (olumsuz / soru) | many | much |
| Çok (olumlu) | a lot of / lots of | a lot of / lots of |
| Kaç / ne kadar? | How many? | How much? |
> I don't have **much** time. | Pek vaktim yok.
> There are **a lot of** people here. | Burada çok insan var.
> **How many** brothers have you got? | Kaç erkek kardeşin var?

## a few / a little
- **a few** + sayılabilen: a few friends (birkaç arkadaş)
- **a little** + sayılamayan: a little sugar (biraz şeker)
x I need some informations. => I need some **information**.
x How much people? => How **many** people?
x There isn't many milk. => There isn't **much** milk.
`,
  ex: [
    { t: 'mc', q: 'There are ___ apples in the bag.', o: ['some', 'any', 'much'], a: 0,
      w: { 1: `Olumlu cümlede some kullanılır.`, 2: `"apples" sayılabilir ve cümle olumlu → some ya da a lot of.` },
      e: `Olumlu → **some**.` },
    { t: 'mc', q: "We don't have ___ milk.", o: ['any', 'some', 'many'], a: 0,
      w: { 1: `Olumsuz cümlede any kullanılır.`, 2: `"milk" sayılamaz, many kullanılmaz.` },
      e: `Olumsuz → **any**.` },
    { t: 'mc', q: 'How ___ money do you need?', o: ['much', 'many', 'lot'], a: 0,
      w: { 1: `"money" sayılamaz → How much.`, 2: `Kalıp: How much / How many.` },
      e: `Sayılamayan → **How much**.` },
    { t: 'mc', q: 'How ___ students are there in your class?', o: ['many', 'much'], a: 0,
      w: { 1: `"students" sayılabilir → How many.` },
      e: `Sayılabilen → **How many**.` },
    { t: 'mc', q: 'Can I give you ___?', o: ['some advice', 'an advice', 'some advices'], a: 0,
      w: { 1: `"advice" sayılamaz, an almaz.`, 2: `"advice" sayılamaz, çoğul olmaz.` },
      e: `advice sayılamaz: **some advice** ya da **a piece of advice**.` },
    { t: 'mc', q: 'Would you like ___ coffee?', o: ['some', 'any', 'many'], a: 0,
      w: { 1: `Teklif cümlelerinde soru olsa da some kullanılır.`, 2: `"coffee" sayılamaz.` },
      e: `Teklif → **some**: Would you like some coffee?` },
    { t: 'fill', q: 'I have ___ friends in London, maybe three or four.', h: 'birkaç', a: ['a few'],
      w: { 'a little': `"friends" sayılabilir → a few.`, few: `"a few" = birkaç (olumlu). "few" = çok az (olumsuz anlam).` },
      e: `Sayılabilen + birkaç → **a few**.` },
    { t: 'fill', q: 'Can I have ___ sugar in my tea, please?', h: 'biraz', a: ['a little', 'some'],
      w: { 'a few': `"sugar" sayılamaz → a little.`, any: `Ricada some kullanılır.` },
      e: `Sayılamayan + biraz → **a little** / **some**.` },
    { t: 'fill', q: "There isn't ___ time. Hurry up!", a: ['much'],
      w: { many: `"time" sayılamaz → much.`, 'a lot': `"a lot of" olmalı. Olumsuzda much daha doğal.` },
      e: `Olumsuz + sayılamayan → **much**.` },
    { t: 'order', tr: 'Hiç sorun var mı?', a: 'Are there any problems?', x: ['some'],
      w: { some: `Soru cümlesinde **any** kullanılır.` }, e: `Are there **any** problems?` },
    { t: 'order', tr: 'Bu şehirde çok fazla araba var.', a: 'There are a lot of cars in this city.', x: ['much'],
      w: { much: `"cars" sayılabilir ve cümle olumlu → a lot of.` }, e: `There are **a lot of** cars...` },
    { t: 'fix', s: 'I need some informations about the course.', i: 3, c: 'information',
      e: `"information" sayılamaz, çoğul olmaz: some **information**.` },
    { t: 'fix', s: 'How much people came to the party?', i: 1, c: 'many',
      e: `"people" sayılabilir → How **many** people?` },
    { t: 'fix', s: 'We bought new furnitures for the living room.', i: 3, c: 'furniture',
      e: `"furniture" (mobilya) sayılamaz: new **furniture**.` },
  ],
};
