export default {
  lesson: `
## Türkçede tek zaman, İngilizcede iki
Türkçede "Ne iş yapıyorsun?" ve "Şu an ne yapıyorsun?" sorularının ikisinde de "-yor" kullanılır. İngilizcede ise bunlar **iki ayrı zamandır**. Hangisini seçeceğin, olayın **kalıcı mı geçici mi**, **rutin mi şu an mı** olduğuna bağlıdır.
| | Present Simple | Present Continuous |
| Yapı | I work / she works | I'm working / she's working |
| Ne zaman? | Rutin, alışkanlık, kalıcı durum, genel gerçek | Şu an, bu aralar, geçici durum |
| Örnek | I **work** in a bank. (İşim bu) | I'**m working** at home today. (Bugünlük) |
| Örnek | She **drinks** tea every morning. | She'**s drinking** coffee now. |
| Soru | What **do** you **do**? (Mesleğin ne?) | What **are** you **doing**? (Şu an ne yapıyorsun?) |

## 1) Rutin mi, şu an mı?
> He **plays** tennis every Sunday. | Her pazar tenis oynar. (rutin)
> Look! He'**s playing** tennis now. | Bak! Şu an tenis oynuyor.
> I usually **walk** to work, but today I'**m taking** the bus. | Genelde işe yürürüm, ama bugün otobüse biniyorum.

## 2) Kalıcı mı, geçici mi?
> She **lives** in Ankara. | Ankara'da yaşıyor. (evi orada)
> She'**s staying** with her aunt this month. | Bu ay teyzesinde kalıyor. (geçici)
> I **work** for a bank. | Bir bankada çalışıyorum. (işim)
> I'**m working** on a new project these days. | Bu aralar yeni bir proje üzerinde çalışıyorum.

## 3) Değişen ve gelişen durumlar
Bir şey yavaş yavaş değişiyorsa Present Continuous kullanılır:
> The climate **is getting** warmer. | İklim ısınıyor.
> Your English **is improving**! | İngilizcen gelişiyor!

## 4) İpucu kelimeler
| Present Simple | Present Continuous |
| always, usually, often, sometimes, never | now, right now, at the moment |
| every day / week, on Mondays | today, this week, this month |
| once a week, twice a year | these days, currently, Look!, Listen! |

## 5) Durum fiilleri: Continuous olmaz
Bazı fiiller bir **eylem** değil, **durum** bildirir. Bunlar şu an söylense bile **Present Simple** ile kullanılır:
| Grup | Fiiller |
| Duygu | like, love, hate, want, need, prefer |
| Düşünce | know, understand, believe, remember, forget, mean, agree |
| Sahiplik | have (sahip olmak), own, belong |
| Duyular, görünüş | see, hear, smell, taste, seem, look like |
> I **know** the answer. ("I'm knowing" yanlış) | Cevabı biliyorum.
> This bag **belongs** to me. | Bu çanta bana ait.
### Anlamı değişince -ing alabilenler
| Durum (Simple) | Eylem (Continuous) |
| I **have** a car. (sahiplik) | I'**m having** lunch / a shower. (yemek yemek, duş almak) |
| I **think** it's a good idea. (fikir) | I'**m thinking** about my holiday. (düşünüp taşınmak) |
| The soup **tastes** good. (tadı iyi) | He'**s tasting** the soup. (tadına bakıyor) |
| I **see** the problem. (anlıyorum) | I'**m seeing** the doctor tomorrow. (görüşeceğim) |

## 6) always + Continuous: şikâyet
Sinir bozucu, sürekli tekrarlanan bir davranışı anlatmak için:
> He'**s always losing** his keys! | Sürekli anahtarlarını kaybediyor!

## Kontrol listesi
- Rutin, kalıcı, genel gerçek mi? → **Present Simple**
- Şu an, bu aralar, geçici, değişen mi? → **Present Continuous**
- Durum fiili mi (know, want, like, need)? → Her zaman **Simple**
`,
  exExtra: [
    { t: 'mc', q: '"What do you do?" ne demek?', o: ['Ne iş yaparsın? (Mesleğin ne?)', 'Şu an ne yapıyorsun?', 'Ne yaptın?'], a: 0,
      w: { 1: `"Şu an ne yapıyorsun?" = What are you doing?`, 2: `"Ne yaptın?" = What did you do?` },
      e: `Present Simple kalıcı durumu sorar: **What do you do?** = Mesleğin ne?` },
    { t: 'mc', q: 'Prices ___ every year.', o: ['are rising', 'rising', 'are rise'], a: 0,
      w: { 1: `be eksik: are rising.`, 2: `-ing eksik: are rising.` },
      e: `Değişen, gelişen durum → **are rising**. (Rutin anlamında "rise" da olabilir.)` },
    { t: 'mc', q: 'This laptop ___ to my brother.', o: ['belongs', 'is belonging', 'belong'], a: 0,
      w: { 1: `"belong" durum fiilidir, -ing almaz.`, 2: `"This laptop" = it → belongs.` },
      e: `Durum fiili → **belongs**.` },
    { t: 'fill', q: 'The soup ___ (taste) delicious!', a: ['tastes'],
      w: { 'is tasting': `"Tadı güzel" bir durum → tastes.` },
      e: `Durum (tadı iyi) → **tastes**.` },
    { t: 'fill', q: "Sorry, she can't come to the phone. She ___ (have) a shower.", a: ["'s having", 'is having'],
      w: { has: `"duş almak" bir eylem ve şu an oluyor → is having.` },
      e: `Eylem anlamında have → **is having** a shower.` },
    { t: 'order', tr: 'Sürekli şikâyet ediyor!', a: "He's always complaining!", x: ['complains'],
      w: { complains: `Sinir bozucu tekrar → always + **-ing**.` }, e: `He's **always complaining**!` },
  ],
};
