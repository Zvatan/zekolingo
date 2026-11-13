export default {
  lesson: `
## Neden do / does?
Present Simple'da olumsuz ve soru cümlesi kurmak için bir **yardımcı fiile** ihtiyaç vardır: **do / does**. Türkçede bunun karşılığı yoktur ("-maz" ve "-mı" ekleri işi görür), bu yüzden en çok burada hata yapılır.

## Olumsuz: don't / doesn't + yalın fiil
| Özne | Olumsuz | Örnek |
| I / you / we / they | **don't** (do not) + fiil | I **don't like** coffee. (Kahveyi sevmem.) |
| he / she / it | **doesn't** (does not) + fiil | She **doesn't eat** meat. (O et yemez.) |
### -s nereye gitti?
Olumlu cümlede she work**s** deriz. Olumsuzda **-s, does'un içine geçer** ve fiil yalın kalır:
> She work**s**. → She doe**s**n't **work**. ("She doesn't works" yanlış.)
> He watch**es** TV. → He doe**s**n't **watch** TV.
> It ha**s** a garden. → It doe**s**n't **have** a garden.
! Kural: Cümlede **does / doesn't** varsa fiil **her zaman yalın** olur.

## Soru: Do / Does + özne + yalın fiil
| Olumlu | Soru |
| You speak English. | **Do** you **speak** English? (İngilizce konuşur musun?) |
| They live here. | **Do** they **live** here? |
| She works here. | **Does** she **work** here? (-s does'a geçti) |
| It rains a lot. | **Does** it **rain** a lot? |
### Kısa cevaplar
| Soru | Evet | Hayır |
| Do you / they ...? | Yes, I **do**. | No, I **don't**. |
| Does he / she / it ...? | Yes, she **does**. | No, she **doesn't**. |
! Kısa cevapta fiil tekrar edilmez: "Yes, I like." yanlış → Yes, I **do**.

## Soru kelimeleriyle
Soru kelimesi + **do / does** + özne + yalın fiil:
> **Where do** you **live**? | Nerede yaşıyorsun?
> **What does** she **do**? | Ne iş yapıyor?
> **What time does** the film **start**? | Film saat kaçta başlıyor?
> **How often do** you **go** to the gym? | Ne sıklıkla spor salonuna gidersin?
> **What does** this word **mean**? | Bu kelime ne demek?

## do: hem yardımcı hem asıl fiil
**do** aynı zamanda "yapmak" anlamında normal bir fiildir. Bu yüzden bir cümlede iki kez görünebilir:
> What **do** you **do**? | Ne iş yaparsın? (1. do yardımcı, 2. do "yapmak")
> I **don't do** my homework at night. | Ödevimi gece yapmam.
> **Does** he **do** sports? | Spor yapar mı?

## be mi, do mu? En önemli ayrım
| Cümlede ne var? | Kullan | Olumsuz | Soru |
| Fiil yok (sıfat, isim, yer, yaş) | **be** | I'**m not** hungry. | **Are** you hungry? |
| Fiil var (like, work, live...) | **do / does** | I **don't** like it. | **Do** you like it? |
x Are you like pizza? => **Do** you like pizza?
x I don't hungry. => I'**m not** hungry.
x Does she is a doctor? => **Is** she a doctor?
x Do you are tired? => **Are** you tired?
! "have" bir fiildir, bu yüzden do ile kullanılır: **Do** you **have** a car? / I **don't have** time.

## Kontrol listesi
- Cümlede fiil var mı? Evet → **do / does**. Hayır → **be**.
- he / she / it → **does / doesn't**, diğerleri → **do / don't**
- does / doesn't varsa fiil **yalın** (-s yok).
- Kısa cevapta fiil tekrar edilmez: Yes, I **do**.
`,
  exExtra: [
    { t: 'mc', q: '"Do you like jazz?" "Yes, I ___."', o: ['do', 'like', 'am'], a: 0,
      w: { 1: `Kısa cevapta fiil tekrar edilmez: Yes, I do.`, 2: `Soru do ile sorulmuş → Yes, I do.` },
      e: `Do you...? → Yes, I **do**. / No, I **don't**.` },
    { t: 'mc', q: 'Babanın mesleğini soruyorsun. Hangisi doğru?', o: ['What does your father do?', 'What is your father do?', 'What does your father does?'], a: 0,
      w: { 1: `Fiil (do = yapmak) var → yardımcı does.`, 2: `does'tan sonra fiil yalın: do.` },
      e: `What **does** he **do**? (Ne iş yapar?) 1. does yardımcı, 2. do asıl fiil.` },
    { t: 'fill', q: 'My cat ___ (not / like) water.', a: ["doesn't like", 'does not like'],
      w: { "doesn't likes": `doesn't'tan sonra fiil yalın: like.`, "don't like": `My cat = it → doesn't.` },
      e: `it → **doesn't like**.` },
    { t: 'fill', q: '___ you have a pen?', a: ['Do'],
      w: { have: `"have" bir fiil, soru do ile kurulur: Do you have...?`, are: `"have" bir fiil → Do.` },
      e: `**Do** you have a pen? (have bir fiildir.)` },
    { t: 'order', tr: 'Ne iş yapıyor? (o, kadın)', a: 'What does she do?', x: ['is'],
      w: { is: `"do" (yapmak) bir fiil → **does**.` }, e: `What **does** she **do**?` },
    { t: 'fix', s: 'Do you a student?', i: 0, c: 'Are',
      e: `Fiil yok (a student bir isim) → be ile soru: **Are** you a student?` },
  ],
};
