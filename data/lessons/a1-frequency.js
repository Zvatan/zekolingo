export default {
  lesson: `
## Ne sıklıkla?
Bir şeyi ne sıklıkla yaptığımızı **sıklık zarflarıyla** söyleriz. Çoğunlukla Present Simple ile kullanılırlar.
| Zarf | Anlam | Yaklaşık |
| always | her zaman, hep | %100 |
| usually / normally | genellikle, çoğunlukla | %80–90 |
| often | sık sık | %60–70 |
| sometimes | bazen | %40–50 |
| occasionally | ara sıra | %20–30 |
| rarely / seldom | nadiren | %5–10 |
| never | asla, hiç | %0 |
| hardly ever | neredeyse hiç | %2–5 |

## Kural 1: Normal fiillerden ÖNCE
Özne ile fiilin **arasına** girer.
> I **always** get up at 7. | Her zaman 7'de kalkarım.
> She **usually** walks to work. | Genellikle işe yürür.
> We **often** eat out. | Sık sık dışarıda yeriz.
> They **never** watch TV. | Asla televizyon izlemezler.
x I get up always at 7. => I **always get** up at 7.
x Always I drink tea. => I **always** drink tea.
! Fiildeki -s yerinde kalır: She **always** work**s** late. ("always work" değil.)

## Kural 2: be (am / is / are) fiilinden SONRA
> He **is always** late. | O hep geç kalır.
> We **are usually** at home on Sundays. | Pazarları genellikle evde oluruz.
> I'**m never** bored. | Asla sıkılmam.
x She always is happy. => She **is always** happy.

## Kural 3: Yardımcı fiilden SONRA
can, don't, doesn't gibi yardımcı fiillerden **sonra**, asıl fiilden **önce** gelir.
> I **can never** remember his name. | Adını asla hatırlayamam.
> I **don't usually** drink coffee. | Genellikle kahve içmem.
> **Do** you **often** go to the cinema? | Sık sık sinemaya gider misin?

## Özet: zarfın yeri
| Cümlede ne var? | Zarfın yeri | Örnek |
| Normal fiil | fiilden **önce** | I **often** read. |
| be (am / is / are) | be'den **sonra** | I'm **often** tired. |
| Yardımcı fiil + fiil | ikisinin **arasında** | I **don't often** read. |

## sometimes ve usually daha serbesttir
Bu iki zarf cümle başına ya da sonuna da gelebilir: **Sometimes** I walk to school. / I walk to school **sometimes**.
always ve never ise cümle başına gelmez: "Always I..." yanlıştır.

## never zaten olumsuzdur
never, rarely ve hardly ever cümleyi olumsuz yapar. Yanlarına **not / don't eklenmez**.
x I don't never eat fish. => I **never** eat fish.
x She doesn't hardly ever call. => She **hardly ever** calls.
Soruda **ever** (hiç) kullanılır: Do you **ever** eat fish? (Hiç balık yer misin?)

## Sıklık ifadeleri (cümle sonunda)
| İfade | Anlam |
| every day / week / year | her gün / hafta / yıl |
| once a week | haftada bir |
| twice a month | ayda iki kez |
| three times a year | yılda üç kez |
| on Mondays / at weekends | pazartesileri / hafta sonları |
> I go swimming **twice a week**. | Haftada iki kez yüzmeye giderim.
> **How often** do you go to the gym? **Three times a week.** | Ne sıklıkla spor salonuna gidersin? Haftada üç kez.
`,
  exExtra: [
    { t: 'mc', q: 'Hangisi doğru?', o: ["I don't usually eat breakfast.", "I usually don't eat breakfast at all never.", "I don't eat usually breakfast."], a: 0,
      w: { 1: `"never" ile "don't" birlikte kullanılmaz.`, 2: `Zarf yardımcı fiil ile asıl fiilin arasına girer: don't usually eat.` },
      e: `Yardımcı fiil + **zarf** + fiil: I don't **usually** eat breakfast.` },
    { t: 'mc', q: 'I ___ remember people\'s names. I\'m terrible at it!', o: ['can never', 'never can', "can't never"], a: 0,
      w: { 1: `Zarf yardımcı fiilden (can) sonra gelir.`, 2: `can't + never iki olumsuz olur.` },
      e: `Yardımcı fiil + zarf: I **can never** remember.` },
    { t: 'fill', q: 'Do you ___ eat fish?', h: 'hiç (soru)', a: ['ever'],
      w: { never: `Soruda "hiç" = ever.`, always: `"hiç" = ever.` },
      e: `Soruda "hiç" → **ever**: Do you ever eat fish?` },
    { t: 'mc', q: 'She ___ her parents. Maybe once a year.', o: ['hardly ever visits', "doesn't hardly ever visit", 'visits always'], a: 0,
      w: { 1: `"hardly ever" zaten olumsuz, doesn't eklenmez.`, 2: `"yılda bir" = neredeyse hiç → hardly ever.` },
      e: `**hardly ever** = neredeyse hiç (olumsuz anlamlı).` },
    { t: 'order', tr: 'Genellikle hafta sonları evdeyiz.', a: 'We are usually at home at weekends.', x: ['do'],
      w: { do: `be ile do kullanılmaz. be + **usually**.` }, e: `We **are usually** at home...` },
  ],
};
