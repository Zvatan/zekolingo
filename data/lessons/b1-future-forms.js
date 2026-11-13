export default {
  lesson: `
## Türkçede tek yol, İngilizcede dört
Türkçede gelecekten bahsederken çoğunlukla "-ecek / -acak" kullanırız. İngilizcede ise **nasıl bir gelecek** olduğuna göre farklı yapılar seçilir. Hiçbiri "yanlış" sayılmasa da anlam ve doğallık değişir.
| Yapı | Ne zaman? | Örnek |
| **will** | Konuşurken verilen karar, söz, teklif, fikre dayalı tahmin | I'll help you. / I think it'll rain. |
| **be going to** | Önceden verilmiş karar (niyet), kanıta dayalı tahmin | I'm going to study medicine. / Look, it's going to rain! |
| **Present Continuous** | Ayarlanmış, kesinleşmiş planlar | I'm meeting Ali at 6. |
| **Present Simple** | Tarifeler, resmi programlar | The train leaves at 7:15. |

## 1) will: anlık karar, söz, teklif, tahmin
> "We've run out of milk." "Oh, I**'ll** get some." | "Süt bitmiş." "Ben alırım." (o an karar verdi)
> I**'ll** call you tonight, I promise. | Bu akşam ararım, söz.
> I think Turkey **will** win the match. | Bence Türkiye maçı kazanacak. (fikir)

## 2) be going to: niyet ve kanıt
> I'**m going to** learn Spanish next year. | Seneye İspanyolca öğreneceğim. (karar verdim ama ayarlanmış bir şey yok)
> Look at those black clouds. It'**s going to** rain. | Şu kara bulutlara bak. Yağmur yağacak. (görünen kanıt)

## 3) Present Continuous: ayarlanmış planlar
Saati, yeri, kişileri belli olan; randevu, bilet ya da rezervasyon gibi **ayarlanmış** planlar için İngilizler en çok Present Continuous kullanır. Genellikle bir **zaman ifadesiyle** gelir.
> I'**m meeting** Ali at 6 tomorrow. | Yarın 6'da Ali ile buluşuyorum.
> We'**re flying** to Rome on Friday. | Cuma Roma'ya uçuyoruz. (biletler alındı)
> She'**s having** a party on Saturday. | Cumartesi parti veriyor.
> What **are** you **doing** this weekend? | Bu hafta sonu ne yapıyorsun? (plan sorusu)
### going to mu, Present Continuous mu?
| going to (niyet) | Present Continuous (ayarlanmış) |
| I'm going to visit Paris one day. | I'm visiting Paris next month. I've booked the hotel. |
| I'm going to see a doctor. (karar verdim) | I'm seeing the doctor at 3. (randevum var) |

## 4) Present Simple: tarifeler ve programlar
Toplu taşıma saatleri, film ve dersler gibi **resmi takvimler**:
> The train **leaves** at 7:15. | Tren 7:15'te kalkıyor.
> The film **starts** at 8, so let's meet at 7:30. | Film 8'de başlıyor.
> What time **does** the shop **open** tomorrow? | Dükkân yarın kaçta açılıyor?

## Tahminler: will mi, going to mu?
| will (fikir, tahmin) | going to (şimdiki kanıt) |
| I **think** the economy **will** improve. | The baby's crying. She**'s going to** wake everyone up. |
| You**'ll** probably love this film. | Be careful! You**'re going to** drop those plates! |

## Zaman bağlaçlarından sonra Present Simple
when, as soon as, before, after, until sonrasında gelecek anlamı olsa bile **will kullanılmaz**:
> I'll call you **when** I **get** home. ("when I will get" yanlış)

## Kontrol listesi
- Konuşurken karar / söz / teklif → **will**
- Önceden karar, niyet / görünen kanıt → **going to**
- Saati, yeri belli ayarlanmış plan → **Present Continuous**
- Tarife, program → **Present Simple**
`,
  exExtra: [
    { t: 'mc', q: '"What are you doing tonight?" "I ___ my cousins for dinner. We booked a table."', o: ["'m meeting", "'ll meet", 'meet'], a: 0,
      w: { 1: `Masa ayırtılmış, ayarlanmış plan → Present Continuous.`, 2: `Present Simple tarifeler içindir.` },
      e: `Ayarlanmış plan → **I'm meeting**.` },
    { t: 'mc', q: 'What time ___ the museum open tomorrow?', o: ['does', 'will', 'is'], a: 0,
      w: { 1: `Resmi program → Present Simple: does ... open.`, 2: `"open" bir fiil → does.` },
      e: `Program, tarife → **does** the museum open?` },
    { t: 'mc', q: 'Be careful! That ladder ___ fall!', o: ["'s going to", "'ll", 'falls'], a: 0,
      w: { 1: `Şu an görülen kanıt (merdiven sallanıyor) → going to.`, 2: `Gelecek tahmini → going to.` },
      e: `Kanıta dayalı tahmin → **going to**.` },
    { t: 'fill', q: "I'll text you as soon as I ___ (arrive).", a: ['arrive'],
      w: { 'will arrive': `as soon as sonrasında will kullanılmaz.`, arrived: `Gelecek anlamı → Present Simple: arrive.` },
      e: `as soon as + **Present Simple**.` },
  ],
};
