export default {
  lesson: `
## Şu an olan şeyler
**Present Continuous** (şimdiki zaman) konuşma anında devam eden eylemleri anlatır.
Formül: **am / is / are + fiil-ing**
> I **am reading** a book now. | Şu an kitap okuyorum.
> She **is talking** on the phone. | O telefonda konuşuyor.
> They **are playing** football. | Onlar futbol oynuyor.
! İki parça da şarttır. "I reading" (am eksik) ve "I am read" (-ing eksik) yanlıştır.

## -ing nasıl eklenir?
| Kural | Örnek |
| Çoğu fiil: + ing | work → working, read → reading |
| Sessiz -e ile biten: e düşer | write → writing, make → making |
| Tek heceli, sesli + sessiz: son harf ikilenir | run → running, sit → sitting, swim → swimming |
| -ie ile biten: ie → y | lie → lying, die → dying |

## Olumsuz ve soru
> I'**m not** working today. | Bugün çalışmıyorum.
> He **isn't** sleeping. | O uyumuyor.
> **Are** you listening? | Dinliyor musun?
> What **are** you **doing**? | Ne yapıyorsun?
Kısa cevaplar: Yes, I am. / No, she isn't.

## İpucu kelimeler
now (şimdi), right now (tam şu an), at the moment (şu anda), Look! (Bak!), Listen! (Dinle!)
> **Look!** It**'s raining**. | Bak! Yağmur yağıyor.

## Bazı fiiller -ing almaz
Duygu, düşünce ve sahiplik bildiren fiiller (**stative verbs**) genelde -ing almaz: like, love, hate, want, need, know, understand, believe, have (sahiplik).
x I am wanting a coffee. => I **want** a coffee.
x Are you understanding? => **Do** you **understand**?
`,
  anim: [
    { title: 'Şu an olan şeyler', tr: [['Şu an', 't'], [' kitap', 'n'], [' oku', 'v'], ['yorum', 'x']], blocks: [['I', 's'], ['read#V', 'v'], ['a book', 'n'], ['now', 't']],
      note: 'Bu haliyle "her gün okurum" anlamına gelir. Şu an olduğunu nasıl söyleriz?' },
    { blocks: [['I', 's'], ['am', 'x', 'hi', 'be'], ['reading#V', 'v', 'hi', '-ing'], ['a book', 'n'], ['now', 't']],
      note: 'İki parça gelir: **am / is / are** + fiil**-ing**' },
    { blocks: [['She#I', 's'], ['is#am', 'x', 'hi'], ['reading#V', 'v'], ['a book', 'n'], ['now', 't']],
      note: 'be özneye göre değişir: she → **is**' },
    { title: 'İki parça da şart', rows: [[['I', 's'], ['reading', 'v', 'no']], [['I', 's'], ['am', 'x'], ['read', 'v', 'no']]],
      note: '"I reading" (am yok) ve "I am read" (-ing yok) yanlıştır.' },
    { title: '-ing eklerken', rows: [[['write', 'v'], ['writing', 'v', 'hi', 'e düşer']], [['swim', 'v'], ['swimming', 'v', 'hi', 'harf ikilenir']]],
      note: 'make → making, run → running, sit → sitting' },
    { title: 'Soru', tr: [['Ne', 'q'], [' yapıyorsun?', 'v']], blocks: [['You', 's'], ['are#B', 'x'], ['doing#D', 'v'], ['what?#W', 'q']],
      note: 'Soru yapalım...' },
    { blocks: [['What#W', 'q', 'hi'], ['are#B', 'x', 'hi'], ['you#You', 's'], ['doing?#D', 'v']],
      note: '...soru kelimesi başa, ardından **are** gelir: What are you doing?' },
    { title: 'Bazı fiiller -ing almaz', blocks: [['I', 's'], ['am', 'x', 'no'], ['wanting', 'v', 'no'], ['a coffee', 'n']],
      note: 'want, like, know, understand gibi **durum** fiilleri...' },
    { blocks: [['I', 's'], ['want#wanting', 'v', 'ok'], ['a coffee', 'n']],
      note: '...şu an bile olsa geniş zamanla kullanılır: I **want** a coffee.' },
  ],
  ex: [
    { t: 'mc', q: 'Be quiet! The baby ___.', o: ['is sleeping', 'sleeps', 'sleeping'], a: 0,
      w: { 1: `"Sessiz ol!" diyor, yani bebek şu an uyuyor. Şu an olan eylem → is sleeping.`, 2: `is eksik. Şimdiki zamanın iki parçası var: is + sleeping.` },
      e: `Konuşma anında olan eylem → **am / is / are + -ing**.` },
    { t: 'mc', q: 'Look! Those children ___ in the park.', o: ['are running', 'is running', 'run'], a: 0,
      w: { 1: `"children" çoğul → are.`, 2: `"Look!" şu an olduğunu gösterir → are running.` },
      e: `**Look!** ifadesi şu ana işaret eder. they → **are running**.` },
    { t: 'mc', q: 'What ___ you doing?', o: ['are', 'do', 'is'], a: 0,
      w: { 1: `"doing" (-ing) varsa yardımcı fiil be olur: are.`, 2: `you → are.` },
      e: `What **are** you doing? (Ne yapıyorsun?)` },
    { t: 'mc', q: 'I ___ your question.', o: ["don't understand", "am not understanding", "not understand"], a: 0,
      w: { 1: `"understand" -ing almayan (stative) bir fiildir. Geniş zaman kullanılır.`, 2: `Olumsuzda do gerekir: don't understand.` },
      e: `understand, know, want, like gibi fiiller -ing almaz: I **don't understand**.` },
    { t: 'fill', q: 'She ___ (write) an email at the moment.', a: ['is writing', "'s writing"],
      w: { 'is writeing': `-e ile biten fiillerde e düşer: writing.`, writing: `be fiili eksik: is writing.`, writes: `"at the moment" şu anı gösterir → is writing.` },
      e: `write → wr**iting** (e düşer). She **is writing**.` },
    { t: 'fill', q: 'We ___ (swim) in the sea now.', a: ['are swimming', "'re swimming"],
      w: { 'are swiming': `swim tek heceli ve sesli + sessiz harfle bitiyor, son harf ikilenir: swi**mm**ing.`, swimming: `be fiili eksik: are swimming.`, 'is swimming': `we → are.` },
      e: `swim → swi**mm**ing. We **are swimming**.` },
    { t: 'fill', q: 'I ___ (not / work) today. It\'s Sunday.', a: ["'m not working", 'am not working'],
      w: { "don't working": `Şimdiki zamanın olumsuzu be + not ile yapılır: am not working.`, 'not working': `be fiili eksik: am not working.`, "amn't working": `"amn't" diye bir kısaltma yok: I'm not working.` },
      e: `I **am not** (I'm not) working.` },
    { t: 'fill', q: '___ it raining now?', a: ['Is'],
      w: { does: `"raining" (-ing) varsa soru be ile kurulur: Is it raining?`, are: `it → is.` },
      e: `Soru: **Is** it raining?` },
    { t: 'fill', q: 'Listen! Someone ___ (sing).', a: ['is singing', "'s singing"],
      w: { sings: `"Listen!" şu anı gösterir → is singing.`, singing: `be fiili eksik: is singing.` },
      e: `Someone = tekil → **is singing**.` },
    { t: 'order', tr: 'Şu an kitap okuyorum.', a: 'I am reading a book now.', x: ['read'],
      w: { read: `Şimdiki zamanda fiil **-ing** alır: reading.` }, e: `I **am reading** a book now.` },
    { t: 'order', tr: 'Ne yapıyorsun?', a: 'What are you doing?', x: ['do'],
      w: { do: `Şimdiki zamanda soru be ile kurulur: What **are** you doing?` }, e: `**What are you doing?**` },
    { t: 'fix', s: 'He is play computer games.', i: 2, c: 'playing',
      e: `be + fiil**-ing**: He is **playing** computer games.` },
    { t: 'fix', s: 'Look! The bus coming.', i: 3, c: 'is coming.',
      e: `be eksik: The bus **is coming**.` },
    { t: 'mc', q: 'Hangisi doğru?', o: ['I want a glass of water.', 'I am wanting a glass of water.', 'I wanting a glass of water.'], a: 0,
      w: { 1: `"want" -ing almayan (stative) bir fiildir. Şu an istesen bile geniş zaman kullanılır.`, 2: `Hem be eksik hem de "want" -ing almaz.` },
      e: `want, like, know, understand gibi fiiller -ing almaz: I **want** a glass of water.` },
    { t: 'mc', q: 'Hangisi doğru yazılmış?', o: ['sitting', 'siting', 'sitteing'], a: 0,
      w: { 1: `sit tek heceli, sesli + sessiz ile bitiyor → son harf ikilenir: si**tt**ing.`, 2: `sit → sitting. Araya e girmez.` },
      e: `Tek heceli, sesli + sessiz ile biten fiiller: sit → si**tt**ing, run → ru**nn**ing.` },
  ],
};
