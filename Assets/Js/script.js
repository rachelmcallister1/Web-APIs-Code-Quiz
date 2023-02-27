var questionCounter = 0
var score = 0
var timerCountdown 
var quizTime = 75
const quiz = document.getElementById("start-btn")
const questionsDiv = document.getElementById ('questions')
const timerEl = document.getElementById ('timer')
// create an array of questions and answers
var questions = [
    {
        question: "Which language makes a website interactive?",
        a: "JavaScript",
        b: "Python",
        c: "Java",
        d: "Ruby",
        correct: "a",
    }
];
function startTheQuiz() { 
    var startDiv = document.getElementById('quiz')
    startDiv.setAttribute('class', 'hide')
    //add class of hide then remove the class to show it 
    questionsDiv.removeAttribute('class')
    timerCountdown = setInterval (timerTick, 1000)
    timerEl.textContet = quizTime
    getTheQuestion ()
}
function timerTick() {
quizTime --
timerEl.textContent = quizTime 
// if (quizTime <= 0 ) {
//     quizEnd () //create the quizEnd
// }
}
// call function to end the quiz if the 
//add functions to get questions to load, then add ++ so the next question loads (4 spots)
function getTheQuestion () {
    var currentQuestion = questions [questionCounter]
    var questionText = document.getElementById('questionText')
    questionText.textContent = currentQuestion.question
    var textA = document.getElementById('answerA')
    textA.textContent = currentQuestion.a
    var textB = document.getElementById('answerB')
    textB.textContent = currentQuestion.b
    var textC = document.getElementById('answerC')
    textB.textContent = currentQuestion.c
    var textD = document.getElementById('answerD')
    textB.textContent = currentQuestion.d
}
quiz.addEventListener('click', startTheQuiz);
