export default {
  lesson: `
## Ne zaman kullanılır?
**Present Perfect Continuous**, geçmişte başlayan bir **eylemin süresini** vurgular. İki durumda kullanılır:
| Kullanım | Örnek |
| 1. Geçmişte başladı, **hâlâ sürüyor** | I**'ve been waiting** for an hour! (Bir saattir bekliyorum!) |
| 2. **Yeni bitti** ve izi / etkisi görülüyor | I'm tired because I**'ve been running**. (Koşuyordum, o yüzden yorgunum.) |
! Türkçede "bir saattir bekliyor**um**" deriz (şimdiki zaman). İngilizcede "I am waiting for an hour" **yanlıştır**. Geçmişte başlayıp süren eylemlerde Present Perfect (Continuous) kullanılır.

## Yapı: have / has + been + fiil-ing
| Özne | Olumlu | Olumsuz | Soru |
| I / you / we / they | I**'ve been working** | I **haven't been working** | **Have** you **been working**? |
| he / she / it | she**'s been working** | she **hasn't been working** | **Has** she **been working**? |
> She**'s been learning** Spanish **since** January. | Ocaktan beri İspanyolca öğreniyor.
> It**'s been raining** all day. | Bütün gün yağmur yağıyor.
> **How long have** you **been working** here? | Ne zamandır burada çalışıyorsun?

## Yeni bitmiş eylemin izi
Eylemi görmedin ama **sonucunu** görüyorsun:
> Your eyes are red. **Have** you **been crying**? | Gözlerin kırmızı. Ağlıyor muydun?
> The ground is wet. It**'s been raining**. | Yer ıslak. Yağmur yağıyormuş.
> Why are you out of breath? I**'ve been running**. | Neden nefes nefesesin? Koşuyordum.

## Simple mı, Continuous mu?
| Present Perfect Simple | Present Perfect Continuous |
| **Sonuç**, miktar, **kaç tane** | **Süre**, eylemin kendisi |
| I**'ve written** three emails. | I**'ve been writing** emails all morning. |
| I**'ve read** the book. (bitti) | I**'ve been reading** the book. (henüz bitmedi) |
| She**'s painted** the room. (oda hazır) | She**'s been painting** the room. (üstü boyalı, iş sürüyor olabilir) |
| How **many** pages have you read? | How **long** have you been reading? |
! Soruda **How many / How much** varsa Simple, **How long** varsa genellikle Continuous kullanılır.

## Durum fiilleri Continuous olmaz
know, like, love, want, need, believe, understand, have (sahiplik), be gibi fiillerle **Present Perfect Simple** kullanılır:
> I**'ve known** him for years. ("I've been knowing" yanlış)
> She**'s had** this car since 2015. ("has been having" yanlış)
> We**'ve been** friends for a long time. ("have been being" yanlış)

## for / since
| Kelime | Örnekler |
| **for** + süre | for two hours, for a week, for a long time, for ages |
| **since** + başlangıç noktası | since 9 o'clock, since Monday, since 2010, since I was a child |
x I'm studying English since three years. => I**'ve been studying** English **for** three years.

## Uzun süreli, kalıcı durumlar
**live, work, study** gibi fiillerde iki biçim de doğrudur:
> I**'ve lived** here for ten years. = I**'ve been living** here for ten years.
Continuous biraz daha **geçici** ya da **canlı** bir his verir.

## Kontrol listesi
- Geçmişte başladı, hâlâ sürüyor, süre önemli → **have / has been + -ing**
- Kaç tane, ne kadar, sonuç → **Present Perfect Simple**
- Durum fiili (know, like, have...) → **Simple**
- Türkçedeki "-dır ... -yor" → İngilizcede asla **am/is/are + -ing** değil
`,
  exExtra: [
    { t: 'mc', q: 'How many pages ___ so far?', o: ['have you read', 'have you been reading', 'are you reading'], a: 0,
      w: { 1: `"How many" bir miktar/sonuç sorar → Present Perfect Simple.`, 2: `Şimdiye kadar + miktar → Present Perfect Simple.` },
      e: `How **many** → Simple: have you read.` },
    { t: 'mc', q: 'The ground is wet. It ___ .', o: ["'s been raining", 'rains', "'s raining since"], a: 0,
      w: { 1: `Yeni bitmiş eylemin izi → Present Perfect Continuous.`, 2: `Kalıp hatalı.` },
      e: `Yeni bitmiş eylemin izi → **has been raining**.` },
    { t: 'fill', q: 'She ___ (have) her dog for twelve years.', a: ["'s had", 'has had'],
      w: { 'has been having': `"have" (sahiplik) durum fiilidir, continuous olmaz.`, has: `for + hâlâ süren → has had.` },
      e: `Sahiplik have → **has had** (Simple).` },
    { t: 'fill', q: 'Why are your clothes dirty? What have you ___ doing?', a: ['been'],
      w: { being: `have + been + -ing.` }, e: `What have you **been** doing?` },
    { t: 'fix', s: 'I am waiting for you since two o\'clock!', i: 1, c: 'have been',
      e: `since + hâlâ süren → I **have been** (I've been) waiting for you since two o'clock!` },
  ],
};
