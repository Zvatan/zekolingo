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
  anim: [
    { title: 'Present Continuous = Şimdiki zaman', time: [['bar', 0.42, 0.58, 'şu an', 'v']],
      tr: [['Şu an', 't'], [' kitap', 'n'], [' okuyorum', 'v']], blocks: [['I', 's'], ["'m reading#V", 'v'], ['a book', 'n'], ['now', 't']],
      note: 'Eylem **başladı, şu an sürüyor, henüz bitmedi**. Çubuk "şimdi"nin üstünde.' },
    { title: 'Formül', blocks: [['Özne', 's'], ['am / is / are', 'x', 'hi', 'be'], ['fiil + ing', 'v', 'hi', 'V-ing']],
      note: 'İki parça var ve **ikisi de şart**.' },
    { title: 'Bütün özneler', rows: [[['I', 's'], ['am', 'x', 'hi'], ['working', 'v']], [['he · she · it', 's'], ['is', 'x', 'hi'], ['working', 'v']], [['you · we · they', 's'], ['are', 'x', 'hi'], ['working', 'v']]],
      note: 'be özneye göre değişir, **-ing** hep aynı.' },
    { title: 'Parça eksik olamaz', rows: [[['I', 's'], ['reading', 'v', 'no', 'am yok']], [['I', 's'], ['am', 'x'], ['read', 'v', 'no', '-ing yok']]],
      note: 'İkisi de yanlış.' },
    { rows: [[['I', 's'], ['am', 'x', 'ok'], ['reading', 'v', 'ok']]], note: 'Doğrusu: I **am reading**.' },
    { title: '-ing yazımı', rows: [[['make', 'v'], ['making', 'v', 'hi', 'e düşer']], [['run', 'v'], ['running', 'v', 'hi', 'harf ikilenir']], [['lie', 'v'], ['lying', 'v', 'hi', 'ie → y']]],
      note: 'Sessiz -e düşer, kısa fiilde son harf ikilenir, -ie → **y**.' },
    { title: 'Olumsuz', tr: [['Uyumuyor', 'neg']], blocks: [['He', 's'], ['is#B', 'x'], ['not', 'neg', 'hi'], ['sleeping', 'v']],
      note: 'be\'den sonra **not**: isn\'t, aren\'t, I\'m not.' },
    { title: 'Soru', tr: [['Dinliyor musun?', 'q']], blocks: [['You', 's'], ['are#B', 'x'], ['listening', 'v']],
      note: 'Olumlu cümle...' },
    { tr: [['Dinliyor musun?', 'q']], blocks: [['Are#B', 'q', 'hi'], ['you#You', 's'], ['listening?#listening', 'v']],
      note: '...**be başa** geçer. do kullanılmaz!' },
    { blocks: [['What', 'q', 'hi'], ['are#B', 'q'], ['you#You', 's'], ['doing?#listening', 'v']],
      note: 'Soru kelimesi en başa: What **are** you **doing**? (Ne yapıyorsun?)' },
    { title: 'Kullanım 2: Bu aralar, geçici', time: [['bar', 0.34, 0.66, 'bu hafta', 'v']],
      blocks: [["She's staying", 'v'], ['with her aunt', 'n'], ['this week', 't']],
      note: 'Şu saniye olmasa da **geçici** bir durum: bu hafta, bu aralar.' },
    { title: 'Kullanım 3: Ayarlanmış plan', time: [['dot', 0.78, 'yarın 6\'da', 'q']],
      blocks: [["I'm meeting", 'v'], ['Ali', 'n'], ['at 6 tomorrow', 't']],
      note: 'Saati ve yeri belli **gelecek planı**. Zaman ifadesi şart.' },
    { title: 'Present Simple ile farkı', time: [['rep', 0.08, 0.92, 'her gün: I work', 'n', 'b'], ['bar', 0.43, 0.57, 'şu an: I\'m working', 'v']],
      rows: [[['I', 's'], ['work', 'n', 'hi'], ['every day', 't']], [["I'm", 's'], ['working', 'v', 'hi'], ['now', 't']]],
      note: 'Noktalar = **rutin** (Simple). Çubuk = **şu an** (Continuous).' },
    { title: 'Durum fiilleri -ing almaz', blocks: [['I', 's'], ["'m wanting#W", 'v', 'no'], ['a coffee', 'n']],
      note: 'want, like, know, need, understand **durum** bildirir...' },
    { blocks: [['I', 's'], ['want#W', 'v', 'ok'], ['a coffee', 'n']],
      note: '...şu an bile olsa Present Simple: I **want** a coffee.' },
    { title: 'İpucu kelimeler', rows: [[['now', 't'], ['right now', 't'], ['at the moment', 't']], [['today', 't'], ['this week', 't'], ['these days', 't']], [['Look!', 't'], ['Listen!', 't']]],
      note: 'Bunları gördüğünde aklına **Present Continuous** gelsin.' },
    { title: 'Özet', time: [['bar', 0.4, 0.6, 'şu an / geçici', 'v']], blocks: [['am / is / are', 'x', 'hi'], ['+', 'x'], ['V-ing', 'v', 'hi']],
      note: 'Şu an, bu aralar, ayarlanmış plan → **am / is / are + -ing**.' },
  ],
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
