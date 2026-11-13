export default {
  lesson: `
## Ne zaman kullanılır?
**Present Continuous** (şimdiki zaman), Türkçedeki "-yor" zamanına benzer. Ama İngilizcede **sadece şu an ya da bu aralar** devam eden şeyler için kullanılır:
| Ne anlatıyor? | Örnek |
| Konuşma anında olan | I'm **reading** a book now. (Şu an kitap okuyorum.) |
| Bu aralar devam eden, geçici | She's **staying** with her aunt this week. |
| Ayarlanmış yakın gelecek planı | I'm **meeting** Ali tomorrow. |
! Türkçede "Bankada çalışıyorum" kalıcı bir iş için de söylenir. İngilizcede kalıcı durumlar **Present Simple** ile anlatılır: I **work** in a bank. Present Continuous ise "şu an / geçici" demektir.

## Yapı: am / is / are + fiil-ing
| Özne | be | fiil + ing | Örnek |
| I | am ('m) | working | I'm working. |
| you / we / they | are ('re) | working | They're working. |
| he / she / it | is ('s) | working | She's working. |
! **İki parça da şart**: "I working" (be eksik) ve "I am work" (-ing eksik) yanlıştır.

## Olumsuz
| Uzun | Kısa |
| I am not working | I'm not working |
| you / we / they are not working | aren't working / 're not working |
| he / she / it is not working | isn't working / 's not working |
> I'**m not** watching TV. | Televizyon izlemiyorum.
> It **isn't** raining now. | Şu an yağmur yağmıyor.

## Soru ve kısa cevap
be başa geçer: **Are** you listening? (Dinliyor musun?)
| Soru | Evet | Hayır |
| Are you working? | Yes, I **am**. | No, I'**m not**. |
| Is she sleeping? | Yes, she **is**. | No, she **isn't**. |
| Are they coming? | Yes, they **are**. | No, they **aren't**. |
Soru kelimesiyle: **What are** you **doing**? (Ne yapıyorsun?) / **Where is** he **going**? (Nereye gidiyor?)

## -ing yazım kuralları
| Kural | Örnek |
| Çoğu fiil: **+ ing** | work → working, read → reading, play → playing |
| Sessiz **-e** ile bitenler: **e düşer** | write → writing, make → making, come → coming |
| ama **-ee** ile bitenler: e düşmez | see → seeing, agree → agreeing |
| Tek heceli, **sesli + sessiz** ile bitenler: son harf ikilenir | run → running, sit → sitting, swim → swimming, stop → stopping, get → getting |
| ama -w, -x, -y ile bitenler ikilenmez | snow → snowing, fix → fixing, play → playing |
| **-ie** ile bitenler: **ie → y** | lie → lying, die → dying, tie → tying |

## İpucu kelimeler
now (şimdi), right now (tam şu an), at the moment (şu anda), today (bugün), this week (bu hafta), these days (bu aralar), Look! (Bak!), Listen! (Dinle!)
> **Look!** It's snowing! | Bak! Kar yağıyor!

## -ing almayan fiiller (durum fiilleri)
Bazı fiiller bir **eylem** değil, bir **durum** bildirir. Bunlar şu an olsa bile genelde -ing almaz:
| Grup | Fiiller |
| Duygu | like, love, hate, want, need, prefer |
| Düşünce | know, understand, believe, remember, forget, mean, think (fikir) |
| Sahiplik | have (sahip olmak), own, belong |
| Duyu ve görünüş | see, hear, smell, taste, seem |
> I **want** a coffee. ("I'm wanting" yanlış) | Do you **understand**? ("Are you understanding" yanlış)
! **have** sahiplikse -ing almaz (I **have** a car), ama bir eylemse alabilir: I'm **having** lunch / a shower.
! **think** fikirse -ing almaz (I **think** it's good), ama "düşünüp taşınmak" anlamında alabilir: I'm **thinking** about my holiday.

## Kontrol listesi
- Şu an / bu aralar mı? → **am / is / are + -ing**
- Kalıcı mı, rutin mi? → Present Simple (I work, I live)
- Durum fiili mi (want, know, like)? → -ing kullanma.
`,
  exExtra: [
    { t: 'mc', q: 'Hangisi doğru yazılmış?', o: ['making', 'makeing', 'makking'], a: 0,
      w: { 1: `-e ile biten fiillerde e düşer: making.`, 2: `make'in sonu sesli+sessiz değil, ikilenmez.` },
      e: `make → mak**ing** (e düşer).` },
    { t: 'mc', q: 'Hangisi doğru yazılmış?', o: ['lying', 'lieing', 'liing'], a: 0,
      w: { 1: `-ie ile bitenlerde ie → y: lying.`, 2: `-ie ile bitenlerde ie → y: lying.` },
      e: `lie → l**y**ing, die → dying.` },
    { t: 'mc', q: '"Where\'s Mum?" "She ___ a shower."', o: ["'s having", 'has', "'s haveing"], a: 0,
      w: { 1: `Şu an olan bir eylem (duş almak) → is having.`, 2: `have → having (e düşer).` },
      e: `have bir eylemse -ing alabilir: She's **having** a shower.` },
    { t: 'fill', q: 'I ___ (think) about changing my job.', h: 'düşünüp taşınıyorum', a: ["'m thinking", 'am thinking'],
      w: { think: `"düşünüp taşınmak" bir eylem → am thinking.` },
      e: `Eylem anlamında think → **am thinking** about...` },
    { t: 'fill', q: 'I ___ (not / understand) this question.', a: ["don't understand", 'do not understand'],
      w: { "'m not understanding": `understand durum fiilidir, -ing almaz.`, "am not understanding": `understand durum fiilidir, -ing almaz.` },
      e: `Durum fiili → **don't understand**.` },
    { t: 'fix', s: 'Where is he go now?', i: 3, c: 'going',
      e: `be + fiil-ing: Where is he **going**?` },
  ],
};
