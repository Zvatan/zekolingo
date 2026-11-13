export default {
  lesson: `
## İki fiil yan yana gelince
Türkçede ikinci fiil genellikle "-mek / -meyi / -meye" eki alır: oku**mayı** severim, git**mek** istiyorum. İngilizcede ise ikinci fiil ya **-ing** alır ya da **to + yalın fiil** şeklinde gelir. Hangisinin geleceğini **birinci fiil** belirler. Bunun kesin bir mantığı yoktur, kalıp olarak öğrenilir.

## 1) Fiil + -ing
| Fiil | Anlam | Örnek |
| enjoy | keyif almak | I **enjoy reading**. (Okumaktan keyif alırım.) |
| finish | bitirmek | She **finished cleaning** the house. |
| stop | bırakmak, durmak | He **stopped smoking**. (Sigarayı bıraktı.) |
| don't mind | sakıncası olmamak | I **don't mind waiting**. (Beklemekte sakınca görmem.) |
| keep | sürekli yapmak | He **keeps calling** me. (Sürekli beni arıyor.) |
| practise | pratik yapmak | I **practise speaking** every day. |
| miss | özlemek | I **miss living** by the sea. |
| go + aktivite | ...e gitmek | go **swimming**, go **shopping**, go **skiing**, go **fishing** |

## 2) Fiil + to + yalın fiil
| Fiil | Anlam | Örnek |
| want | istemek | I **want to learn** Spanish. |
| need | ihtiyacı olmak | You **need to rest**. |
| decide | karar vermek | We **decided to stay** at home. |
| hope | ummak | I **hope to see** you soon. |
| plan | planlamak | They **plan to buy** a house. |
| learn | öğrenmek | She's **learning to drive**. |
| try | denemek, çalışmak | I **tried to call** you. |
| forget | unutmak | Don't **forget to lock** the door. |
| promise | söz vermek | He **promised to help**. |
| would like | istemek (kibar) | I**'d like to order**, please. |

## 3) İkisi de olur: like, love, hate, start, begin
Anlam neredeyse aynıdır:
> I **like swimming**. = I **like to swim**. | Yüzmeyi severim.
> It **started raining**. = It **started to rain**. | Yağmur başladı.
! Ama **would like** her zaman **to** alır: I'd like **to** go. ("I'd like going" yanlış.)

## 4) Edattan sonra her zaman -ing
about, of, at, for, in, without, before, after, by, instead of gibi **edatlardan** sonra fiil her zaman **-ing** alır.
> I'm good **at cooking**. | Yemek yapmakta iyiyim.
> Thank you **for helping** me. | Yardım ettiğin için teşekkürler.
> She left **without saying** goodbye. | Hoşça kal demeden gitti.
> I'm interested **in learning** Japanese. | Japonca öğrenmekle ilgileniyorum.
> **Before going** to bed, I read. | Yatmadan önce okurum.
x Thank you for help me. => Thank you for **helping** me.

## 5) Amaç: to = "-mek için"
Bir şeyi **neden** yaptığını söylerken **to + yalın fiil** kullanılır. Türkçedeki "için" kelimesini "for" ile çevirmek çok yaygın bir hatadır.
> I went to the shop **to buy** bread. | Ekmek **almak için** markete gittim.
> She's saving money **to travel**. | Seyahat etmek için para biriktiriyor.
x I came here for learn English. => I came here **to learn** English.
! "for" amaç bildirirken **isimle** kullanılır: I went out **for a walk**. / We went there **for dinner**.

## 6) Fiil + kişi + to (B1'de ayrıntılı)
> I **want you to** come. ("I want that you come" yanlış) | Gelmeni istiyorum.

## Kontrol listesi
- enjoy, finish, stop, mind, keep, go → **-ing**
- want, need, decide, hope, would like → **to**
- Edattan sonra → **-ing**
- Amaç ("için") → **to** (for + isim)
`,
  exExtra: [
    { t: 'mc', q: 'My neighbour keeps ___ his music very loud.', o: ['playing', 'to play', 'play'], a: 0,
      w: { 1: `"keep" (sürekli yapmak) fiilinden sonra -ing gelir.`, 2: `keep + -ing.` },
      e: `keep + **-ing** = sürekli yapmak.` },
    { t: 'mc', q: "I'm really interested in ___ photography.", o: ['learning', 'learn', 'to learn'], a: 0,
      w: { 1: `Edattan (in) sonra -ing gelir.`, 2: `Edattan sonra to + fiil gelmez.` },
      e: `Edat (in) + **-ing**.` },
    { t: 'mc', q: 'We went out ___ a walk after dinner.', o: ['for', 'to'], a: 0,
      w: { 1: `"a walk" bir isim. Amaç isimle söylenince for kullanılır.` },
      e: `Amaç + **isim** → for (for a walk). Amaç + **fiil** → to (to walk).` },
    { t: 'fill', q: "I'd like ___ (book) a table for two, please.", a: ['to book'],
      w: { booking: `"would like" her zaman to alır.`, book: `to eksik.` },
      e: `would like + **to book**.` },
    { t: 'fill', q: 'She saves money ___ buy a car.', h: '"almak için"', a: ['to'],
      w: { for: `Amaç + fiil → to (for değil).` }, e: `Amaç → **to** buy.` },
    { t: 'fix', s: 'Thank you for invite me to your party.', i: 3, c: 'inviting',
      e: `Edattan (for) sonra -ing: Thank you for **inviting** me.` },
  ],
};
