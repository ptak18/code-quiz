var score = 90;
var currentQuestion = 0;
var timerInterval ;



// get elements from HTML


var timeElement = document.getElementById("time")

var questionsElement = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");

var choicesEl = document.getElementById("choices");
var answersUl = document.getElementById("answers");
var answerOne = document.getElementById("answerA");
var answerTwo = document.getElementById("answerB");
var answerThree = document.getElementById("answerC");
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start");


// setting question to be the current question 
questionTitleEl.innerText = myQuestions[currentQuestion].question;
answerOne.innerText = myQuestions[currentQuestion].answers.A;
answerTwo.innerText = myQuestions[currentQuestion].answers.B;
answerThree.innerText = myQuestions[currentQuestion].answers.C;
// adding eventlistner to each answer
answerOne.addEventListener("click", checkAnswer);
answerTwo.addEventListener("click", checkAnswer);
answerThree.addEventListener("click", checkAnswer);
// adds event listner to start button 
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  questionsElement.classList.remove("hide");
  startScreen.classList.add("hide");
  startTimer();

}

function displayNextQuestion() {
    console.log (score)
    currentQuestion++ 
    answerOne.innerText = myQuestions[currentQuestion].answers.A;
    answerTwo.innerText = myQuestions[currentQuestion].answers.B;
    answerThree.innerText = myQuestions[currentQuestion].answers.C;
    questionTitleEl.innerText = myQuestions[currentQuestion].question;
}

function endQuiz() {
    clearInterval(timerInterval)
   console.log(score) 
}

function updateTime() {
    score -- ;
    timeElement.innerText = score
if (score <1){
    endQuiz()
}
}

function startTimer() {
    timerInterval = setInterval( 
    updateTime    
    , 1000);
}

function checkAnswer() {
 // gets answers letter 
  var answer = event.target.id[6];
  var correctAnswer = myQuestions[currentQuestion].correctAnswer;
  if (answer !== correctAnswer) {
    score -= 10 ;
  }
  if(currentQuestion  > myQuestions.length -1){
    endQuiz()
    
  } else {
    displayNextQuestion() 
 }

}

// TO DO : 
// add local storage to save highscores
// use local storage to get highscores.html
