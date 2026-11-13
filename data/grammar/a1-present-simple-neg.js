export default {
  lesson: `
## Olumsuz: don't / doesn't
| Özne | Olumsuz |
| I / you / we / they | **don't** (do not) + fiil |
| he / she / it | **doesn't** (does not) + fiil |
> I **don't** like coffee. | Kahveyi sevmem.
> She **doesn't** eat meat. | O et yemez.
! doesn't kullanınca fiildeki **-s düşer**, çünkü -s artık does'un içindedir. "She doesn't works" yanlış, "She doesn't **work**" doğru.

## Soru: Do / Does başa gelir
> **Do** you speak English? | İngilizce konuşur musun?
> **Does** he live here? | O burada mı yaşıyor?
> Where **do** you work? | Nerede çalışıyorsun?
> What time **does** the film start? | Film saat kaçta başlıyor?
! Soruda does varsa fiil yine yalın kalır: Does he **live**...? "Does he lives" yanlıştır.

## Kısa cevaplar
> Yes, I **do**. No, I **don't**. | Evet. Hayır.
> Yes, she **does**. No, she **doesn't**. | Evet. Hayır.

## be ile karıştırma!
- Cümlede sıfat, isim ya da yer varsa **be** kullanılır: Are you tired? I'm not hungry.
- Cümlede fiil varsa **do / does** kullanılır: Do you work? I don't smoke.
x Are you like pizza? => **Do** you like pizza?
x I don't hungry. => I'**m not** hungry.
x Does she is a doctor? => **Is** she a doctor?
`,
  anim: [
    { title: 'Olumlu cümle', tr: [['O', 's'], [' burada', 'n'], [' çalışır', 'v']], blocks: [['She', 's'], ['works#V', 'v'], ['here', 'n']],
      note: 'Fiilde he / she / it için **-s** var.' },
    { title: 'Olumsuz yapalım', tr: [['O', 's'], [' burada', 'n'], [' çalışmaz', 'neg']],
      blocks: [['She', 's'], ["doesn't#AUX", 'neg', 'hi'], ['work#V', 'v', 'hi'], ['here', 'n']],
      note: '**doesn\'t** gelir ve fiildeki **-s düşer**: works → work. Çünkü -s artık does\'un içinde.' },
    { tr: [['Ben', 's'], [' burada', 'n'], [' çalışmam', 'neg']], blocks: [['I#She', 's'], ["don't#AUX", 'neg', 'hi'], ['work#V', 'v'], ['here', 'n']],
      note: 'I / you / we / they ile **don\'t**.' },
    { title: 'Şimdi soru', tr: [['Sen', 's'], [' burada', 'n'], [' çalışıyor musun?', 'q']], blocks: [['you#She', 's'], ['work#V', 'v'], ['here', 'n']],
      note: '"Burada çalışıyor musun?" demek istiyoruz...' },
    { tr: [['Sen', 's'], [' burada', 'n'], [' çalışıyor musun?', 'q']], blocks: [['Do#AUX', 'q', 'hi'], ['you#She', 's'], ['work#V', 'v'], ['here?#here', 'n']],
      note: '**Do** en başa gelir. Fiil yalın kalır.' },
    { tr: [['O', 's'], [' burada', 'n'], [' çalışıyor mu?', 'q']], blocks: [['Does#AUX', 'q', 'hi'], ['she#She', 's'], ['work#V', 'v'], ['here?#here', 'n']],
      note: 'he / she / it ile **Does**. Fiile yine **-s eklenmez**!' },
    { title: 'En sık yapılan hata', blocks: [['Does#AUX', 'q'], ['she#She', 's'], ['works#V', 'v', 'no'], ['here?#here', 'n']],
      note: '"Does she works" yanlış. -s iki kez kullanılmaz.' },
    { blocks: [['Does#AUX', 'q'], ['she#She', 's'], ['work#V', 'v', 'ok'], ['here?#here', 'n']],
      note: 'Doğrusu: Does she **work** here? Kısa cevap: Yes, she **does**. / No, she **doesn\'t**.' },
    { title: 'be mi, do mu?', rows: [[['Are', 'q'], ['you', 's'], ['tired?', 'n', '', 'sıfat']], [['Do', 'q'], ['you', 's'], ['work?', 'v', '', 'fiil']]],
      note: 'Sıfat ya da isim varsa **be** (Are you...?), fiil varsa **do** (Do you...?) kullanılır.' },
  ],
  ex: [
    { t: 'mc', q: 'I ___ like horror films.', o: ["don't", "doesn't", 'am not'], a: 0,
      w: { 1: `doesn't sadece he / she / it ile kullanılır.`, 2: `"like" bir fiil. Fiilin olumsuzu am not ile değil, don't ile yapılır.` },
      e: `I + **don't** + fiil.` },
    { t: 'mc', q: 'He ___ eat meat.', o: ["don't", "doesn't", "isn't"], a: 1,
      w: { 0: `he → doesn't.`, 2: `"eat" bir fiil, olumsuzu doesn't ile yapılır.` },
      e: `he / she / it + **doesn't** + fiil.` },
    { t: 'mc', q: "She doesn't ___ in London.", o: ['live', 'lives', 'living'], a: 0,
      w: { 1: `doesn't'tan sonra -s düşer: live.`, 2: `-ing hali burada kullanılmaz.` },
      e: `doesn't + **yalın fiil**.` },
    { t: 'mc', q: '___ your father work on Saturdays?', o: ['Do', 'Does', 'Is'], a: 1,
      w: { 0: `"your father" = he → Does.`, 2: `"work" bir fiil, soru do / does ile kurulur.` },
      e: `he / she / it sorusu → **Does**.` },
    { t: 'mc', q: '___ you like pizza?', o: ['Are', 'Do', 'Does'], a: 1,
      w: { 0: `"like" bir fiil. Fiilli sorular do ile kurulur.`, 2: `you → Do.` },
      e: `Fiilli soru: **Do** you like...?` },
    { t: 'fill', q: 'We ___ (not / watch) TV in the morning.', a: ["don't watch", 'do not watch'],
      w: { "doesn't watch": `we → don't.`, "don't watches": `don't'tan sonra fiil yalın kalır: watch.`, 'not watch': `Olumsuz için do gerekir: don't watch.` },
      e: `we + **don't watch**.` },
    { t: 'fill', q: 'My sister ___ (not / drink) coffee.', a: ["doesn't drink", 'does not drink'],
      w: { "doesn't drinks": `doesn't'tan sonra -s düşer: doesn't drink.`, "don't drink": `"My sister" = she → doesn't.` },
      e: `she + **doesn't drink**.` },
    { t: 'fill', q: 'Where ___ you live?', a: ['do'],
      w: { are: `"live" bir fiil → do.`, does: `you → do.` },
      e: `Soru kelimesi + **do** + özne + fiil: Where do you live?` },
    { t: 'fill', q: 'What time ___ the bus leave?', a: ['does'],
      w: { do: `"the bus" = it → does.`, is: `"leave" bir fiil → does.` },
      e: `it → **does**: What time does the bus leave?` },
    { t: 'fill', q: '"Does he speak Turkish?" "No, he ___."', a: ["doesn't", 'does not'],
      w: { "don't": `he → doesn't.`, "isn't": `Soru does ile sorulmuş → No, he doesn't.` },
      e: `Does he...? → Yes, he **does**. / No, he **doesn't**.` },
    { t: 'order', tr: 'Kardeşim balık sevmez.', a: "My brother doesn't like fish.", x: ['likes'],
      w: { likes: `doesn't'tan sonra fiil yalın kalır: **like**.` }, e: `My brother **doesn't like** fish.` },
    { t: 'order', tr: 'İngilizce konuşur musun?', a: 'Do you speak English?', x: ['are'],
      w: { are: `"speak" bir fiil → **Do** you...?` }, e: `**Do** you speak English?` },
    { t: 'fix', s: 'Are you like chocolate?', i: 0, c: 'Do',
      e: `"like" bir fiil → **Do** you like chocolate?` },
    { t: 'fix', s: "He doesn't plays tennis.", i: 2, c: 'play',
      e: `doesn't + yalın fiil: He doesn't **play** tennis.` },
    { t: 'fix', s: "I don't hungry now.", i: 1, c: 'am not',
      e: `"hungry" bir sıfat, fiil değil. Olumsuzu be ile yapılır: I **am not** (I'm not) hungry.` },
    { t: 'fix', s: 'Does she works here?', i: 2, c: 'work',
      e: `does'tan sonra fiil yalın kalır: Does she **work** here?` },
  ],
};
