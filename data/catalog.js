// Kurlar ve konular. Konu içeriği: data/grammar/<id>.js · Kelimeler: data/vocab/<kur>.js · Okuma: data/reading/<kur>.js
export const LEVELS = [
  {
    id: 'A1', name: 'Başlangıç', vocab: true, reading: true,
    topics: [
      ['a1-to-be', 'To be: am / is / are', 'Olmak fiili: "Ben öğrenciyim", "O evde"'],
      ['a1-pronouns', 'I · me · my · Tom\'s', 'Şahıs zamirleri, iyelikler, -\'s eki'],
      ['a1-articles', 'a / an / the · Çoğullar', 'Artikeller ve çoğul isimler'],
      ['a1-this-that', 'this / that / these / those', 'Bu, şu, bunlar, şunlar'],
      ['a1-there-is', 'there is / there are', '"... var" demek'],
      ['a1-have-got', 'have got / has got', 'Sahip olmak: "Bir kardeşim var"'],
      ['a1-present-simple', 'Present Simple (+)', 'Geniş zaman: I work / She works'],
      ['a1-present-simple-neg', 'Present Simple (− / ?)', "don't / doesn't · Do you...? Does she...?"],
      ['a1-frequency', 'always · usually · never', 'Sıklık zarfları ve cümledeki yerleri'],
      ['a1-can', 'can / can\'t', 'Yetenek, izin ve rica'],
      ['a1-prepositions', 'in / on / at', 'Yer ve zaman edatları'],
      ['a1-questions', 'What · Where · How...', 'Soru kelimeleri ve soru kurma'],
      ['a1-present-continuous', 'Present Continuous', 'Şimdiki zaman: I am working'],
    ],
  },
  {
    id: 'A2', name: 'Temel', vocab: true, reading: true,
    topics: [
      ['a2-simple-vs-continuous', 'Present Simple vs Continuous', 'Her gün mü, şu an mı?'],
      ['a2-was-were', 'was / were', 'Geçmişte olmak: "Evdeydim"'],
      ['a2-past-simple', 'Past Simple (+)', 'Geçmiş zaman: worked, went'],
      ['a2-past-simple-neg', 'Past Simple (− / ?)', "didn't · Did you...?"],
      ['a2-past-continuous', 'Past Continuous', 'was doing · when / while'],
      ['a2-going-to', 'be going to', 'Planlar ve kanıta dayalı tahminler'],
      ['a2-will', 'will / won\'t', 'Anlık kararlar, söz, tahmin'],
      ['a2-comparatives', 'Comparatives', 'bigger · more expensive · than'],
      ['a2-superlatives', 'Superlatives', 'the biggest · the most expensive'],
      ['a2-quantifiers', 'some · any · much · many', 'Sayılabilen / sayılamayan isimler'],
      ['a2-modals', 'must · have to · should', 'Zorunluluk ve tavsiye'],
      ['a2-present-perfect', 'Present Perfect', 'ever · never · just · already · yet'],
      ['a2-verb-patterns', 'like doing · want to do', 'Fiilden sonra -ing mi, to mu?'],
    ],
  },
  {
    id: 'B1', name: 'Orta', vocab: true, reading: true,
    topics: [
      ['b1-perfect-vs-past', 'Present Perfect vs Past Simple', 'have done mı, did mi?'],
      ['b1-perfect-continuous', 'Present Perfect Continuous', 'have been doing · for / since'],
      ['b1-past-perfect', 'Past Perfect', 'had done: geçmişten daha önce'],
      ['b1-used-to', 'used to / would', 'Geçmişteki alışkanlıklar'],
      ['b1-future-forms', 'Gelecek zaman biçimleri', 'will · going to · present continuous'],
      ['b1-first-conditional', 'Zero & First Conditional', 'if / unless / when'],
      ['b1-second-conditional', 'Second Conditional', 'If I had..., I would...'],
      ['b1-passive', 'Passive Voice', 'is made · was built'],
      ['b1-relative-clauses', 'Relative Clauses', 'who · which · that · where · whose'],
      ['b1-reported-speech', 'Reported Speech', 'He said (that)... · told me'],
      ['b1-gerund-infinitive', 'Gerund & Infinitive', 'enjoy doing · decide to do'],
      ['b1-modals-deduction', 'must · might · can\'t', 'Tahmin ve çıkarım'],
      ['b1-phrasal-verbs', 'Phrasal Verbs', 'look for · give up · turn on'],
    ],
  },
  {
    id: 'B2', name: 'Orta-üstü', vocab: false, reading: false, soon: true,
    topics: [
      ['b2-third-conditional', 'Third Conditional', 'If I had known, I would have...'],
      ['b2-mixed-conditionals', 'Mixed Conditionals', 'Geçmiş ve şimdiyi karıştırmak'],
      ['b2-wish', 'wish / if only', 'Pişmanlık ve dilekler'],
      ['b2-passive-advanced', 'Passive (ileri)', 'has been done · is being done · It is said'],
      ['b2-causative', 'have / get something done', 'Bir işi başkasına yaptırmak'],
      ['b2-reported-questions', 'Reported Questions & Commands', 'asked if · told me to'],
      ['b2-non-defining', 'Non-defining Relative Clauses', 'virgüllü who / which · in which'],
      ['b2-future-perfect', 'Future Continuous & Perfect', 'will be doing · will have done'],
      ['b2-past-modals', 'Past Modals', 'should have · must have · could have'],
      ['b2-used-to-get-used', 'be used to / get used to', 'Alışkın olmak, alışmak'],
      ['b2-linkers', 'although · despite · however', 'Zıtlık bağlaçları'],
      ['b2-verb-patterns', 'remember · stop · try + -ing / to', 'Anlamı değişen fiil kalıpları'],
    ],
  },
  { id: 'C1', name: 'İleri', topics: [] },
];

export const PASS = 70; // kur sınavı geçme notu (%)
export const EXAM_SIZE = 20;

export const level = id => LEVELS.find(l => l.id === id) || LEVELS[0];
export function topicMeta(id) {
  for (const L of LEVELS) {
    const t = L.topics.find(t => t[0] === id);
    if (t) return { id, title: t[1], sub: t[2], level: L.id, index: L.topics.indexOf(t) };
  }
  return null;
}
// Konu = alıştırmalar (grammar/) + genişletilmiş anlatım, animasyon ve ek alıştırmalar (lessons/, varsa)
export const loadTopic = id => Promise.all([
  import(`./grammar/${id}.js`).then(m => m.default),
  import(`./lessons/${id}.js`).then(m => m.default, () => ({})),
]).then(([t, l]) => ({ ...t, ...l, ex: [...t.ex, ...(l.exExtra || [])] }));
export const loadVocab = lv => import(`./vocab/${lv.toLowerCase()}.js`).then(m => m.default);
export const loadReading = lv => import(`./reading/${lv.toLowerCase()}.js`).then(m => m.default);
