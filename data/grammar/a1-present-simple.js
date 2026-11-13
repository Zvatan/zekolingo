export default {
  lesson: `
## Ne zaman kullanılır?
**Present Simple** (geniş zaman) şunları anlatır:
- Alışkanlıklar ve rutinler: I **drink** coffee every morning.
- Genel gerçekler: Water **boils** at 100 degrees.
- Kalıcı durumlar: She **lives** in Izmir.
> I **work** in an office. | Bir ofiste çalışırım / çalışıyorum.
> My father **reads** the newspaper every day. | Babam her gün gazete okur.
> The sun **rises** in the east. | Güneş doğudan doğar.

## Kural: he / she / it → fiile -s
| Özne | Fiil |
| I / you / we / they | work |
| he / she / it | work**s** |
! Türklerin en sık yaptığı hata bu -s'yi unutmaktır: "She work" yanlış, "She **works**" doğru. İsimler de geçerlidir: My brother = he → My brother **plays**.

## -s eki nasıl eklenir?
| Kural | Örnek |
| Çoğu fiil: + s | work → works, play → plays |
| -s, -sh, -ch, -x, -o: + es | watch → watches, go → goes, do → does |
| sessiz harf + y → ies | study → studies, cry → cries |
| Düzensiz | have → **has** |
! play → plays (y'den önce sesli harf var), study → studies (y'den önce sessiz harf var).

## Zaman ifadeleri
every day / week / morning, on Mondays, at the weekend, in the evening, once a week, twice a month
> We **visit** my grandparents **every Sunday**. | Her pazar büyükannemleri ziyaret ederiz.

## Sık yapılan hatalar
x She work in a bank. => She **works** in a bank.
x He studys English. => He **studies** English.
x I am work every day. => I **work** every day.
x They goes to school. => They **go** to school.
`,
  ex: [
    { t: 'mc', q: 'She ___ in a hospital.', o: ['work', 'works', 'is work'], a: 1,
      w: { 0: `she ile fiile **-s** eklenir: works.`, 2: `Geniş zamanda is + fiil birlikte kullanılmaz: She works.` },
      e: `he / she / it → fiil + **s**: she work**s**.` },
    { t: 'mc', q: 'They ___ football every weekend.', o: ['play', 'plays', 'playing'], a: 0,
      w: { 1: `-s sadece he / she / it ile eklenir. they → play.`, 2: `-ing tek başına fiil olamaz.` },
      e: `I / you / we / they → fiil yalın kalır: they **play**.` },
    { t: 'mc', q: 'My brother ___ to school by bus.', o: ['go', 'goes', 'gos'], a: 1,
      w: { 0: `"My brother" = he → fiile -es: goes.`, 2: `-o ile biten fiiller **-es** alır: goes.` },
      e: `go → **goes**, do → **does**.` },
    { t: 'mc', q: 'Water ___ at 100 degrees.', o: ['boil', 'boils', 'is boil'], a: 1,
      w: { 0: `"Water" = it → boils.`, 2: `Geniş zamanda is + fiil kullanılmaz.` },
      e: `Genel gerçekler geniş zamanla anlatılır. it → boil**s**.` },
    { t: 'fill', q: 'Ali ___ (study) English every evening.', a: ['studies'],
      w: { studys: `Sessiz harf + y: y düşer, **ies** gelir → studies.`, study: `Ali = he → fiile -s eklenmeli: studies.` },
      e: `study → stud**ies** (sessiz harf + y → ies).` },
    { t: 'fill', q: 'My mother ___ (watch) TV in the evening.', a: ['watches'],
      w: { watchs: `-ch ile biten fiiller **-es** alır: watches.`, watch: `My mother = she → fiile -es eklenmeli: watches.` },
      e: `watch → watch**es** (-ch ile bittiği için -es).` },
    { t: 'fill', q: 'We ___ (live) in Antalya.', a: ['live'],
      w: { lives: `-s sadece he / she / it ile eklenir. we → live.` },
      e: `we → fiil yalın: we **live**.` },
    { t: 'fill', q: 'He ___ (have) two cats.', a: ['has'],
      w: { haves: `have düzensizdir: he **has**.`, have: `he ile have → has olur.` },
      e: `have → **has** (he / she / it).` },
    { t: 'fill', q: 'The shop ___ (open) at 9 a.m.', a: ['opens'],
      w: { open: `"The shop" = it → opens.` }, e: `it → open**s**.` },
    { t: 'order', tr: 'Babam her sabah kahve içer.', a: 'My father drinks coffee every morning.', x: ['drink'],
      w: { drink: `"My father" = he → drink**s**.` }, e: `My father **drinks** coffee every morning.` },
    { t: 'order', tr: 'Onlar Ankara\'da yaşıyor.', a: 'They live in Ankara.', x: ['lives'],
      w: { lives: `they ile fiil -s almaz: live.` }, e: `They **live** in Ankara.` },
    { t: 'fix', s: 'She speak three languages.', i: 1, c: 'speaks',
      e: `she → fiile -s: She **speaks** three languages.` },
    { t: 'fix', s: 'I am work in a bank.', i: 1, c: '',
      e: `Geniş zamanda am / is / are kullanılmaz: I **work** in a bank. "Çalışıyorum" kelimesindeki "-um" eki "am" demek değildir.` },
    { t: 'fix', s: 'My friends lives near me.', i: 2, c: 'live',
      e: `"My friends" çoğul (= they) → -s almaz: My friends **live** near me.` },
    { t: 'fix', s: 'He studys at night.', i: 1, c: 'studies',
      e: `Sessiz harf + y → ies: He **studies** at night.` },
  ],
};
