// Okuma metinleri. gloss: dokununca çıkan anlamlar · qs: anlama soruları (tf = doğru/yanlış)
export default [
  {
    id: 'a1-r1', title: 'My Family',
    text: `Hello! My name is Deniz and I am twenty-two years old. I am a university student in Ankara. I study engineering.

I have a small family. My father's name is Kemal. He is a bus driver. My mother, Ayten, is a nurse. She works at a big hospital. My parents are very kind and funny.

I have one sister and no brothers. My sister's name is Selin. She is fifteen and she is a high school student. She loves music and she plays the guitar every evening. Sometimes it is very loud!

We also have a cat. His name is Pamuk because he is white. He sleeps on my bed every night.`,
    gloss: { university: 'üniversite', engineering: 'mühendislik', nurse: 'hemşire', kind: 'nazik, iyi kalpli', funny: 'komik, eğlenceli', 'high school': 'lise', loud: 'gürültülü', because: 'çünkü' },
    qs: [
      { t: 'tf', q: 'Deniz is a high school student.', a: false, e: `Metinde: "I am a **university** student in Ankara." Lise öğrencisi olan Selin.` },
      { t: 'mc', q: "What does Deniz's mother do?", o: ['She is a nurse.', 'She is a bus driver.', 'She is a teacher.'], a: 0, e: `Metinde: "My mother, Ayten, is **a nurse**."` },
      { t: 'tf', q: 'Deniz has two sisters.', a: false, e: `Metinde: "I have **one sister** and no brothers."` },
      { t: 'mc', q: 'What does Selin do every evening?', o: ['She plays the guitar.', 'She studies engineering.', 'She works at a hospital.'], a: 0, e: `Metinde: "she **plays the guitar** every evening."` },
      { t: 'mc', q: "Why is the cat's name Pamuk?", o: ['Because he is white.', 'Because he is small.', 'Because he sleeps a lot.'], a: 0, e: `Metinde: "His name is Pamuk **because he is white**."` },
    ],
  },
  {
    id: 'a1-r2', title: "Emre's Busy Day",
    text: `Emre is a cook. He works in a restaurant in Izmir. His day is very busy.

He usually gets up at seven o'clock. He has a shower and drinks a cup of tea. He never eats breakfast at home. He walks to work because the restaurant is near his flat.

Emre starts work at nine. In the morning, he buys fresh vegetables, fish and meat at the market. From twelve to three, the restaurant is full and he cooks all the time.

He finishes work at ten in the evening. He is always tired, but he is happy because he loves his job. On Mondays the restaurant is closed, so he sleeps late and meets his friends.`,
    gloss: { busy: 'meşgul, yoğun', 'has a shower': 'duş alır', fresh: 'taze', full: 'dolu', 'all the time': 'sürekli, hep', finishes: 'bitirir', closed: 'kapalı', so: 'bu yüzden', 'sleeps late': 'geç saate kadar uyur', meets: 'buluşur' },
    qs: [
      { t: 'mc', q: 'Where does Emre work?', o: ['In a restaurant', 'In a market', 'In a hotel'], a: 0, e: `Metinde: "He works **in a restaurant** in Izmir."` },
      { t: 'tf', q: 'Emre eats breakfast at home every morning.', a: false, e: `Metinde: "He **never** eats breakfast at home."` },
      { t: 'mc', q: 'How does Emre go to work?', o: ['He walks.', 'He takes the bus.', 'He drives.'], a: 0, e: `Metinde: "He **walks** to work because the restaurant is near his flat."` },
      { t: 'mc', q: 'When is the restaurant very busy?', o: ['From twelve to three', 'Early in the morning', 'On Mondays'], a: 0, e: `Metinde: "**From twelve to three**, the restaurant is full..."` },
      { t: 'tf', q: 'Emre works on Mondays.', a: false, e: `Metinde: "On Mondays the restaurant is **closed**, so he sleeps late..."` },
    ],
  },
  {
    id: 'a1-r3', title: 'My New Flat',
    text: `I have a new flat in Eskişehir. It is not very big, but it is nice and bright.

There are two rooms, a kitchen and a bathroom. The living room is my favourite room. There is a big sofa and a TV in it. There are a lot of plants next to the window. There isn't a table in the living room, so I eat in the kitchen.

My bedroom is small. There is a bed, a wardrobe and a desk. My computer is on the desk and my books are under the bed!

The flat is on the fourth floor and there isn't a lift, so I walk up the stairs every day. That's my exercise! My favourite thing about the flat is the view. I can see the river from my window.`,
    gloss: { bright: 'aydınlık', 'living room': 'oturma odası', favourite: 'en sevdiğim', plants: 'bitkiler', 'next to': 'yanında', wardrobe: 'gardırop, elbise dolabı', desk: 'çalışma masası', under: 'altında', lift: 'asansör', stairs: 'merdivenler', view: 'manzara' },
    qs: [
      { t: 'tf', q: 'The flat is very big.', a: false, e: `Metinde: "It is **not very big**, but it is nice and bright."` },
      { t: 'mc', q: 'Where does the writer eat?', o: ['In the kitchen', 'In the living room', 'In the bedroom'], a: 0, e: `Metinde: "There isn't a table in the living room, so I eat **in the kitchen**."` },
      { t: 'mc', q: 'Where are the books?', o: ['Under the bed', 'On the desk', 'Next to the window'], a: 0, e: `Metinde: "my books are **under the bed**!"` },
      { t: 'tf', q: 'There is a lift in the building.', a: false, e: `Metinde: "**there isn't a lift**, so I walk up the stairs every day."` },
      { t: 'mc', q: 'What can the writer see from the window?', o: ['The river', 'The sea', 'A park'], a: 0, e: `Metinde: "I can see **the river** from my window."` },
    ],
  },
  {
    id: 'a1-r4', title: 'At the Café',
    text: `Waiter: Good morning! What can I get you?

Elif: Good morning. Can I have a cheese sandwich, please?

Waiter: Of course. Anything to drink?

Elif: Yes, a cup of tea, please. Do you have orange juice?

Waiter: Sorry, we don't have orange juice today. We have apple juice.

Elif: OK, an apple juice for my friend, then.

Waiter: Anything else?

Elif: No, thank you. How much is it?

Waiter: The sandwich is 120 lira, the tea is 30 and the apple juice is 50. That's 200 lira, please.

Elif: Here you are. Can I pay by card?

Waiter: Yes, of course. Enjoy your meal!`,
    gloss: { 'What can I get you': 'Ne alırsınız?', 'Of course': 'Tabii ki', 'Anything to drink': 'İçecek bir şey?', juice: 'meyve suyu', then: 'o zaman', 'Anything else': 'Başka bir şey?', 'Here you are': 'Buyurun', 'pay by card': 'kartla ödemek', 'Enjoy your meal': 'Afiyet olsun' },
    tip: `Kafede işine yarayacak kalıplar: **Can I have** a tea, please? · **How much** is it? · **Can I pay by card?**`,
    qs: [
      { t: 'mc', q: 'What does Elif want to eat?', o: ['A cheese sandwich', 'A chicken sandwich', 'A cake'], a: 0, e: `Metinde: "Can I have **a cheese sandwich**, please?"` },
      { t: 'tf', q: 'The café has orange juice today.', a: false, e: `Metinde: "Sorry, **we don't have** orange juice today."` },
      { t: 'mc', q: 'Who is the apple juice for?', o: ["Elif's friend", 'Elif', 'The waiter'], a: 0, e: `Metinde: "an apple juice **for my friend**, then."` },
      { t: 'mc', q: 'How much does Elif pay?', o: ['200 lira', '120 lira', '150 lira'], a: 0, e: `Metinde: "That's **200 lira**, please."` },
      { t: 'tf', q: 'Elif pays by card.', a: true, e: `Metinde: "Can I pay by card?" "**Yes, of course.**"` },
    ],
  },
  {
    id: 'a1-r5', title: 'My Best Friend',
    text: `My best friend is Mert. We are in the same class at school. He is sixteen, like me.

Mert is tall and thin. He has short black hair and brown eyes. He always wears glasses and a blue jacket.

He is very clever. He can speak English and German, and he can play chess very well. He can't swim, but he wants to learn this summer.

Mert loves football. He plays with our team every Saturday. He is a good friend because he always listens to me and helps me with my homework. He is also very funny. When we are together, we laugh a lot.`,
    gloss: { 'best friend': 'en iyi arkadaş', same: 'aynı', tall: 'uzun boylu', thin: 'zayıf', glasses: 'gözlük', clever: 'zeki', chess: 'satranç', learn: 'öğrenmek', team: 'takım', homework: 'ödev', together: 'birlikte', laugh: 'gülmek' },
    qs: [
      { t: 'tf', q: 'Mert and the writer are the same age.', a: true, e: `Metinde: "He is sixteen, **like me**." İkisi de 16 yaşında.` },
      { t: 'mc', q: 'What does Mert look like?', o: ['Tall and thin, with short black hair', 'Short, with long brown hair', 'Tall, with blonde hair'], a: 0, e: `Metinde: "Mert is **tall and thin**. He has **short black hair**..."` },
      { t: 'mc', q: 'Which languages can Mert speak?', o: ['English and German', 'English and French', 'Only English'], a: 0, e: `Metinde: "He can speak **English and German**."` },
      { t: 'tf', q: 'Mert can swim very well.', a: false, e: `Metinde: "He **can't swim**, but he wants to learn this summer."` },
      { t: 'mc', q: 'Why is Mert a good friend?', o: ['He listens and helps with homework.', 'He gives nice presents.', 'He has a big house.'], a: 0, e: `Metinde: "he always **listens to me** and **helps me with my homework**."` },
    ],
  },
  {
    id: 'a1-r6', title: 'A Postcard from Antalya',
    text: `Dear Grandma,

Greetings from Antalya! We are having a great time here. The weather is hot and sunny, and the sea is warm.

Right now I am sitting in a café near the beach and I am writing this postcard. Mum and Dad are swimming in the sea. My little brother Can is building a sandcastle. He is very happy!

Our hotel is very nice. It has a big pool and the food is delicious. Every evening we walk in the old town and eat ice cream.

We are coming home on Sunday. See you soon!

Lots of love,
Zeynep`,
    gloss: { Dear: 'Sevgili', Greetings: 'Selamlar', 'having a great time': 'çok güzel vakit geçiriyoruz', warm: 'ılık', 'Right now': 'şu anda', beach: 'plaj, sahil', postcard: 'kartpostal', building: 'yapıyor, inşa ediyor', sandcastle: 'kumdan kale', pool: 'havuz', delicious: 'lezzetli', 'old town': 'eski şehir, tarihi merkez', 'Lots of love': 'Sevgilerle' },
    qs: [
      { t: 'mc', q: 'Who is Zeynep writing to?', o: ['Her grandmother', 'Her friend', 'Her teacher'], a: 0, e: `Metinde: "**Dear Grandma**" (Sevgili Büyükanne).` },
      { t: 'mc', q: 'What is the weather like?', o: ['Hot and sunny', 'Cold and rainy', 'Windy and cloudy'], a: 0, e: `Metinde: "The weather is **hot and sunny**."` },
      { t: 'mc', q: 'What is Can doing right now?', o: ['He is building a sandcastle.', 'He is swimming in the sea.', 'He is eating ice cream.'], a: 0, e: `Metinde: "My little brother Can **is building a sandcastle**."` },
      { t: 'tf', q: "Zeynep's parents are sitting in the café.", a: false, e: `Metinde: "Mum and Dad **are swimming in the sea**." Kafede oturan Zeynep.` },
      { t: 'tf', q: 'The family is going home on Sunday.', a: true, e: `Metinde: "We are coming home **on Sunday**."` },
    ],
  },
];
