export default {
  lesson: `
## used to: eskiden ...-ırdı
**used to + yalın fiil**, geçmişte düzenli olan ama **artık olmayan** alışkanlık ve durumları anlatır.
> I **used to play** football every day. | Eskiden her gün futbol oynardım. (artık oynamıyorum)
> She **used to have** long hair. | Eskiden uzun saçları vardı.
> There **used to be** a cinema here. | Eskiden burada bir sinema vardı.
! used to sadece **geçmişte** kullanılır. Şimdiki alışkanlık için **usually** kullanılır: I **usually** get up at 7. ("I use to get up" yanlış.)

## Olumsuz ve soru: use to (d yok!)
did / didn't varsa **use to** yazılır, çünkü geçmiş bilgisi did'in içindedir.
> I **didn't use to** like vegetables. | Eskiden sebze sevmezdim.
> **Did** you **use to** live in Ankara? | Eskiden Ankara'da mı yaşardın?
x Did you used to smoke? => Did you **use to** smoke?

## would: geçmişteki tekrarlanan eylemler
Hikâye anlatırken tekrarlanan **eylemler** için would de kullanılır. **Durumlar** için kullanılmaz.
> Every summer, we **would go** to my grandmother's village. | Her yaz büyükannemin köyüne giderdik.
- Eylem: We **used to / would** swim in the river. ✓
- Durum: I **used to** have a dog. ✓ / I would have a dog. ✗

## used to ile karıştırılanlar
- **be used to + -ing** = alışkın olmak: I'm used to getting up early. (B2 konusu)
- **Past Simple**: Tek seferlik olaylar için used to kullanılmaz: I **went** to Paris in 2019. ("I used to go to Paris in 2019" yanlış.)
`,
  anim: [
    { title: 'Eskiden ...ırdım', tr: [['Eskiden', 't'], [' futbol', 'n'], [' oynardım', 'v']], blocks: [['I', 's'], ['used to', 'x', 'hi', 'eskiden'], ['play', 'v'], ['football', 'n']],
      note: '**used to + yalın fiil**: eskiden vardı, **artık yok**.' },
    { blocks: [['There', 's'], ['used to', 'x'], ['be', 'v', 'hi'], ['a cinema here', 'n']],
      note: 'Durumlar için de kullanılır: "Eskiden burada bir sinema vardı."' },
    { title: 'Olumsuz ve soruda d düşer', blocks: [['I', 's'], ["didn't", 'neg', 'hi'], ['use to#U', 'x', 'hi'], ['like', 'v'], ['vegetables', 'n']],
      note: '**did** varsa **use to** yazılır, çünkü geçmiş bilgisi did\'in içinde.' },
    { blocks: [['Did', 'q', 'hi'], ['you', 's'], ['use to#U', 'x'], ['smoke?', 'v']],
      note: 'Soru: Did you **use to** ...?' },
    { title: 'Şimdiki alışkanlık değil!', blocks: [['I', 's'], ['use to#U2', 'x', 'no'], ['get up', 'v'], ['at 7', 't']],
      note: 'Bugünkü alışkanlık için used to kullanılmaz...' },
    { blocks: [['I', 's'], ['usually#U2', 't', 'ok'], ['get up', 'v'], ['at 7', 't']],
      note: '...**usually** + Present Simple kullanılır.' },
    { title: 'would: tekrarlanan eylemler', rows: [[['We', 's'], ['would', 'x', 'hi'], ['swim', 'v', '', 'eylem ✓']], [['I', 's'], ['used to', 'x', 'hi'], ['have a dog', 'v', '', 'durum: sadece used to']]],
      note: 'Hikâye anlatırken eylemlerde **would** de olur. Durumlarda olmaz.' },
  ],
  ex: [
    { t: 'mc', q: "I ___ smoke, but I stopped five years ago.", o: ['used to', 'use to', 'was used to'], a: 0,
      w: { 1: `Olumlu cümlede "used to" yazılır.`, 2: `"be used to" = alışkın olmak. Eski alışkanlık → used to.` },
      e: `Eski alışkanlık (artık yok) → **used to + yalın fiil**.` },
    { t: 'mc', q: 'Did you ___ live near the sea?', o: ['use to', 'used to', 'using to'], a: 0,
      w: { 1: `Did varsa "use to" yazılır (d yok).`, 2: `Kalıp: Did you use to...?` },
      e: `did + **use to** (d yok).` },
    { t: 'mc', q: 'There ___ a big tree in front of our house, but they cut it down.', o: ['used to be', 'would be', 'was used to be'], a: 0,
      w: { 1: `would durumlar (be, have) için kullanılmaz.`, 2: `Böyle bir yapı yok.` },
      e: `Geçmişteki durum → **used to be**.` },
    { t: 'mc', q: 'I ___ go to the gym three times a week. I love it!', o: ['usually', 'use to', 'used to'], a: 0,
      w: { 1: `Şimdiki alışkanlık için "use to" kullanılmaz → usually.`, 2: `"I love it" şu an da devam ettiğini gösterir. used to = artık değil.` },
      e: `Şimdiki alışkanlık → **usually** + Present Simple.` },
    { t: 'mc', q: 'When I was a child, my father ___ read me a story every night.', o: ['would', 'was', 'had'], a: 0,
      w: { 1: `Tekrarlanan geçmiş eylem → would (ya da used to) read.`, 2: `"had read" Past Perfect olur, anlamı farklıdır.` },
      e: `Tekrarlanan geçmiş eylem → **would / used to**.` },
    { t: 'fill', q: 'She ___ (not / like) coffee, but now she drinks it every day.', a: ["didn't use to like", 'did not use to like'],
      w: { "didn't used to like": `didn't varsa "use to" yazılır (d yok).`, "used not to like": `Doğru ama çok resmi. Günlük dilde: didn't use to like.` },
      e: `Olumsuz: **didn't use to** + yalın fiil.` },
    { t: 'fill', q: 'We ___ (go) camping every summer when I was young.', h: 'used to ile yaz', a: ['used to go'],
      w: { 'use to go': `Olumlu cümlede "used to".`, 'used to went': `used to + yalın fiil: go.` },
      e: `**used to go**.` },
    { t: 'fill', q: 'My grandfather ___ to be a fisherman.', a: ['used'],
      w: { use: `Olumlu cümlede "used to".`, was: `Kalıp: used to be.` },
      e: `He **used to** be a fisherman. (Eskiden balıkçıydı.)` },
    { t: 'order', tr: 'Eskiden kısa saçım vardı.', a: 'I used to have short hair.', x: ['would'],
      w: { would: `"have" (sahiplik) bir durumdur. would durumlarla kullanılmaz.` }, e: `I **used to have** short hair.` },
    { t: 'order', tr: 'Eskiden burada mı çalışırdın?', a: 'Did you use to work here?', x: ['used'],
      w: { used: `Did varsa **use to** yazılır (d yok).` }, e: `**Did** you **use to** work here?` },
    { t: 'fix', s: 'Did you used to play an instrument?', i: 2, c: 'use',
      e: `did varsa d düşer: Did you **use** to play...?` },
    { t: 'fix', s: 'I use to walk to school when I was a child.', i: 1, c: 'used',
      e: `Olumlu geçmiş: I **used** to walk to school.` },
    { t: 'fix', s: 'When I was young, I would have a red bike.', i: 5, c: 'used to',
      e: `"have" (sahiplik) bir durum. would durumlarla kullanılmaz: I **used to** have a red bike.` },
  ],
};
