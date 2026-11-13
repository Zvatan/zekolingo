export default {
  lesson: `
## Edilgen çatı: be + V3
Eylemi **kimin yaptığı önemli olmadığında** ya da bilinmediğinde edilgen yapı kullanılır: yapılır, yapıldı.
Formül: **be (am/is/are/was/were) + fiilin 3. hali**
> English **is spoken** all over the world. | İngilizce dünyanın her yerinde konuşulur.
> This bridge **was built** in 1973. | Bu köprü 1973'te inşa edildi.
> My phone **was stolen** yesterday. | Telefonum dün çalındı.

## Etken → edilgen
- Etken: They **make** cars in this factory.
- Edilgen: Cars **are made** in this factory. | Bu fabrikada araba üretilir.
- Etken: Someone **cleaned** the room.
- Edilgen: The room **was cleaned**. | Oda temizlendi.

## Zamanlar
| Zaman | Edilgen | Örnek |
| Present Simple | am / is / are + V3 | Coffee **is grown** in Brazil. |
| Past Simple | was / were + V3 | The letters **were sent** yesterday. |
! Özne tekil mi çoğul mu, ona göre is/are, was/were seçilir: The **car is** washed. / The **cars are** washed.

## by: yapanı söylemek
Yapan önemliyse **by** ile eklenir:
> Romeo and Juliet **was written by** Shakespeare. | Romeo ve Juliet Shakespeare tarafından yazıldı.

## Olumsuz ve soru
> Breakfast **isn't included** in the price. | Kahvaltı fiyata dahil değil.
> **Was** the window **broken**? | Pencere kırılmış mıydı?
! Doğum: I **was born** in 2000. (her zaman edilgen)
x This house built in 1990. => This house **was built** in 1990.
x The cars is made in Germany. => The cars **are** made in Germany.
`,
  ex: [
    { t: 'mc', q: 'Spanish ___ in Mexico.', o: ['is spoken', 'speaks', 'is speaking'], a: 0,
      w: { 1: `İspanyolca kendisi konuşmaz, konuşulur → edilgen: is spoken.`, 2: `Edilgen yapı be + V3: is spoken.` },
      e: `Edilgen: **is spoken** (konuşulur).` },
    { t: 'mc', q: 'The Eiffel Tower ___ in 1889.', o: ['was built', 'built', 'is built'], a: 0,
      w: { 1: `Kule kendisi inşa etmedi → edilgen: was built.`, 2: `1889 geçmiş → was built.` },
      e: `Geçmiş edilgen → **was built**.` },
    { t: 'mc', q: 'These photos ___ by my grandfather.', o: ['were taken', 'was taken', 'were took'], a: 0,
      w: { 1: `"These photos" çoğul → were.`, 2: `take → took → taken (V3).` },
      e: `Çoğul + geçmiş edilgen → **were taken**.` },
    { t: 'mc', q: 'Hamlet was written ___ Shakespeare.', o: ['by', 'from', 'with'], a: 0,
      w: { 1: `Edilgende yapan "by" ile verilir.`, 2: `Edilgende yapan "by" ile verilir.` },
      e: `Yapan → **by**.` },
    { t: 'fill', q: 'Rice ___ (grow) in many Asian countries.', a: ['is grown'],
      w: { grows: `Pirinç kendisi yetiştirmez, yetiştirilir → is grown.`, 'is growed': `grow → grew → grown.` },
      e: `Present edilgen → **is grown**.` },
    { t: 'fill', q: 'My bike ___ (steal) last night.', a: ['was stolen'],
      w: { stole: `Bisiklet çalınan şey → edilgen: was stolen.`, 'was stealed': `steal → stole → stolen.`, 'is stolen': `"last night" geçmiş → was stolen.` },
      e: `Geçmiş edilgen → **was stolen**.` },
    { t: 'fill', q: 'The emails ___ (send) this morning.', a: ['were sent'],
      w: { 'was sent': `"The emails" çoğul → were sent.`, sent: `Edilgen için be gerekir: were sent.` },
      e: `Çoğul geçmiş edilgen → **were sent**.` },
    { t: 'fill', q: '___ the windows cleaned every week?', a: ['Are'],
      w: { do: `Edilgen soru be ile kurulur: Are the windows cleaned...?`, is: `"the windows" çoğul → Are.` },
      e: `Edilgen soru: **Are** ... cleaned?` },
    { t: 'order', tr: 'Bu kitap 1990\'da yazıldı.', a: 'This book was written in 1990.', x: ['wrote'],
      w: { wrote: `Edilgende fiilin 3. hali gelir: **written**.` }, e: `This book **was written** in 1990.` },
    { t: 'order', tr: 'Bu arabalar Almanya\'da üretiliyor.', a: 'These cars are made in Germany.', x: ['is'],
      w: { is: `"These cars" çoğul → **are**.` }, e: `These cars **are made** in Germany.` },
    { t: 'fix', s: 'This house built in 1920.', i: 2, c: 'was built',
      e: `Ev kendisi inşa etmedi → edilgen: This house **was built** in 1920.` },
    { t: 'fix', s: 'The letters was delivered this morning.', i: 2, c: 'were',
      e: `"The letters" çoğul → **were** delivered.` },
    { t: 'fix', s: 'The windows are clean every day.', i: 3, c: 'cleaned',
      e: `Edilgen yapı be + V3: are **cleaned** (temizlenir). "are clean" = temizdir.` },
  ],
};
