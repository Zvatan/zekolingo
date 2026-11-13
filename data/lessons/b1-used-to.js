export default {
  lesson: `
## used to: "eskiden ...ırdı"
**used to + yalın fiil**, geçmişte **düzenli olarak** yapılan ya da var olan ama **artık olmayan** şeyleri anlatır. Türkçedeki "eskiden ...ırdım / ...ardı" ile aynıdır.
> I **used to play** football every day. | Eskiden her gün futbol oynardım. (Artık oynamıyorum.)
> She **used to have** long hair. | Eskiden uzun saçları vardı. (Artık yok.)
> There **used to be** a cinema here. | Eskiden burada bir sinema vardı.
> We **used to live** in Ankara. | Eskiden Ankara'da yaşardık.

## Yapı
| | Örnek |
| Olumlu | I / she / they **used to** + yalın fiil |
| Olumsuz | I **didn't use to** like vegetables. (Eskiden sebze sevmezdim.) |
| Soru | **Did** you **use to** smoke? (Eskiden sigara içer miydin?) |
| Kısa cevap | Yes, I **did**. / No, I **didn't**. |
### used mi, use mu?
**did / didn't** varsa **use to** yazılır (d yok), çünkü geçmiş bilgisi did'in içindedir. Bu, "didn't **go**" mantığının aynısıdır.
x Did you used to smoke? => Did you **use to** smoke?
x I didn't used to like it. => I didn't **use to** like it.
! Okunuşu ikisinde de aynıdır: "yuust tu".

## used to SADECE geçmiş içindir
Şimdiki alışkanlıklar için used to kullanılmaz. Onun yerine **usually + Present Simple** kullanılır:
x I use to get up at 7. => I **usually** get up at 7.
| Geçmiş alışkanlık (artık yok) | Şimdiki alışkanlık |
| I **used to** drink tea. | I **usually** drink coffee. |

## Tek seferlik olaylar için kullanılmaz
used to **tekrar eden** alışkanlıklar ve **süren** durumlar içindir. Bir kez olmuş olaylar için Past Simple kullanılır:
x I used to go to Paris in 2019. => I **went** to Paris in 2019.

## would: hikâyelerde tekrarlanan eylemler
Geçmişteki tekrarlanan **eylemleri** anlatırken (özellikle anı ve hikâyelerde) **would** de kullanılabilir:
> Every summer, we **would go** to my grandmother's village. We **would swim** in the river and **would eat** fresh figs. | Her yaz büyükannemin köyüne giderdik. Nehirde yüzer, taze incir yerdik.
Ama **durumlar** için (be, have, live, like, know gibi) **would kullanılmaz**:
| | used to | would |
| Tekrarlanan eylem | We used to swim. ✓ | We would swim. ✓ |
| Durum | I used to have a dog. ✓ | I would have a dog. ✗ |
| Durum | She used to be shy. ✓ | She would be shy. ✗ |

## Karıştırılan yapılar
| Yapı | Anlam | Örnek |
| **used to** + yalın fiil | eskiden ...ırdı | I used to **live** in Izmir. |
| **be used to** + -ing / isim | alışkın olmak | I'm used to **living** alone. (B2) |
| **get used to** + -ing / isim | alışmak | I'm getting used to **the cold**. (B2) |

## Kontrol listesi
- Geçmişte vardı / yapılırdı, artık yok → **used to**
- did / didn't varsa → **use to** (d yok)
- Şimdiki alışkanlık → **usually** (used to değil)
- Hikâyede tekrarlanan eylem → **would** de olur. Durumlarda olmaz.
`,
  anim: [
    { title: 'Eskiden ...ırdım', time: [['rep', 0.04, 0.32, 'her gün oynardım', 'v'], ['bar', 0.38, 0.6, 'artık yok', 'neg', 'b']],
      tr: [['Eskiden', 't'], [' futbol', 'n'], [' oynardım', 'v']], blocks: [['I', 's'], ['used to', 'x', 'hi', 'eskiden'], ['play', 'v', '', 'yalın'], ['football', 'n']],
      note: 'Geçmişte **düzenli** olan, ama **artık olmayan** alışkanlık. Noktalar şimdiye ulaşmıyor.' },
    { title: 'Durumlar için de', time: [['bar', 0.04, 0.34, 'sinema vardı', 'v']],
      blocks: [['There', 's'], ['used to', 'x', 'hi'], ['be', 'v'], ['a cinema here', 'n']],
      note: 'Eskiden burada bir sinema **vardı** (şimdi yok).' },
    { title: 'Olumsuz ve soru: d düşer', blocks: [['I', 's'], ["didn't", 'neg', 'hi'], ['use to#U', 'x', 'hi', 'd yok!'], ['like', 'v'], ['vegetables', 'n']],
      note: '**did** varsa **use to** yazılır. "didn\'t go" mantığının aynısı.' },
    { blocks: [['Did', 'q', 'hi'], ['you', 's'], ['use to#U', 'x'], ['smoke?', 'v']], note: 'Soru: Did you **use to**...?' },
    { blocks: [['Did', 'q'], ['you', 's'], ['used to#U', 'x', 'no'], ['smoke?', 'v']], note: '"Did you used to" yanlış.' },
    { title: 'Şimdiki alışkanlık değil!', time: [['rep', 0.4, 0.9, 'şimdiki rutin', 'v']],
      blocks: [['I', 's'], ['use to#N', 'x', 'no'], ['get up', 'v'], ['at 7', 't']],
      note: 'Bugünkü alışkanlık için "use to" yok...' },
    { time: [['rep', 0.4, 0.9, 'şimdiki rutin', 'v']], blocks: [['I', 's'], ['usually#N', 't', 'ok'], ['get up', 'v'], ['at 7', 't']],
      note: '...**usually** + Present Simple.' },
    { title: 'Tek seferlik olay: Past Simple', time: [['dot', 0.24, '2019\'da bir kez', 'v']],
      rows: [[['I', 's'], ['used to go', 'x', 'no'], ['to Paris', 'n'], ['in 2019', 't']], [['I', 's'], ['went', 'v', 'ok'], ['to Paris', 'n'], ['in 2019', 't']]],
      note: 'used to **tekrar eden** şeyler içindir. Bir kez olan → Past Simple.' },
    { title: 'would: hikâyedeki tekrarlar', rows: [[['Every summer', 't'], ['we', 's'], ['would', 'x', 'hi'], ['swim', 'v', '', 'eylem ✓']], [['I', 's'], ['would', 'x', 'no'], ['have a dog', 'v', '', 'durum ✗']]],
      note: 'Tekrarlanan **eylemler** için would de olur. **Durumlar** (have, be, live, like) için olmaz.' },
    { title: 'Özet', time: [['rep', 0.04, 0.34, 'used to', 'v'], ['bar', 0.38, 0.6, 'artık değil', 'neg', 'b']],
      rows: [[['+', 'x'], ['used to', 'x', 'hi'], ['+ V1', 'v']], [['− / ?', 'x'], ["didn't / Did ... use to", 'q', 'hi'], ['+ V1', 'v']]],
      note: 'Eskiden vardı, artık yok → **used to**.' },
  ],
  exExtra: [
    { t: 'mc', q: 'My grandfather ___ be a fisherman when he was young.', o: ['used to', 'would', 'use to'], a: 0,
      w: { 1: `"be" bir durum, would ile kullanılmaz.`, 2: `Olumlu cümlede used to.` },
      e: `Durum → sadece **used to**.` },
    { t: 'mc', q: 'I ___ to Rome last year. It was amazing!', o: ['went', 'used to go', 'would go'], a: 0,
      w: { 1: `Tek seferlik olay → Past Simple.`, 2: `Tek seferlik olay → Past Simple.` },
      e: `Bir kez olmuş olay → **Past Simple**.` },
    { t: 'mc', q: 'Hangisi "Eskiden burada bir park vardı" demek?', o: ['There used to be a park here.', 'There use to be a park here.', 'There would be a park here.'], a: 0,
      w: { 1: `Olumlu cümlede used to.`, 2: `Durum (be) would ile anlatılmaz.` },
      e: `**There used to be** = eskiden vardı.` },
    { t: 'fill', q: "We didn't ___ to have a car. We walked everywhere.", a: ['use'],
      w: { used: `didn't varsa d düşer: use to.` }, e: `didn't + **use to**.` },
  ],
};
