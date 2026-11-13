export default {
  lesson: `
## Türkçede karşılığı olmayan zaman
Türkçede "Paris'e gittim" hem "geçen yıl gittim" hem de "hayatımda bir kez gittim" anlamına gelebilir. İngilizcede bunlar **farklı zamanlarla** söylenir:
| Past Simple | Present Perfect |
| **Zamanı belli**, bitmiş geçmiş | Zamanı **belli değil** ya da **şimdiyle bağlantılı** |
| I **went** to Paris **in 2019**. | I'**ve been** to Paris. (Hayatımda bulundum.) |
| I **lost** my keys **yesterday**. | I'**ve lost** my keys. (Şu an anahtarım yok.) |

## Yapı: have / has + fiilin 3. hali (V3)
| Özne | Olumlu | Olumsuz | Soru |
| I / you / we / they | I**'ve** (have) finished | I **haven't** finished | **Have** you finished? |
| he / she / it | she**'s** (has) finished | she **hasn't** finished | **Has** she finished? |
Kısa cevaplar: Yes, I **have**. / No, she **hasn't**.
! **she's finished** kısaltmasındaki **'s = has**'tir (arkasında V3 var). **she's tired**'daki 's ise "is"tir.

## Fiilin 3. hali (V3, past participle)
Düzenli fiillerde V3, V2 ile aynıdır: work → worked → **worked**. Düzensizleri ezberlemek gerekir:
| V1 | V2 (Past Simple) | V3 (Present Perfect) |
| be | was / were | **been** |
| go | went | **gone** |
| do | did | **done** |
| see | saw | **seen** |
| eat | ate | **eaten** |
| drink | drank | **drunk** |
| write | wrote | **written** |
| take | took | **taken** |
| give | gave | **given** |
| speak | spoke | **spoken** |
| break | broke | **broken** |
| forget | forgot | **forgotten** |
| fly | flew | **flown** |
| know | knew | **known** |
| buy / think | bought / thought | **bought / thought** |
| have / make | had / made | **had / made** |
| meet / find | met / found | **met / found** |
| come / become | came / became | **come / become** |
| put / cut | put / cut | **put / cut** |

## Kullanım 1: Hayat deneyimi (ever / never)
Ne zaman olduğu önemli değil, sadece **olmuş mu olmamış mı**:
> **Have** you **ever been** to Japan? | Hiç Japonya'ya gittin mi?
> I**'ve never eaten** sushi. | Hiç suşi yemedim.
> She**'s visited** ten countries. | On ülke gezdi.

## Kullanım 2: Sonucu şimdi görülen olay
> I**'ve lost** my keys. | Anahtarlarımı kaybettim. (Şu an yok.)
> He**'s broken** his leg. | Bacağını kırdı. (Şu an alçıda.)
> They**'ve finished** the project. | Projeyi bitirdiler. (Artık hazır.)

## Kullanım 3: just / already / yet
| Kelime | Anlam | Yeri | Örnek |
| **just** | az önce | have ile V3 arasında | I**'ve just** eaten. (Az önce yedim.) |
| **already** | çoktan, zaten | have ile V3 arasında | She**'s already** left. (Çoktan gitti.) |
| **yet** (olumsuz) | henüz | cümle sonunda | I **haven't** finished **yet**. (Henüz bitirmedim.) |
| **yet** (soru) | -dı mı? | cümle sonunda | **Have** you finished **yet**? (Bitirdin mi?) |

## Kullanım 4: Hâlâ süren durumlar (for / since)
> I**'ve lived** here **for** ten years. | On yıldır burada yaşıyorum.
> We**'ve known** each other **since** 2015. | 2015'ten beri birbirimizi tanıyoruz.
(Bu kullanım B1'de ayrıntılı anlatılıyor.)

## been mi, gone mu?
| | Anlam | Örnek |
| has **been** to | gitti ve **döndü** | She's **been** to Paris. (Paris'te bulundu.) |
| has **gone** to | gitti ve **hâlâ orada** | She's **gone** to Paris. (Paris'e gitti, şu an orada.) |

## Zaman belliyse Past Simple
Belirli bir geçmiş zaman (yesterday, last week, in 2010, ago, when...) varsa **Present Perfect kullanılmaz**:
x I have seen him yesterday. => I **saw** him yesterday.
x When have you arrived? => When **did** you arrive?
x I have visited Rome in 2019. => I **visited** Rome in 2019.

## Kontrol listesi
- Zaman belli mi? Evet → Past Simple. Hayır → Present Perfect.
- **have / has + V3**
- just / already → ortada, yet → sonda
`,
  exExtra: [
    { t: 'mc', q: '"Where\'s Ali?" "He ___ to the bank. He\'ll be back in ten minutes."', o: ["'s gone", "'s been", 'went'], a: 0,
      w: { 1: `"has been" = gidip dönmüş. Ali henüz dönmedi → has gone.`, 2: `Sonucu şimdi önemli (şu an yok) → Present Perfect.` },
      e: `Gitti ve hâlâ orada → **has gone**.` },
    { t: 'mc', q: '"She\'s finished" cümlesindeki \'s ne demek?', o: ['has', 'is', 'was'], a: 0,
      w: { 1: `Arkasında V3 (finished) var → has.`, 2: `was kısalmaz.` },
      e: `'s + V3 → **has**: She has finished.` },
    { t: 'fill', q: 'I have ___ (drink) three cups of coffee today.', a: ['drunk'],
      w: { drank: `have + V3: drink → drank → drunk.`, drinked: `drink düzensizdir.` },
      e: `drink → drank → **drunk**.` },
    { t: 'fill', q: 'Oh no! I\'ve ___ (forget) my password.', a: ['forgotten'],
      w: { forgot: `have + V3: forget → forgot → forgotten.`, forgeted: `forget düzensizdir.` },
      e: `forget → forgot → **forgotten**.` },
    { t: 'fill', q: "Has the film started ___?", h: '-dı mı? (cümle sonu)', a: ['yet'],
      w: { already: `Soruda cümle sonunda genelde yet kullanılır.`, just: `just cümle sonuna gelmez.` },
      e: `Soruda **yet**: Has it started yet?` },
    { t: 'mc', q: 'Hangisi doğru?', o: ['When did you buy this car?', 'When have you bought this car?', 'When did you bought this car?'], a: 0,
      w: { 1: `"When" belirli bir zaman sorar → Present Perfect değil, Past Simple.`, 2: `did'den sonra fiil yalın: buy.` },
      e: `When → **Past Simple**: When **did** you **buy** this car?` },
  ],
};
