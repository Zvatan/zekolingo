export default {
  lesson: `
## Ne zaman kullanılır?
**Past Simple**, geçmişte **başlayıp bitmiş** eylemleri anlatır. Türkçedeki "-dı / -di" ile benzerdir: gittim, aldın, yaptı.
> I **visited** my grandmother yesterday. | Dün büyükannemi ziyaret ettim.
> She **went** to London last year. | Geçen yıl Londra'ya gitti.
> We **watched** a film and **went** to bed. | Bir film izledik ve yattık. (art arda olaylar)
Genellikle **ne zaman** olduğu söylenir ya da bellidir: yesterday, last week, in 2019, two days ago, when I was a child.

## Müjde: bütün öznelerde aynı
Present Simple'daki he/she/it **-s** derdi geçmişte yoktur. Fiil herkes için aynıdır: I / you / he / she / it / we / they **worked** / **went**.

## Düzenli fiiller: + ed
| Kural | Örnek |
| Çoğu fiil: **+ ed** | work → worked, play → played, watch → watched |
| **-e** ile bitenler: **+ d** | live → lived, like → liked, dance → danced |
| Sessiz harf + **y** → **ied** | study → studied, try → tried, cry → cried |
| Sesli harf + **y** → **+ ed** | play → played, enjoy → enjoyed, stay → stayed |
| Tek heceli, **sesli + sessiz** ile bitenler: son harf ikilenir | stop → stopped, plan → planned, drop → dropped |
| ama -w, -x, -y ikilenmez | fix → fixed, show → showed |
### -ed nasıl okunur? (Önemli!)
| Okunuş | Ne zaman? | Örnek |
| /t/ | p, k, s, ş, ç, f sesinden sonra | worked (vörkt), stopped, watched, washed |
| /d/ | çoğu diğer sesten sonra | played (pleyd), lived, opened, cleaned |
| /ıd/ | **t** ya da **d** sesinden sonra (ekstra hece) | wanted (vonıtıd), needed, visited, decided |
! Türklerin sık hatası her -ed'i "ed" diye ayrı hece gibi okumaktır: "work-ed" değil **workt**. Ekstra hece sadece t ve d'den sonra okunur.

## Düzensiz fiiller
En sık kullanılan fiillerin çoğu düzensizdir ve ezberlenmesi gerekir:
| Fiil | Geçmiş | Anlam | | Fiil | Geçmiş | Anlam |
| be | was / were | olmak | | know | knew | bilmek |
| have | had | sahip olmak | | leave | left | ayrılmak |
| do | did | yapmak | | lose | lost | kaybetmek |
| go | went | gitmek | | make | made | yapmak |
| come | came | gelmek | | meet | met | buluşmak |
| get | got | almak, olmak | | pay | paid | ödemek |
| see | saw | görmek | | put | put | koymak |
| eat | ate | yemek | | read | read (/red/) | okumak |
| drink | drank | içmek | | run | ran | koşmak |
| buy | bought | satın almak | | say | said | söylemek |
| bring | brought | getirmek | | sell | sold | satmak |
| think | thought | düşünmek | | send | sent | göndermek |
| teach | taught | öğretmek | | sit | sat | oturmak |
| catch | caught | yakalamak | | sleep | slept | uyumak |
| find | found | bulmak | | speak | spoke | konuşmak |
| give | gave | vermek | | spend | spent | harcamak |
| take | took | almak, götürmek | | tell | told | anlatmak |
| write | wrote | yazmak | | understand | understood | anlamak |
| feel | felt | hissetmek | | wear | wore | giymek |
| fly | flew | uçmak | | win | won | kazanmak |
! **read** geçmişte aynı yazılır ama "red" diye okunur.
! "-ought" ve "-aught" ile bitenler "ot" diye okunur: bought (bot), thought (tot), taught (tot).

## ago: "önce"
Türkçede "iki yıl **önce**" deriz. İngilizcede **ago** sürenin **arkasına** gelir:
> two years **ago** | iki yıl önce
> five minutes **ago** | beş dakika önce
> a long time **ago** | uzun zaman önce
x before two years => two years **ago**

## Kontrol listesi
- Geçmişte bitmiş bir eylem mi? → Past Simple
- Düzenli fiil → **-ed** (yazım kurallarına dikkat), düzensiz fiil → ezberlenen hal
- Bütün öznelerde aynı, -s yok.
`,
  anim: [
    { title: 'Past Simple = Geçmiş zaman', time: [['dot', 0.25, 'dün', 'v']],
      tr: [['Dün', 't'], [' çalış', 'v'], ['tım', 'x']], blocks: [['I', 's'], ['worked#V', 'v', 'hi'], ['yesterday', 't']],
      note: 'Geçmişte **belli bir zamanda** oldu ve **bitti**. Nokta "şimdi"den önce, şimdiyle bağlantısı yok.' },
    { title: 'Ne zaman olduğu söylenir', time: [['dot', 0.08, 'in 2019', 'v'], ['dot', 0.3, 'last week', 'v'], ['dot', 0.43, 'two hours ago', 'v', 'b']],
      rows: [[['in 2019', 't'], ['last week', 't']], [['yesterday', 't'], ['two hours ago', 't']]],
      note: 'Hepsi **bitmiş** zaman dilimleri. Bunları gördüğünde Past Simple kullan.' },
    { title: 'Müjde: herkes için aynı', rows: [[['I · you · we · they', 's'], ['worked', 'v', 'hi']], [['he · she · it', 's'], ['worked', 'v', 'hi']]],
      note: 'Geçmişte he / she / it için **-s yok**. Fiil herkes için aynı.' },
    { title: 'Düzenli fiiller: + ed', blocks: [['work#R', 'v']], note: 'Çoğu fiile...' },
    { blocks: [['worked#R', 'v', 'hi', '+ ed']], note: '...**-ed** eklenir: work → work**ed**.' },
    { title: 'Yazım kuralları', rows: [[['live', 'v'], ['lived', 'v', 'hi', '+ d']], [['study', 'v'], ['studied', 'v', 'hi', 'y → ied']], [['stop', 'v'], ['stopped', 'v', 'hi', 'harf ikilenir']]],
      note: '-e ile bitene **d**, sessiz + y → **ied**, kısa fiilde son harf **ikilenir**.' },
    { title: '-ed\'in 3 okunuşu', rows: [[['worked', 'v'], ['/t/', 'x', '', 'vörkt']], [['played', 'v'], ['/d/', 'x', '', 'pleyd']], [['wanted', 'v'], ['/ıd/', 'x', '', 'vonıtıd']]],
      note: 'Ekstra hece ("-ıd") **sadece t ve d** ile biten fiillerde okunur.' },
    { title: 'Düzensiz fiiller', blocks: [['I', 's'], ['go#G', 'v'], ['to Izmir', 'n']], note: 'Bazı fiiller -ed almaz...' },
    { blocks: [['I', 's'], ['went#G', 'v', 'hi', 'düzensiz'], ['to Izmir', 'n'], ['last summer', 't']], note: '...tamamen değişir: go → **went**.' },
    { rows: [[['see → saw', 'v']], [['buy → bought', 'v']], [['eat → ate', 'v']], [['have → had', 'v']], [['make → made', 'v']]],
      note: 'En sık kullanılan fiillerin çoğu düzensizdir. Konu metnindeki 40 fiillik tabloyu ezberle.' },
    { title: 'ago = önce', tr: [['iki yıl', 't'], [' önce', 'x']], blocks: [['two years', 't'], ['ago', 'x', 'hi']],
      note: 'Türkçe gibi "before two years" denmez. **ago** sürenin **arkasına** gelir.' },
    { title: 'Art arda olaylar', time: [['dot', 0.12, 'got up', 'v'], ['dot', 0.24, 'had breakfast', 'v', 'b'], ['dot', 0.36, 'left', 'v']],
      blocks: [['I', 's'], ['got up,', 'v'], ['had breakfast', 'v'], ['and left', 'v']],
      note: 'Hikâye anlatırken olaylar sırayla Past Simple ile dizilir.' },
    { title: 'Sık hata', blocks: [['She', 's'], ['buyed#B', 'v', 'no'], ['a dress', 'n']], note: '"buyed" diye bir kelime yok...' },
    { blocks: [['She', 's'], ['bought#B', 'v', 'ok'], ['a dress', 'n']], note: '...buy → **bought**.' },
    { title: 'Özet', time: [['dot', 0.25, 'bitti', 'v']], rows: [[['düzenli', 'x'], ['V + ed', 'v', 'hi']], [['düzensiz', 'x'], ['V2 (went, saw...)', 'v', 'hi']]],
      note: 'Geçmişte bitmiş, zamanı belli → **Past Simple**. Herkes için aynı.' },
  ],
  exExtra: [
    { t: 'mc', q: '"wanted" kelimesinin sonu nasıl okunur?', o: ['/ıd/ (vonıtıd)', '/t/ (vont)', '/d/ (vond)'], a: 0,
      w: { 1: `t ile biten fiillerde -ed ekstra bir hece olarak okunur.`, 2: `t ile biten fiillerde -ed ekstra bir hece olarak okunur.` },
      e: `t ve d'den sonra -ed → **/ıd/**: wanted, needed, visited.` },
    { t: 'mc', q: '"worked" kelimesi nasıl okunur?', o: ['/vörkt/', '/vörked/', '/vörkıd/'], a: 0,
      w: { 1: `-ed ayrı bir hece olarak okunmaz.`, 2: `Ekstra hece sadece t/d'den sonra okunur.` },
      e: `k'dan sonra -ed → **/t/**: workt.` },
    { t: 'fill', q: 'She ___ (teach) English for twenty years.', a: ['taught'],
      w: { teached: `teach düzensizdir: taught.` }, e: `teach → **taught**.` },
    { t: 'fill', q: 'They ___ (plan) a big party for her birthday.', a: ['planned'],
      w: { planed: `Tek heceli, sesli+sessiz: son harf ikilenir → planned.` }, e: `plan → pla**nn**ed.` },
    { t: 'fill', q: 'I ___ (pay) 500 lira for these shoes.', a: ['paid'],
      w: { payed: `pay düzensizdir: paid.` }, e: `pay → **paid**.` },
    { t: 'fill', q: 'We ___ (enjoy) the concert very much.', a: ['enjoyed'],
      w: { enjoied: `Sesli harf + y → sadece -ed: enjoyed.` }, e: `enjoy → enjoy**ed** (y'den önce sesli harf).` },
    { t: 'fix', s: 'He bringed a cake to the party.', i: 1, c: 'brought',
      e: `bring düzensizdir: **brought**.` },
  ],
};
