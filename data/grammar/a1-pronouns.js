export default {
  lesson: `
## Üç farklı form
Türkçede "ben, beni, benim" diye ekle değiştiririz. İngilizcede her biri için ayrı bir kelime vardır.
| Özne | Nesne | İyelik |
| I (ben) | me (beni, bana) | my (benim) |
| you (sen) | you (seni, sana) | your (senin) |
| he (o, erkek) | him | his |
| she (o, kadın) | her | her |
| it (o, eşya/hayvan) | it | its |
| we (biz) | us | our |
| they (onlar) | them | their |

## Özne: fiilden önce
> **She** works in a bank. | O bir bankada çalışıyor.
> **They** are my friends. | Onlar benim arkadaşlarım.
! Türkçedeki "o" İngilizcede üçe ayrılır: erkek için **he**, kadın için **she**, eşya ve hayvanlar için **it**.

## Nesne: fiilden ve edattan sonra
> I love **her**. | Onu seviyorum.
> Can you help **me**? | Bana yardım edebilir misin?
> This gift is for **them**. | Bu hediye onlar için.
x She loves I. => She loves **me**.

## İyelik: isimden önce
> **My** name is Can. | Benim adım Can.
> **Their** house is big. | Onların evi büyük.
! **his / her** seçimi sahibe göre yapılır: Ali and **his** mother (Ali ve annesi), Ayşe and **her** father (Ayşe ve babası).
! **its** (onun) ile **it's** (= it is) farklıdır: The dog wants **its** food. / **It's** a dog.

## İsimlerde iyelik: 's
Türkçedeki "-ın, -in" ekinin yerine isme **'s** eklenir.
> **Tom's** car | Tom'un arabası
> my **mother's** name | annemin adı
> my **parents'** house | annemlerin evi (isim zaten -s ile bitiyorsa sadece ' eklenir)
x the car of Tom => **Tom's** car

## Sık yapılan hatalar
x My father is a doctor. She works at a hospital. => My father is a doctor. **He** works at a hospital.
x Ayşe loves his father. => Ayşe loves **her** father.
x Me am tired. => **I** am tired.
`,
  anim: [
    { title: 'Türkçede ek, İngilizcede ayrı kelime', tr: [['ben', 's'], [' / beni', 'n'], [' / benim', 'v']],
      blocks: [['I', 's', '', 'ben'], ['me', 'n', '', 'beni, bana'], ['my', 'v', '', 'benim']],
      note: 'Türkçede "ben" kelimesi ek alarak değişir. İngilizcede her biri **ayrı bir kelime**dir.' },
    { title: 'Özne: fiilden önce', tr: [['Ben', 's'], [' seni', 'n'], [' seviyorum', 'v']], blocks: [['I', 's', 'hi'], ['love', 'v'], ['you', 'n']],
      note: 'Eylemi yapan **özne** formundadır: **I**' },
    { title: 'Nesne: fiilden sonra', tr: [['O', 's'], [' beni', 'n'], [' seviyor', 'v']], blocks: [['She', 's'], ['loves', 'v'], ['me#I', 'n', 'hi']],
      note: 'Fiilden sonra gelen **nesne** formundadır: I → **me**' },
    { blocks: [['She', 's'], ['loves', 'v'], ['I#I', 'n', 'no']],
      note: '"She loves I" yanlış! Nesne konumunda **me** olmalı.' },
    { title: 'İyelik: isimden önce', tr: [['Benim', 'v'], [' adım', 'n'], [' Can', 'x']], blocks: [['My#I', 'v', 'hi'], ['name', 'n'], ['is', 'x'], ['Can', 'x']],
      note: '"benim" → **my**. Arkasından mutlaka bir isim gelir.' },
    { title: 'Türkçedeki "o" üçe ayrılır', rows: [[['he', 's', '', 'erkek']], [['she', 's', '', 'kadın']], [['it', 's', '', 'eşya / hayvan']]],
      note: 'Türkçede tek kelime olan "o", İngilizcede cinsiyete göre değişir.' },
    { title: 'his mi, her mi?', tr: [['Ali', 's'], [' ve', 'x'], [' annesi', 'n']], blocks: [['Ali', 's'], ['and', 'x'], ['his#P', 'v', 'hi'], ['mother', 'n']],
      note: 'Sahip Ali (erkek) → **his**. Annenin kadın olması önemli değil!' },
    { tr: [['Ayşe', 's'], [' ve', 'x'], [' babası', 'n']], blocks: [['Ayşe#Ali', 's'], ['and', 'x'], ['her#P', 'v', 'hi'], ['father#mother', 'n']],
      note: 'Sahip Ayşe (kadın) → **her**. Kural: **sahibe** bak.' },
    { title: 'İsimlerde sahiplik: \'s', tr: [['Tom', 's'], ['\'un', 'v'], [' arabası', 'n']], blocks: [['Tom\'s#Tom', 's', 'hi'], ['car', 'n']],
      note: 'Türkçedeki "-un, -in" eki yerine isme **\'s** eklenir: **Tom\'s** car' },
  ],
  ex: [
    { t: 'mc', q: 'Ayşe is my friend. ___ is from Bursa.', o: ['He', 'She', 'It'], a: 1,
      w: { 0: `Ayşe bir kadın, bu yüzden **she**. "he" erkekler için kullanılır.`, 2: `"it" eşya ve hayvanlar içindir, insanlar için kullanılmaz.` },
      e: `Türkçedeki "o" bir kadını anlatıyorsa **she** kullanılır.` },
    { t: 'mc', q: 'Can you help ___?', o: ['I', 'me', 'my'], a: 1,
      w: { 0: `"I" özne formudur. Fiilden sonra nesne formu gelir: me.`, 2: `"my" iyeliktir ve arkasından isim ister (my book).` },
      e: `Fiilden (help) sonra nesne formu gelir: help **me** (bana yardım et).` },
    { t: 'mc', q: 'This is Ali and ___ wife, Elif.', o: ['his', 'her', 'their'], a: 0,
      w: { 1: `Sahip Ali (erkek), bu yüzden **his**. "her" sahibi kadın olduğunda kullanılır.`, 2: `"their" = onların. Burada sahip tek kişi.` },
      e: `his / her seçimi **sahibe** göre yapılır. Ali'nin eşi → **his** wife.` },
    { t: 'mc', q: 'Elif and ___ brother are students.', o: ['his', 'her', 'its'], a: 1,
      w: { 0: `Sahip Elif (kadın), bu yüzden **her**. Kardeşin erkek olması önemli değil.`, 2: `"its" eşya ve hayvanlar içindir.` },
      e: `Sahip kadın olduğu için **her** brother (onun erkek kardeşi).` },
    { t: 'mc', q: 'I like these shoes. I want to buy ___.', o: ['it', 'them', 'they'], a: 1,
      w: { 0: `"shoes" çoğul. Çoğul nesne → them.`, 2: `"they" özne formudur. Fiilden (buy) sonra nesne formu gelir: them.` },
      e: `Çoğul bir şeyi nesne olarak anlatırken **them** kullanılır.` },
    { t: 'fill', q: '___ name is Mehmet.', h: '"Benim" adım Mehmet', a: ['My'],
      w: { me: `"me" nesne formudur. İsimden önce iyelik gelir: my.`, i: `"I" özne formudur. "benim" = my.`, mine: `"mine" tek başına kullanılır (It's mine). İsimden önce **my** gelir.` },
      e: `İsimden önce iyelik sıfatı gelir: **my** name (benim adım).` },
    { t: 'fill', q: 'Where are ___ children?', h: '"onların" çocukları', a: ['their'],
      w: { they: `"they" özne formudur. "onların" = their.`, them: `"them" nesne formudur. İsimden önce **their** gelir.`, there: `"there" (orada) ile "their" (onların) aynı okunur ama anlamları farklıdır.`, "they're": `"they're" = they are. "onların" = their.` },
      e: `**their** = onların. Where are **their** children?` },
    { t: 'fill', q: 'She is my sister. I love ___ very much.', a: ['her'],
      w: { she: `"she" özne formudur. Fiilden (love) sonra nesne gelir: her.`, him: `"him" erkekler için kullanılır. Kız kardeş → her.` },
      e: `Kadın + nesne konumu → **her** (onu).` },
    { t: 'fill', q: 'This is ___ bike.', h: '"Tom\'un" bisikleti', a: ["Tom's"],
      w: { tom: `Sahiplik için isme 's eklenir: Tom's.`, toms: `Kesme işaretini unutma: Tom**'s**.`, his: `Burada Tom'un adını kullanıp 's eklemelisin: Tom's.` },
      e: `İsim + **'s** = sahiplik. Tom's bike (Tom'un bisikleti).` },
    { t: 'order', tr: 'Onun (kadın) adı Zeynep.', a: 'Her name is Zeynep.', x: ['his'],
      w: { his: `Sahip kadın olduğu için **her**, "his" değil.` }, e: `**Her** name is Zeynep.` },
    { t: 'order', tr: 'Onları her gün görüyorum.', a: 'I see them every day.', x: ['they'],
      w: { they: `Fiilden (see) sonra nesne formu gelir: **them**.` }, e: `I see **them** every day.` },
    { t: 'fix', s: 'My father is a doctor. She works at a hospital.', i: 5, c: 'He',
      e: `"My father" erkek, bu yüzden **he**. Türkçede "o" tek kelime olduğu için bu hata çok yaygındır.` },
    { t: 'fix', s: "The cat is eating it's food.", i: 4, c: 'its',
      e: `**its** = onun (sahiplik), **it's** = it is. The cat is eating **its** food.` },
    { t: 'fix', s: 'This is my mothers car.', i: 3, c: "mother's",
      e: `Sahiplik için kesme işareti gerekir: my **mother's** car (annemin arabası).` },
    { t: 'mc', q: 'Hangisi "annemlerin evi" (ebeveynlerimin evi) demek?', o: ["my parents' house", "my parent's house", 'my parents house', 'my parents of house'], a: 0,
      w: { 1: `"parent's" tek bir ebeveyni anlatır. Çoğul (parents) zaten -s ile bittiği için sadece ' eklenir.`, 2: `Kesme işareti eksik: parents'.`, 3: `Böyle bir yapı yok. İsim + 's / ' kullanılır.` },
      e: `Çoğul isim -s ile bitiyorsa sadece **'** eklenir: my parents**'** house.` },
  ],
};
