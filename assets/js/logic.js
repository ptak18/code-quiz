var score = 0;
var currentQuestion = 0;

console.log(myQuestions[currentQuestion]);

// CRAETE A CODE QUIZ THAT COMTAINS:
// A start button that when clicked a timer
// starts and the first question appears.

// Questions conatins buttons for each answer.

// When the answer is clicked,the next question appears

// If the answer clicked was imcorrect then subtarct time from the
// clock

// the quiz should end when all the questions are answered or the timer reaches 0.

// when the game ends, it should display their score and give
// the user the ability to save their score
var questionsElement = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
questionTitleEl.innerText = myQuestions[currentQuestion].question;

var choicesEl = document.getElementById("choices");
var answersUl = document.getElementById("answers");
var answerOne = document.getElementById("answerA");
var answerTwo = document.getElementById("answerB");
var answerThree = document.getElementById("answerC");

answerOne.innerText = myQuestions[currentQuestion].answers.A;
answerTwo.innerText = myQuestions[currentQuestion].answers.B;
answerThree.innerText = myQuestions[currentQuestion].answers.C;

answerOne.addEventListener("click", checkAnswer);
answerTwo.addEventListener("click", checkAnswer);
answerThree.addEventListener("click", checkAnswer);

var startScreen = document.getElementById("start-screen");

function startQuiz() {
  questionsElement.classList.remove("hide");
  startScreen.classList.add("hide");
}
var startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);

function displayNextQuestion() {
    console.log (score)
    currentQuestion++ 
    answerOne.innerText = myQuestions[currentQuestion].answers.A;
    answerTwo.innerText = myQuestions[currentQuestion].answers.B;
    answerThree.innerText = myQuestions[currentQuestion].answers.C;
    questionTitleEl.innerText = myQuestions[currentQuestion].question;
}
function checkAnswer() {
  console.log(event.target.id[6]);
  var answer = event.target.id[6];
  var correctAnswer = myQuestions[currentQuestion].correctAnswer;
  if (answer === correctAnswer) {
    score++;
  } else {
    score--;
  }
  if(currentQuestion  > myQuestions.length -1){
    
  } else {
    displayNextQuestion() 
  }
}

