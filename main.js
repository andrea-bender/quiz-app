'use strict';
//Questions
const STORE = {
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

  questionNumber: 0,
  numQuestions: 7,
  score: 0,
  correctAnswers: 0,
};

//Renders the start page
function startHtml() {
  let start = $('.start-container');
  start.html(`
   <section role="region" class="theBar">
       <section class="startQuiz box">
           <h1>How well do you know The Gang?</h1>
           <div class="sizeImage">
           <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/IASIPTC.svg" alt="It's always sunny in philadelphia banner" class="images">
           </div> 
           <div id="sizeImage">
               <button type="button" id= "start-button" class="startButton button">Start</button>
           </div>
       </section>
   </section>`)
}

function startPage() {
  startHtml();

  $('.startButton').on('click', function (event) {
    event.preventDefault();
    updateQuestionNumber();
    renderPage();
  });
}

//HTML for generating the questions rendering them, submitting them,
//then checking if the answers are correct or not
function questionsHtml() {
  let questionNumber = STORE.questionNumber-1;
  let options = STORE.questions[questionNumber-1].answers.map((ansValue, ansIndex) => {
    console.log(ansIndex+1);
    return `<li class='ansVal'>
                   <input class="radio" type="radio" tabindex="${ansIndex+1}" id="${ansIndex}" value="${ansValue}" name="answer" required>
                   <label class="sizeMe" for="${ansIndex}">${ansValue}</label>
               </li>`
  });
  options = options.join('');
  let questionsHtml2 =
    `<form class="test">
    <fieldset class='questionBorder'>
       <h3>${generateQuestion()}</h3>
       <ul> ${options}</ul>
    <fieldset class='questionBorder'>
    <button type="submit" class="submitButton button">Submit</button>
    </form>`;
  return questionsHtml2;
}

//Returns question until all are rendered, otherwise it will render the final score
function generateQuestion() {
  let questionNumber = STORE.questionNumber;
  if (questionNumber <= STORE.questions.length+1) {
    return STORE.questions[questionNumber - 2].question;
  }
  else
    finalScore();
}

//Allows user to submit answer after each question is rendered
function generateAllQuestions() {
  $('.questionNumber').html(updateQuestionNumber());
  let questions = questionsHtml();
  $('.startQuiz').html(questions);


  $('.test').submit(function (event) {
    event.preventDefault();
    let ans = $('input[type=radio][name=answer]:checked');

    if (ans.length > 0) {
      let ansr = ans.val();

      submitAnswer(ansr);
    }
  });
}

//Evaluates submitted answer to check if it is correct/incorrect
//Returns correct answer if user is incorrect
function submitAnswer(ans) {
  let result;
  if (ans === generateCorrectAnswer(STORE.questionNumber)) {
    result = correctAnswerHtml();


  } else {
    result = wrongAnswerHtml(ans);

  }
  generateCurrentScore();
  $('.test').html(result)
  $('.nextButton').on('click', function (event) {
      renderPage();
  });


}

function generateCorrectAnswer() {
  let curr = STORE.questionNumber-2;
  return STORE.questions[curr].correctAnswer;
}

function correctAnswerHtml() {
  $('.score').html(updateScore());
  
  return `<h3>Correct!!</h3>
       <img src="https://preview.redd.it/ttsrz526zi811.jpg?auto=webp&s=8e82aac0eec65d8ab81dcc724552c6b8db39e7ff" alt="Happy Charlie" class="images" width="200px">
         <div class="ans"><p class="sizeMe">You're a true fan!</p></div>
         <button type="button" class="nextButton button">Next</button>`
}

function wrongAnswerHtml() {
  let questionNumber = STORE.questionNumber;

  return `<h3>Incorrect!</h3>
       <img src="https://pbs.twimg.com/media/C1yMJ0AUAAA-PZO.jpg:large" alt="Frank dissapointed" class="images" width="200px">
       <div class="ans">
       <p class="sizeMe">The correct response is:</p>
       <p class="sizeMe">${STORE.questions[questionNumber-2].correctAnswer}</p>
       </div>
       <button type="button" class="nextButton button">Next</button>`;

}

//Generates HTML for score
//Updates question number and score after each submission
//Returns final score
function generateCurrentScore() {
  let scores = getScoreHtml()
  $('.scores').html(scores);
}

function updateQuestionNumber(){
  let result = STORE.questionNumber++;
  return `${result} / 7`;
}

function getScoreHtml() {
  return `<h2>Your current score is ${STORE.correctAnswer}/${STORE.numQuestions}</h2>`
}

function updateScore(){
  let result = ++STORE.score;
  return `${result} / 7`; 
}

//After final score is rendered, it will call the start page
function finalScore() {
  $('.start-container').html(finalPage());
  $('.restartButton').on('click', function (event) {
    event.preventDefault();
    STORE.score = 0;
    $('.score').html('0 / 7');
    STORE.questionNumber = 0;
    $('.questionNumber').html('0 / 7');
    startPage();
  });

}

//Renders final page with feedback for final score
//Allows user to restart quiz
function finalPage(){

const great = [ 'Nice job Champ!', 'http://cdn.collider.com/wp-content/uploads/2011/06/its-always-sunny-in-philadelphia-image-2.jpg', 'Dennis dancing', 'How many hours have you spent watching this show?!' ];
const good = [ 'Good, but you can do better!', 'https://images.static-bluray.com/reviews/8734_5.jpg', 'The gang raising their hands', 'Decent, but needs improvement' ];
const bad = [ 'Have you even seen the show?', 'https://pmcdeadline2.files.wordpress.com/2016/04/its-always-sunny-in-philadelphia.jpg?w=630&h=383&crop=1', 'The gang is mad', 'Please go watch a few episodes right now.' ]; 

let array= [];

  if (STORE.score >= 6){ 
    array = great; 
  } 
  else if (STORE.score < 6 && STORE.score >= 4) { 
    array = good; 
  } 
  else { 
    array = bad; 
    }

return `<h3>${array[0]}</h3> 
  <img src="${array[1]}" alt="${array[2]}" class="images"> 
  <div class="cen">
  <h4>Your score is ${STORE.score} / 7</h4> 
  <p class="sizeMe">${array[3]}</p> 
  </div>
  <button type="submit" class="restartButton button">Restart</button>`;
}

//Evaluates whether to return start page or final score
function renderPage() {
  if (STORE.questionNumber === 0) {
    startPage();
    return;
  }

  else if (STORE.questionNumber > STORE.numQuestions) {
    finalScore();
    return;
  }

  //generateCurrentScore();
  else {
    generateAllQuestions();
  }

}

//Calls render page
function startQuiz() {
  renderPage();
}

$(startQuiz);
