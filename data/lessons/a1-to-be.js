export default {
  lesson: `
## "To be" ne demek?
İngilizcede "olmak" fiili **am / is / are** şeklinde çekilir. Türkçede bu anlamı ek ile veririz: öğrenci**yim**, mutlu**sun**, evde**dir**, Türk**üz**. İngilizcede ek yoktur, onun yerine **ayrı bir kelime** gelir.
> I **am** a student. | Ben öğrenci**yim**.
> You **are** happy. | Sen mutlu**sun**.
> She **is** at home. | O ev**de**.
> We **are** Turkish. | Biz Türk**üz**.
! Türklerin en sık hatası bu fiili tamamen atlamaktır, çünkü Türkçede ayrı bir kelime değildir. "I happy" yanlış, "I **am** happy" doğru. Kural: **Türkçede ek varsa, İngilizcede kelime vardır.**

## Ne zaman kullanılır?
Cümlede **fiil (eylem) yoksa** to be kullanılır. Yani şunları söylerken:
| Ne anlatıyorsun? | Örnek |
| Kim / ne olduğunu | I'**m** Can. / It'**s** a cat. |
| Meslek | She'**s** a doctor. |
| Milliyet, memleket | We'**re** from Izmir. / He'**s** German. |
| Yaş | I'**m** 25 (years old). |
| Nerede olduğunu | They'**re** at school. |
| Duygu, durum | I'**m** tired / hungry / cold. |
| Nasıl biri / bir şey olduğunu | The film **is** boring. |
| Hava, saat, fiyat | It'**s** sunny. / It'**s** 3 o'clock. / It'**s** 10 lira. |
! Yaşta Türkçe gibi "have" kullanılmaz: "I have 25 years" yanlış. Doğrusu: I **am** 25.
! Açlık, susuzluk, üşüme de İngilizcede birer **durumdur**: I'**m** hungry (Açım), I'**m** thirsty (Susadım), I'**m** cold (Üşüdüm).

## Olumlu: tam tablo
| Özne | Uzun hal | Kısa hal |
| I | I am | I'm |
| you | you are | you're |
| he | he is | he's |
| she | she is | she's |
| it | it is | it's |
| we | we are | we're |
| you (siz) | you are | you're |
| they | they are | they're |
İsimler de bir zamir gibi davranır: **my brother** (= he) → is, **my parents** (= they) → are, **the weather** (= it) → is.
> **My brother is** a teacher. | **Ali and Can are** friends. | **The shops are** closed.
! Kısa hal (I'm, she's) günlük konuşmada çok daha sık kullanılır. Yazarken de kullanabilirsin.

## Olumsuz: not
to be'den sonra **not** gelir.
| Uzun hal | Kısa hal 1 | Kısa hal 2 |
| I am not | I'm not | (yok) |
| you are not | you aren't | you're not |
| he / she / it is not | he isn't | he's not |
| we / they are not | we aren't | we're not |
> I'**m not** tired. | Yorgun değilim.
> He **isn't** a doctor. | O doktor değil.
> They **aren't** at home. | Onlar evde değil.
! "amn't" diye bir kısaltma **yoktur**. I için tek kısa hal: **I'm not**.

## Soru: to be başa geçer
Türkçede soru eki (-mı, -mi, -mu) kullanırız. İngilizcede ise **am / is / are cümlenin başına geçer**.
| Olumlu | Soru |
| You are tired. | **Are** you tired? (Yorgun musun?) |
| She is a teacher. | **Is** she a teacher? (O öğretmen mi?) |
| They are at home. | **Are** they at home? (Evdeler mi?) |
| I am late. | **Am** I late? (Geç mi kaldım?) |
### Kısa cevaplar
| Soru | Evet | Hayır |
| Are you ...? | Yes, I **am**. | No, I'**m not**. |
| Is he / she / it ...? | Yes, he **is**. | No, he **isn't**. |
| Are they ...? | Yes, they **are**. | No, they **aren't**. |
! Olumlu kısa cevapta kısaltma yapılmaz: "Yes, I'm." ya da "Yes, she's." yanlıştır. Doğrusu: Yes, I **am**. / Yes, she **is**.
! Kısa cevap soruyla uyumlu olur: "Are **you**...?" sorusuna cevap "**I** am" olur.

## Soru kelimeleriyle
Soru kelimesi + **am / is / are** + özne:
> **Where are** you from? | Nerelisin?
> **How old is** your sister? | Kız kardeşin kaç yaşında?
> **What is** your name? | Adın ne?
> **How are** you? I'm fine, thanks. | Nasılsın? İyiyim, teşekkürler.
> **How much is** it? | Ne kadar?

## Kontrol listesi
- Cümlede fiil yok mu? → to be gerekir.
- Özne I mı? → **am**. he / she / it ya da tekil isim mi? → **is**. Diğerleri → **are**.
- Olumsuz → **not** ekle. Soru → **am / is / are** başa.

## Sık yapılan hatalar
x I am agree. => I **agree**. (agree zaten fiil)
x I have 20 years old. => I **am** 20 years old.
x My parents is teachers. => My parents **are** teachers.
x She hungry. => She **is** hungry.
x Where you are from? => Where **are you** from?
x Yes, I'm. => Yes, I **am**.
`,
  exExtra: [
    { t: 'mc', q: '"Where ___ you from?" "I\'m from Trabzon."', o: ['are', 'is', 'do'], a: 0,
      w: { 1: `you ile are kullanılır.`, 2: `Fiil yok (from bir edat), to be gerekir: Where are you from?` },
      e: `Where **are** you from? (Nerelisin?)` },
    { t: 'mc', q: '"Are you tired?" "Yes, I ___."', o: ['am', "'m", 'are'], a: 0,
      w: { 1: `Olumlu kısa cevapta kısaltma yapılmaz: Yes, I am.`, 2: `Cevapta özne I → am.` },
      e: `Yes, I **am**. (kısaltma yok)` },
    { t: 'fill', q: 'How old ___ your brother?', a: ['is'],
      w: { are: `"your brother" tekil (= he) → is.`, has: `Yaş be ile sorulur: How old is...?` },
      e: `Yaş sorusu: How old **is** your brother?` },
    { t: 'mc', q: 'Hangisi "Susadım" demek?', o: ["I'm thirsty.", 'I have thirsty.', 'I thirsty.'], a: 0,
      w: { 1: `Susamak İngilizcede bir durumdur, be ile kullanılır.`, 2: `to be atlanamaz: I'm thirsty.` },
      e: `Durumlar be ile: I'**m** thirsty / hungry / cold.` },
    { t: 'fill', q: 'They ___ (not / be) at school today. It\'s Sunday.', a: ["aren't", 'are not', "'re not"],
      w: { "isn't": `they → aren't.`, "don't": `Fiil yok, olumsuz be ile: aren't.` },
      e: `they + **aren't**.` },
    { t: 'order', tr: 'Kız kardeşin kaç yaşında?', a: 'How old is your sister?', x: ['has'],
      w: { has: `Yaş be ile sorulur: How old **is**...?` }, e: `**How old is** your sister?` },
    { t: 'mc', q: 'Hangisi doğru?', o: ['Where are you from?', 'Where you are from?', 'Where you from?'], a: 0,
      w: { 1: `Soruda be özneden önce gelir: Where **are you**...`, 2: `to be atlanamaz: Where **are** you from?` },
      e: `Soru kelimesi + **be** + özne: Where **are you** from?` },
  ],
};
