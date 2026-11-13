export default {
  lesson: `
## Modal fiillerin ortak kuralları
must, should, can, could, will gibi **modal** fiillerin hepsi aynı kurallara uyar:
1. Bütün öznelerde **aynı** kalır: she **must**, he **should** ("musts", "shoulds" yok)
2. Arkasından **to olmadan yalın fiil** gelir: must **go**, should **eat**
3. Olumsuz ve soru **do kullanmadan** yapılır: **mustn't**, **Should** I...?
(**have to** bir modal değildir, normal fiil gibi davranır. Aşağıya bak.)

## must: güçlü zorunluluk, "-malı / -meli"
Konuşanın **kendi fikri**, iç zorunluluğu ya da yazılı kurallar için:
> I **must** call my mum. I haven't called her for a week. | Annemi aramalıyım. Bir haftadır aramadım.
> You **must** wear a seatbelt. | Emniyet kemeri takmalısın. (kural)
> Passengers **must** show their tickets. | Yolcular biletlerini göstermelidir. (resmi yazı)

## have to / has to: dışarıdan gelen zorunluluk, "-mak zorunda"
İş, okul, kanun gibi **başkasının koyduğu** kurallar için:
> I **have to** wear a uniform at work. | İşte üniforma giymek zorundayım.
> She **has to** get up at 6. | Saat 6'da kalkmak zorunda.
| | Olumlu | Olumsuz | Soru |
| I / you / we / they | have to | **don't have to** | **Do** you **have to**...? |
| he / she / it | has to | **doesn't have to** | **Does** she **have to**...? |
! have to normal bir fiil gibi davranır, bu yüzden olumsuz ve soru **do / does** ile yapılır: "Have you to...?" yanlış.

## EN ÖNEMLİ FARK: mustn't ve don't have to
İki olumsuz biçim **tamamen farklı anlamlara** gelir:
| | Anlam | Örnek |
| **mustn't** | YASAK: yapmamalısın | You **mustn't** smoke here. (Burada sigara içmek yasak.) |
| **don't have to** | GEREK YOK: zorunda değilsin, istersen yap | You **don't have to** come. (Gelmek zorunda değilsin.) |
> You **mustn't** tell anyone. It's a secret. | Kimseye söylememelisin. Bu bir sır.
> It's Saturday, so I **don't have to** get up early. | Cumartesi, erken kalkmam gerekmiyor.
x It's free. You mustn't pay. => It's free. You **don't have to** pay.

## Geçmişte zorunluluk: had to
must'ın geçmiş hali yoktur. Geçmişte "zorunda kaldım" demek için **had to** kullanılır:
> I **had to** work late yesterday. | Dün geç saate kadar çalışmak zorunda kaldım.
> **Did** you **have to** wait long? | Uzun süre beklemek zorunda kaldın mı?
> We **didn't have to** pay. | Ödemek zorunda kalmadık.

## should: tavsiye, "-meli" (daha yumuşak)
Öneri, tavsiye ve fikir bildirmek için kullanılır. must kadar güçlü değildir.
> You **should** see a doctor. | Bir doktora görünmelisin.
> You **shouldn't** eat so much sugar. | Bu kadar çok şeker yememelisin.
> **Should** I take an umbrella? | Şemsiye alayım mı?
> What **should** I do? | Ne yapmalıyım?
! Tavsiye isterken çok kullanılan kalıplar: I **think** you **should**... / I **don't think** you **should**...
! **ought to** = should (daha resmi): You **ought to** apologise.

## Güç sıralaması
| En güçlü | | En yumuşak |
| must / have to (zorunlu) | should (tavsiye) | could (öneri: You could try...) |

## Kontrol listesi
- Kendi fikrin, kural → **must**. Dış zorunluluk → **have to**
- Yasak → **mustn't**. Gerek yok → **don't have to**
- Geçmiş → **had to**. Tavsiye → **should**
`,
  exExtra: [
    { t: 'mc', q: 'You ___ touch that wire! It\'s dangerous.', o: ["mustn't", "don't have to", "shouldn't to"], a: 0,
      w: { 1: `"don't have to" gerek yok demek. Burada yasak/tehlike var → mustn't.`, 2: `should'dan sonra to gelmez.` },
      e: `Yasak, tehlike → **mustn't**.` },
    { t: 'mc', q: '___ you have to wear a tie at work?', o: ['Do', 'Have', 'Must'], a: 0,
      w: { 1: `have to normal fiil gibidir, soru do ile kurulur.`, 2: `"Must you have to" iki zorunluluk kelimesi olur.` },
      e: `**Do** you have to...?` },
    { t: 'mc', q: 'I think you ___ apologise to her. You were rude.', o: ['should', 'must to', 'have'], a: 0,
      w: { 1: `must'tan sonra to gelmez.`, 2: `"have" tek başına zorunluluk bildirmez.` },
      e: `Tavsiye → I think you **should**...` },
    { t: 'fill', q: '___ you have to wait a long time at the hospital yesterday?', a: ['Did'],
      w: { do: `"yesterday" geçmiş → Did.`, had: `Soru did ile: Did you have to...?` },
      e: `Geçmiş soru: **Did** you have to...?` },
    { t: 'fill', q: 'She ___ (not / have to) work tomorrow. It\'s a holiday.', a: ["doesn't have to", 'does not have to'],
      w: { "mustn't": `"mustn't" yasak demek. Tatil olduğu için gerek yok → doesn't have to.`, "don't have to": `she → doesn't.` },
      e: `Gerek yok → **doesn't have to**.` },
  ],
};
