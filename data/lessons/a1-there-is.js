export default {
  lesson: `
## "Var / yok" demek
Bir yerde bir şeyin **bulunduğunu** ya da **bulunmadığını** söylerken **there is / there are** kullanılır. Türkçedeki "var" ve "yok" kelimelerinin karşılığıdır.
> **There is** a bank near my house. | Evimin yakınında bir banka **var**.
> **There are** two cats in the garden. | Bahçede iki kedi **var**.
> **There isn't** a hospital here. | Burada hastane **yok**.
! Buradaki **there** "orada" anlamına gelmez. Sadece cümleyi başlatan bir kalıp parçasıdır. Yer bilgisi ayrıca söylenir: There is a cat **there**. (Orada bir kedi var.)

## is mi, are mi? Arkasındaki isme bak
| Arkasından ne geliyor? | Kalıp | Örnek |
| Tekil isim | **There is** (There's) | There's **a** book on the desk. |
| Sayılamayan isim | **There is** | There's **some milk** in the fridge. |
| Çoğul isim | **There are** | There are **three** books on the desk. |
> There **is** some water in the bottle. | Şişede biraz su var. (water sayılamaz → is)
> There **are** a lot of people here. | Burada çok insan var.
! Birden fazla şey sayıyorsan **ilk isme** bakılır: There **is** a sofa and two chairs. / There **are** two chairs and a sofa.

## Olumsuz: yok
| Uzun hal | Kısa hal | Örnek |
| there is not | **there isn't** | There isn't a park near here. |
| there are not | **there aren't** | There aren't any chairs. |
| | **there's no** + isim | There's no milk. / There are no chairs. |
Olumsuz cümlelerde çoğul ve sayılamayan isimlerle genellikle **any** (hiç) kullanılır:
> There **aren't any** eggs. | Hiç yumurta yok.
> There **isn't any** sugar. | Hiç şeker yok.
! "no" zaten olumsuzdur, yanına not gelmez: "There isn't no milk" yanlış. Ya **There isn't any milk** ya da **There's no milk**.

## Soru: is / are başa geçer
| Soru | Kısa cevap |
| **Is there** a supermarket near here? | Yes, there **is**. / No, there **isn't**. |
| **Are there any** good restaurants? | Yes, there **are**. / No, there **aren't**. |
| **How many** students **are there**? | There are twenty. |
| **Is there any** coffee? | Yes, there **is**. |
! Kısa cevapta da **there** kalır: "Yes, it is" değil, "Yes, there **is**".

## have ile karıştırma!
Türkçedeki "var" kelimesi iki farklı anlamda kullanılır:
| Anlam | İngilizce | Örnek |
| Birine **ait** olan (sahiplik) | **have / has** | I **have** a car. (Bir arabam var.) |
| Bir yerde **bulunan** | **there is / are** | **There is** a car in front of the house. (Evin önünde bir araba var.) |
x In my room have a bed. => **There is** a bed in my room.
x In Istanbul has many bridges. => **There are** many bridges in Istanbul.
! İpucu: Cümlede **-de, -da** (bir yer) varsa ve sahip yoksa genellikle **there is / are** kullanılır.

## Kontrol listesi
- Bir yerde bir şey var mı? → **There is / are**
- Arkasındaki isim tekil ya da sayılamayan mı? → **is**. Çoğul mu? → **are**
- Olumsuz → **isn't / aren't** (+ any) ya da **there's no**
- Soru → **Is there / Are there**...?
`,
  exExtra: [
    { t: 'mc', q: '___ a sofa and two armchairs in the living room.', o: ['There is', 'There are'], a: 0,
      w: { 1: `Birden fazla şey sayılırken ilk isme bakılır: "a sofa" tekil → There is.` },
      e: `İlk isim tekil (a sofa) → **There is**.` },
    { t: 'mc', q: 'Hangisi "Hiç süt yok" demek?', o: ["There's no milk.", "There isn't no milk.", "It isn't milk."], a: 0,
      w: { 1: `İki olumsuz kelime (isn't + no) birlikte kullanılmaz.`, 2: `Bu cümle "O süt değil" demek.` },
      e: `**There's no** milk. = **There isn't any** milk.` },
    { t: 'mc', q: '"Is there a lift in the building?" "No, there ___."', o: ["isn't", "aren't", "doesn't"], a: 0,
      w: { 1: `Soru "Is there" ile sorulmuş → No, there isn't.`, 2: `there is yapısı do ile kullanılmaz.` },
      e: `Is there...? → Yes, there **is**. / No, there **isn't**.` },
    { t: 'fill', q: 'How many people ___ there in your family?', a: ['are'],
      w: { is: `"people" çoğul → are.` }, e: `How many ... **are there**?` },
    { t: 'order', tr: 'İstanbul\'da çok köprü var.', a: 'There are many bridges in Istanbul.', x: ['has'],
      w: { has: `Bir yerde bulunma → **There are**. "has" sahiplik içindir.` }, e: `**There are** many bridges in Istanbul.` },
  ],
};
