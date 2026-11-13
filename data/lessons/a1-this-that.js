export default {
  lesson: `
## İki soru, dört kelime
this / that / these / those seçerken iki şeye bakılır:
1. Şey **yakın** mı (elimde, burada) yoksa **uzak** mı (orada)?
2. **Tekil** mi, **çoğul** mu?
| | Tekil | Çoğul |
| Yakın (burada) | **this** (bu) | **these** (bunlar / bu ...lar) |
| Uzak (orada) | **that** (şu, o) | **those** (şunlar / şu ...lar) |
! Türkçede "bu kitap" ve "bu kitaplar" deriz, "bu" kelimesi değişmez. İngilizcede ise isim çoğul olunca kelime de değişir: **this** book → **these** books, **that** car → **those** cars.
! Telaffuz farkına dikkat: **this** kısa (dis), **these** uzun (diiz). Yanlış okunursa anlam karışır.

## 1) İsimden önce (bu kitap, şu araba)
> **This** book is very good. | Bu kitap çok iyi.
> **These** shoes are new. | Bu ayakkabılar yeni.
> **That** man is my teacher. | Şu adam benim öğretmenim.
> **Those** houses are old. | Şu evler eski.
x this books => **these** books
x those car => **that** car

## 2) Tek başına (bu, şu, bunlar)
İsim olmadan da kullanılabilir. Bu durumda "bu, şu, bunlar, şunlar" demektir.
> **This** is my brother. | Bu benim erkek kardeşim.
> **That**'s a good idea! | Bu iyi bir fikir!
> **These** are my friends. | Bunlar benim arkadaşlarım.
> What are **those**? | Şunlar ne?

## 3) Fiil uyumu
| this / that | → **is** | This **is** my car. / That **is** expensive. |
| these / those | → **are** | These **are** my keys. / Those **are** cheap. |
! **that is** kısaltılabilir: **that's**. Ama "this is" kısaltılmaz ("this's" yanlış).

## 4) Soru ve kısa cevap
Soruda **is / are** başa geçer. Kısa cevapta this / that tekrar edilmez, yerine **it** kullanılır. these / those yerine de **they** kullanılır.
| Soru | Kısa cevap |
| **Is this** your bag? | Yes, **it** is. / No, **it** isn't. |
| **Is that** your car? | Yes, **it** is. |
| **Are these** your keys? | Yes, **they** are. / No, **they** aren't. |
| **What's that**? | **It**'s a museum. |
| **Who's this**? | **This** is my cousin. (kişi tanıtırken this kalır) |

## 5) Özel kullanımlar
- **Tanıştırma:** **This is** Ahmet. (Bu Ahmet.) Burada "he is" denmez.
- **Telefonda kendini tanıtma:** Hello, **this is** Can. (Alo, ben Can.)
- **Zaman:** **this** week / month / year (bu hafta, bu ay), **this** morning (bu sabah), **that** day (o gün, geçmişte).
- **Az önce söylenene cevap:** "I passed the exam!" "**That**'s great!" (Bu harika!)

## Kontrol listesi
- Yakın + tekil → **this** · Yakın + çoğul → **these**
- Uzak + tekil → **that** · Uzak + çoğul → **those**
- this/that → **is**, these/those → **are**
- Kısa cevapta → **it / they**
`,
  exExtra: [
    { t: 'mc', q: '"I got the job!" "___ great news!"', o: ["That's", "This's", 'Those are'], a: 0,
      w: { 1: `"this is" kısaltılmaz.`, 2: `"news" sayılamaz ve tekil gibi davranır. Ayrıca yeni söylenene "That's great!" deriz.` },
      e: `Az önce söylenene tepki → **That's** great!` },
    { t: 'mc', q: '"Are those your shoes?" "Yes, ___ are."', o: ['they', 'those', 'it'], a: 0,
      w: { 1: `Kısa cevapta those tekrar edilmez → they.`, 2: `"shoes" çoğul → they.` },
      e: `these/those → kısa cevapta **they**.` },
    { t: 'fill', q: 'Look at ___ birds on the roof over there!', a: ['those'],
      w: { these: `"over there" (oradaki) uzak → those.`, that: `"birds" çoğul → those.` },
      e: `Uzak + çoğul → **those**.` },
    { t: 'fill', q: 'I am very busy ___ week.', h: 'bu hafta', a: ['this'],
      w: { these: `"week" tekil → this.`, that: `Şu anki hafta → this week.` },
      e: `**this** week = bu hafta.` },
    { t: 'mc', q: 'Arkadaşını annene tanıştırıyorsun. Hangisi doğru?', o: ['Mum, this is Elif.', 'Mum, she is Elif.', 'Mum, these is Elif.'], a: 0,
      w: { 1: `Tanıştırırken "she is" değil "this is" denir.`, 2: `Tek kişi → this.` },
      e: `Tanıştırma: **This is** Elif.` },
  ],
};
