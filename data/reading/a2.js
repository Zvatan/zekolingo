export default [
  {
    id: 'a2-r1', title: 'A Weekend in Istanbul',
    text: `Last weekend, my friend Sarah visited me in Istanbul. It was her first time in Turkey, so I wanted to show her the best places in the city.

On Saturday morning, we took a ferry from Kadıköy to Eminönü. Sarah loved the view of the old city from the sea. Then we visited the Grand Bazaar. It was very crowded, but Sarah bought a beautiful lamp and some Turkish delight for her family.

In the evening, we had dinner at a fish restaurant near the Bosphorus. The food was delicious, but it was quite expensive.

On Sunday it rained all day, so we didn't go out much. We stayed at home, drank tea and watched an old Turkish film with English subtitles. Sarah said it was the best weekend of her year. She wants to come back next summer.`,
    gloss: { ferry: 'vapur', view: 'manzara', crowded: 'kalabalık', 'Turkish delight': 'lokum', 'quite': 'oldukça', 'all day': 'bütün gün', "didn't go out much": 'pek dışarı çıkmadık', subtitles: 'altyazı', 'come back': 'geri gelmek' },
    qs: [
      { t: 'tf', q: 'Sarah has visited Turkey many times before.', a: false, e: `Metinde: "It was **her first time** in Turkey."` },
      { t: 'mc', q: 'How did they go to Eminönü?', o: ['By ferry', 'By bus', 'On foot'], a: 0, e: `Metinde: "we **took a ferry** from Kadıköy to Eminönü."` },
      { t: 'mc', q: 'What did Sarah buy at the Grand Bazaar?', o: ['A lamp and some Turkish delight', 'A carpet and some tea', 'Some fish'], a: 0, e: `Metinde: "Sarah bought **a beautiful lamp and some Turkish delight**."` },
      { t: 'tf', q: 'The dinner was cheap.', a: false, e: `Metinde: "The food was delicious, but it was **quite expensive**."` },
      { t: 'mc', q: 'Why did they stay at home on Sunday?', o: ['Because it rained', 'Because Sarah was ill', 'Because the shops were closed'], a: 0, e: `Metinde: "On Sunday **it rained all day**, so we didn't go out much."` },
    ],
  },
  {
    id: 'a2-r2', title: 'An Email from Tom',
    text: `Hi Emre,

Thanks for your email! Sorry I haven't written for so long. I've been very busy because I've just started a new job. I'm working at a travel company in Manchester now. I've already learned a lot, and my colleagues are really friendly.

I have some exciting news too. I've finally passed my driving test! I failed it twice last year, so I was very happy this time. I haven't bought a car yet, but I'm going to look for a cheap one next month.

What about you? Have you finished your exams yet? Are you still planning to come to England in the summer? If you come in July, we can drive to Scotland together. I've never been there, and people say it's beautiful.

Write soon!
Tom`,
    gloss: { 'for so long': 'bu kadar uzun süredir', busy: 'meşgul', 'travel company': 'seyahat şirketi', colleagues: 'iş arkadaşları', news: 'haber', finally: 'sonunda', 'driving test': 'ehliyet sınavı', twice: 'iki kez', 'look for': 'aramak', still: 'hâlâ' },
    qs: [
      { t: 'mc', q: 'Why was Tom busy?', o: ['He started a new job.', 'He had exams.', 'He was travelling in Scotland.'], a: 0, e: `Metinde: "I've been very busy because **I've just started a new job**."` },
      { t: 'tf', q: 'Tom passed his driving test the first time.', a: false, e: `Metinde: "I **failed it twice** last year." Üçüncü denemede geçti.` },
      { t: 'tf', q: 'Tom has already bought a car.', a: false, e: `Metinde: "I **haven't bought a car yet**."` },
      { t: 'mc', q: 'What is Tom going to do next month?', o: ['Look for a cheap car', 'Visit Emre in Turkey', 'Start a new job'], a: 0, e: `Metinde: "I'm going to **look for a cheap one** next month."` },
      { t: 'mc', q: 'Has Tom been to Scotland?', o: ['No, never.', 'Yes, once.', 'Yes, many times.'], a: 0, e: `Metinde: "**I've never been there**."` },
    ],
  },
  {
    id: 'a2-r3', title: 'My First Job Interview',
    text: `I will never forget my first job interview. I was twenty-two and I was applying for a job at a big bank.

On the morning of the interview, I was very nervous. I was having breakfast when I noticed the time. It was already half past eight and the interview was at nine! I ran out of the house and caught a taxi.

While we were driving to the bank, it started to rain heavily. There was a lot of traffic, and I arrived ten minutes late. My hair was wet and my shoes were dirty.

The manager was waiting for me in her office. I said sorry about the time and she smiled. "Don't worry," she said. "I was late for my first interview too." We talked for half an hour about my experience and my plans.

Two days later, she called me. I got the job!`,
    gloss: { forget: 'unutmak', 'applying for': 'başvurmak', nervous: 'gergin, heyecanlı', noticed: 'fark ettim', 'half past eight': 'sekiz buçuk', 'ran out of': 'koşarak çıktım', heavily: 'şiddetli', wet: 'ıslak', dirty: 'kirli', manager: 'müdür', 'I got the job': 'işi aldım' },
    qs: [
      { t: 'mc', q: 'What was the writer doing when they noticed the time?', o: ['Having breakfast', 'Driving to the bank', 'Taking a shower'], a: 0, e: `Metinde: "**I was having breakfast** when I noticed the time."` },
      { t: 'mc', q: 'How did the writer go to the bank?', o: ['By taxi', 'By bus', 'On foot'], a: 0, e: `Metinde: "I ran out of the house and **caught a taxi**."` },
      { t: 'tf', q: 'The writer arrived on time.', a: false, e: `Metinde: "I arrived **ten minutes late**."` },
      { t: 'tf', q: 'The manager was angry.', a: false, e: `Metinde: "she **smiled**. 'Don't worry,' she said."` },
      { t: 'mc', q: 'What happened two days later?', o: ['The manager called and offered the job.', 'The writer had another interview.', 'The writer called the bank.'], a: 0, e: `Metinde: "Two days later, she called me. **I got the job!**"` },
    ],
  },
  {
    id: 'a2-r4', title: 'City or Village?',
    text: `My name is Ayşe. I grew up in a small village near Rize, but now I live in Istanbul. People often ask me: "Which is better, the city or the village?"

Life in Istanbul is much faster than life in the village. There are more jobs, better hospitals and more things to do. You can go to a concert, a museum or a new restaurant every night. But the city is also noisier, more crowded and much more expensive. My flat in Istanbul is smaller than my parents' kitchen in the village!

The village is quieter and the air is cleaner. Everybody knows everybody, so people are friendlier. The tea from our garden is the best tea in the world, in my opinion. But there isn't much work for young people, and the nearest hospital is forty kilometres away.

For me, the village is the most relaxing place for a holiday, but the city is better for my career.`,
    gloss: { 'grew up': 'büyüdüm', noisier: 'daha gürültülü', crowded: 'kalabalık', quieter: 'daha sessiz', cleaner: 'daha temiz', 'in my opinion': 'bence', nearest: 'en yakın', 'away': 'uzakta', relaxing: 'dinlendirici', career: 'kariyer' },
    qs: [
      { t: 'tf', q: 'Ayşe grew up in Istanbul.', a: false, e: `Metinde: "I grew up **in a small village near Rize**."` },
      { t: 'mc', q: 'Which of these is NOT true about Istanbul, according to Ayşe?', o: ['It is cheaper than the village.', 'There are more jobs.', 'It is noisier.'], a: 0, e: `Metinde: "the city is ... **much more expensive**." Yani şehir daha ucuz değil.` },
      { t: 'mc', q: 'How big is her flat in Istanbul?', o: ["Smaller than her parents' kitchen", 'Bigger than her parents\' house', 'The same size as her parents\' kitchen'], a: 0, e: `Metinde: "My flat in Istanbul is **smaller than my parents' kitchen** in the village!"` },
      { t: 'tf', q: 'In the village, there is a hospital very near.', a: false, e: `Metinde: "the nearest hospital is **forty kilometres away**."` },
      { t: 'mc', q: 'Why does Ayşe live in the city?', o: ['It is better for her career.', 'The air is cleaner.', 'People are friendlier.'], a: 0, e: `Metinde: "the city is **better for my career**."` },
    ],
  },
  {
    id: 'a2-r5', title: 'Five Healthy Habits',
    text: `Do you want to feel better and have more energy? Doctors say that small changes can make a big difference. Here are five healthy habits.

1. Drink a lot of water. You should drink about two litres a day. Don't wait until you are thirsty.

2. Sleep well. Most adults need seven or eight hours of sleep. You shouldn't look at your phone just before bed, because the light from the screen makes it harder to sleep.

3. Move every day. You don't have to go to the gym. A thirty-minute walk is enough.

4. Eat more vegetables and fruit, and eat less sugar. Try to cook at home. Fast food usually has too much salt and fat.

5. Spend time with people you love. Good friends are important for your mental health, too.

You don't have to change everything at once. Start with one habit this week!`,
    gloss: { energy: 'enerji', difference: 'fark', habits: 'alışkanlıklar', thirsty: 'susamış', adults: 'yetişkinler', harder: 'daha zor', enough: 'yeterli', 'fat': 'yağ', 'mental health': 'ruh sağlığı', 'at once': 'bir anda, hepsini birden' },
    qs: [
      { t: 'mc', q: 'How much water should you drink a day?', o: ['About two litres', 'About five litres', 'Half a litre'], a: 0, e: `Metinde: "You should drink **about two litres** a day."` },
      { t: 'tf', q: 'You should look at your phone before you sleep.', a: false, e: `Metinde: "You **shouldn't** look at your phone just before bed."` },
      { t: 'tf', q: 'According to the text, you must go to the gym.', a: false, e: `Metinde: "You **don't have to** go to the gym. A thirty-minute walk is enough."` },
      { t: 'mc', q: 'What is the problem with fast food?', o: ['It has too much salt and fat.', 'It is too expensive.', "It doesn't have enough sugar."], a: 0, e: `Metinde: "Fast food usually has **too much salt and fat**."` },
      { t: 'mc', q: 'What does the writer suggest at the end?', o: ['Start with one habit.', 'Change everything today.', 'See a doctor every week.'], a: 0, e: `Metinde: "You don't have to change everything at once. **Start with one habit** this week!"` },
    ],
  },
  {
    id: 'a2-r6', title: 'The Lost Wallet',
    text: `Last month, something strange happened to me. I was walking home from work when I saw a brown wallet on the ground. I picked it up and looked inside. There was a lot of money, two credit cards and an ID card. The name on the card was Mehmet Kaya.

I didn't know what to do. Then I saw a small piece of paper with a phone number on it. I called the number, and an old man answered. It was Mehmet! He was very worried because he had lost the wallet that morning.

We met at a café near my house an hour later. When I gave him the wallet, he was so happy that he almost cried. He wanted to give me some money, but I said no. Instead, he paid for my coffee and told me stories about his life. He was a sailor when he was young and he has visited more than forty countries.

Now we are friends. We meet at the same café every Sunday.`,
    gloss: { strange: 'garip', wallet: 'cüzdan', ground: 'yer, zemin', 'picked it up': 'yerden aldım', 'ID card': 'kimlik kartı', 'piece of paper': 'kâğıt parçası', worried: 'endişeli', 'had lost': 'kaybetmişti', almost: 'neredeyse', instead: 'bunun yerine', sailor: 'denizci' },
    qs: [
      { t: 'mc', q: 'Where did the writer find the wallet?', o: ['On the ground on the way home', 'In a café', 'At work'], a: 0, e: `Metinde: "I was **walking home from work** when I saw a brown wallet **on the ground**."` },
      { t: 'mc', q: 'How did the writer find Mehmet?', o: ['They called a number on a piece of paper.', 'They went to the police.', 'They found his address on the ID card.'], a: 0, e: `Metinde: "I saw a small piece of paper with a phone number on it. **I called the number**."` },
      { t: 'tf', q: 'The writer took some money from Mehmet.', a: false, e: `Metinde: "He wanted to give me some money, but **I said no**."` },
      { t: 'mc', q: 'What was Mehmet\'s job when he was young?', o: ['He was a sailor.', 'He was a pilot.', 'He was a teacher.'], a: 0, e: `Metinde: "**He was a sailor** when he was young."` },
      { t: 'tf', q: 'The writer and Mehmet still meet.', a: true, e: `Metinde: "Now we are friends. We meet at the same café **every Sunday**."` },
    ],
  },
];
