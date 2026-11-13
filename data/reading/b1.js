export default [
  {
    id: 'b1-r1', title: 'Learning a Language as an Adult',
    text: `Many people believe that only children can learn languages well. However, research shows that adults can also become fluent, and in some ways they even have advantages.

Murat is 38 and he has been learning German for two years. "I started because my company opened an office in Munich," he explains. "At first, I found the grammar really difficult, especially the articles. But I've made a lot of progress since then."

Murat studies for thirty minutes every morning before work. He also watches German series with subtitles and practises speaking with a teacher online once a week. "The most important thing is to do a little every day," he says. "If you only study at the weekend, you forget everything."

Experts agree with him. Adults usually learn grammar faster than children because they can understand rules. On the other hand, children are often better at pronunciation and they are less afraid of making mistakes.

So what is the secret? According to language teachers, it is not your age but your motivation. If you have a clear reason to learn, you are much more likely to succeed.`,
    gloss: { fluent: 'akıcı', advantages: 'avantajlar', progress: 'ilerleme', 'since then': 'o zamandan beri', series: 'diziler', subtitles: 'altyazı', experts: 'uzmanlar', 'On the other hand': 'diğer taraftan', pronunciation: 'telaffuz', 'According to': '-e göre', motivation: 'motivasyon', 'more likely': 'daha olası', succeed: 'başarılı olmak' },
    qs: [
      { t: 'mc', q: 'Why did Murat start learning German?', o: ['His company opened an office in Munich.', 'He wanted to study in Germany.', 'His wife is German.'], a: 0, e: `Metinde: "I started because **my company opened an office in Munich**."` },
      { t: 'tf', q: 'Murat found German grammar easy at the beginning.', a: false, e: `Metinde: "At first, I found the grammar **really difficult**."` },
      { t: 'mc', q: 'What is Murat\'s most important advice?', o: ['Study a little every day.', 'Study only at the weekend.', 'Move to another country.'], a: 0, e: `Metinde: "The most important thing is to **do a little every day**."` },
      { t: 'mc', q: 'According to the text, what are children often better at?', o: ['Pronunciation', 'Grammar rules', 'Reading'], a: 0, e: `Metinde: "children are often better at **pronunciation**."` },
      { t: 'tf', q: 'Language teachers say age is the most important factor.', a: false, e: `Metinde: "it is **not your age but your motivation**."` },
    ],
  },
  {
    id: 'b1-r2', title: 'The Story of Coffee',
    text: `Coffee is drunk by millions of people every day, but where did it come from? According to a popular legend, coffee was discovered in Ethiopia over a thousand years ago. A goat farmer called Kaldi noticed that his goats became very energetic after they had eaten the red berries of a certain plant.

Later, coffee was grown in Yemen, and from there it spread to the rest of the Arab world. In the 16th century, the first coffee houses were opened in Istanbul. They quickly became places where people met, played games, listened to music and discussed the news. Turkish coffee, which is made in a small pot called a cezve, is still prepared in a very similar way today.

In the 17th century, coffee was taken to Europe by traders. At first, some people thought it was dangerous, but it soon became extremely popular. Today, coffee is produced in more than seventy countries, and Brazil is the largest producer in the world.

In 2013, Turkish coffee culture was added to UNESCO's list of Intangible Cultural Heritage.`,
    gloss: { legend: 'efsane', discovered: 'keşfedildi', goat: 'keçi', energetic: 'enerjik', berries: 'meyveler (küçük, üzümsü)', certain: 'belirli', spread: 'yayıldı', century: 'yüzyıl', prepared: 'hazırlanır', traders: 'tüccarlar', extremely: 'son derece', produced: 'üretilir', producer: 'üretici', 'Intangible Cultural Heritage': 'Somut Olmayan Kültürel Miras' },
    qs: [
      { t: 'mc', q: 'Who was Kaldi, according to the legend?', o: ['A goat farmer', 'A coffee trader', 'A king of Yemen'], a: 0, e: `Metinde: "A **goat farmer** called Kaldi..."` },
      { t: 'mc', q: 'What did Kaldi notice?', o: ['His goats were energetic after eating some berries.', 'His goats were sleepy after drinking water.', 'The berries were poisonous.'], a: 0, e: `Metinde: "his goats became **very energetic after they had eaten the red berries**."` },
      { t: 'tf', q: 'The first coffee houses were opened in Istanbul in the 16th century.', a: true, e: `Metinde: "In the 16th century, the first coffee houses were opened in Istanbul."` },
      { t: 'tf', q: 'Everyone in Europe loved coffee immediately.', a: false, e: `Metinde: "At first, **some people thought it was dangerous**."` },
      { t: 'mc', q: 'Which country produces the most coffee today?', o: ['Brazil', 'Ethiopia', 'Turkey'], a: 0, e: `Metinde: "**Brazil** is the largest producer in the world."` },
    ],
  },
  {
    id: 'b1-r3', title: 'A Strange Night',
    text: `Last winter, my friend Deniz and I drove to a small mountain village for a skiing weekend. By the time we arrived, it had already got dark and it was snowing heavily.

The hotel was old and quiet. The receptionist, an elderly man with a long grey beard, gave us the key to room 13. "Nobody has stayed in that room for years," he said with a strange smile. We laughed, but I felt a little nervous.

At around two in the morning, I woke up because I heard footsteps in the corridor. Then someone knocked on our door three times. Deniz was still sleeping, so I got up and opened the door. There was nobody there, but I noticed that someone had left an old photograph on the floor. It showed the hotel, but the picture was taken in 1952.

The next morning, I went to reception to ask about the photo. A young woman was working there. When I described the old man, she looked surprised. "That sounds like my grandfather," she said. "He used to run this hotel, but he died ten years ago."

We still don't know what happened that night.`,
    gloss: { 'By the time': '-dığında', heavily: 'yoğun bir şekilde', receptionist: 'resepsiyon görevlisi', elderly: 'yaşlı', beard: 'sakal', footsteps: 'ayak sesleri', corridor: 'koridor', knocked: 'kapıyı çaldı', noticed: 'fark ettim', described: 'tarif ettim', 'used to run': 'eskiden işletirdi' },
    qs: [
      { t: 'mc', q: 'What was the weather like when they arrived?', o: ['It was snowing heavily.', 'It was sunny.', 'It was raining.'], a: 0, e: `Metinde: "it had already got dark and **it was snowing heavily**."` },
      { t: 'mc', q: 'What did the receptionist say about room 13?', o: ['Nobody had stayed there for years.', 'It was the best room in the hotel.', 'It was very cold.'], a: 0, e: `Metinde: "**Nobody has stayed in that room for years**," he said.` },
      { t: 'tf', q: 'Deniz opened the door at two in the morning.', a: false, e: `Metinde: "**Deniz was still sleeping**, so I got up and opened the door."` },
      { t: 'mc', q: 'What did the writer find on the floor?', o: ['An old photograph', 'A key', 'A letter'], a: 0, e: `Metinde: "someone had left **an old photograph** on the floor."` },
      { t: 'mc', q: 'Who was the old man, according to the young woman?', o: ['Her grandfather, who died ten years ago', 'Her father, who works at night', 'A guest in room 12'], a: 0, e: `Metinde: "That sounds like **my grandfather**... he **died ten years ago**."` },
    ],
  },
  {
    id: 'b1-r4', title: 'Working from Home: Good or Bad?',
    text: `Since 2020, millions of people around the world have started working from home. Some people love it, while others can't wait to go back to the office. So, what are the advantages and disadvantages?

The biggest advantage is that you don't have to commute. Elif, a software developer from Ankara, used to spend two hours a day in traffic. "Now I use that time to exercise and cook proper meals," she says. Working from home can also save money, because you spend less on transport, coffee and lunch.

However, there are some problems too. Many people find it hard to separate work and private life. "My laptop is always on the kitchen table, so I never really stop working," says Kerem, a marketing manager. Others feel lonely because they miss chatting with their colleagues.

Experts suggest a few simple rules. Firstly, create a separate place to work, even if it is only a small desk. Secondly, keep regular working hours and take short breaks. Finally, meet your colleagues in person from time to time.

Most companies now prefer a "hybrid" model: employees work from home on some days and at the office on others.`,
    gloss: { advantages: 'avantajlar', disadvantages: 'dezavantajlar', commute: 'işe gidip gelmek', 'software developer': 'yazılım geliştirici', proper: 'düzgün, doğru dürüst', separate: 'ayırmak; ayrı', 'private life': 'özel hayat', lonely: 'yalnız', chatting: 'sohbet etmek', 'in person': 'yüz yüze', 'from time to time': 'zaman zaman', hybrid: 'karma, hibrit' },
    qs: [
      { t: 'mc', q: 'What does Elif do with the time she used to spend commuting?', o: ['She exercises and cooks.', 'She works more hours.', 'She sleeps longer.'], a: 0, e: `Metinde: "Now I use that time **to exercise and cook proper meals**."` },
      { t: 'tf', q: 'Working from home usually costs more money.', a: false, e: `Metinde: "Working from home can also **save money**."` },
      { t: 'mc', q: "What is Kerem's problem?", o: ['He never really stops working.', 'He feels lonely.', 'His internet is slow.'], a: 0, e: `Metinde: "My laptop is always on the kitchen table, so **I never really stop working**."` },
      { t: 'mc', q: 'Which of these is NOT one of the experts\' rules?', o: ['Work in bed to be comfortable.', 'Create a separate place to work.', 'Take short breaks.'], a: 0, e: `Uzmanların önerileri: ayrı bir çalışma yeri, düzenli saatler ve molalar, arkadaşlarla yüz yüze görüşmek. Yatakta çalışmak önerilmiyor.` },
      { t: 'tf', q: 'In a hybrid model, employees work both at home and at the office.', a: true, e: `Metinde: "employees work **from home on some days and at the office on others**."` },
    ],
  },
  {
    id: 'b1-r5', title: 'If I Could Live Anywhere',
    text: `Our magazine asked three readers a simple question: "If you could live anywhere in the world, where would you live and why?"

Selin, 29: "I would definitely live in Lisbon. I visited it last year and I fell in love with the city. The weather is mild, the people are relaxed and the food is fantastic. If I spoke Portuguese, I would move there tomorrow! At the moment I'm saving money and taking online lessons."

Burak, 45: "Honestly, I wouldn't leave Turkey. But if I had the choice, I would live in a small village on the Aegean coast. I would grow my own vegetables and go fishing every morning. If my children were older, we might do it, but they need to finish school first."

Zeynep, 22: "I'd live in Tokyo. I've been interested in Japanese culture since I was a teenager. Everything there is so organised and safe. The only problem is that it's very expensive. If I found a good job there, I'd go without thinking twice."

What about you? Write and tell us where you would live!`,
    gloss: { definitely: 'kesinlikle', 'fell in love with': '-e âşık oldum', mild: 'ılıman', relaxed: 'rahat', Honestly: 'açıkçası', choice: 'seçim, seçenek', coast: 'kıyı', grow: 'yetiştirmek', teenager: 'genç (13-19 yaş)', organised: 'düzenli', safe: 'güvenli', 'without thinking twice': 'hiç düşünmeden' },
    qs: [
      { t: 'mc', q: 'What stops Selin from moving to Lisbon now?', o: ["She doesn't speak Portuguese.", "She doesn't like the weather.", 'She has never visited it.'], a: 0, e: `Metinde: "**If I spoke Portuguese**, I would move there tomorrow!" Yani şu an Portekizce bilmiyor.` },
      { t: 'tf', q: 'Burak wants to leave Turkey.', a: false, e: `Metinde: "Honestly, **I wouldn't leave Turkey**."` },
      { t: 'mc', q: 'Why can\'t Burak move to the village now?', o: ['His children need to finish school.', 'He has no money.', "He doesn't like fishing."], a: 0, e: `Metinde: "If my children were older, we might do it, but **they need to finish school first**."` },
      { t: 'mc', q: 'How long has Zeynep been interested in Japanese culture?', o: ['Since she was a teenager', 'Since last year', 'For two months'], a: 0, e: `Metinde: "I've been interested in Japanese culture **since I was a teenager**."` },
      { t: 'tf', q: 'Zeynep thinks Tokyo is cheap.', a: false, e: `Metinde: "The only problem is that **it's very expensive**."` },
    ],
  },
  {
    id: 'b1-r6', title: 'Meet the Young Chef',
    text: `Ali Demir is only 26, but he has already opened two restaurants in Izmir. We talked to him about food, failure and his plans for the future.

When did you become interested in cooking?
"As a child, I spent every summer at my grandmother's house in a village near Muğla. She was the person who taught me everything. I used to watch her for hours while she was making bread and olive oil dishes."

Was it difficult to open your first restaurant?
"Very! I had saved money for five years, but it wasn't enough, so I borrowed some from my uncle. In the first six months, we nearly closed because there weren't enough customers. Then a famous food blogger wrote about us, and suddenly the restaurant was full every night."

What is the secret of your success?
"I only use fresh ingredients which are produced by local farmers. Also, I'm not afraid of making mistakes. Every failure has taught me something."

What are your plans for the future?
"I'd like to write a cookbook with my grandmother's recipes. She is 85 now, and I want her recipes to be remembered."`,
    gloss: { failure: 'başarısızlık', 'olive oil dishes': 'zeytinyağlı yemekler', borrowed: 'ödünç aldım', nearly: 'neredeyse', customers: 'müşteriler', 'food blogger': 'yemek blog yazarı', suddenly: 'aniden', success: 'başarı', ingredients: 'malzemeler', local: 'yerel', cookbook: 'yemek kitabı', remembered: 'hatırlanmak' },
    qs: [
      { t: 'mc', q: 'Who taught Ali how to cook?', o: ['His grandmother', 'His uncle', 'A famous chef'], a: 0, e: `Metinde: "She (my grandmother) was **the person who taught me everything**."` },
      { t: 'mc', q: 'Where did Ali get the money for his first restaurant?', o: ['From his savings and his uncle', 'From a bank loan only', 'From a food blogger'], a: 0, e: `Metinde: "I **had saved money** for five years, but it wasn't enough, so **I borrowed some from my uncle**."` },
      { t: 'tf', q: 'The restaurant was successful from the first day.', a: false, e: `Metinde: "In the first six months, **we nearly closed** because there weren't enough customers."` },
      { t: 'mc', q: 'What changed the situation for the restaurant?', o: ['A food blogger wrote about it.', 'Ali moved it to Istanbul.', 'Ali made the food cheaper.'], a: 0, e: `Metinde: "Then **a famous food blogger wrote about us**."` },
      { t: 'mc', q: 'What does Ali want to do in the future?', o: ["Write a cookbook with his grandmother's recipes", 'Open a restaurant abroad', 'Become a food blogger'], a: 0, e: `Metinde: "I'd like to **write a cookbook with my grandmother's recipes**."` },
    ],
  },
];
