export default {
  lesson: `
## can: "-ebilmek"
Türkçede "-ebil" ekiyle söylediğimiz anlam (yüz**ebil**irim, gel**ebil**ir misin?) İngilizcede ayrı bir kelimeyle verilir: **can**.
> I **can** swim. | Yüz**ebil**irim.
> She **can** speak three languages. | Üç dil konuş**abil**ir.

## Üç altın kural
| Kural | Doğru | Yanlış |
| 1. can bütün öznelerde **aynı** kalır | she **can** | she cans |
| 2. Arkasından **yalın fiil** gelir (-s yok) | she can **swim** | she can swims |
| 3. can'den sonra **to gelmez** | I can **go** | I can to go |
> I / you / he / she / it / we / they **can** + yalın fiil

## Olumsuz: can't / cannot
| Uzun | Kısa |
| cannot (tek kelime yazılır) | **can't** |
> I **can't** drive. | Araba kullanamam.
> He **cannot** come today. | Bugün gelemez.
! can'in olumsuzu **do ile yapılmaz**: "I don't can" ve "He doesn't can" yanlıştır.
! Telaffuz: **can** genelde zayıf okunur (kın), **can't** ise vurgulu ve uzundur (kaant). Anlam farkı bu vurgudan anlaşılır.

## Soru: can başa geçer
| Soru | Kısa cevap |
| **Can** you swim? | Yes, I **can**. / No, I **can't**. |
| **Can** she drive? | Yes, she **can**. / No, she **can't**. |
| What **can** you see? | I can see the sea. |

## can'in dört kullanımı
| Kullanım | Örnek | Türkçe |
| **Yetenek** | I can play the guitar. | Gitar çalabilirim. |
| **İzin verme** | You can sit here. | Buraya oturabilirsin. |
| **İzin isteme** | **Can I** open the window? | Pencereyi açabilir miyim? |
| **Rica** | **Can you** help me, please? | Bana yardım edebilir misin? |
| **Yasak** (olumsuz) | You **can't** park here. | Buraya park edemezsin. |
| **İmkân** | You can buy tickets online. | Biletleri internetten alabilirsin. |

## could: daha kibar ve geçmiş
**could** iki şekilde kullanılır:
- **Kibar rica:** **Could** you help me, please? (can'den daha nazik)
- **Geçmişteki yetenek:** I **could** swim when I was five. (Beş yaşındayken yüzebiliyordum.) / I **couldn't** sleep last night. (Dün gece uyuyamadım.)

## can ile do'yu karıştırma
- **Can** you swim? → yeteneğini soruyorsun (Yüzebilir misin?)
- **Do** you swim? → alışkanlığını soruyorsun (Yüzer misin, yüzmeye gider misin?)

## Kontrol listesi
- can her öznede aynı, arkasından yalın fiil gelir, to gelmez.
- Olumsuz: **can't / cannot**. Soru: **Can** + özne + fiil?
- Kibar rica → **Could you...?** Geçmişte yetenek → **could / couldn't**
`,
  exExtra: [
    { t: 'mc', q: "I ___ sleep last night because of the noise.", o: ["couldn't", "can't", "didn't can"], a: 0,
      w: { 1: `"last night" geçmiş → couldn't.`, 2: `can'in geçmişi do ile yapılmaz: couldn't.` },
      e: `Geçmişte yapamamak → **couldn't**.` },
    { t: 'mc', q: 'When I was six, I ___ ride a bike.', o: ['could', 'can', 'cans'], a: 0,
      w: { 1: `"When I was six" geçmiş → could.`, 2: `can hiçbir zaman -s almaz.` },
      e: `Geçmişteki yetenek → **could**.` },
    { t: 'mc', q: 'Arkadaşına yeteneğini soruyorsun: "Gitar çalabilir misin?"', o: ['Can you play the guitar?', 'Do you can play the guitar?', 'Are you play the guitar?'], a: 0,
      w: { 1: `can'in sorusu do ile kurulmaz.`, 2: `"play" bir fiil, be ile soru olmaz.` },
      e: `**Can** you play the guitar?` },
    { t: 'fill', q: 'Excuse me, ___ you tell me the way to the station, please?', h: 'kibar rica', a: ['could', 'can'],
      w: { do: `Rica: Could / Can you...?`, will: `Burada en doğal ve kibar yol: Could you...?` },
      e: `Kibar rica → **Could** you...?` },
  ],
};
