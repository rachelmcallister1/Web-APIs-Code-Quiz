var questionCounter = 0
var score = 0
var timerCountdown 
var quizTime = 15
console.log ("I am here");
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
    console.log ("I am here 2");
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
}
quiz.addEventListener('click', startTheQuiz);

// create button in the anser saying if they click a b c od r record which they clicked to see if they got it right, record the answer then restart thr quiz

//creat div for quiz end , text content for hwo many they got right and wrong 
//dive-opening DONE, div that shows questions, timer-> if its; eneded show the seond one. ask more than one questions. 

// for each question- do the increment counter (after the answer)then call getTheQuestion

//create for loop and ask question to user to get response and access the quetion prompt
// for (var i=0; i<questions.length; i++){
// var response = window.(questions[i].);
// //make if statement to see if the resonse is equal to the answer to the question
// if(response === questions[i].answer){
//     score++;
//     alert("correct!");
// } else {
//     alert("Wrong!");
// }
// }




//https://www.youtube.com/watch?v=CqddbIrEM5I