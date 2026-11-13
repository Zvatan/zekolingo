export default {
  lesson: `
## Hatırlatma
İki fiil yan yana geldiğinde ikinci fiilin biçimini **birinci fiil** belirler. A2'de temel fiilleri gördük (enjoy **-ing**, want **to**). B1'de listeyi genişletiyor ve yeni kalıplar ekliyoruz.

## 1) Fiil + -ing (gerund)
| Fiil | Anlam | Örnek |
| avoid | kaçınmak | I **avoid eating** fast food. |
| consider | düşünmek, göz önüne almak | Have you **considered moving** abroad? |
| suggest | önermek | He **suggested going** to the cinema. |
| keep | sürekli yapmak, devam etmek | **Keep trying**! |
| mind | sakıncası olmak | Would you **mind opening** the window? (Pencereyi açar mısın?) |
| imagine | hayal etmek | **Imagine living** on an island! |
| give up | bırakmak, vazgeçmek | I **gave up smoking**. |
| can't stand | dayanamamak | I **can't stand waiting** in queues. |
| look forward to | dört gözle beklemek | I'm **looking forward to seeing** you. |
| admit / deny | kabul / inkâr etmek | He **admitted lying**. / She **denied stealing** it. |
| practise / miss / risk | pratik yapmak / özlemek / riske atmak | I **miss living** by the sea. |
! **look forward to** kalıbındaki **to** bir **edattır**, bu yüzden -ing gelir: looking forward to **seeing** you ("to see" yanlış). Aynı şey **be used to** için de geçerlidir.
! **suggest** + kişi + to kullanılmaz: "He suggested me to go" yanlış → He suggested **going** / He suggested **that I go**.

## 2) Fiil + to + yalın fiil (infinitive)
| Fiil | Anlam | Örnek |
| agree | kabul etmek | She **agreed to help** me. |
| refuse | reddetmek | He **refused to answer**. |
| manage | başarmak | We **managed to finish** on time. |
| offer | teklif etmek | They **offered to drive** us home. |
| afford | -e gücü yetmek | I can't **afford to buy** a car. |
| seem / appear | gibi görünmek | She **seems to be** happy. |
| pretend | -mış gibi yapmak | He **pretended to be** asleep. |
| expect | beklemek, ummak | I **expect to finish** by 5. |
| promise / threaten | söz vermek / tehdit etmek | He **promised to call**. |
| learn / plan / decide / hope / want / need | | (A2'den hatırla) |

## 3) Fiil + kişi + to
**want, ask, tell, advise, invite, expect, allow, encourage, remind, would like** + kişi + **to** + fiil
> I **want you to** come. | Gelmeni istiyorum.
> She **asked me to** help her. | Ona yardım etmemi istedi.
> The doctor **advised him to** rest. | Doktor ona dinlenmesini tavsiye etti.
> My parents **allowed me to** go. | Ailem gitmeme izin verdi.
> **Remind me to** buy milk. | Süt almamı hatırlat.
x I want that you come. => I want **you to come**.
x She wants me go. => She wants me **to go**.

## 4) make / let + kişi + YALIN fiil (to yok!)
| Fiil | Anlam | Örnek |
| make | zorla yaptırmak | My boss **made me work** late. |
| let | izin vermek | My parents **let me go** to the party. |
| help | yardım etmek (to isteğe bağlı) | Can you **help me (to) carry** this? |
x She let me to use her car. => She let me **use** her car.
x He made me to wait. => He made me **wait**.

## 5) Edattan sonra her zaman -ing
> I'm interested **in learning** Japanese. / She's good **at drawing**. / Thank you **for coming**.
> **Instead of taking** the bus, we walked. | Otobüse binmek yerine yürüdük.
> I'm tired **of waiting**. | Beklemekten bıktım.

## 6) Fiil cümlenin öznesiyse: -ing
> **Swimming** is good for you. | Yüzmek sana iyi gelir.
> **Learning** a language takes time. | Dil öğrenmek zaman alır.

## Kontrol listesi
- avoid, suggest, consider, mind, keep, give up, look forward to → **-ing**
- agree, refuse, manage, offer, afford, pretend → **to**
- want / ask / tell / advise + **kişi + to**
- make / let + **kişi + yalın fiil**
- Edattan sonra ve özne olarak → **-ing**
`,
  exExtra: [
    { t: 'mc', q: 'She pretended ___ asleep when I came in.', o: ['to be', 'being', 'be'], a: 0,
      w: { 1: `"pretend" fiilinden sonra to gelir.`, 2: `to eksik.` },
      e: `pretend + **to** + fiil.` },
    { t: 'mc', q: 'The doctor advised me ___ more water.', o: ['to drink', 'drinking', 'drink'], a: 0,
      w: { 1: `advise + kişi + to.`, 2: `to eksik.` },
      e: `advise + kişi + **to**.` },
    { t: 'mc', q: '___ a new language is not easy.', o: ['Learning', 'Learn', 'To learning'], a: 0,
      w: { 1: `Cümlenin öznesi olarak fiil -ing alır.`, 2: `"To learning" diye bir yapı yok.` },
      e: `Özne olarak fiil → **-ing**: Learning a language...` },
    { t: 'fill', q: "I can't afford ___ (go) on holiday this year.", a: ['to go'],
      w: { going: `"afford" fiilinden sonra to gelir.`, go: `to eksik.` },
      e: `afford + **to go**.` },
    { t: 'fill', q: "I'm tired of ___ (wait) for the bus every morning.", a: ['waiting'],
      w: { 'to wait': `Edattan (of) sonra -ing gelir.`, wait: `Edattan sonra -ing: waiting.` },
      e: `Edat + **-ing**.` },
    { t: 'mc', q: 'Hangisi doğru?', o: ['He suggested taking a taxi.', 'He suggested me to take a taxi.', 'He suggested to take a taxi.'], a: 0,
      w: { 1: `"suggest + kişi + to" yapısı yoktur.`, 2: `suggest'ten sonra to gelmez, -ing gelir.` },
      e: `suggest + **-ing**: He suggested **taking** a taxi.` },
  ],
};
