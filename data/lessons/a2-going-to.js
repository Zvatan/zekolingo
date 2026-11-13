export default {
  lesson: `
## Ne zaman kullanılır?
**be going to** iki durumda kullanılır:
| Kullanım | Örnek |
| 1. **Niyet, önceden verilmiş karar** | I'm going to learn Spanish next year. (Karar verdim.) |
| 2. **Kanıta dayalı tahmin** (şu an gördüğün bir işaret var) | Look at the clouds! It's going to rain. |

## Yapı: am / is / are + going to + yalın fiil
| Özne | Olumlu | Olumsuz | Soru |
| I | I'm going to work | I'm not going to work | Am I going to work? |
| you / we / they | they're going to work | they aren't going to work | Are they going to work? |
| he / she / it | she's going to work | she isn't going to work | Is she going to work? |
> I**'m going to visit** my grandparents this weekend. | Bu hafta sonu büyükannemleri ziyaret edeceğim.
> We **aren't going to buy** a new car. | Yeni bir araba almayacağız.
> **Are** you **going to come** to the party? | Partiye gelecek misin?
> What **are** you **going to do** after school? | Okuldan sonra ne yapacaksın?
Kısa cevaplar: Yes, I **am**. / No, she **isn't**.
! Üç parça şarttır: **be** + **going to** + **yalın fiil**.
x I going to call you. => I**'m** going to call you.
x She's going to visited Rome. => She's going to **visit** Rome.
x Do you going to come? => **Are** you going to come?

## 1) Niyet ve planlar
Konuşmadan **önce** verilmiş kararlar:
> I've decided. I**'m going to look for** a new job. | Karar verdim. Yeni bir iş arayacağım.
> She**'s going to study** medicine. | Tıp okuyacak.

## 2) Kanıta dayalı tahmin
Şu an **gördüğün** bir şeye dayanarak bir şeyin olacağını söylersin:
> Be careful! You**'re going to fall**! | Dikkat et! Düşeceksin!
> She's pregnant. She**'s going to have** a baby. | Hamile. Bir bebeği olacak.
> Look at the time! We**'re going to be** late! | Saate bak! Geç kalacağız!

## going to go
"Gitmek" fiiliyle bazen **going to go** denir, ama çoğu zaman sadece **going to + yer** kullanılır:
> I'm going to go to Izmir. = I'm **going to** Izmir. (ikisi de doğru, ikincisi daha doğal)

## Geçmişteki niyet: was / were going to
Yapmayı planladığın ama yapmadığın şeyler için:
> I **was going to** call you, but I forgot. | Seni arayacaktım ama unuttum.

## Zaman ifadeleri
tomorrow, tonight, this weekend, next week / month / year, soon, in two days, one day (bir gün)

## Kontrol listesi
- Önceden verilmiş karar ya da gözle görülen kanıt mı? → **be going to**
- be (am/is/are) + going to + **yalın** fiil
- Soru: **be** başa geçer, do kullanılmaz.
`,
  exExtra: [
    { t: 'mc', q: '"Why are you buying flour and eggs?" "I ___ a cake."', o: ["'m going to make", "'ll make", 'make'], a: 0,
      w: { 1: `Malzemeleri alıyor, yani karar önceden verilmiş → going to.`, 2: `Gelecekteki plan → going to make.` },
      e: `Önceden verilmiş karar → **going to**.` },
    { t: 'mc', q: 'I ___ call you yesterday, but I forgot. Sorry!', o: ['was going to', 'am going to', 'will'], a: 0,
      w: { 1: `"yesterday" geçmiş → was going to.`, 2: `Gerçekleşmeyen geçmiş niyet → was going to.` },
      e: `Gerçekleşmeyen geçmiş niyet → **was going to**.` },
    { t: 'fill', q: '"Is she going to move to Ankara?" "Yes, she ___."', a: ['is'],
      w: { does: `going to sorusu be ile → Yes, she is.`, will: `Soru "Is she..." → Yes, she is.` },
      e: `Is she...? → Yes, she **is**. / No, she **isn't**.` },
    { t: 'fill', q: "Look at that man! He ___ (fall) into the river!", h: 'going to ile yaz', a: ["'s going to fall", 'is going to fall'],
      w: { 'will fall': `Gözle görülen kanıt → going to.`, 'going to fall': `be eksik: is going to fall.` },
      e: `Kanıt → **is going to fall**.` },
  ],
};
