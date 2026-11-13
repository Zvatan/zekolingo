export default {
  lesson: `
## Yakın mı uzak mı, tekil mi çoğul mu?
| | Tekil | Çoğul |
| Yakın (burada) | this (bu) | these (bunlar) |
| Uzak (orada) | that (şu, o) | those (şunlar) |
> **This** is my phone. | Bu benim telefonum.
> **That** car is expensive. | Şu araba pahalı.
> **These** apples are fresh. | Bu elmalar taze.
> **Those** people are tourists. | Şu insanlar turist.

! Türkçede "bu elmalar" deriz, "bu" kelimesi değişmez. İngilizcede ise isim çoğulsa this → **these**, that → **those** olur.
x this books => **these** books
x those car => **that** car
! Telaffuz: **this** kısa okunur (dis), **these** uzun okunur (diiz).

## Fiil uyumu
this / that → **is** · these / those → **are**
> This **is** my sister. | Bu benim kız kardeşim.
> These **are** my friends. | Bunlar benim arkadaşlarım.

## Soru ve kısa cevap
> **Is this** your bag? | Bu senin çantan mı?
> **What's that**? | Şu ne?
> **Are those** your keys? | Şunlar senin anahtarların mı?
! Kısa cevapta this/that yerine **it**, these/those yerine **they** kullanılır: Is this your bag? Yes, **it** is. / Are these your keys? Yes, **they** are.

## Tanıştırma ve telefon
> **This is** Ahmet. | Bu Ahmet. (Birini tanıştırırken)
> Hello, **this is** Can. | Alo, ben Can. (Telefonda)
`,
  ex: [
    { t: 'mc', q: '___ is my phone.', i: 'Telefon elinde. Doğru seçeneği işaretle.', o: ['This', 'These', 'Those'], a: 0,
      w: { 1: `"phone" tekil. "these" çoğul isimler için kullanılır.`, 2: `"those" çoğul ve uzaktaki şeyler için kullanılır.` },
      e: `Yakın + tekil → **this**.` },
    { t: 'mc', q: '___ shoes are new.', i: 'Ayakkabılar senin ayağında. Doğru seçeneği işaretle.', o: ['This', 'These', 'That'], a: 1,
      w: { 0: `"shoes" çoğul → these.`, 2: `"that" tekil ve uzaktaki şeyler içindir.` },
      e: `Yakın + çoğul → **these**.` },
    { t: 'mc', q: 'Look at ___ birds in the sky!', o: ['this', 'these', 'those'], a: 2,
      w: { 0: `"birds" çoğul. Ayrıca gökyüzü uzakta.`, 1: `"these" yakındaki şeyler içindir. Gökyüzündeki kuşlar uzakta.` },
      e: `Uzak + çoğul → **those**.` },
    { t: 'mc', q: 'Who is ___ man over there?', o: ['this', 'that', 'these'], a: 1,
      w: { 0: `"over there" (orada) uzaklık bildirir → that.`, 2: `"man" tekil → that.` },
      e: `Uzak + tekil → **that** (over there = şurada, orada).` },
    { t: 'mc', q: 'These ___ my friends.', o: ['is', 'are', 'am'], a: 1,
      w: { 0: `"these" çoğul → are.`, 2: `"am" sadece I ile kullanılır.` },
      e: `these / those → **are**.` },
    { t: 'fill', q: '___ are my keys.', h: 'Anahtarlar elinde (yakın, çoğul)', a: ['These'],
      w: { this: `"keys" çoğul → These.`, those: `Elindeki, yani yakındaki şeyler için **these** kullanılır.` },
      e: `Yakın + çoğul → **These** are my keys.` },
    { t: 'fill', q: 'Is ___ your car over there?', a: ['that'],
      w: { this: `"over there" uzaklık bildirir → that.`, those: `"car" tekil → that.` },
      e: `Uzak + tekil → **that**.` },
    { t: 'fill', q: 'This ___ my brother, Emre.', a: ['is'],
      w: { are: `"this" tekil → is.` }, e: `this → **is**. This is my brother.` },
    { t: 'fill', q: '"Are these your glasses?" "Yes, ___ are."', a: ['they'],
      w: { these: `Kısa cevapta "these" tekrar edilmez, yerine **they** kullanılır.`, it: `"glasses" çoğul → they.` },
      e: `Kısa cevapta this/that → **it**, these/those → **they** olur.` },
    { t: 'order', tr: 'Bu elmalar çok güzel.', a: 'These apples are very good.', x: ['this'],
      w: { this: `"apples" çoğul → **these**.` }, e: `**These** apples **are** very good.` },
    { t: 'order', tr: 'Şu senin çantan mı?', a: 'Is that your bag?', x: ['those'],
      w: { those: `"bag" tekil → **that**.` }, e: `Soru: **Is that** your bag?` },
    { t: 'fix', s: 'This books are interesting.', i: 0, c: 'These',
      e: `"books" çoğul → **These** books.` },
    { t: 'fix', s: 'Those car is very fast.', i: 0, c: 'That',
      e: `"car" tekil → **That** car.` },
    { t: 'fix', s: 'These is my new phone.', i: 0, c: 'This',
      e: `"phone" tekil → **This** is my new phone.` },
    { t: 'mc', q: 'Telefonu açtın. Hangisi "Alo, ben Selin" demenin doğal yolu?', o: ['Hello, this is Selin.', 'Hello, here is Selin.', 'Hello, that Selin.'], a: 0,
      w: { 1: `Bu kalıp telefonda kullanılmaz.`, 2: `Fiil (is) eksik ve "that" telefonda kendini tanıtmak için kullanılmaz.` },
      e: `Telefonda kendini tanıtırken: Hello, **this is** Selin.` },
  ],
};
