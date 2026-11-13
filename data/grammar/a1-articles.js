export default {
  lesson: `
## a / an: "bir"
Tekil ve sayılabilen bir ismi ilk kez söylerken **a** ya da **an** kullanılır. Hangisinin geleceğini harf değil, kelimenin ilk **sesi** belirler.
- **a**: sessiz bir sesle başlayan kelimeler: a book, a car, a **u**niversity (/yu/ diye okunur)
- **an**: sesli bir sesle başlayan kelimeler: an apple, an egg, an **h**our (h okunmaz)
> I have **a** car. | Bir arabam var.
> She is **an** engineer. | O bir mühendis.
! Meslek söylerken a/an zorunludur. Türkçede "Öğretmenim" deriz ama "I am teacher" yanlıştır. Doğrusu: I am **a** teacher.

## the: belirli olan
Konuşan da dinleyen de hangi şeyden bahsedildiğini biliyorsa **the** kullanılır. Tekil ve çoğul bütün isimlerle gelebilir.
> I have a dog. **The** dog is black. | Bir köpeğim var. Köpek siyah.
> Close **the** door, please. | Kapıyı kapat lütfen.
> **The** sun is hot. | Güneş sıcak. (Zaten bir tane var.)

## Artikel kullanılmayan durumlar
- Genel anlamda çoğul isimler: I like **cats**. (Kedileri severim, genel olarak.)
- Genel anlamda sayılamayan isimler: **Water** is important.
- Kişi, şehir ve ülke isimleri: I live in Ankara.
- Kalıplar: at home, go to school, go to work, go to bed, by bus
x I like the cats. => I like **cats**. (genel anlamda)

## Çoğul isimler
| Kural | Örnek |
| Çoğu isim: + s | book → books, car → cars |
| -s, -sh, -ch, -x, -o: + es | bus → buses, watch → watches, box → boxes |
| sessiz harf + y → ies | city → cities, baby → babies |
| sesli harf + y: + s | day → days, boy → boys |
| -f / -fe → ves | knife → knives, wife → wives |

### Düzensiz çoğullar
| Tekil | Çoğul |
| man / woman | men / women |
| child | children |
| person | people |
| foot / tooth | feet / teeth |
| mouse | mice |
! **people** çoğuldur: People **are** friendly. "People is" yanlıştır.
! Sayıdan sonra isim çoğul olur. Türkçede "iki kitap" deriz ama İngilizcede "two book" yanlıştır: two book**s**.
`,
  ex: [
    { t: 'mc', q: 'She is ___ engineer.', o: ['a', 'an', 'the'], a: 1,
      w: { 0: `"engineer" sesli bir sesle (/e/) başlıyor, bu yüzden **an**.`, 2: `Bir mesleği ilk kez söylerken a/an kullanılır, the değil.` },
      e: `Sesli harf sesi → **an** engineer.` },
    { t: 'mc', q: 'I want ___ apple.', o: ['a', 'an'], a: 1,
      w: { 0: `"apple" sesli harfle başlıyor → an.` }, e: `**an** apple, **an** egg, **an** orange.` },
    { t: 'mc', q: 'He is ___ university student.', o: ['a', 'an'], a: 0,
      w: { 1: `"university" /yu/ sesiyle başlar. Bu sessiz bir sestir → **a**.` },
      e: `Önemli olan harf değil **ses**: a **u**niversity (/yu/) ama an **u**mbrella (/a/).` },
    { t: 'mc', q: 'We waited for ___ hour.', o: ['a', 'an'], a: 1,
      w: { 0: `"hour" kelimesinde h okunmaz, kelime sesli bir sesle başlar → **an**.` },
      e: `h harfi okunmayan kelimeler an alır: **an** hour, **an** honest man.` },
    { t: 'mc', q: 'I have a cat and a dog. ___ cat is white.', o: ['A', 'The', 'An'], a: 1,
      w: { 0: `Kediden zaten bahsettik, artık hangi kedi olduğu belli → The.`, 2: `"cat" sessiz harfle başlar. Ayrıca kedi artık belirli → The.` },
      e: `İkinci kez bahsedilen, bilinen şey → **the**.` },
    { t: 'mc', q: 'I like ___.', o: ['cats', 'the cats', 'a cats'], a: 0,
      w: { 1: `Bir şeyi genel olarak sevdiğini söylerken artikel kullanılmaz.`, 2: `"a" tekil isimle kullanılır, "cats" çoğul.` },
      e: `Genel anlamdaki çoğul isimler artikelsiz kullanılır: I like **cats**.` },
    { t: 'fill', q: 'one child → two ___', a: ['children'],
      w: { childs: `"child" düzensizdir: **children**.`, childrens: `"children" zaten çoğuldur, -s eklenmez.` },
      e: `Düzensiz çoğul: child → **children**.` },
    { t: 'fill', q: 'one box → three ___', a: ['boxes'],
      w: { boxs: `-x ile biten isimlere -es eklenir: box**es**.` },
      e: `-s, -sh, -ch, -x ile biten isimler **-es** alır: box → boxes, watch → watches.` },
    { t: 'fill', q: 'one city → two ___', a: ['cities'],
      w: { citys: `Sessiz harf + y ile biten isimlerde y düşer, **ies** gelir: cities.` },
      e: `city → **cities**. Ama day → days, çünkü y'den önce sesli harf var.` },
    { t: 'fill', q: 'one person → five ___', a: ['people'],
      w: { persons: `"persons" sadece resmi ve hukuki metinlerde geçer. Günlük dilde **people** denir.`, peoples: `"people" zaten çoğuldur, -s almaz.`, persones: `person → **people** (düzensiz).` },
      e: `person → **people** (insanlar). People **are**...` },
    { t: 'order', tr: 'O bir öğretmen.', a: 'She is a teacher.', x: ['an'],
      w: { an: `"teacher" sessiz harfle başlar → **a**.` }, e: `Meslekten önce a/an gelir: She is **a** teacher.` },
    { t: 'order', tr: 'Kapıyı kapat lütfen.', a: 'Close the door, please.', x: ['a'],
      w: { a: `Hangi kapı olduğunu ikiniz de biliyorsunuz, bu yüzden **the** door.` }, e: `Bilinen, belirli bir şey → **the**.` },
    { t: 'fix', s: 'I am teacher.', i: 2, c: 'a teacher.',
      e: `Meslek söylerken **a / an** şarttır: I am **a teacher**.` },
    { t: 'fix', s: 'There are three child in the room.', i: 3, c: 'children',
      e: `Sayıdan sonra çoğul gelir ve "child" düzensizdir: three **children**.` },
    { t: 'fix', s: 'People is very friendly here.', i: 1, c: 'are',
      e: `**people** çoğuldur (insanlar), bu yüzden **are** gelir.` },
    { t: 'mc', q: 'Hangisi doğru?', o: ['I go to school by bus.', 'I go to the school by bus.', 'I go to a school by the bus.'], a: 0,
      w: { 1: `"go to school" (öğrenci olarak okula gitmek) kalıbında the kullanılmaz.`, 2: `"by bus" (otobüsle) kalıbında artikel kullanılmaz.` },
      e: `Artikelsiz kalıplar: go to **school**, go to **work**, by **bus**, at **home**.` },
  ],
};
