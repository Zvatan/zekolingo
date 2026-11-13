export default {
  lesson: `
## İki zamanı karşılaştır
| Present Simple | Present Continuous |
| Alışkanlık, rutin, genel gerçek | Şu an ya da bu aralar olan |
| I **work** in a bank. | I'**m working** at home today. |
| She **drinks** tea every morning. | She'**s drinking** coffee now. |
| always, usually, every day, often | now, at the moment, today, this week |

> I usually **walk** to work, but today I**'m taking** the bus. | Genelde işe yürürüm ama bugün otobüse biniyorum.
> He **plays** tennis every Sunday. | Her pazar tenis oynar.
> Look! He**'s playing** tennis now. | Bak! Şu an tenis oynuyor.

! Türkçede "çalışıyorum" hem "her gün çalışırım" hem de "şu an çalışıyorum" anlamına gelebilir. İngilizcede ise ikisi ayrıdır: I **work** here (kalıcı) / I'**m working** now (şu an).

## Geçici durumlar
Bu aralar devam eden, kalıcı olmayan durumlar için de continuous kullanılır.
> I**'m reading** a great book these days. | Bu aralar harika bir kitap okuyorum.
> She **lives** in Ankara, but she**'s staying** with her aunt this month. | Ankara'da yaşıyor ama bu ay teyzesinde kalıyor.

## Durum fiilleri (stative verbs)
Bu fiiller eylem değil, durum bildirir ve genelde **-ing almaz**:
- Duygu: like, love, hate, want, need, prefer
- Düşünce: know, think (fikir), believe, understand, remember, mean
- Sahiplik ve duyular: have (sahiplik), own, seem, look like, sound
> I **know** the answer. | Cevabı biliyorum.
x I am knowing the answer. => I **know** the answer.
! "think" fikir bildiriyorsa -ing almaz: I **think** it's a good idea. Ama "düşünüp taşınmak" anlamında alabilir: I**'m thinking** about my holiday.
! "have" sahiplik ise -ing almaz (I **have** a car), ama eylemse alabilir (I**'m having** lunch, I'**m having** a shower).
`,
  anim: [
    { title: 'Türkçede ikisi de "çalışıyorum"', tr: [['Bankada', 'n'], [' çalışıyorum', 'v']],
      note: 'Bu cümle "orada işim var" da olabilir, "şu an çalışıyorum" da. İngilizcede ikisi **ayrı** söylenir.' },
    { title: 'Kalıcı / rutin', blocks: [['I', 's'], ['work#V', 'v', 'hi'], ['in a bank', 'n'], ['every day#T', 't']],
      note: 'İşim, alışkanlığım → **Present Simple**' },
    { title: 'Şu an / geçici', blocks: [['I', 's'], ['am', 'x', 'hi'], ['working#V', 'v', 'hi'], ['at home', 'n'], ['today#T', 't']],
      note: 'Bugün, şu an, bu aralar → **Present Continuous**' },
    { title: 'İpucu kelimeler', rows: [[['always · usually · every day', 't', '', 'Present Simple']], [['now · today · this week', 't', '', 'Present Continuous']]],
      note: 'Cümledeki zaman ifadesi çoğu zaman cevabı verir.' },
    { title: 'Bir cümlede ikisi', blocks: [['I', 's'], ['usually', 't'], ['walk', 'v', 'hi'], ['but today', 't'], ["I'm taking", 'v', 'hi'], ['the bus', 'n']],
      note: 'Genelde yürürüm (rutin), ama bugün otobüse biniyorum (geçici).' },
    { title: 'Durum fiilleri -ing almaz', blocks: [['I', 's'], ['am knowing#K', 'v', 'no'], ['the answer', 'n']],
      note: 'know, like, want, need, understand **durum** bildirir...' },
    { blocks: [['I', 's'], ['know#K', 'v', 'ok'], ['the answer', 'n']],
      note: '...şu an bile olsa: I **know** the answer.' },
  ],
  ex: [
    { t: 'mc', q: 'My father ___ in a bank. He has worked there for 20 years.', o: ['works', 'is working'], a: 0,
      w: { 1: `20 yıldır orada çalışıyor, yani kalıcı bir durum → Present Simple.` },
      e: `Kalıcı durumlar ve işler → **Present Simple**: He **works** in a bank.` },
    { t: 'mc', q: "Shh! I ___ to the news.", o: ['am listening', 'listen'], a: 0,
      w: { 1: `"Shh!" konuşma anında dinlediğini gösterir → Present Continuous.` },
      e: `Şu an olan eylem → **am listening**.` },
    { t: 'mc', q: 'I ___ what you mean.', o: ['understand', 'am understanding'], a: 0,
      w: { 1: `"understand" durum fiilidir, -ing almaz.` },
      e: `Durum fiilleri (know, understand, want...) -ing almaz: I **understand**.` },
    { t: 'mc', q: 'We usually ___ dinner at 7.', o: ['have', 'are having'], a: 0,
      w: { 1: `"usually" bir alışkanlık bildirir → Present Simple.` },
      e: `Alışkanlık + usually → **Present Simple**: We usually **have** dinner at 7.` },
    { t: 'mc', q: "Can I call you back? We ___ dinner right now.", o: ['are having', 'have'], a: 0,
      w: { 1: `"right now" şu anı gösterir. "have dinner" bir eylem olduğu için -ing alabilir.` },
      e: `Eylem anlamındaki have -ing alabilir: We **are having** dinner (şu an yemek yiyoruz).` },
    { t: 'fill', q: 'She ___ (stay) with her cousin this week.', a: ['is staying', "'s staying"],
      w: { stays: `"this week" geçici bir durum → is staying.`, staying: `be fiili eksik: is staying.` },
      e: `Geçici durum (bu hafta) → **is staying**.` },
    { t: 'fill', q: 'Water ___ (freeze) at 0°C.', a: ['freezes'],
      w: { 'is freezing': `Bu genel bir gerçek → Present Simple: freezes.`, freeze: `Water = it → freezes.` },
      e: `Genel gerçekler → **Present Simple**: Water **freezes** at 0°C.` },
    { t: 'fill', q: 'I ___ (not / want) to go out tonight.', a: ["don't want", 'do not want'],
      w: { "'m not wanting": `"want" durum fiilidir, -ing almaz: don't want.`, "am not wanting": `"want" durum fiilidir, -ing almaz: don't want.` },
      e: `want → **don't want** (Present Simple).` },
    { t: 'mc', q: 'What ___ these days? Anything interesting?', o: ['are you reading', 'do you read'], a: 0,
      w: { 1: `"these days" bu aralar devam eden bir şeyi sorar → Present Continuous.` },
      e: `Bu aralar olan şeyler → Present Continuous: What **are you reading** these days?` },
    { t: 'order', tr: 'Genelde otobüsle giderim ama bugün yürüyorum.', a: "I usually take the bus, but today I'm walking.", x: ['walk'],
      w: { walk: `"today" şu anki, geçici bir durum → **'m walking**.` }, e: `usually → Present Simple, today → Present Continuous.` },
    { t: 'order', tr: 'Bu kitabı seviyorum.', a: 'I like this book.', x: ['am', 'liking'],
      w: { am: `"like" durum fiilidir, Present Continuous ile kullanılmaz.`, liking: `"like" durum fiilidir, -ing almaz.` }, e: `I **like** this book.` },
    { t: 'mc', q: 'Hangisi doğru?', o: ['I know her brother very well.', 'I am knowing her brother very well.'], a: 0,
      w: { 1: `"know" durum fiilidir, -ing almaz.` },
      e: `Durum fiilleri (know, like, want...) Present Continuous ile kullanılmaz: I **know** her brother.` },
    { t: 'fix', s: 'Look! It snows outside.', i: 2, c: 'is snowing',
      e: `"Look!" şu anı gösterir → It **is snowing** outside.` },
    { t: 'mc', q: 'Hangisi doğru?', o: ['She goes to the gym every day.', 'She is going to the gym every day.'], a: 0,
      w: { 1: `"every day" bir rutin bildirir → Present Simple.` },
      e: `Rutin + every day → **Present Simple**: She **goes** to the gym every day.` },
  ],
};
