export default {
  lesson: `
## Türkçe ile tam ters sıra
Türkçede bir ismi tanımlayan kısım **ismin önüne** gelir ve fiile "-an, -dığı" eki eklenir:
- **yanımda oturan** adam
- **dün aldığım** kitap
- **büyüdüğüm** şehir
İngilizcede ise isim **önce** gelir, tanım **arkasından**, bir **ilgi zamiri** (who, which, that...) ile bağlanır:
- the man **who sits next to me**
- the book **that I bought yesterday**
- the city **where I grew up**

## Hangi ilgi zamiri?
| Zamir | Ne için? | Örnek | Türkçe |
| **who** | insanlar | The woman **who** lives next door is a doctor. | Yan evde oturan kadın |
| **which** | eşya, hayvan, fikir | The phone **which** I bought is great. | Aldığım telefon |
| **that** | insan ve eşya (who / which yerine, günlük dilde) | The film **that** we watched was long. | İzlediğimiz film |
| **where** | yerler | This is the café **where** we met. | Tanıştığımız kafe |
| **whose** | sahiplik (kimin / onun ...) | That's the man **whose** car was stolen. | Arabası çalınan adam |
| **when** | zamanlar | I remember the day **when** we met. | Tanıştığımız gün |

## Özne mi, nesne mi? (Zamir düşer mi?)
### 1) İlgi zamiri tanımın ÖZNESİ ise: atılamaz
Zamirden hemen sonra **fiil** gelir:
> The man **who called** you is here. | Seni arayan adam burada. ("The man called you is here" yanlış)
> The bus **that goes** to the airport is late. | Havalimanına giden otobüs geç kaldı.
### 2) İlgi zamiri tanımın NESNESİ ise: atılabilir
Zamirden sonra **başka bir özne** (I, you, she...) gelir. Günlük dilde zamir çoğunlukla atılır:
> The book **(that) I bought** is great. | Aldığım kitap harika.
> The girl **(who) you met** is my cousin. | Tanıştığın kız kuzenim.
> The film **(which) we watched** was boring. | İzlediğimiz film sıkıcıydı.

## Zamiri tekrar etme!
İlgi zamiri zaten ismin yerini tuttuğu için tanımın içinde **it, him, her, them tekrar edilmez**. Türkçede böyle bir hata olmadığı halde Türkler bunu çok yapar:
x The book which I bought it is great. => The book which I bought is great.
x The man who I saw him was tall. => The man who I saw was tall.

## where mi, which mi?
**where** kendi içinde "-de" anlamını taşır. **which** kullanırsan edat gerekir:
> This is the house **where** I was born. = This is the house **which** I was born **in**. = This is the house I was born **in**.
x This is the city which I was born. => This is the city **where** I was born.

## whose: sahiplik
"Onun ..." anlamında, ismin önüne gelir:
> I have a friend **whose** father is a pilot. | Babası pilot olan bir arkadaşım var.
> That's the house **whose** windows are broken. | Pencereleri kırık olan ev bu.
x I have a friend who his father is a pilot. => I have a friend **whose** father is a pilot.

## Edatlar sona gidebilir
Günlük dilde edat tanımın **sonunda** kalır:
> The person **(who) I spoke to** was very helpful. | Konuştuğum kişi çok yardımcı oldu.
> The music **(that) I listen to** is quite old. | Dinlediğim müzik oldukça eski.

## Kontrol listesi
- İnsan → **who / that**, eşya → **which / that**, yer → **where**, sahiplik → **whose**
- Zamirden sonra fiil varsa (özne) → zamir **kalır**
- Zamirden sonra özne varsa (nesne) → zamir **atılabilir**
- it / him / them **tekrar edilmez**
`,
  exExtra: [
    { t: 'mc', q: 'I remember the day ___ we first met.', o: ['when', 'which', 'who'], a: 0,
      w: { 1: `Zaman bildiren isimden (day) sonra when kullanılır.`, 2: `who insanlar içindir.` },
      e: `Zaman → **when**: the day when we met.` },
    { t: 'mc', q: 'Hangisinde ilgi zamiri ATILAMAZ?', o: ['The woman who lives here is a nurse.', 'The book that I read was long.', 'The man who you saw is my uncle.'], a: 0,
      w: { 1: `"that" nesne (I read) → atılabilir.`, 2: `"who" nesne (you saw) → atılabilir.` },
      e: `Zamirden sonra fiil varsa (özne) atılamaz: The woman **who lives**...` },
    { t: 'fill', q: 'The person I spoke ___ was very kind.', h: 'konuştuğum kişi', a: ['to', 'with'],
      w: {}, e: `speak **to** someone → edat sonda kalır: the person I spoke **to**.` },
    { t: 'fill', q: "That's the actor ___ films I love.", h: 'filmlerini sevdiğim', a: ['whose'],
      w: { who: `"onun filmleri" sahiplik → whose.`, "who's": `who's = who is. Sahiplik → whose.` },
      e: `Sahiplik → **whose** films.` },
    { t: 'fix', s: 'The man who I met him yesterday is a pilot.', i: 5, c: '',
      e: `İlgi zamiri (who) zaten adamın yerini tutuyor. **him** tekrar edilmez.` },
  ],
};
