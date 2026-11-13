export default {
  lesson: `
## "... var" demek
Bir yerde bir şeyin bulunduğunu söylerken **there is / there are** kullanılır.
- Tekil ya da sayılamayan isim → **there is** (there's)
- Çoğul isim → **there are**
> **There is** a bank near my house. | Evimin yakınında bir banka var.
> **There are** two cats in the garden. | Bahçede iki kedi var.
> **There is** some milk in the fridge. | Buzdolabında biraz süt var.
! Türkçede "var" tek kelimedir ve Türkler bunu sık sık **have** ile çevirir. "In my room have a bed" yanlıştır. Doğrusu: **There is** a bed in my room.

## Olumsuz
> **There isn't** a hospital in this village. | Bu köyde hastane yok.
> **There aren't any** chairs. | Hiç sandalye yok.
! Olumsuz ve soru cümlelerinde çoğul isimlerle genellikle **any** (hiç) kullanılır.

## Soru
> **Is there** a supermarket near here? | Buralarda bir süpermarket var mı?
> **Are there any** good restaurants? | Hiç iyi restoran var mı?
> **How many** students **are there**? | Kaç öğrenci var?
Kısa cevaplar: Yes, there is. / No, there isn't. / Yes, there are. / No, there aren't.

## have ile farkı
- **have**: birine ait olan → I **have** a car. (Bir arabam var.)
- **there is**: bir yerde bulunan → **There is** a car in front of the house. (Evin önünde bir araba var.)

## Sık yapılan hatalar
x There is two books on the table. => There **are** two books on the table.
x In the city have many parks. => **There are** many parks in the city.
x Is there any eggs? => **Are** there any eggs?
`,
  ex: [
    { t: 'mc', q: '___ a book on the table.', o: ['There is', 'There are', 'It has'], a: 0,
      w: { 1: `"a book" tekil → There is.`, 2: `"Bir yerde var" anlamında "it has" kullanılmaz.` },
      e: `Tekil → **There is**.` },
    { t: 'mc', q: '___ three bedrooms in our flat.', o: ['There is', 'There are', 'There have'], a: 1,
      w: { 0: `"three bedrooms" çoğul → There are.`, 2: `"There have" diye bir yapı yok.` },
      e: `Çoğul → **There are**.` },
    { t: 'mc', q: '___ some water in the bottle.', o: ['There is', 'There are'], a: 0,
      w: { 1: `"water" sayılamaz. Sayılamayan isimler tekil gibi davranır → There is.` },
      e: `Sayılamayan isimler (water, milk, money) → **There is**.` },
    { t: 'mc', q: '___ a pharmacy near here?', o: ['Is there', 'Are there', 'There is'], a: 0,
      w: { 1: `"a pharmacy" tekil → Is there.`, 2: `Bu bir soru cümlesi, is başa geçer: Is there...?` },
      e: `Soru: **Is there** + tekil isim?` },
    { t: 'mc', q: "There aren't ___ chairs in the room.", o: ['any', 'some', 'a'], a: 0,
      w: { 1: `Olumsuz cümlelerde "some" yerine **any** kullanılır.`, 2: `"a" tekil isimle kullanılır, "chairs" çoğul.` },
      e: `Olumsuz + çoğul → **any**: There aren't any chairs. (Hiç sandalye yok.)` },
    { t: 'fill', q: 'There ___ two banks in this street.', a: ['are'],
      w: { is: `"two banks" çoğul → are.` }, e: `**There are** + çoğul isim.` },
    { t: 'fill', q: 'There ___ (not / be) a hospital in our town.', a: ["isn't", 'is not'],
      w: { "aren't": `"a hospital" tekil → isn't.`, not: `Olumsuzda is + not birlikte gelir: isn't.`, "don't": `"there is" yapısının olumsuzu do ile değil, **isn't** ile yapılır.`, is: `Cümle olumsuz olmalı: isn't.` },
      e: `Tekil olumsuz → **There isn't**.` },
    { t: 'fill', q: '___ there any eggs in the fridge?', a: ['Are'],
      w: { is: `"eggs" çoğul → **Are** there...?`, do: `there is/are soruları do ile kurulmaz: **Are** there...?` },
      e: `Çoğul soru → **Are** there any...?` },
    { t: 'fill', q: '"Is there a park near your house?" "No, there ___."', a: ["isn't", 'is not'],
      w: { "aren't": `Soru "Is there" ile sorulmuş → No, there isn't.`, is: `Cevap "No" ile başlıyor, olumsuz olmalı: isn't.` },
      e: `Kısa cevap: Yes, there **is**. / No, there **isn't**.` },
    { t: 'order', tr: 'Bahçede iki köpek var.', a: 'There are two dogs in the garden.', x: ['is'],
      w: { is: `"two dogs" çoğul → **are**.` }, e: `**There are** two dogs in the garden.` },
    { t: 'order', tr: 'Buralarda bir ATM var mı?', a: 'Is there an ATM near here?', x: ['are'],
      w: { are: `"an ATM" tekil → **Is** there.` }, e: `Tekil soru: **Is there** an ATM near here?` },
    { t: 'fix', s: 'There is five people in the car.', i: 1, c: 'are',
      e: `"five people" çoğul → There **are**.` },
    { t: 'fix', s: 'In my room have a big window.', i: 3, c: 'there is',
      e: `"Bir yerde var" demek için have kullanılmaz: In my room **there is** a big window. (Ya da: There is a big window in my room.)` },
    { t: 'fix', s: 'Is there any apples in the bag?', i: 0, c: 'Are',
      e: `"apples" çoğul → **Are** there any apples?` },
    { t: 'mc', q: 'Hangisi "Bir kız kardeşim var" demek?', o: ['I have a sister.', 'There is a sister.', 'There is my sister.'], a: 0,
      w: { 1: `Bu cümle "bir yerde bir kız kardeş var" gibi anlaşılır. Sahiplik için **have** kullanılır.`, 2: `Bu cümle "İşte kız kardeşim!" anlamına gelir.` },
      e: `Birine ait olan → **have**: I have a sister. Bir yerde bulunan → there is.` },
  ],
};
