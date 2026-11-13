export default {
  lesson: `
## Tahmin ve çıkarım
Görmediğin, bilmediğin bir şey hakkında **mantık yürütüp tahmin** ederken modal fiiller kullanılır. Türkçedeki "-malı", "-ebilir", "-amaz" eklerinin tahmin anlamına karşılık gelir. Hangi modalı seçeceğin **ne kadar emin olduğuna** bağlıdır.
| Modal | Anlam | Eminlik |
| **must** | -malı, kesin öyle (mantıklı sonuç) | ~%90 evet |
| **may / might / could** | olabilir, belki | ~%30–60 |
| **can't / couldn't** | olamaz, kesinlikle değil | ~%90 hayır |

## must: güçlü kanıta dayalı "kesin öyle"
> She's been working for 12 hours. She **must be** tired. | 12 saattir çalışıyor. Yorgun olmalı.
> The lights are on. They **must be** at home. | Işıklar açık. Evde olmalılar.
> You **must be** joking! | Şaka yapıyor olmalısın!
! Bu anlamdaki must bir **zorunluluk** değil, bir **sonuçtur**: "Yorgun olmak zorunda" değil, "Yorgun olduğu belli."

## may / might / could: "olabilir"
> He isn't answering. He **might be** asleep. | Cevap vermiyor. Uyuyor olabilir.
> Take an umbrella. It **may** rain later. | Şemsiye al. Sonra yağmur yağabilir.
> "Where's Can?" "I'm not sure. He **could be** in the library." | Kütüphanede olabilir.
! Üçü de "olabilir" demektir ve çoğu zaman birbirinin yerine kullanılır. **might** biraz daha az emin bir tahmin bildirir.
! Gelecekteki ihtimal için **can kullanılmaz**: "It can rain tomorrow" yerine **It might / may / could rain** tomorrow.

## can't: "olamaz"
> That **can't be** Ali. Ali is in London. | O Ali olamaz. Ali Londra'da.
> You've just eaten. You **can't be** hungry! | Az önce yedin. Aç olamazsın!
### Tuzak: tahminde must'ın zıttı mustn't DEĞİLDİR
**mustn't** "yasak" demektir. Tahminde "olamaz" anlamı için **can't** kullanılır:
x He mustn't be at home. His car isn't there. => He **can't** be at home.

## Olumsuz ihtimal: might not / may not
"Belki değil, -meyebilir" anlamı için:
> She **might not** come. She's very busy. | Gelmeyebilir. Çok meşgul.
> It **may not** be true. | Doğru olmayabilir.
! **couldn't** ise "olamaz" anlamına yakındır (can't gibi). "Belki değil" için might not / may not kullan.

## Yapı
| Ne hakkında? | Yapı | Örnek |
| Durum (şimdi) | modal + **be** + sıfat/isim/yer | She must **be** tired. |
| Şu an devam eden eylem | modal + **be + -ing** | They must **be having** dinner. (Yemek yiyor olmalılar.) |
| Genel / gelecek | modal + yalın fiil | He might **come** later. |
x She must is at work. => She must **be** at work.
x He might to be ill. => He might **be** ill.
(Geçmiş hakkında tahmin, örneğin "must have been", B2'de "Past Modals" konusunda anlatılıyor.)

## Kontrol listesi
- Güçlü kanıt, "kesin öyle" → **must**
- Emin değilim, "olabilir" → **might / may / could**
- "Olamaz" → **can't** (mustn't değil!)
- "Olmayabilir" → **might not / may not**
- Modal + **yalın fiil** (be, -ing için be + -ing)
`,
  exExtra: [
    { t: 'mc', q: 'They\'re not answering the phone. They ___ be having dinner.', o: ['might', 'mustn\'t', 'can'], a: 0,
      w: { 1: `"mustn't" yasak demek, tahmin değil.`, 2: `Olumlu tahminde can kullanılmaz.` },
      e: `Olasılık → **might** be having dinner.` },
    { t: 'mc', q: 'Hangisi "Gelmeyebilir" demek?', o: ["He might not come.", "He can't come.", "He mustn't come."], a: 0,
      w: { 1: `"can't" = gelemez (yapamaz) ya da gelmesi imkânsız.`, 2: `"mustn't" = gelmesi yasak.` },
      e: `Olumsuz ihtimal → **might not** / may not.` },
    { t: 'fill', q: "You've been travelling all day. You ___ be exhausted.", a: ['must'],
      w: { might: `Güçlü kanıt var → must daha doğal.`, should: `Tahminde güçlü kanıt → must.` },
      e: `Güçlü kanıt → **must** be.` },
    { t: 'fill', q: "That ___ be the right answer. It doesn't make sense.", a: ["can't", 'cannot'],
      w: { "mustn't": `Tahminde "olamaz" → can't.` }, e: `Olamaz → **can't** be.` },
    { t: 'fix', s: 'He might to be at the gym now.', i: 2, c: '',
      e: `Modal + yalın fiil: He might **be** at the gym. (to yok)` },
  ],
};
