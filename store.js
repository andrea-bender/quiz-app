'use strict';
const STORE = {
  questionNumber: 0,
  score: 0,
  questions: [
    {
      question: 'Which character said: \'I don’t know how many years I got left on this planet, I’m going to get real weird with it\'',
      answers: ['Frank',
        'Mac',
        'The Waitress',
        'Dennis'
      ],
      correctAnswer: 'Frank',

    },
    {
      question: 'What was Dee\'s nickname in high school?',
      answers: ['Dumb Dee Dee',
        'Toothpick',
        'Aluminum Monster',
        'Peaches'
      ],
      correctAnswer: 'Aluminum Monster',

    },
    {
      question: 'What restaurant does Mac repeatedly try to use his Dave and Buster\'s power card at?',
      answers: ['TGI Fridays',
        'Denny\’s',
        'IHOP',
        'Red Robin'
      ],
      correctAnswer: 'TGI Fridays',

    },
    {
      question: 'Which character said: \'I\’m not fat, I’m cultivating mass\'',
      answers: [
        'Charlie',
        'Frank',
        'Dee',
        'Mac'
      ],
      correctAnswer: 'Mac',

    },
    {
      question: 'What does Frank claim his nickname was back when he was a boxer?',
      answers: [
        'Frank the Tank',
        'Frankie Ali',
        'Frankie Fast Hands',
        'Butterfly Hands'
      ],
      correctAnswer: 'Frankie Fast Hands',

    },
    {
      question: 'Which of these does Charlie consider one of his dislikes?',
      answers: [
        'People’s knees',
        'Lobster tails',
        'Helmets',
        'Egg Shells'
      ],
      correctAnswer: 'People’s knees',

    },
    {
      question: 'What names do Dennis and Mac give themselves when they\'re posing as realtors?',
      answers: [
        'Sugar and Spice',
        'Jekyll and Hyde',
        'Honey and Vinegar',
        'Lemon and Lime'
      ],
      correctAnswer: 'Honey and Vinegar',

    }
  ],
  images: new Map (),
  mapImages: function() {
    this.images.set('Frank', 'images/Frank.jpg');
    this.images.set('Aluminum Monster', 'images/aluminumMonster.jpg');
    this.images.set('TGI Fridays', 'images/TGIF.jpg');
    this.images.set('Mac', 'images/fatMac.jpg');
    this.images.set('Frankie Fast Hands', 'images/FrankieFastHands.png');
    this.images.set('People’s knees', 'images/charlie.jpg');
    this.images.set('Honey and Vinegar', 'images/honeyAndVinegar.jpg');
  }
};

STORE.mapImages();