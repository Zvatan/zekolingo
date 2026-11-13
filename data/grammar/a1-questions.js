export default {
  lesson: `
## Soru kelimeleri
| Kelime | Anlam | Örnek |
| What | ne | What is your name? |
| Where | nerede, nereye | Where do you live? |
| When | ne zaman | When is your birthday? |
| Who | kim | Who is that girl? |
| Why | neden | Why are you sad? |
| How | nasıl | How are you? |
| Which | hangisi | Which bag is yours? |
| Whose | kimin | Whose phone is this? |
| What time | saat kaçta | What time do you get up? |
| How old | kaç yaşında | How old are you? |
| How many | kaç tane | How many brothers do you have? |
| How much | ne kadar | How much is this? |

## Soru kurma formülü
Soru kelimesi + **yardımcı fiil** + özne + ...
- be varsa: **Where are** you from?
- fiil varsa: **Where do** you work? / **What does** she do?
- can varsa: **What can** you see?
> **What do** you do? | Ne iş yapıyorsun?
> **Where does** your brother live? | Erkek kardeşin nerede yaşıyor?
> **Why are** you sad? | Neden üzgünsün?
! Türkçede soru kelimesi cümlenin ortasında olabilir: "Sen nerede yaşıyorsun?" İngilizcede ise soru kelimesi **her zaman başa** gelir.
x You live where? => **Where do you live?**
x Where you live? => Where **do** you live?
x What means this word? => What **does** this word **mean**?

## How many / How much
- **How many** + sayılabilen çoğul isim: How many **books**...?
- **How much** + sayılamayan isim: How much **water**...? Fiyat sorarken de: How much **is it**?

## Why sorusuna cevap: Because
> **Why** are you happy? **Because** it's my birthday! | Neden mutlusun? Çünkü bugün doğum günüm!
`,
  ex: [
    { t: 'mc', q: '___ do you live? In Konya.', o: ['Where', 'When', 'Who'], a: 0,
      w: { 1: `When = ne zaman. Cevap bir yer → Where.`, 2: `Who = kim. Cevap bir yer → Where.` },
      e: `Yer → **Where**.` },
    { t: 'mc', q: '___ is your birthday? On 3 May.', o: ['When', 'Where', 'Who'], a: 0,
      w: { 1: `Cevap bir tarih, yer değil → When.`, 2: `Cevap bir tarih, kişi değil → When.` },
      e: `Zaman → **When**.` },
    { t: 'mc', q: "___ is that man? He's my uncle.", o: ['Who', 'What', 'Whose'], a: 0,
      w: { 1: `İnsanlar için Who kullanılır.`, 2: `Whose = kimin. Burada kim olduğu soruluyor.` },
      e: `Kişi → **Who**.` },
    { t: 'mc', q: '___ old are you?', o: ['How', 'What', 'Which'], a: 0,
      w: { 1: `Yaş sorusunun kalıbı How old'dur.`, 2: `Yaş sorusunun kalıbı How old'dur.` },
      e: `Yaş → **How old**.` },
    { t: 'mc', q: '___ apples do you want?', o: ['How many', 'How much', 'How old'], a: 0,
      w: { 1: `"apples" sayılabilen bir isim → How many.`, 2: `How old yaş sormak içindir.` },
      e: `Sayılabilen çoğul → **How many**.` },
    { t: 'mc', q: "___ is this jacket? It's 50 euros.", o: ['How much', 'How many', 'Which'], a: 0,
      w: { 1: `Fiyat sorarken How much kullanılır.`, 2: `Which = hangisi. Fiyat için How much.` },
      e: `Fiyat → **How much** is it?` },
    { t: 'mc', q: "___ phone is this? It's Ali's.", o: ['Whose', 'Who', "Who's"], a: 0,
      w: { 1: `Who = kim. Sahiplik sorusu → Whose.`, 2: `Who's = who is. "kimin" = Whose.` },
      e: `Sahiplik → **Whose** (kimin).` },
    { t: 'fill', q: 'Where ___ your sister work?', a: ['does'],
      w: { do: `"your sister" = she → does.`, is: `"work" bir fiil → does.` },
      e: `Soru kelimesi + **does** + she + yalın fiil.` },
    { t: 'fill', q: '___ are you sad? Because my cat is ill.', a: ['Why'],
      w: { what: `Cevap "Because" ile başlıyor → Why.`, how: `Cevap bir sebep → Why.` },
      e: `Sebep → **Why**. Cevap **Because** ile başlar.` },
    { t: 'fill', q: '___ time do you get up?', a: ['What'],
      w: { when: `Saat sorarken kalıp "What time"dır.`, which: `Saat sorarken kalıp "What time"dır.` },
      e: `Saat → **What time**.` },
    { t: 'fill', q: 'What ___ this word mean?', a: ['does'],
      w: { is: `"mean" bir fiil → does.`, do: `"this word" = it → does.` },
      e: `What **does** this word **mean**? (Bu kelime ne demek?)` },
    { t: 'order', tr: 'Nerelisin?', a: 'Where are you from?', x: ['do'],
      w: { do: `"from" ile be kullanılır: Where **are** you from?` }, e: `**Where are you from?**` },
    { t: 'order', tr: 'Ne iş yaparsın?', a: 'What do you do?', x: ['are'],
      w: { are: `"do" (yapmak) burada fiil → What **do** you do?` }, e: `**What do you do?** (Mesleğini sorar.)` },
    { t: 'fix', s: 'Where you live?', i: 0, c: 'Where do',
      e: `Fiilli soruda do gerekir: Where **do** you live?` },
    { t: 'fix', s: 'How many money do you have?', i: 1, c: 'much',
      e: `"money" sayılamaz → How **much** money?` },
    { t: 'fix', s: 'What does she likes?', i: 3, c: 'like?',
      e: `does'tan sonra fiil yalın kalır: What does she **like**?` },
  ],
};
