export default {
  lesson: `
## Şart cümleleri (Conditionals)
"Eğer ... olursa, ... olur" yapısındaki cümlelere **conditional** denir. İki parçası vardır:
- **if'li bölüm** (şart): if it rains
- **sonuç bölümü**: we'll stay at home
İngilizcede dört temel tip vardır. Bu konuda en sık kullanılan iki tanesini öğreniyoruz.
| Tip | Ne anlatır? | Yapı |
| Zero | Her zaman doğru olan genel gerçekler | If + Present Simple, Present Simple |
| First | Gelecekte **gerçekten olası** durumlar | If + Present Simple, will + fiil |
| Second | Hayali, gerçek dışı durumlar (sonraki konu) | If + Past Simple, would + fiil |

## Zero Conditional: genel gerçekler
Bir şey **her zaman** başka bir şeye yol açıyorsa:
> **If** you **heat** ice, it **melts**. | Buzu ısıtırsan erir.
> **If** I **drink** coffee at night, I **can't** sleep. | Gece kahve içersem uyuyamam. (her seferinde)
> Plants **die** if they **don't get** water. | Bitkiler su almazsa ölür.
Burada **if** yerine **when** (-dığında) da kullanılabilir, anlam değişmez.

## First Conditional: gerçek, olası gelecek
Gelecekte **olma ihtimali gerçekten olan** bir durumu ve sonucunu anlatır:
> **If** it **rains** tomorrow, we**'ll stay** at home. | Yarın yağmur yağarsa evde kalacağız.
> **If** you **study** hard, you**'ll pass** the exam. | Çok çalışırsan sınavı geçersin.
> **If** I **see** Ali, I**'ll tell** him. | Ali'yi görürsem ona söylerim.
### Türklerin tuzağı: if'li bölümde will YOK
Türkçede "yağ**arsa**" kelimesinde gelecek anlamı vardır. Bu yüzden if'li bölüme **will** koymak çok yaygın bir hatadır. İngilizcede if'li bölüm **Present Simple** kalır.
x If it will rain, we will stay at home. => If it **rains**, we will stay at home.
x If you will need help, call me. => If you **need** help, call me.
### Sonuç bölümünde başka modallar
will yerine can, may, might, should ya da emir cümlesi de gelebilir:
> If you finish early, you **can** go home. | Erken bitirirsen eve gidebilirsin.
> If you see her, **tell** her to call me. | Onu görürsen beni aramasını söyle.
> If it's sunny, we **might** go to the beach. | Güneşli olursa belki plaja gideriz.

## Sıralama ve virgül
if'li bölüm başta da sonda da olabilir. **Başta** ise iki bölüm arasına **virgül** konur.
> **If** you hurry**,** you'll catch the bus. (virgül var)
> You'll catch the bus **if** you hurry. (virgül yok)

## unless = if ... not
**unless** "-mezse, -mazsa" demektir. Zaten olumsuz anlam taşıdığı için yanına **not eklenmez**.
> **Unless** you hurry, you'll miss the bus. = **If** you **don't** hurry, you'll miss the bus. | Acele etmezsen otobüsü kaçırırsın.
x Unless you don't study, you'll fail. => **Unless** you study, you'll fail.

## when, as soon as, before, after, until
Gelecekten bahsederken bu bağlaçlardan sonra da **Present Simple** gelir:
> I'll call you **when** I **arrive**. | Varınca seni ararım.
> **As soon as** I **get** home, I'll have a shower. | Eve varır varmaz duş alacağım.
> Wait here **until** I **come** back. | Ben dönene kadar burada bekle.
### if mi, when mi?
- **if**: olabilir de olmayabilir de. **If** I see him... (görebilirim, belki görmem)
- **when**: kesin olacak. **When** I see him... (onu kesinlikle göreceğim)

## Kontrol listesi
- Genel gerçek → **If + Present, Present**
- Olası gelecek → **If + Present, will**
- if / when / unless / until / as soon as sonrası → **will yok**
- unless = if not (yanına not gelmez)
`,
  exExtra: [
    { t: 'mc', q: '___ I see him at the party, I\'ll give him your message.', o: ['If', 'Unless', 'Until'], a: 0,
      w: { 1: `"Unless" = -mezse. Anlam: görürsem → If.`, 2: `"Until" = -e kadar.` },
      e: `Olasılık → **If**.` },
    { t: 'mc', q: 'If you see Ayşe, ___ her I said hello.', o: ['tell', 'will tell', 'told'], a: 0,
      w: { 1: `Sonuç bölümü emir cümlesi olabilir: tell her.`, 2: `Emir cümlesi yalın fiille başlar.` },
      e: `Sonuç bölümünde emir: If you see her, **tell** her...` },
    { t: 'mc', q: 'Hangisi "Ben dönene kadar burada bekle" demek?', o: ['Wait here until I come back.', 'Wait here until I will come back.', 'Wait here unless I come back.'], a: 0,
      w: { 1: `until sonrası will kullanılmaz.`, 2: `"unless" = -mezse. "-e kadar" = until.` },
      e: `until + **Present Simple**.` },
    { t: 'fill', q: 'If you ___ (not / water) the plants, they will die.', a: ["don't water", 'do not water'],
      w: { "won't water": `if'li bölümde will kullanılmaz.`, "doesn't water": `you → don't.` },
      e: `If you **don't water**...` },
    { t: 'fill', q: 'You can borrow my car ___ you drive carefully.', h: 'eğer', a: ['if', 'as long as'],
      w: { unless: `Anlam: dikkatli sürersen → if.` }, e: `**if** you drive carefully.` },
  ],
};
