export default {
  lesson: `
## must / have to: zorunluluk
İkisi de "-meli, -mak zorunda" anlamına gelir. Arkalarından **yalın fiil** gelir.
- **must**: Konuşanın kendi fikri, iç zorunluluk, kurallar ve yazılı talimatlar
- **have to / has to**: Dışarıdan gelen zorunluluk (iş, okul, kanun)
> I **must** call my mother. I miss her. | Annemi aramalıyım. Onu özledim.
> I **have to** wear a uniform at work. | İşte üniforma giymek zorundayım.
> She **has to** get up at 6. | Saat 6'da kalkmak zorunda.
! must'tan sonra to gelmez ve -s almaz: He **must go**. ("He musts" ve "must to go" yanlış.)
! must'ın geçmişi yoktur. Geçmiş için **had to** kullanılır: I **had to** work yesterday.

## mustn't ile don't have to: büyük fark!
- **mustn't** = yasak, yapmamalısın: You **mustn't** smoke here. (Burada sigara içmemelisin, yasak.)
- **don't have to** = gerek yok, zorunda değilsin: You **don't have to** come. (Gelmek zorunda değilsin, istersen gel.)
x You mustn't pay. It's free. => You **don't have to** pay. It's free.

## should: tavsiye
"-meli" anlamında öneri ve tavsiye verir. Daha yumuşaktır.
> You **should** see a doctor. | Bir doktora görünmelisin.
> You **shouldn't** eat so much sugar. | Bu kadar çok şeker yememelisin.
> **Should** I take an umbrella? | Şemsiye alayım mı?

## Soru
> **Do** you **have to** work on Saturdays? | Cumartesi çalışmak zorunda mısın?
> **Does** he **have to** wear a tie? | Kravat takmak zorunda mı?
`,
  anim: [
    { title: 'Zorunluluk', tr: [['Üniforma giymek', 'v'], [' zorundayım', 'x']], blocks: [['I', 's'], ['have to', 'x', 'hi', 'zorunda'], ['wear', 'v'], ['a uniform', 'n']],
      note: 'Dışarıdan gelen kural (iş, okul) → **have to**' },
    { blocks: [['She#I', 's'], ['has to#have to', 'x', 'hi'], ['wear', 'v'], ['a uniform', 'n']],
      note: 'she → **has to**' },
    { blocks: [['I', 's'], ['must', 'x', 'hi', '-malıyım'], ['call', 'v'], ['my mum', 'n']],
      note: 'Kendi içinden gelen zorunluluk → **must**. Arkasından **yalın fiil** gelir, to gelmez.' },
    { title: 'En önemli fark', rows: [[['You', 's'], ["mustn't", 'neg', 'hi', 'YASAK'], ['smoke', 'v']], [['You', 's'], ["don't have to", 'neg', 'hi', 'GEREK YOK'], ['come', 'v']]],
      note: '**mustn\'t** = yapma, yasak! **don\'t have to** = zorunda değilsin, istersen yap.' },
    { title: 'Tavsiye: should', tr: [['Doktora', 'n'], [' gitmelisin', 'v']], blocks: [['You', 's'], ['should', 'x', 'hi', 'tavsiye'], ['see', 'v'], ['a doctor', 'n']],
      note: 'Yumuşak tavsiye → **should**' },
    { title: 'Geçmişte', blocks: [['I', 's'], ['must#M', 'x', 'no'], ['work', 'v'], ['yesterday', 't']],
      note: 'must\'ın geçmiş hali yoktur...' },
    { blocks: [['I', 's'], ['had to#M', 'x', 'ok'], ['work', 'v'], ['yesterday', 't']],
      note: '...geçmişte zorunluluk için: **had to**' },
  ],
  ex: [
    { t: 'mc', q: "You ___ smoke in the hospital. It's forbidden.", o: ["mustn't", "don't have to", "shouldn't to"], a: 0,
      w: { 1: `"don't have to" = gerek yok. Burada yasak var → mustn't.`, 2: `should'dan sonra to gelmez.` },
      e: `Yasak → **mustn't**.` },
    { t: 'mc', q: "Tomorrow is Sunday. I ___ get up early.", o: ["don't have to", "mustn't", "have to"], a: 0,
      w: { 1: `"mustn't" yasak demektir. Erken kalkmak yasak değil, sadece gerekmiyor.`, 2: `Pazar günü erken kalkmak gerekmiyor.` },
      e: `Gerek yok → **don't have to**.` },
    { t: 'mc', q: 'You look tired. You ___ go to bed early.', o: ['should', 'must to', 'have'], a: 0,
      w: { 1: `must'tan sonra to gelmez.`, 2: `"have" tek başına zorunluluk bildirmez: have to.` },
      e: `Tavsiye → **should**.` },
    { t: 'mc', q: 'My sister ___ wear a uniform at school.', o: ['has to', 'have to', 'musts'], a: 0,
      w: { 1: `"My sister" = she → has to.`, 2: `must hiçbir zaman -s almaz.` },
      e: `she → **has to**.` },
    { t: 'mc', q: 'Yesterday I ___ stay at work until 9 p.m.', o: ['had to', 'must', 'musted'], a: 0,
      w: { 1: `must'ın geçmiş hali yoktur → had to.`, 2: `"musted" diye bir kelime yok → had to.` },
      e: `Geçmişte zorunluluk → **had to**.` },
    { t: 'fill', q: '___ you have to work on Saturdays?', a: ['Do'],
      w: { have: `have to sorusu do ile kurulur: Do you have to...?`, are: `have to sorusu do ile kurulur.` },
      e: `**Do** you have to...?` },
    { t: 'fill', q: 'He ___ (not / should) drink so much coffee.', a: ["shouldn't", 'should not'],
      w: { "doesn't should": `should'ın olumsuzu do ile yapılmaz: shouldn't.`, "shouldn't to": `should'dan sonra to gelmez.` },
      e: `Olumsuz tavsiye → **shouldn't**.` },
    { t: 'fill', q: "It's free. You ___ pay.", h: 'gerek yok', a: ["don't have to", 'do not have to'],
      w: { "mustn't": `"mustn't" = yasak. Ödeme yapmak yasak değil, sadece gerekmiyor.`, "haven't to": `Olumsuz do ile yapılır: don't have to.` },
      e: `Gerek yok → **don't have to**.` },
    { t: 'order', tr: 'Bir doktora görünmelisin.', a: 'You should see a doctor.', x: ['to'],
      w: { to: `should'dan sonra **to** gelmez.` }, e: `You **should see** a doctor.` },
    { t: 'order', tr: 'Saat 8\'de işte olmak zorundayım.', a: 'I have to be at work at 8.', x: ['must'],
      w: { must: `Bu dışarıdan gelen bir zorunluluk (iş). "have to" daha doğaldır, ikisi birlikte kullanılamaz.` }, e: `I **have to** be at work at 8.` },
    { t: 'fix', s: 'You must to finish this today.', i: 2, c: '',
      e: `must'tan sonra to gelmez: You must **finish** this today.` },
    { t: 'fix', s: 'She musts study for the exam.', i: 1, c: 'must',
      e: `must -s almaz: She **must** study.` },
    { t: 'fix', s: 'We must work late yesterday.', i: 1, c: 'had to',
      e: `"yesterday" geçmiş. must'ın geçmişi yoktur: We **had to** work late yesterday.` },
  ],
};
