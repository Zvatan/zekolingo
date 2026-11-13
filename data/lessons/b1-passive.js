export default {
  lesson: `
## Etken ve edilgen
Türkçede "yaptı" (etken) ve "yapıldı" (edilgen) arasındaki fark **-ıl / -ın** ekiyle verilir: inşa et**ti** → inşa ed**il**di. İngilizcede edilgen yapı **be + fiilin 3. hali (V3)** ile kurulur.
| Etken (kim yaptı önemli) | Edilgen (ne oldu önemli) |
| Workers **built** the bridge in 1973. | The bridge **was built** in 1973. |
| İşçiler köprüyü 1973'te inşa etti. | Köprü 1973'te inşa edildi. |

## Ne zaman edilgen kullanılır?
| Durum | Örnek |
| Yapan **bilinmiyor** | My bike **was stolen**. (Kim çaldı bilmiyorum.) |
| Yapan **önemli değil** ya da belli | The streets **are cleaned** every day. |
| Odak **olayın kendisinde** (haber, bilim, tarih) | Penicillin **was discovered** in 1928. |
| Resmi dil, kurallar | Smoking **is not allowed**. |

## Etkenden edilgene: 3 adım
1. Etken cümlenin **nesnesi** öne geçip **özne** olur.
2. Fiil, **be + V3** olur. be'nin zamanı etken cümledeki fiilin zamanıyla aynıdır.
3. Yapan önemliyse sona **by** ile eklenir, değilse atılır.
> They **make** cars in this factory. → Cars **are made** in this factory.
> Someone **cleaned** the room. → The room **was cleaned**.

## Zamanlara göre edilgen
| Zaman | Edilgen yapı | Örnek |
| Present Simple | **am / is / are + V3** | English **is spoken** all over the world. |
| Past Simple | **was / were + V3** | These photos **were taken** in 2010. |
| Present Continuous | am / is / are **being** + V3 | The road **is being repaired**. (Yol tamir ediliyor.) |
| Present Perfect | have / has **been** + V3 | My wallet **has been stolen**! |
| will | will **be** + V3 | The results **will be announced** tomorrow. |
| Modal | can / must / should **be** + V3 | This form **must be signed**. |
(B1'de en çok ilk ikisi kullanılır. Diğerleri B2'de ayrıntılı anlatılıyor.)

## Tekil / çoğul uyumu
be fiili, **öne geçen yeni özneye** göre değişir:
> The car **is** washed. / The cars **are** washed.
> The letter **was** sent. / The letters **were** sent.
x The emails was sent yesterday. => The emails **were** sent yesterday.

## by: yapanı söylemek
Yapan **önemliyse** ya da yeni bir bilgiyse **by** ile eklenir:
> Romeo and Juliet **was written by** Shakespeare. | Romeo ve Juliet Shakespeare tarafından yazıldı.
> This picture **was painted by** my grandfather. | Bu resim dedem tarafından yapıldı.
by **someone, people, they** gibi belirsiz kelimelerle kullanılmaz: "was stolen by someone" yerine sadece **was stolen**.

## Olumsuz ve soru
> Breakfast **isn't included** in the price. | Kahvaltı fiyata dahil değil.
> **Was** the window **broken** when you arrived? | Vardığında pencere kırık mıydı?
> Where **were** these shoes **made**? | Bu ayakkabılar nerede yapıldı?
> When **was** the Eiffel Tower **built**? | Eyfel Kulesi ne zaman yapıldı?

## Her zaman edilgen olan kalıplar
| Kalıp | Anlam |
| be born | doğmak: I **was born** in 1999. |
| be made of / from | -den yapılmak: This table **is made of** wood. |
| be called | adlandırılmak: What **is** this **called** in English? (Buna İngilizcede ne denir?) |
| be located | yer almak: The hotel **is located** near the sea. |

## Sık yapılan hatalar
x This house built in 1920. => This house **was built** in 1920.
x The windows are clean every day. (temizlenir) => The windows are **cleaned** every day.
x English is speaking here. => English **is spoken** here.
x I born in Ankara. => I **was born** in Ankara.

## Kontrol listesi
- Yapan önemsiz / bilinmiyor → **edilgen**
- **be + V3**: be'nin zamanı etken fiilin zamanıyla aynı
- be, yeni özneye göre tekil / çoğul olur
- Yapan önemliyse → **by**
`,
  exExtra: [
    { t: 'mc', q: 'What is this ___ in English?', o: ['called', 'calling', 'call'], a: 0,
      w: { 1: `Edilgen: be + V3 → is called.`, 2: `Edilgen: be + V3 → is called.` },
      e: `**be called** = adlandırılmak: What is this called? (Buna ne denir?)` },
    { t: 'mc', q: 'This bag is made ___ leather.', o: ['of', 'by', 'with'], a: 0,
      w: { 1: `"by" yapanı gösterir. Malzeme → made of.`, 2: `Malzeme → made of.` },
      e: `Malzeme → **made of**.` },
    { t: 'mc', q: 'Look! The road ___ .', o: ['is being repaired', 'is repairing', 'repairs'], a: 0,
      w: { 1: `Yol kendisini tamir etmiyor → edilgen.`, 2: `Edilgen + şu an → is being repaired.` },
      e: `Şimdiki zaman edilgen → **is being** + V3.` },
    { t: 'fill', q: 'My wallet has ___ stolen!', a: ['been'],
      w: { being: `Present Perfect edilgen: has been + V3.`, be: `has + been + V3.` },
      e: `Present Perfect edilgen → has **been** stolen.` },
    { t: 'fill', q: 'When ___ the Galata Tower built?', a: ['was'],
      w: { did: `Edilgen soru be ile: When was ... built?`, is: `Geçmişte inşa edildi → was.` },
      e: `When **was** ... built?` },
    { t: 'fix', s: 'English is speaking in many countries.', i: 2, c: 'spoken',
      e: `İngilizce kendisi konuşmuyor, konuşuluyor → is **spoken**.` },
  ],
};
