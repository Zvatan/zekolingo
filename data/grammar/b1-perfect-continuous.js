export default {
  lesson: `
## have / has been + -ing
**Present Perfect Continuous**, geçmişte başlayıp **hâlâ süren** ya da **yeni bitmiş ve izi kalan** eylemleri anlatır. Vurgu eylemin **süresi** üzerindedir.
> I**'ve been waiting** for an hour! | Bir saattir bekliyorum!
> She**'s been learning** Spanish **since** January. | Ocaktan beri İspanyolca öğreniyor.
> **How long have** you **been working** here? | Ne zamandır burada çalışıyorsun?
! Türkçede "bir saattir bekliyorum" deriz (şimdiki zaman). İngilizcede ise "I am waiting for an hour" yanlıştır. Doğrusu: I**'ve been waiting** for an hour.

## Yeni bitmiş eylemin izi
> Your eyes are red. **Have** you **been crying**? | Gözlerin kırmızı. Ağlıyor muydun?
> I'm tired because I**'ve been running**. | Yorgunum çünkü koşuyordum.

## Simple mı, continuous mu?
| Present Perfect Simple | Present Perfect Continuous |
| Sonuç, miktar, kaç tane | Süre, eylemin kendisi |
| I**'ve written** three emails. | I**'ve been writing** emails all morning. |
| I**'ve read** the book. (bitti) | I**'ve been reading** the book. (henüz bitmedi) |
! Durum fiilleri (know, like, want, have-sahiplik) continuous olmaz: I**'ve known** him for years. ("I've been knowing" yanlış.)

## for / since
- **for** + süre: for two hours, for a long time, for ages
- **since** + başlangıç noktası: since 9 o'clock, since Monday, since I was a child
x I'm studying English since three years. => I**'ve been studying** English **for** three years.
`,
  ex: [
    { t: 'mc', q: "I'm so tired. I ___ all day.", o: ["'ve been working", "'m working", 'work'], a: 0,
      w: { 1: `Gün boyunca süren ve etkisi şimdi görülen eylem → Present Perfect Continuous.`, 2: `Süre vurgusu var → have been working.` },
      e: `Süre + şimdiki etki (yorgunluk) → **have been working**.` },
    { t: 'mc', q: 'How long ___ for the bus?', o: ['have you been waiting', 'are you waiting', 'do you wait'], a: 0,
      w: { 1: `"How long" ile süren bir eylemin süresi sorulur → Present Perfect Continuous.`, 2: `Şu an süren bir eylemin süresi → have you been waiting.` },
      e: `**How long have you been** + -ing?` },
    { t: 'mc', q: "I've ___ three chapters of the book so far.", o: ['read', 'been reading'], a: 0,
      w: { 1: `Miktar (üç bölüm) söyleniyor → Present Perfect Simple.` },
      e: `Kaç tane / ne kadar → **Simple**: I've read three chapters.` },
    { t: 'mc', q: "I ___ Ahmet for ten years. He's my best friend.", o: ["'ve known", "'ve been knowing", 'know'], a: 0,
      w: { 1: `"know" durum fiilidir, continuous olmaz.`, 2: `"for ten years" → Present Perfect gerekir.` },
      e: `Durum fiili + for → **have known**.` },
    { t: 'fill', q: 'It ___ (rain) since this morning.', a: ["'s been raining", 'has been raining'],
      w: { 'is raining': `"since this morning" ile Present Perfect Continuous gerekir.`, 'has rained': `Süre vurgusu ve hâlâ devam ediyor → has been raining daha doğal.`, 'have been raining': `it → has.` },
      e: `**has been raining** since this morning.` },
    { t: 'fill', q: "We've been living here ___ 2015.", a: ['since'],
      w: { for: `2015 bir başlangıç noktası → since.` }, e: `Başlangıç noktası → **since**.` },
    { t: 'fill', q: "She's been studying ___ three hours.", a: ['for'],
      w: { since: `"three hours" bir süre → for.` }, e: `Süre → **for**.` },
    { t: 'fill', q: 'Your hands are dirty. What have you been ___?', h: 'do', a: ['doing'],
      w: { do: `have been + -ing: doing.`, did: `have been + -ing: doing.` },
      e: `Yeni bitmiş eylemin izi: What have you been **doing**?` },
    { t: 'order', tr: 'Bir saattir seni bekliyorum!', a: "I've been waiting for you for an hour!", x: ['since'],
      w: { since: `"an hour" bir süre → **for**.` }, e: `I**'ve been waiting** for you **for** an hour!` },
    { t: 'order', tr: 'Ne zamandır İngilizce öğreniyorsun?', a: 'How long have you been learning English?', x: ['are'],
      w: { are: `Süre sorusu: How long **have** you been learning...?` }, e: `**How long have you been** learning English?` },
    { t: 'fix', s: "I'm learning English since I was ten.", i: 0, c: "I've been",
      e: `since ile Present Perfect Continuous: **I've been** learning English since I was ten.` },
    { t: 'fix', s: "He's been working here since five years.", i: 4, c: 'for',
      e: `"five years" bir süre → **for** five years.` },
    { t: 'mc', q: 'Hangisi doğru?', o: ["I've known her since university.", "I've been knowing her since university."], a: 0,
      w: { 1: `"know" durum fiilidir, continuous olmaz.` },
      e: `Durum fiilleri Present Perfect Simple ile: I've **known** her since university.` },
  ],
};
