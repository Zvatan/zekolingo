export default {
  lesson: `
## Ne zaman kullanılır?
**Past Simple** geçmişte başlayıp bitmiş eylemleri anlatır: -dı, -di (gittim, yaptın, aldı).
Fiil bütün öznelerde **aynıdır**: I / you / he / she / we / they **worked**.
> I **visited** my grandmother yesterday. | Dün büyükannemi ziyaret ettim.
> She **went** to London last year. | Geçen yıl Londra'ya gitti.

## Düzenli fiiller: + ed
| Kural | Örnek |
| Çoğu fiil: + ed | work → worked, play → played |
| -e ile biten: + d | live → lived, like → liked |
| sessiz harf + y → ied | study → studied, try → tried |
| tek heceli, sesli + sessiz: son harf ikilenir | stop → stopped, plan → planned |

## Düzensiz fiiller (ezberlenmeli)
| Fiil | Geçmiş | Anlam |
| go | went | gitmek |
| have | had | sahip olmak, yemek |
| do | did | yapmak |
| make | made | yapmak, üretmek |
| eat | ate | yemek |
| drink | drank | içmek |
| see | saw | görmek |
| come | came | gelmek |
| get | got | almak, olmak |
| buy | bought | satın almak |
| take | took | almak, götürmek |
| give | gave | vermek |
| write | wrote | yazmak |
| read | read (/red/) | okumak |
| say / tell | said / told | söylemek / anlatmak |
| think | thought | düşünmek |
| leave | left | ayrılmak |
| meet | met | tanışmak, buluşmak |
| sleep | slept | uyumak |
| find / lose | found / lost | bulmak / kaybetmek |

## Zaman ifadeleri
yesterday, last night / week / summer, three days ago, in 2019, when I was young
! "ago" sona gelir: two years **ago** (iki yıl önce). "before two years" yanlıştır.
x I goed to the park. => I **went** to the park.
x She buyed a dress. => She **bought** a dress.
x He studyed hard. => He **studied** hard.
`,
  ex: [
    { t: 'mc', q: 'We ___ a great film last night.', o: ['saw', 'see', 'seed'], a: 0,
      w: { 1: `"last night" geçmişi gösterir → see'nin geçmişi: saw.`, 2: `see düzensizdir: see → saw.` },
      e: `see → **saw** (düzensiz).` },
    { t: 'mc', q: 'She ___ to Paris two years ago.', o: ['went', 'goed', 'go'], a: 0,
      w: { 1: `go düzensizdir: go → went.`, 2: `"two years ago" geçmişi gösterir.` },
      e: `go → **went**.` },
    { t: 'mc', q: 'I ___ English at university.', o: ['studied', 'studyed', 'studed'], a: 0,
      w: { 1: `Sessiz harf + y → ied: studied.`, 2: `study → studied (y → ied).` },
      e: `study → stud**ied**.` },
    { t: 'mc', q: 'Hangisi "iki gün önce" demek?', o: ['two days ago', 'before two days', 'two days before ago'], a: 0,
      w: { 1: `Türkçeden birebir çeviri. İngilizcede "ago" sona gelir.`, 2: `Sadece "ago" kullanılır: two days ago.` },
      e: `Süre + **ago**: two days ago, a week ago.` },
    { t: 'fill', q: 'I ___ (buy) a new phone last week.', a: ['bought'],
      w: { buyed: `buy düzensizdir: buy → **bought**.`, buy: `"last week" geçmişi gösterir → bought.` },
      e: `buy → **bought**.` },
    { t: 'fill', q: 'They ___ (live) in Bursa for five years.', a: ['lived'],
      w: { liveed: `-e ile biten fiillere sadece -d eklenir: lived.`, live: `Geçmişte bitmiş bir durum → lived.` },
      e: `live → live**d**.` },
    { t: 'fill', q: 'The bus ___ (stop) in front of the school.', a: ['stopped'],
      w: { stoped: `Tek heceli, sesli + sessiz ile biten fiilde son harf ikilenir: stopped.` },
      e: `stop → sto**pp**ed.` },
    { t: 'fill', q: 'He ___ (eat) a big breakfast this morning.', a: ['ate'],
      w: { eated: `eat düzensizdir: eat → **ate**.`, eat: `"this morning" bitmiş bir zaman → ate.` },
      e: `eat → **ate**.` },
    { t: 'fill', q: 'I ___ (meet) my best friend at school.', a: ['met'],
      w: { meeted: `meet düzensizdir: meet → **met**.` }, e: `meet → **met**.` },
    { t: 'fill', q: 'She ___ (write) a letter to her grandmother.', a: ['wrote'],
      w: { writed: `write düzensizdir: write → **wrote**.` }, e: `write → **wrote**.` },
    { t: 'order', tr: 'Dün gece sekiz saat uyudum.', a: 'I slept for eight hours last night.', x: ['sleeped'],
      w: { sleeped: `sleep düzensizdir: **slept**.` }, e: `sleep → **slept**.` },
    { t: 'order', tr: 'Geçen yaz İzmir\'e gittik.', a: 'We went to Izmir last summer.', x: ['go'],
      w: { go: `Geçmiş zaman → **went**.` }, e: `We **went** to Izmir last summer.` },
    { t: 'fix', s: 'My brother taked me to the airport.', i: 2, c: 'took',
      e: `take düzensizdir: take → **took**.` },
    { t: 'fix', s: 'I thinked about you yesterday.', i: 1, c: 'thought',
      e: `think düzensizdir: think → **thought**.` },
    { t: 'fix', s: 'She finded her keys under the sofa.', i: 1, c: 'found',
      e: `find düzensizdir: find → **found**.` },
  ],
};
