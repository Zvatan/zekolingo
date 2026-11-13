export default {
  lesson: `
## Asıl soru: zaman belli ve bitmiş mi?
Türkçede ikisi de "-dı" ile çevrilebildiği için bu konu Türkler için en zor konulardan biridir. Karar verirken tek bir soru sor: **Olayın zamanı belli mi ve o zaman dilimi bitti mi?**
| Past Simple | Present Perfect |
| Belirli, **bitmiş** bir zamanda oldu | Zaman **belli değil** ya da zaman dilimi **hâlâ sürüyor** |
| I **lost** my keys **yesterday**. | I**'ve lost** my keys. (Şu an anahtarım yok.) |
| She **went** to Paris **in 2019**. | She**'s been** to Paris. (Hayatında bir kez) |
| I **saw** him **last week**. | I **haven't seen** him **recently**. |

## Past Simple ile kullanılan ifadeler
Bunlar **bitmiş, belli** bir zamanı gösterir ve Present Perfect ile **kullanılamaz**:
yesterday, last night / week / year, two days **ago**, **in** 2015, **when** I was a child, **at** 5 o'clock, on Monday, What time...?, **When**...?
x I have seen that film last week. => I **saw** that film last week.
x When have you arrived? => When **did** you arrive?

## Present Perfect ile kullanılan ifadeler
ever, never, just, already, yet, so far (şimdiye kadar), recently / lately (son zamanlarda), before (daha önce), how long, for, since
> I've **never** been to Japan. | Hiç Japonya'ya gitmedim.
> We've visited three museums **so far**. | Şimdiye kadar üç müze gezdik.
> Have you seen any good films **recently**? | Son zamanlarda iyi bir film izledin mi?

## Bitmemiş zaman dilimleri
**today, this week, this month, this year** henüz bitmediyse Present Perfect, bittiyse Past Simple kullanılır:
| Zaman dilimi sürüyor | Zaman dilimi bitti |
| I**'ve drunk** three coffees **today**. (gün bitmedi) | I **drank** three coffees **yesterday**. |
| She**'s called** me twice **this week**. | She **called** me twice **last week**. |
| I**'ve had** a busy morning. (hâlâ sabah) | I **had** a busy morning. (öğleden sonra söylüyorsan) |

## Konuşmanın doğal akışı
Haber ya da deneyim genelde **Present Perfect** ile açılır. Ayrıntılar (ne zaman, nerede, nasıl) **Past Simple** ile devam eder, çünkü artık belli bir olaydan bahsediliyordur.
> "**Have** you **ever been** to Italy?" "Yes, I **have**. I **went** there in 2018." | Hiç İtalya'ya gittin mi? Evet, 2018'de gittim.
> "I**'ve broken** my arm!" "Oh no! How **did** it **happen**?" "I **fell** off my bike." | Kolumu kırdım! Nasıl oldu? Bisikletten düştüm.

## Hâlâ süren durumlar: for / since
Geçmişte başlayıp **hâlâ devam eden** durumlar için Present Perfect kullanılır. Türkçede burada **şimdiki zaman** kullandığımız için hata çok yaygındır:
| Türkçe | Yanlış | Doğru |
| On yıldır burada **yaşıyorum**. | I **am living** here for ten years. | I**'ve lived** here **for** ten years. |
| Onu 2015'ten beri **tanıyorum**. | I **know** her since 2015. | I**'ve known** her **since** 2015. |
| **for** + süre | for two years, for a long time, for ages, for three days |
| **since** + başlangıç noktası | since 2015, since Monday, since I was a child, since 9 o'clock |
> **How long have** you **lived** here? | Ne zamandır burada yaşıyorsun?
! Sadece Past Simple ile **for** kullanmak "bitti" demektir: I **lived** in Ankara **for** ten years. (Orada on yıl yaşadım, artık yaşamıyorum.)

## Kontrol listesi
- Belirli, bitmiş zaman (yesterday, ago, in 2019, when) → **Past Simple**
- Zaman yok, deneyim ya da şimdiki sonuç → **Present Perfect**
- Hâlâ sürüyor + for / since → **Present Perfect** (şimdiki zaman değil!)
- Ayrıntı sorusu (When? What time?) → **Past Simple**
`,
  exExtra: [
    { t: 'mc', q: 'I ___ in Ankara for ten years, but now I live in Izmir.', o: ['lived', "'ve lived", 'am living'], a: 0,
      w: { 1: `Artık orada yaşamıyor, durum bitti → Past Simple.`, 2: `Bitmiş geçmiş durum → lived.` },
      e: `Bitmiş durum + for → **Past Simple**: I lived there for ten years.` },
    { t: 'mc', q: '"I\'ve passed my driving test!" "Congratulations! When ___ it?"', o: ['did you take', 'have you taken', 'do you take'], a: 0,
      w: { 1: `"When" soruları Present Perfect ile sorulmaz.`, 2: `Geçmiş olaya ilişkin ayrıntı → Past Simple.` },
      e: `Haber Present Perfect ile verilir, ayrıntı sorusu **Past Simple** ile sorulur.` },
    { t: 'mc', q: 'We ___ any rain so far this month.', o: ["haven't had", "didn't have", "don't have"], a: 0,
      w: { 1: `"so far this month" ay henüz bitmedi → Present Perfect.`, 2: `Şimdiye kadar → Present Perfect.` },
      e: `so far / this month (bitmedi) → **haven't had**.` },
    { t: 'fill', q: 'How long ___ you known your best friend?', a: ['have'],
      w: { do: `"How long" + hâlâ süren durum → have known.`, did: `Durum hâlâ sürüyor → have.` },
      e: `**How long have** you known...?` },
    { t: 'fill', q: 'My parents have been married ___ 1990.', a: ['since'],
      w: { for: `1990 bir başlangıç noktası → since.`, from: `Present Perfect'te başlangıç noktası since ile verilir.` },
      e: `Başlangıç noktası → **since**.` },
  ],
};
