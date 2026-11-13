export default {
  lesson: `
## Zero Conditional: genel gerçekler
**If + Present Simple, Present Simple**: Her zaman doğru olan sonuçlar.
> **If** you **heat** ice, it **melts**. | Buzu ısıtırsan erir.
> **If** I **drink** coffee at night, I **can't** sleep. | Gece kahve içersem uyuyamam.
Burada **if** yerine **when** de kullanılabilir.

## First Conditional: gerçek, olası gelecek
**If + Present Simple, will + yalın fiil**: Gelecekte olması muhtemel bir durum ve sonucu.
> **If** it **rains** tomorrow, we**'ll stay** at home. | Yarın yağmur yağarsa evde kalacağız.
> **If** you **study** hard, you**'ll pass** the exam. | Çok çalışırsan sınavı geçersin.
! Türkçede "yağarsa" kelimesindeki gelecek anlamı, İngilizcede if'li bölümde **will ile verilmez**: "If it will rain" yanlıştır. Doğrusu: If it **rains**.

## Sıralama
if'li bölüm başta ya da sonda olabilir. Başta ise araya **virgül** konur.
> If you hurry, you'll catch the bus. = You'll catch the bus if you hurry.

## unless = if ... not
> **Unless** you hurry, you'll miss the bus. = **If** you **don't** hurry, you'll miss the bus. | Acele etmezsen otobüsü kaçırırsın.
! unless zaten olumsuz anlam taşır. Yanına not eklenmez: "Unless you don't hurry" yanlıştır.

## when, as soon as, before, after, until
Gelecekten bahsederken bu kelimelerden sonra da **Present Simple** gelir:
> I'll call you **when** I **arrive**. | Varınca seni ararım. ("when I will arrive" yanlış)
> **As soon as** I **get** home, I'll have a shower. | Eve varır varmaz duş alacağım.
`,
  ex: [
    { t: 'mc', q: 'If it ___ tomorrow, we will cancel the picnic.', o: ['rains', 'will rain', 'rained'], a: 0,
      w: { 1: `if'li bölümde will kullanılmaz → Present Simple: rains.`, 2: `Gelecekteki gerçek bir olasılık → First Conditional: rains.` },
      e: `**If + Present Simple**, will + fiil.` },
    { t: 'mc', q: "If you ___ water to 100°C, it boils.", o: ['heat', 'will heat', 'heated'], a: 0,
      w: { 1: `Genel gerçek (Zero Conditional) → iki tarafta da Present Simple.`, 2: `Genel gerçek → Present Simple.` },
      e: `Zero Conditional: **If + Present, Present**.` },
    { t: 'mc', q: "I'll call you as soon as I ___ at the airport.", o: ['arrive', 'will arrive', 'arrived'], a: 0,
      w: { 1: `"as soon as" sonrasında gelecek anlamına rağmen Present Simple gelir.`, 2: `Gelecekten bahsediliyor → arrive.` },
      e: `as soon as / when + **Present Simple**.` },
    { t: 'mc', q: "___ you leave now, you'll be late.", o: ['Unless', 'If', 'When'], a: 0,
      w: { 1: `"If you leave now, you'll be late" anlamsız olur. Gerekli anlam: "Şimdi çıkmazsan" → Unless.`, 2: `Anlam: "Şimdi çıkmazsan" → Unless.` },
      e: `**Unless** = if ... not (-mezsen).` },
    { t: 'mc', q: 'If she ___ the job, she will move to Ankara.', o: ['gets', 'will get', 'get'], a: 0,
      w: { 1: `if'li bölümde will kullanılmaz.`, 2: `she → gets (-s eki).` },
      e: `If she **gets** the job, ...` },
    { t: 'fill', q: 'If you ___ (not / hurry), you will miss the train.', a: ["don't hurry", 'do not hurry'],
      w: { "won't hurry": `if'li bölümde will kullanılmaz: don't hurry.`, "doesn't hurry": `you → don't.` },
      e: `If you **don't hurry**, ...` },
    { t: 'fill', q: "If I see Ayşe, I ___ (tell) her the news.", a: ["'ll tell", 'will tell'],
      w: { tell: `Sonuç bölümünde will gerekir: I'll tell.`, told: `First Conditional sonucu → will tell.` },
      e: `Sonuç → **will tell**.` },
    { t: 'fill', q: "Don't go out ___ you finish your homework.", h: '-ene kadar', a: ['until', 'before'],
      w: { when: `Anlam: "ödevini bitirene kadar" → until.`, unless: `Anlam: "-ene kadar" → until.` },
      e: `**until** (-ene kadar) + Present Simple.` },
    { t: 'fill', q: '___ you heat ice, it melts.', a: ['If', 'When'],
      w: { unless: `Anlam ters olur. Buz ısıtılınca erir → If / When.` },
      e: `Genel gerçeklerde **If** ya da **When** kullanılır.` },
    { t: 'order', tr: 'Yağmur yağarsa evde kalacağız.', a: "If it rains, we'll stay at home.", x: ['will'],
      w: { will: `if'li bölümde will kullanılmaz: If it **rains**.` }, e: `If it **rains**, we**'ll stay** at home.` },
    { t: 'order', tr: 'Eve varınca seni ararım.', a: "I'll call you when I get home.", x: ['will'],
      w: { will: `"when" sonrası Present Simple: when I **get** home.` }, e: `I'll call you **when I get** home.` },
    { t: 'fix', s: 'If you will need help, call me.', i: 2, c: '',
      e: `if'li bölümde will kullanılmaz: If you **need** help, call me.` },
    { t: 'fix', s: "Unless you don't study, you'll fail.", i: 2, c: '',
      e: `unless zaten "-mezsen" demek. not eklenmez: **Unless you study**, you'll fail.` },
    { t: 'fix', s: 'I will wait here until you will come back.', i: 6, c: '',
      e: `until sonrası Present Simple: until you **come** back.` },
  ],
};
