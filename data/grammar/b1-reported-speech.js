export default {
  lesson: `
## Birinin sözünü aktarmak
Birinin söylediğini aktarırken fiil zamanı genelde **bir adım geriye** kayar ve zamirler değişir.
> "I **am** tired." → She said (that) she **was** tired. | Yorgun olduğunu söyledi.
> "I **like** pizza." → He said he **liked** pizza. | Pizzayı sevdiğini söyledi.

## Zaman kayması
| Doğrudan | Aktarılan |
| Present Simple: "I work here." | Past Simple: he **worked** there |
| Present Continuous: "I'm leaving." | Past Continuous: she **was leaving** |
| Past Simple: "I saw it." | Past Perfect: he **had seen** it |
| Present Perfect: "I've finished." | Past Perfect: she **had finished** |
| will: "I'll call you." | would: he **would** call me |
| can: "I can swim." | could: she **could** swim |

## say mi, tell mi?
- **say** + (that): She **said** (that) she was busy.
- **tell** + kişi + (that): She **told me** (that) she was busy.
! tell'den sonra **kime** söylendiği gelmelidir: "She told that..." yanlış. say'den sonra kişi gelmez: "She said me" yanlış. (Kişi varsa: said **to** me.)

## Zaman ve yer ifadeleri
| Doğrudan | Aktarılan |
| now | then |
| today | that day |
| tomorrow | the next day |
| yesterday | the day before |
| here | there |
| this | that |
x He said me that he was hungry. => He **told** me that he was hungry.
x She told she was late. => She **said** she was late.
`,
  anim: [
    { title: 'Doğrudan söz', tr: [['"Yorgunum"', 'v'], [' dedi', 'x']], blocks: [['"I', 's'], ['am#V', 'v'], ['tired"', 'n']],
      note: 'Ayşe tam olarak bunu söyledi. Şimdi bunu başkasına aktaralım...' },
    { blocks: [['She said', 'x', 'hi'], ['she#I', 's', 'hi'], ['was#V', 'v', 'hi'], ['tired', 'n']],
      note: 'Zamir değişir (I → **she**) ve zaman **bir adım geri** kayar (am → **was**).' },
    { title: 'Zaman kayması', rows: [[['am / is', 'v'], ['→ was', 'v', 'hi']], [['like', 'v'], ['→ liked', 'v', 'hi']], [['will', 'v'], ['→ would', 'v', 'hi']], [['can', 'v'], ['→ could', 'v', 'hi']]],
      note: 'Geçmiş → had + 3. hal, have done → had done' },
    { title: 'say mi, tell mi?', rows: [[['She', 's'], ['said', 'x', 'hi'], ['(that) she was busy', 'v']], [['She', 's'], ['told', 'x', 'hi'], ['me', 'n', 'hi', 'kime?'], ['she was busy', 'v']]],
      note: '**tell** kişi ister (told **me**), **say** istemez.' },
    { title: 'Sık hata', blocks: [['He', 's'], ['said#S', 'x', 'no'], ['me', 'n'], ['he was hungry', 'v']],
      note: 'Kişi (me) varsa say kullanılmaz...' },
    { blocks: [['He', 's'], ['told#S', 'x', 'ok'], ['me', 'n'], ['he was hungry', 'v']],
      note: '...doğrusu: He **told** me.' },
    { title: 'Zaman ifadeleri de kayar', rows: [[['tomorrow', 't'], ['→ the next day', 't', 'hi']], [['yesterday', 't'], ['→ the day before', 't', 'hi']], [['here', 't'], ['→ there', 't', 'hi']]],
      note: 'Aktarıldığında zaman ve yer de değişir.' },
  ],
  ex: [
    { t: 'mc', q: '"I am hungry." → He said that he ___ hungry.', o: ['was', 'is', 'has been'], a: 0,
      w: { 1: `Aktarırken zaman bir adım geriye kayar: am → was.`, 2: `am → was (Past Simple).` },
      e: `am / is → **was**.` },
    { t: 'mc', q: 'She ___ me that she was moving to Izmir.', o: ['told', 'said', 'spoke'], a: 0,
      w: { 1: `"said" sonrasında kişi (me) gelmez. Kişi varsa → told.`, 2: `"speak" söz aktarmak için kullanılmaz.` },
      e: `**tell + kişi**: She told me...` },
    { t: 'mc', q: 'He ___ that the film was boring.', o: ['said', 'told', 'told to'], a: 0,
      w: { 1: `"told" kişi ister (told me). Kişi yoksa → said.`, 2: `"told to" kalıbı yok.` },
      e: `Kişi yoksa → **said** (that)...` },
    { t: 'mc', q: '"I will help you." → She said she ___ help me.', o: ['would', 'will', 'can'], a: 0,
      w: { 1: `will → would olarak kayar.`, 2: `Cümlede will vardı → would.` },
      e: `will → **would**.` },
    { t: 'mc', q: '"I can\'t swim." → Ali said he ___ swim.', o: ["couldn't", "can't", "didn't"], a: 0,
      w: { 1: `can't → couldn't olarak kayar.`, 2: `Yetenek bildiren can't → couldn't.` },
      e: `can't → **couldn't**.` },
    { t: 'fill', q: '"I live in Bursa." → She said she ___ in Bursa.', a: ['lived'],
      w: { lives: `Present Simple → Past Simple: lived.`, live: `Zaman kayar: lived.` },
      e: `live → **lived**.` },
    { t: 'fill', q: '"I\'m watching TV." → He said he ___ watching TV.', a: ['was'],
      w: { is: `am → was.`, were: `he → was.` },
      e: `am watching → **was** watching.` },
    { t: 'fill', q: '"I have finished." → She said she ___ finished.', a: ['had'],
      w: { has: `Present Perfect → Past Perfect: had finished.`, have: `Zaman kayar: had finished.` },
      e: `have finished → **had** finished.` },
    { t: 'fill', q: '"I saw him yesterday." → She said she had seen him the ___ before.', a: ['day'],
      w: { yesterday: `Aktarımda yesterday → the day before.` },
      e: `yesterday → the **day** before.` },
    { t: 'order', tr: 'Bana yorgun olduğunu söyledi.', a: 'She told me that she was tired.', x: ['said'],
      w: { said: `Kişi (me) varsa **told** kullanılır.` }, e: `She **told me** that she **was** tired.` },
    { t: 'order', tr: 'Ertesi gün arayacağını söyledi.', a: 'He said he would call the next day.', x: ['will'],
      w: { will: `Aktarımda will → **would**.` }, e: `He said he **would** call **the next day**.` },
    { t: 'fix', s: 'He said me that he was busy.', i: 1, c: 'told',
      e: `Kişi (me) varsa tell kullanılır: He **told** me that he was busy.` },
    { t: 'fix', s: 'She told that she loved the book.', i: 1, c: 'said',
      e: `Kişi yoksa say kullanılır: She **said** that she loved the book.` },
    { t: 'fix', s: 'Tom said he is going to be late, and he was.', i: 3, c: 'was',
      e: `Aktarımda zaman geriye kayar: Tom said he **was** going to be late.` },
  ],
};
