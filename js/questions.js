var questions = [
  {
    "question": "Apa rumus luas persegi?",
    "answers": [
      { "text": "s · s", "correct": true },
      { "text": "p · l", "correct": false },
      { "text": "½ · a · t", "correct": false },
      { "text": "π · r²", "correct": false }
    ]
  },
  {
    question: "Apa ibu kota Prancis?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false }
    ]
  },
    {
      "question": "Apa rumus keliling lingkaran?",
      "answers": [
        { "text": "2 · π · r", "correct": true },
        { "text": "π · r²", "correct": false },
        { "text": "s · s", "correct": false },
        { "text": "p · l", "correct": false }
      ]
    },
  {
    question: "Apa nama planet terbesar di tata surya?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturnus", correct: false },
      { text: "Neptunus", correct: false }
    ]
  },
    {
      "question": "Apa gas yang dihasilkan dalam proses fotosintesis?",
      "answers": [
        { "text": "Oksigen", "correct": true },
        { "text": "Karbon dioksida", "correct": false },
        { "text": "Nitrogen", "correct": false },
        { "text": "Hidrogen", "correct": false }
      ]
    },    
  {
    question: "Apa nama mata uang Eropa?",
    answers: [
      { text: "Euro", correct: true },
      { text: "Pound Sterling", correct: false },
      { text: "Franc", correct: false },
      { text: "Yen", correct: false }
    ]
  },
  {
    question: "Apa nama sungai terpanjang di dunia?",
    answers: [
      { text: "Sungai Nil", correct: true },
      { text: "Sungai Amazon", correct: false },
      { text: "Sungai Yangtze", correct: false },
      { text: "Sungai Ganges", correct: false }
    ]
  },
  {
    question: "Siapa yang menemukan teori evolusi?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Charles Darwin", correct: true },
      { text: "Isaac Newton", correct: false },
      { text: "Galileo Galilei", correct: false }
    ]
  },
  {
    question: "Apa nama benua yang terletak sepenuhnya di belahan selatan bumi?",
    answers: [
      { text: "Afrika", correct: false },
      { text: "Antartika", correct: true },
      { text: "Australia", correct: false },
      { text: "Asia", correct: false }
    ]
  },
  {
    question: "Siapa penemu pesawat terbang?",
    answers: [
      { text: "Wright bersaudara", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Thomas Edison", correct: false },
      { text: "Guglielmo Marconi", correct: false }
    ]
  },
  {
    question: "Berapa banyak warna dalam pelangi?",
    answers: [
      { text: "5", correct: false },
      { text: "7", correct: true },
      { text: "6", correct: false },
      { text: "8", correct: false }
    ]
  },
  {
    question: "Siapa yang pertama kali menginjakkan kaki di bulan?",
    answers: [
      { text: "Yuri Gagarin", correct: false },
      { text: "Buzz Aldrin", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "John Glenn", correct: false }
    ]
  },
  {
    "question": "Jika sebuah jam menunjukkan pukul 3:15, dan jarum jam bergerak 90 derajat searah jarum jam, sekarang menunjukkan pukul berapa?",
    "answers": [
      { "text": "6:15", "correct": true },
      { "text": "4:45", "correct": false },
      { "text": "9:15", "correct": false },
      { "text": "12:15", "correct": false }
    ]
  },
  {
    question: "Apa nama ibukota Kanada?",
    answers: [
      { text: "Toronto", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Vancouver", correct: false },
      { text: "Montreal", correct: false }
    ]
  },
  {
    question: "Apa nama ibu kota Jepang?",
    answers: [
      { text: "Seoul", correct: false },
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Hanoi", correct: false }
    ]
  },
  {
    "question": "Hasil dari 144 ÷ 12 × 3 adalah?",
    "answers": [
      { "text": "36", "correct": true },
      { "text": "48", "correct": false },
      { "text": "12", "correct": false },
      { "text": "24", "correct": false }
    ]
  },  
  {
    question: "Apa nama pulau terbesar di dunia?",
    answers: [
      { text: "Greenland", correct: true },
      { text: "Borneo", correct: false },
      { text: "Sumatra", correct: false },
      { text: "Madagaskar", correct: false }
    ]
  },
  {
    question: "Apa nama gunung berapi terbesar di dunia?",
    answers: [
      { text: "Mount St. Helens", correct: false },
      { text: "Mount Fuji", correct: false },
      { text: "Mauna Loa", correct: true },
      { text: "Krakatau", correct: false }
    ]
  },
  {
    question: "Siapa pencipta teori gravitasi?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Galileo Galilei", correct: false }
    ]
  },
  {
    question: "Apa nama planet yang paling dekat dengan matahari?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Bumi", correct: false },
      { text: "Merkurius", correct: true },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "Apa nama ibukota Rusia?",
    answers: [
      { text: "St. Petersburg", correct: false },
      { text: "Minsk", correct: false },
      { text: "Moscow", correct: true },
      { text: "Kyiv", correct: false }
    ]
  },
  {
    question: "Apa nama tim sepak bola yang menang Piala Dunia 2018?",
    answers: [
      { text: "Brasil", correct: false },
      { text: "Jerman", correct: false },
      { text: "Prancis", correct: true },
      { text: "Argentina", correct: false }
    ]
  },
  {
    question: "Apa unsur kimia dengan simbol 'O'?",
    answers: [
      { text: "Oksigen", correct: true },
      { text: "Osmium", correct: false },
      { text: "Oganesson", correct: false },
      { text: "Oganesium", correct: false }
    ]
  },
  {
    question: "Siapa yang melukis 'Mona Lisa'?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Claude Monet", correct: false }
    ]
  },
  {
    question: "Apa nama bintang yang paling dekat dengan Bumi?",
    answers: [
      { text: "Sirius", correct: false },
      { text: "Alpha Centauri", correct: true },
      { text: "Betelgeuse", correct: false },
      { text: "Polaris", correct: false }
    ]
  },
  {
    question: "Apa bahasa resmi di Brasil?",
    answers: [
      { text: "Spanyol", correct: false },
      { text: "Portugis", correct: true },
      { text: "Prancis", correct: false },
      { text: "Inggris", correct: false }
    ]
  },
  {
    question: "Apa nama laut yang memisahkan antara Eropa dan Afrika?",
    answers: [
      { text: "Laut Mediterania", correct: true },
      { text: "Laut Karibia", correct: false },
      { text: "Laut Jawa", correct: false },
      { text: "Laut Arab", correct: false }
    ]
  },
  {
    question: "Siapa yang menemukan radio?",
    answers: [
      { text: "Nikola Tesla", correct: true },
      { text: "Alexander Graham Bell", correct: false },
      { text: "Thomas Edison", correct: false },
      { text: "Guglielmo Marconi", correct: false }
    ]
  },
  {
    question: "Apa nama kerajaan kuno yang terletak di Mesir?",
    answers: [
      { text: "Kerajaan Roma", correct: false },
      { text: "Kerajaan Mesir", correct: true },
      { text: "Kerajaan Sparta", correct: false },
      { text: "Kerajaan Yunani", correct: false }
    ]
  },
  {
    "question": "Apa ibu kota dari Jepang?",
    "answers": [
      { "text": "Seoul", "correct": false },
      { "text": "Tokyo", "correct": true },
      { "text": "Beijing", "correct": false },
      { "text": "Kyoto", "correct": false }
    ]
  } 
];
