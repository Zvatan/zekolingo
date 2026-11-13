export default {
  lesson: `
## Ne zaman kullanılır?
**Present Simple** (geniş zaman), Türkçedeki "-ır, -er" (çalışır**ım**, içer**im**) zamanına benzer. Şunları anlatır:
| Ne anlatıyor? | Örnek |
| Alışkanlıklar, rutinler | I **drink** coffee every morning. (Her sabah kahve içerim.) |
| Kalıcı durumlar (iş, ev) | She **lives** in Izmir. / He **works** in a bank. |
| Genel gerçekler | Water **boils** at 100 degrees. / The sun **rises** in the east. |
| Sevdiklerin, düşüncelerin | I **like** tea. / We **know** the answer. |
| Programlar, tarifeler | The train **leaves** at 8. |
! Türkçede "Bankada **çalışıyorum**" deriz ama kalıcı bir iş için İngilizcede Present Simple kullanılır: I **work** in a bank. "Şu an" anlamı yoksa -ing kullanma.

## Yapı: özne + fiil (+ he/she/it ise -s)
| Özne | Fiil | Örnek |
| I | work | I work in an office. |
| you | work | You work hard. |
| **he / she / it** | **works** | She work**s** at night. |
| we | work | We work together. |
| they | work | They work on Saturdays. |
Fiil sadece **he, she, it** ve onların yerini tutan **tekil isimlerle** -s alır:
> **My brother** play**s** football. (= he) | **The shop** open**s** at 9. (= it) | **Ali** live**s** here. (= he)
> **My parents** live in Ankara. (= they, -s yok) | **People** like it. (= they, -s yok)
! Türklerin en sık hatası bu -s'yi unutmaktır, çünkü Türkçede "o çalışır" ile "onlar çalışır" arasında böyle bir fark yoktur. **he / she / it gördüğünde -s'yi hatırla.**
! Present Simple'da **am / is / are kullanılmaz**: "I am work" yanlış. Türkçedeki "-ım" eki ayrı bir "am" değildir.

## -s eki: yazım kuralları
| Kural | Örnek |
| Çoğu fiil: **+ s** | work → works, play → plays, read → reads |
| -s, -ss, -sh, -ch, -x, -o ile bitenler: **+ es** | miss → misses, wash → washes, watch → watches, fix → fixes, go → goes, do → does |
| Sessiz harf + **y** → **ies** | study → studies, try → tries, fly → flies, cry → cries |
| Sesli harf + **y** → **+ s** | play → plays, buy → buys, say → says, enjoy → enjoys |
| Düzensiz | have → **has** |
### -s nasıl okunur?
- /s/: works, likes, stops (sert ünsüzden sonra)
- /z/: plays, reads, lives (çoğu fiil)
- /ız/: watches, washes, misses, fixes (ekstra bir hece eklenir: "voçız")

## Zaman ifadeleri
Sıklık bildiren ifadeler genelde **cümle sonuna** gelir:
| İfade | Anlam |
| every day / week / morning / summer | her gün / hafta / sabah / yaz |
| on Mondays / at the weekend | pazartesileri / hafta sonları |
| in the morning / in the evening | sabahları / akşamları |
| once a week / twice a month / three times a year | haftada bir / ayda iki / yılda üç kez |
> We **visit** our grandparents **every Sunday**. | Her pazar büyükannemleri ziyaret ederiz.
> She **goes** to the gym **three times a week**. | Haftada üç kez spor salonuna gider.
(always, usually, never gibi sıklık zarflarının yeri için "always · usually · never" konusuna bak.)

## Kontrol listesi
- Rutin, kalıcı durum ya da genel gerçek mi? → Present Simple
- Özne he / she / it ya da tekil isim mi? → fiil + **s / es / ies**
- am / is / are kullanma (I work, "I am work" değil).

## Sık yapılan hatalar
x She work in a bank. => She **works** in a bank.
x He studys English. => He **studies** English.
x She watchs TV. => She **watches** TV.
x I am work every day. => I **work** every day.
x They goes to school. => They **go** to school.
x My parents lives in Ankara. => My parents **live** in Ankara.
`,
  exExtra: [
    { t: 'fill', q: 'He always ___ (fix) his own car.', a: ['fixes'],
      w: { fixs: `-x ile biten fiiller -es alır: fixes.`, fix: `he → fix**es**.` },
      e: `fix → fix**es** (-x ile bitiyor).` },
    { t: 'fill', q: 'My son ___ (play) computer games at the weekend.', a: ['plays'],
      w: { plaies: `Sesli harf + y ise sadece -s eklenir: plays.`, play: `My son = he → plays.` },
      e: `play → play**s** (y'den önce sesli harf var).` },
    { t: 'fill', q: 'The baby ___ (cry) at night.', a: ['cries'],
      w: { crys: `Sessiz harf + y → ies: cries.`, cry: `The baby = it/he/she → cries.` },
      e: `cry → cr**ies**.` },
    { t: 'mc', q: 'Hangisi "Ankara\'da yaşıyorum" (kalıcı olarak) demek?', o: ['I live in Ankara.', 'I am live in Ankara.', 'I living in Ankara.'], a: 0,
      w: { 1: `Present Simple'da am kullanılmaz.`, 2: `Kalıcı durum → Present Simple: I live.` },
      e: `Kalıcı durum → **I live** in Ankara.` },
    { t: 'mc', q: 'She goes swimming ___.', o: ['twice a week', 'two times in week', 'in every week twice'], a: 0,
      w: { 1: `Kalıp: twice a week (haftada iki kez).`, 2: `Kalıp: twice a week.` },
      e: `once / twice / three times **a** week / month / year.` },
    { t: 'fix', s: 'My parents lives in a small town.', i: 2, c: 'live',
      e: `"My parents" çoğul (= they) → -s almaz: live.` },
  ],
};
