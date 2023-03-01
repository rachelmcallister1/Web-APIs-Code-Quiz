//OLD JAVASCRIPT BELOW:
// //Questions, answers, and answer choices

// var questions = [
//     {
//         question: "Which language makes a website interactive?",
//         choices: [ 
//         "JavaScript",
//         "Python",
//         "Java",
//         "Ruby",
//         ],
//         answer: "JavaScript",
//     }
// ];



// var questionCounter = 0
// var score = 0
// var timerCountdown 
// var quizTime = 75
// const quiz = document.getElementById("start-btn")
// const questionsDiv = document.getElementById ('questions')
// const timerEl = document.getElementById ('timer')
// // create an array of questions and answers
// var questions = [
//     {
//         question: "Which language makes a website interactive?",
//         a: "JavaScript",
//         b: "Python",
//         c: "Java",
//         d: "Ruby",
//         correct: "a",
//     }


// ];
// function startTheQuiz() { 
//     var startDiv = document.getElementById('quiz')
//     startDiv.setAttribute('class', 'hide')
//     //add class of hide then remove the class to show it 
//     questionsDiv.removeAttribute('class')
//     timerCountdown = setInterval (timerTick, 1000)
//     timerEl.textContet = quizTime
//     getTheQuestion ()
// }
// function timerTick() {
// quizTime --
// timerEl.textContent = quizTime 
// if (quizTime <= 0 ) {
//     quizEnd () //create the quizEnd
// }

// call function to end the quiz if the 
//add functions to get questions to load, then add ++ so the next question loads (4 spots)
// function getTheQuestion () {
//     var currentQuestion = questions [questionCounter]
//     var questionText = document.getElementById('questionText')
//     questionText.textContent = currentQuestion.question
//     var textA = document.getElementById('answerA')
//     textA.textContent = currentQuestion.a

//     var textB = document.getElementById('btn-b')
//     textB.textContent = currentQuestion.b


//     var textC = document.getElementById('btn-c')
//     textC.textContent = currentQuestion.c

//     var textD = document.getElementById('btn-d')
//     textD.textContent = currentQuestion.d
// }
// quiz.addEventListener('click', startTheQuiz);


//OLD HTML BELOW:
// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="preconnect" href="https://fonts.googleapis.com">
//   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Zeyada&display=swap" rel="stylesheet">
//   <link rel="stylesheet" href="./Assets/Css/style.css" />
//   <title>Timed JavaScript Quiz</title>
// </head>

// <body>
//   <main>
//     <header class="quiz-header">View High Score</header>
//     <header id="timer">00</header>
//     <div class="quiz-container" id="quiz">
//       <h1>Coding Quiz Challenge</h1>
//       <h2>Try to answer the following code-related questions within the limit. Keep in mind that incorrect answers will
//         penalize your score time by 75 seconds.</h2>
//       <button id="start-btn">Start Quiz</button>
//     </div>
//     <div class="hide" id="questions">
//       <h1 id="questionText">
//       </h1>
//       <h2 id="answerA"></h2>
//       <button onclick="answerA()">Click me</button>
//       <h2 id="answerB"></h2>
//       <button onclick="answerA()">Click me</button>
//       <h2 id="answerC"></h2>
//       <button onclick="answerA()">Click me</button>
//       <h2 id="answerD"></h2>
//       <button onclick="answerA()">Click me</button>
//     </div>
//   </main>
//   <script src="./Assets/Js/script.js"></script>
// </body>

// </html>
