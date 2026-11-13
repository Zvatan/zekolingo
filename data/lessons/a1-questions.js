export default {
  lesson: `
## Türkçe ile en büyük fark: sıralama
Türkçede soru kelimesi cümlenin ortasında durabilir ve soruyu bir ek yapar: "Sen **nerede** yaşıyor**sun**?" İngilizcede ise iki kural vardır:
1. Soru kelimesi **her zaman en başa** gelir.
2. Hemen arkasından bir **yardımcı fiil** (do, does, did, am, is, are, can...) gelir, sonra özne.

## Soru formülü
| Soru kelimesi | Yardımcı fiil | Özne | Asıl fiil / geri kalan |
| Where | do | you | live? |
| What | does | she | do? |
| Where | are | you | from? |
| What | can | you | see? |
| When | is | your birthday? | |
### Hangi yardımcı fiil?
| Cümlede ne var? | Yardımcı | Örnek |
| am / is / are (fiil yok) | **am / is / are** | Where **are** you from? / How old **is** he? |
| Normal fiil (I, you, we, they) | **do** | Where **do** you work? |
| Normal fiil (he, she, it) | **does** + yalın fiil | Where **does** she work? |
| can | **can** | What **can** you cook? |
x Where you live? => Where **do** you live?
x Where does she works? => Where does she **work**?
x What means this word? => What **does** this word **mean**?

## Soru kelimeleri
| Kelime | Anlam | Örnek soru | Örnek cevap |
| What | ne | What is your name? | My name is Deniz. |
| Where | nerede, nereye | Where do you live? | In Bursa. |
| When | ne zaman | When is your birthday? | On 3 May. |
| Who | kim | Who is that man? | He's my uncle. |
| Why | neden | Why are you sad? | Because my cat is ill. |
| How | nasıl | How are you? | I'm fine, thanks. |
| Which | hangi(si) (seçenekler arasından) | Which bag is yours? | The black one. |
| Whose | kimin | Whose phone is this? | It's Ali's. |
### How ile kurulan kalıplar
| Kalıp | Anlam | Örnek |
| How old | kaç yaşında | How old are you? |
| How many | kaç tane (sayılabilen) | How many brothers do you have? |
| How much | ne kadar (sayılamayan / fiyat) | How much water do you drink? / How much is it? |
| How often | ne sıklıkla | How often do you go to the gym? |
| How long | ne kadar süre / uzunluk | How long is the film? |
| How far | ne kadar uzak | How far is the station? |
### What ile kurulan kalıplar
| Kalıp | Anlam | Örnek |
| What time | saat kaçta | What time do you get up? |
| What kind of | ne tür | What kind of music do you like? |
| What colour | ne renk | What colour is your car? |
| What ... like? | nasıl (biri / bir şey) | What's the weather like? (Hava nasıl?) |

## What mi, Which mi?
- **What**: seçenekler belli değilken (açık soru): What's your favourite food?
- **Which**: belli seçenekler arasından: **Which** do you want, tea or coffee?

## Who ile özne soruları (ileri not)
"Kim?" sorusu öznenin kendisini soruyorsa yardımcı fiil kullanılmaz:
> **Who lives** here? | Burada kim yaşıyor? ("Who does live" değil)
> **Who do** you love? | Kimi seviyorsun? (Burada özne "you")

## Why sorusuna cevap: Because
> **Why** are you late? **Because** the bus was late. | Neden geç kaldın? Çünkü otobüs geç kaldı.

## Kontrol listesi
- Soru kelimesi **başa**.
- Ardından yardımcı fiil: fiil yoksa **be**, fiil varsa **do / does**.
- **does** varsa fiil **yalın**.
- Sayılabilen → How **many**, sayılamayan / fiyat → How **much**.
`,
  exExtra: [
    { t: 'mc', q: '___ do you want, the red one or the blue one?', o: ['Which', 'What', 'Who'], a: 0,
      w: { 1: `Belli seçenekler arasından seçim → Which.`, 2: `Who insanlar içindir.` },
      e: `Belli seçenekler → **Which**.` },
    { t: 'mc', q: '"___ is the weather like today?" "It\'s sunny."', o: ['What', 'How', 'Which'], a: 0,
      w: { 1: `"like" ile kalıp: What ... like? (How is the weather? de olur ama "like" varsa What).`, 2: `Kalıp: What is ... like?` },
      e: `**What** is the weather **like**? (Hava nasıl?)` },
    { t: 'fill', q: 'How ___ is the station from here? About two kilometres.', a: ['far'],
      w: { long: `Mesafe → How far.`, much: `Mesafe → How far.` },
      e: `Mesafe → **How far**.` },
    { t: 'fill', q: 'What ___ of films do you like?', h: 'ne tür', a: ['kind', 'sort', 'type'],
      w: { kinds: `"kind" burada tekil kalır: What kind of...` }, e: `**What kind of** = ne tür.` },
    { t: 'mc', q: 'Hangisi "Burada kim yaşıyor?" demek?', o: ['Who lives here?', 'Who does live here?', 'Who do lives here?'], a: 0,
      w: { 1: `Who özneyi soruyorsa yardımcı fiil kullanılmaz.`, 2: `Who özneyi soruyorsa yardımcı fiil kullanılmaz.` },
      e: `Özne sorusu: **Who lives** here?` },
    { t: 'order', tr: 'Ne sıklıkla yüzmeye gidersin?', a: 'How often do you go swimming?', x: ['many'],
      w: { many: `Sıklık → **How often**.` }, e: `**How often do you** go swimming?` },
  ],
};
