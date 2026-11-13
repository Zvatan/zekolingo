export default {
  lesson: `
## "Olmak" fiilinin geçmişi
Türkçedeki "-dı / -ydı" (evde**ydim**, yorgun**dun**, hasta**ydı**) anlamını İngilizcede **was / were** verir. Bu, am / is / are'ın geçmiş halidir.
| Şimdi | Geçmiş |
| I **am** at home. (Evdeyim.) | I **was** at home. (Evdeydim.) |
| She **is** tired. (Yorgun.) | She **was** tired. (Yorgundu.) |
| They **are** happy. (Mutlular.) | They **were** happy. (Mutluydular.) |

## Tam tablo
| Özne | Olumlu | Olumsuz | Soru |
| I | was | wasn't (was not) | Was I...? |
| you | were | weren't (were not) | Were you...? |
| he / she / it | was | wasn't | Was he / she / it...? |
| we | were | weren't | Were we...? |
| they | were | weren't | Were they...? |
Kısaca: **am** ve **is** → **was**, **are** → **were**.
! **I** ile **was** kullanılır ("I were" yanlış). **you** ile her zaman **were** kullanılır, tek bir kişiye bile ("you was" yanlış).
! was / were'ün kısaltması yoktur: "I'was" diye bir şey yok. Sadece olumsuzlar kısalır: wasn't, weren't.

## Ne zaman kullanılır?
Cümlede **fiil yoksa**, geçmişteki durumları anlatmak için kullanılır (şimdiki am/is/are gibi):
| Ne anlatıyor? | Örnek |
| Nerede olduğu | I **was** at work yesterday. |
| Nasıl olduğu | The film **was** boring. |
| Duygu, durum | We **were** hungry. |
| Yaş | I **was** ten in 2010. |
| Hava | It **was** very cold last winter. |
| Meslek | My grandfather **was** a farmer. |

## Kısa cevaplar
| Soru | Evet | Hayır |
| Were you at home? | Yes, I **was**. | No, I **wasn't**. |
| Was she happy? | Yes, she **was**. | No, she **wasn't**. |
| Were they late? | Yes, they **were**. | No, they **weren't**. |

## Soru kelimeleriyle
> **Where were** you last night? | Dün gece neredeydin?
> **How was** your holiday? | Tatilin nasıldı?
> **Why were** they late? | Neden geç kaldılar?
> **Who was** that man? | O adam kimdi?

## Doğmak: was born
"Doğmak" İngilizcede edilgen bir yapıdır ve her zaman **be born** şeklinde kullanılır.
> I **was born** in 1998. | 1998'de doğdum.
> Where **were** you **born**? | Nerede doğdun?
x I born in Izmir. => I **was born** in Izmir.
x I am born in 1998. => I **was born** in 1998.

## there was / there were
"Vardı" demek için:
> **There was** a cinema here. | Burada bir sinema vardı.
> **There were** many people at the concert. | Konserde çok insan vardı.

## Geçmiş zaman ifadeleri
yesterday, yesterday morning, last night / week / year, two days ago, in 2015, when I was a child
> **When I was a child**, I **was** afraid of the dark. | Çocukken karanlıktan korkardım.

## was / were mi, did mi?
- Fiil yoksa (sıfat, yer, isim) → **was / were**: I **wasn't** tired. / **Were** you at home?
- Fiil varsa → **did** (Past Simple konusu): I **didn't** sleep. / **Did** you go?
x I didn't tired. => I **wasn't** tired.
x Did you at home? => **Were** you at home?
`,
  anim: [
    { title: 'Şimdi', time: [['bar', 0.42, 0.58, 'şimdi', 'v']], tr: [['Evde', 'n'], ['yim', 'v']], blocks: [['I', 's'], ['am#B', 'v', 'hi'], ['at home', 'n']],
      note: 'Şimdiki durum: **am**.' },
    { title: 'Geçmiş', time: [['bar', 0.14, 0.3, 'dün', 'v']], tr: [['Evde', 'n'], ['ydim', 'v']], blocks: [['I', 's'], ['was#B', 'v', 'hi'], ['at home', 'n'], ['yesterday', 't']],
      note: 'Aynı durum geçmişte: am → **was**. Türkçedeki "-ydi" eki.' },
    { tr: [['Onlar evde', 'n'], ['ydi', 'v']], blocks: [['They#I', 's'], ['were#B', 'v', 'hi'], ['at home', 'n'], ['yesterday', 't']],
      note: 'are → **were**.' },
    { title: 'Kural', rows: [[['am', 'v'], ['is', 'v'], ['→', 'x'], ['was', 'v', 'hi']], [['are', 'v'], ['→', 'x'], ['were', 'v', 'hi']]],
      note: 'am ve is → **was**, are → **were**.' },
    { title: 'Bütün özneler', rows: [[['I · he · she · it', 's'], ['was', 'v', 'hi']], [['you · we · they', 's'], ['were', 'v', 'hi']]],
      note: 'Dikkat: **you** tek kişi olsa bile **were**. "You was" yanlış.' },
    { title: 'Ne zaman?', rows: [[['The film', 's'], ['was', 'v'], ['boring', 'n', '', 'nasıldı']], [['We', 's'], ['were', 'v'], ['hungry', 'n', '', 'durum']], [['I', 's'], ['was', 'v'], ['ten', 'n', '', 'yaş']]],
      note: 'Cümlede **fiil yoksa** geçmiş durumlar was / were ile anlatılır.' },
    { title: 'Olumsuz', blocks: [['She', 's'], ['was#B2', 'v'], ['tired', 'n']], note: 'O yorgundu...' },
    { blocks: [['She', 's'], ["wasn't#B2", 'neg', 'hi'], ['tired', 'n']], note: '...olumsuz: **wasn\'t / weren\'t**.' },
    { title: 'Soru', blocks: [['Was#B2', 'q', 'hi'], ['she#She', 's'], ['tired?#tired', 'n']],
      note: '**Was / Were** başa geçer. Kısa cevap: Yes, she **was**. / No, she **wasn\'t**.' },
    { blocks: [['Where', 'q', 'hi'], ['were', 'q'], ['you', 's'], ['last night?', 't']], note: 'Soru kelimesiyle: Where **were** you? (Neredeydin?)' },
    { title: 'Doğmak', blocks: [['I', 's'], ['born#X', 'v', 'no'], ['in 2000', 't']], note: '"I born" yanlış...' },
    { blocks: [['I', 's'], ['was born#X', 'v', 'ok'], ['in 2000', 't']], note: '...doğmak her zaman **was / were born**.' },
    { title: 'was mi, did mi?', rows: [[["I wasn't", 'neg', 'hi'], ['tired', 'n', '', 'sıfat']], [["I didn't", 'neg', 'hi'], ['sleep', 'v', '', 'fiil']]],
      note: 'Fiil yoksa **was / were**, fiil varsa **did**.' },
  ],
  exExtra: [
    { t: 'mc', q: '"Where were you born?" "I ___ born in Samsun."', o: ['was', 'were', 'am'], a: 0,
      w: { 1: `I → was.`, 2: `Doğum geçmişte → was born.` },
      e: `I **was** born in Samsun.` },
    { t: 'mc', q: '___ a lot of people at the wedding.', o: ['There were', 'There was', 'It was'], a: 0,
      w: { 1: `"a lot of people" çoğul → There were.`, 2: `"Vardı" anlamı → There were.` },
      e: `Çoğul → **There were**.` },
    { t: 'fill', q: 'How ___ the concert last night?', a: ['was'],
      w: { were: `"the concert" tekil → was.`, did: `Fiil yok → was.` },
      e: `How **was** the concert? (Konser nasıldı?)` },
    { t: 'fill', q: 'My grandfather ___ a teacher. He retired in 2005.', a: ['was'],
      w: { is: `Emekli oldu, artık değil → was.`, were: `he → was.` },
      e: `Geçmişteki meslek → **was**.` },
    { t: 'fix', s: 'You was very kind to me yesterday.', i: 1, c: 'were',
      e: `you ile her zaman **were** kullanılır.` },
  ],
};
