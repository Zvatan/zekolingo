export default {
  lesson: `
## Temel fark: zaman belli mi?
| Past Simple | Present Perfect |
| Bitmiş bir zamanda oldu | Zaman belli değil ya da şimdiyle bağlantılı |
| I **lost** my keys **yesterday**. | I**'ve lost** my keys. (Şu an anahtarım yok.) |
| She **went** to Paris **in 2019**. | She**'s been** to Paris. (Hayatında bir kez) |
| yesterday, last week, ago, in 2010, when I was a child | ever, never, just, already, yet, so far, recently |

! Türkçede ikisi de "-dı" ile çevrilir (kaybettim, gittim). İngilizcede ise asıl soru şudur: **Belirli, bitmiş bir zaman söyleniyor mu?** Evet ise Past Simple, hayır ise çoğunlukla Present Perfect.

## Bitmemiş zaman dilimleri
**today, this week, this year** gibi henüz bitmemiş zaman dilimleriyle Present Perfect kullanılır.
> I**'ve drunk** three coffees **today**. | Bugün üç kahve içtim. (gün bitmedi)
> I **drank** three coffees **yesterday**. | Dün üç kahve içtim. (dün bitti)

## Soru-cevap akışı
Genelde konu Present Perfect ile açılır, ayrıntılar (ne zaman, nerede, nasıl) Past Simple ile verilir.
> **Have** you **ever been** to Japan? Yes, I **went** there in 2018. | Hiç Japonya'ya gittin mi? Evet, 2018'de gittim.
> I**'ve broken** my arm. How **did** it **happen**? I **fell** off my bike. | Kolumu kırdım. Nasıl oldu? Bisikletten düştüm.

## for ve since
Hâlâ süren durumlar için Present Perfect + **for** (süre) / **since** (başlangıç noktası):
> I**'ve lived** here **for** ten years. | On yıldır burada yaşıyorum.
> I**'ve known** her **since** 2015. | Onu 2015'ten beri tanıyorum.
! Türkçede "yaşıyorum" (şimdiki zaman) deriz ama İngilizcede "I am living here for ten years" yanlıştır. Doğrusu: I**'ve lived** here **for** ten years.
x When have you arrived? => When **did** you **arrive**?
x I have finished it two hours ago. => I **finished** it two hours ago.
`,
  anim: [
    { title: 'Türkçede ikisi de "-dı"', tr: [['Anahtarlarımı', 'n'], [' kaybettim', 'v']],
      note: 'İngilizcede iki farklı şekilde söylenebilir. Asıl soru şu: **zaman belli mi?**' },
    { title: 'Zaman belli → Past Simple', blocks: [['I', 's'], ['lost#V', 'v', 'hi'], ['my keys', 'n'], ['yesterday#T', 't', 'hi']],
      note: 'Dün oldu, bitti. Bitmiş zaman → **Past Simple**' },
    { title: 'Zaman yok, sonuç şimdi → Present Perfect', blocks: [['I', 's'], ["'ve lost#V", 'v', 'hi'], ['my keys', 'n']],
      note: 'Ne zaman olduğu önemli değil. Önemli olan şu: **şu an anahtarım yok**.' },
    { title: 'İpucu kelimeler', rows: [[['yesterday', 't'], ['ago', 't'], ['in 2019', 't'], ['last week', 't']], [['ever', 'v'], ['never', 'v'], ['just', 'v'], ['yet', 'v'], ['so far', 'v']]],
      note: 'Üst satırdakiler (belirli zaman) → **Past Simple**. Alt satırdakiler → **Present Perfect**.' },
    { title: 'Konuşmanın akışı', rows: [[['Have', 'q'], ['you', 's'], ['ever been', 'v', 'hi'], ['to Japan?', 'n']], [['Yes,', 'x'], ['I', 's'], ['went', 'v', 'hi'], ['in 2018', 't']]],
      note: 'Konu Present Perfect ile açılır, ayrıntı (ne zaman?) Past Simple ile verilir.' },
    { title: 'Hâlâ süren: for / since', tr: [['On yıldır', 't'], [' burada yaşıyorum', 'v']], blocks: [['I', 's'], ['am living#L', 'v', 'no'], ['here', 'n'], ['for ten years', 't']],
      note: 'Türkçede "yaşıyorum" (şimdiki zaman) deriz ama...' },
    { blocks: [['I', 's'], ["'ve lived#L", 'v', 'ok'], ['here', 'n'], ['for ten years', 't']],
      note: '...geçmişte başlayıp hâlâ süren durum → **Present Perfect** + for / since.' },
  ],
  ex: [
    { t: 'mc', q: 'I ___ my homework. Can I go out now?', o: ['have finished', 'finished'], a: 0,
      w: { 1: `Sonucu şimdiyle bağlantılı (şimdi dışarı çıkabilir miyim?) ve zaman belirtilmemiş → Present Perfect.` },
      e: `Şimdiyle bağlantılı sonuç → **have finished**.` },
    { t: 'mc', q: 'We ___ to Antalya last summer.', o: ['went', 'have gone', 'have been'], a: 0,
      w: { 1: `"last summer" bitmiş belirli bir zaman → Past Simple.`, 2: `"last summer" bitmiş belirli bir zaman → Past Simple.` },
      e: `Belirli geçmiş zaman → **went**.` },
    { t: 'mc', q: 'When ___ you start learning English?', o: ['did', 'have'], a: 0,
      w: { 1: `"When" belirli bir zaman sorar → Past Simple: When did you...?` },
      e: `**When** soruları Past Simple ile sorulur.` },
    { t: 'mc', q: 'I ___ him since we were at school.', o: ["'ve known", 'know', "'m knowing"], a: 0,
      w: { 1: `"since" ile hâlâ süren durum → Present Perfect.`, 2: `"know" durum fiilidir ve since ile Present Perfect gerekir.` },
      e: `since + başlangıç noktası → **have known**.` },
    { t: 'mc', q: "I ___ four cups of tea today and it's only 11 a.m.!", o: ["'ve had", 'had'], a: 0,
      w: { 1: `"today" henüz bitmedi → Present Perfect.` },
      e: `Bitmemiş zaman dilimi (today) → **have had**.` },
    { t: 'fill', q: 'She has worked here ___ 2018.', a: ['since'],
      w: { for: `"for" süre ile kullanılır (for 5 years). Başlangıç noktası (2018) → since.`, from: `Present Perfect'te başlangıç noktası since ile verilir.` },
      e: `Başlangıç noktası → **since** 2018.` },
    { t: 'fill', q: "They've been married ___ twenty years.", a: ['for'],
      w: { since: `"twenty years" bir süre → for.`, during: `Süre bildirirken Present Perfect ile for kullanılır.` },
      e: `Süre → **for** twenty years.` },
    { t: 'fill', q: '"Have you seen the new film?" "Yes, I ___ it on Saturday."', a: ['saw'],
      w: { 'have seen': `"on Saturday" belirli bir zaman → Past Simple: saw.`, seen: `Ayrıntı (on Saturday) Past Simple ile verilir: saw.` },
      e: `Ayrıntı ve belirli zaman → **Past Simple**: I saw it on Saturday.` },
    { t: 'fill', q: 'I ___ (never / try) Indian food. Is it spicy?', a: ["'ve never tried", 'have never tried'],
      w: { 'never tried': `Hayat deneyimi ve zaman belli değil → have never tried.`, "didn't ever try": `Hayat deneyimi → Present Perfect: I've never tried.` },
      e: `Hayat deneyimi → **have never tried**.` },
    { t: 'order', tr: 'On yıldır İzmir\'de yaşıyorum.', a: "I've lived in Izmir for ten years.", x: ['since'],
      w: { since: `"ten years" bir süre → **for**.` }, e: `I**'ve lived** in Izmir **for** ten years.` },
    { t: 'order', tr: 'Ne zaman geldin?', a: 'When did you arrive?', x: ['have'],
      w: { have: `"When" soruları Past Simple ile kurulur: **did**.` }, e: `**When did** you arrive?` },
    { t: 'fix', s: 'I have finished the report two hours ago.', i: 1, c: '',
      e: `"ago" belirli bir geçmiş zaman → Past Simple: I **finished** the report two hours ago.` },
    { t: 'fix', s: 'I live in this flat since 2020.', i: 1, c: 'have lived',
      e: `since ile hâlâ süren durum → Present Perfect: I **have lived** in this flat since 2020.` },
    { t: 'fix', s: 'Did you ever cut your own hair?', i: 0, c: 'Have',
      e: `Hayat deneyimi (ever) → **Have** you ever cut your own hair? (cut'ın 3. hali de cut)` },
  ],
};
