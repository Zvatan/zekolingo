export default {
  lesson: `
## Türkçede tek ek, İngilizcede üç kelime
Türkçede yer ve zaman için çoğunlukla **-de / -da** ekini kullanırız: evde, masada, Ankara'da, Pazartesi'de, saat 5'te. İngilizcede bu ekin karşılığı **üç farklı edat**tır: **in, on, at**. Hangisinin geleceği, isme göre değişir. Bu yüzden kalıplarla öğrenmek en iyisidir.

## ZAMAN: büyükten küçüğe
| Edat | Ne ile kullanılır? | Örnekler |
| **in** | uzun dönemler: ay, yıl, mevsim, yüzyıl | in June, in 2024, in summer, in the 1990s |
| **in** | gün dilimleri | in the morning, in the afternoon, in the evening |
| **on** | günler ve tarihler | on Monday, on 5 May, on my birthday, on New Year's Day |
| **on** | gün + gün dilimi | on Monday morning, on Friday night |
| **at** | saatler ve belirli anlar | at 7 o'clock, at noon, at midnight, at the moment |
| **at** | kalıplar | at night, at the weekend, at Christmas |
> The class starts **at** 9. | Ders 9'da başlıyor.
> I was born **in** 1998, **on** 15 March. | 1998'de, 15 Mart'ta doğdum.
> We go on holiday **in** August. | Ağustosta tatile gideriz.
> I don't work **on** Sundays. | Pazarları çalışmam.
! İstisna: **in** the morning / afternoon / evening, ama **at night**.
! Gün söylendiğinde gün dilimi de **on** alır: **on** Monday morning ("in Monday morning" yanlış).

## Edat KULLANILMAYAN zaman ifadeleri
**this, next, last, every, today, tomorrow, yesterday** varsa edat kullanılmaz.
> I'll see you **next week**. ("on next week" yanlış)
> She called me **yesterday**. / I go swimming **every Monday**.
x See you on next Monday. => See you **next Monday**.

## YER: in, on, at
| Edat | Anlam | Örnekler |
| **in** | içinde: kapalı bir alan, şehir, ülke | in the box, in the kitchen, in my bag, in Istanbul, in Turkey, in the car |
| **on** | üstünde: bir yüzeyde | on the table, on the wall, on the floor, on the second floor, on the bus |
| **at** | bir noktada, adreste, etkinlikte | at the door, at the bus stop, at home, at work, at school, at a party, at 15 Baker Street |
> The keys are **in** my bag. | Anahtarlar çantamda.
> There is a picture **on** the wall. | Duvarda bir resim var.
> I'm **at** home. | Evdeyim.
> Let's meet **at** the station. | İstasyonda buluşalım.
### in mi, at mı?
- **at** school / work: oradaki etkinlikteyim (öğrenciyim, çalışıyorum).
- **in** the school / the building: binanın içindeyim.
### Araçlar
- **in** a car / a taxi (küçük, içine oturulan)
- **on** a bus / a train / a plane / a bike (büyük ya da üstüne binilen)

## Diğer sık yer edatları
| Edat | Anlam |
| under | altında |
| next to | yanında |
| between | arasında |
| in front of | önünde |
| behind | arkasında |
| opposite | karşısında |
| near | yakınında |
> The cat is **under** the table. | Kedi masanın altında.
> The bank is **next to** the post office. | Banka postanenin yanında.

## Kontrol listesi
- Saat → **at**. Gün, tarih → **on**. Ay, yıl, mevsim → **in**.
- İçinde → **in**. Üstünde → **on**. Bir noktada, adreste → **at**.
- next / last / every / this varsa → edat yok.
`,
  exExtra: [
    { t: 'mc', q: 'My birthday is ___ 21 October.', o: ['on', 'in', 'at'], a: 0,
      w: { 1: `Sadece ay olsaydı in (in October). Tarih → on.`, 2: `at saatler içindir.` },
      e: `Tarih → **on** 21 October.` },
    { t: 'mc', q: 'I usually meet my friends ___ the weekend.', o: ['at', 'in', 'on'], a: 0,
      w: { 1: `Kalıp: at the weekend (İngiliz İngilizcesi).`, 2: `"on the weekend" Amerikan İngilizcesinde kullanılır ama İngiliz İngilizcesinde kalıp at the weekend'dir.` },
      e: `Kalıp: **at the weekend**.` },
    { t: 'mc', q: 'We travelled to Izmir ___ the bus.', o: ['on', 'in', 'at'], a: 0,
      w: { 1: `Büyük araçlar (otobüs, tren, uçak) → on.`, 2: `Araçlarla at kullanılmaz.` },
      e: `**on** the bus / train / plane, ama **in** a car / taxi.` },
    { t: 'fill', q: 'The cat is sleeping ___ the sofa.', h: 'kanepenin üstünde', a: ['on'],
      w: { in: `Kanepenin içinde değil, üstünde → on.`, at: `Yüzeyin üstü → on.` },
      e: `Yüzeyin üstü → **on**.` },
    { t: 'fill', q: 'The pharmacy is ___ to the bank.', h: 'yanında', a: ['next'],
      w: { near: `"near to" değil, "next to" (yanında).`, beside: `"beside" da yanında demek ama sonrasında "to" gelmez.` },
      e: `**next to** = yanında.` },
    { t: 'fix', s: 'We have a meeting in Monday morning.', i: 4, c: 'on',
      e: `Gün söylendiyse gün dilimi de on alır: **on** Monday morning.` },
  ],
};
