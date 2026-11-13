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
  anim: [
    { title: 'Bir saattir bekliyorum!', time: [['bar', 0.24, 0.5, 'bekliyorum', 'v'], ['span', 0.24, 0.5, 'for an hour', 't']],
      tr: [['Bir saattir', 't'], [' bekliyorum', 'v']], blocks: [['I', 's'], ['am waiting#W', 'v', 'no'], ['for an hour', 't']],
      note: 'Türkçe gibi düşününce "am waiting" çıkıyor. Ama bu yanlış...' },
    { time: [['bar', 0.24, 0.5, 'hâlâ sürüyor', 'v'], ['span', 0.24, 0.5, 'for an hour', 't']],
      blocks: [['I', 's'], ["'ve been", 'x', 'hi', 'have been'], ['waiting#W', 'v', 'hi', '-ing'], ['for an hour', 't']],
      note: 'Geçmişte **başladı**, şimdiye kadar **sürdü**, hâlâ sürüyor → **have been + -ing**.' },
    { title: 'Formül', blocks: [['have / has', 'x', 'hi'], ['been', 'x', 'hi'], ['V-ing', 'v', 'hi']],
      note: 'Üç parça: have/has + **been** + fiil-ing.' },
    { rows: [[['I · you · we · they', 's'], ['have been', 'x', 'hi'], ['working', 'v']], [['he · she · it', 's'], ['has been', 'x', 'hi'], ['working', 'v']]],
      note: 'he / she / it → **has been**.' },
    { title: 'for mu, since mi?', time: [['span', 0.2, 0.5, 'for 2 hours (süre)', 't'], ['dot', 0.2, 'since 9:00 (başlangıç)', 'q', 'b']],
      rows: [[['for', 't', 'hi'], ['two hours · a week · ages', 'n']], [['since', 'q', 'hi'], ['9 o\'clock · Monday · 2015', 'n']]],
      note: '**for** + ne kadar süre (parantez), **since** + başlangıç noktası (nokta).' },
    { title: 'Soru: How long?', blocks: [['How long', 'q', 'hi'], ['have', 'q'], ['you', 's'], ['been learning', 'v'], ['English?', 'n']],
      note: '"Ne zamandır ...yorsun?" → **How long have you been ...ing?**' },
    { title: 'Kullanım 2: Yeni bitti, izi var', time: [['bar', 0.3, 0.47, 'koşuyordum', 'v'], ['dot', 0.5, 'yorgunum', 'q', 'b']],
      blocks: [["I'm tired", 'q'], ['because', 'x'], ["I've been running", 'v', 'hi']],
      note: 'Eylem az önce bitti, **etkisi** (yorgunluk, ter, ıslaklık) şu an görülüyor.' },
    { title: 'Süre mi, sonuç mu?', time: [['bar', 0.2, 0.5, 'been writing (süre)', 'v'], ['dot', 0.28, '1', 'n', 'b'], ['dot', 0.36, '2', 'n', 'b'], ['dot', 0.44, '3', 'n', 'b']],
      rows: [[["I've been", 'x'], ['writing', 'v', 'hi'], ['all morning', 't', '', 'süre']], [["I've", 'x'], ['written', 'n', 'hi'], ['3 emails', 'x', '', 'sonuç / sayı']]],
      note: 'Ne kadar **süre** → Continuous. Kaç **tane**, sonuç → Simple.' },
    { title: 'Durum fiilleri hariç', blocks: [["I've been", 'x', 'no'], ['knowing', 'v', 'no'], ['her', 'n'], ['for years', 't']],
      note: 'know, like, want, have (sahiplik) continuous olmaz...' },
    { blocks: [["I've", 'x', 'ok'], ['known', 'v', 'ok'], ['her', 'n'], ['for years', 't']],
      note: '...onlarla **Present Perfect Simple**: I\'ve known her for years.' },
    { title: 'Özet', time: [['bar', 0.2, 0.5, 'başladı → hâlâ sürüyor', 'v']], blocks: [['have / has been', 'x', 'hi'], ['+ V-ing', 'v', 'hi']],
      note: 'Geçmişten şimdiye süren eylem, süre vurgusu → **Present Perfect Continuous**.' },
  ],
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
