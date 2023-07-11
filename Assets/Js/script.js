// Create variables for all document query selectors
var points = document.querySelector('#points');
var questionTitle = document.querySelector('#question-title')
var questionChoices = document.querySelector('.question-choices');
var endState = document.querySelector('.end-state');
var questions = document.querySelector('.questions')

//Create an array that will contain objects that have our question data in them
var questions = [
    {
        question: 'Which language makes a website interactive',
        choices: ['JavaScript', 'Python', 'Ruby', 'Java'],
        answer: 'JavaScript'
    },
    {
        question: 'Which of the following are primitive data types in JavaScript',
        choices: ['String', 'Number', 'Boolean (true/false)', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: 'Can a function be assigned a variable in JavaScript?',
        choices: ['True', 'False'],
        answer: 'True'
    },
    {
        question: 'Which of the following types of variable will take precedence over the other?',
        choices: ['Local Variable', 'Global Variable'],
        answer: 'Local Variable'
    }
]
var currentQuestionIndex = 0;
var timerEL = document.getElementById('time');
var time = questions.length * 15;
var timerId;
var points = 0
var introEl = document.querySelector('.intro')
var startQuizBtn = document.querySelector('#startQuiz')

function clockTick() {
    //update time
    time--;
    timerEL.textContent = time;
    //determine if the timer is up
    if (time <= 0) {
        quizEnd();
    }
}
function startQuiz() {
    introEl.remove();
    //begin the timer
    timerId = setInterval(clockTick, 1000);
    //make the start time visible to user
    timerEL.textContent = time;
    //make the question populate by running getQuestion
    getQuestion();
}

function getQuestion() {
    document.querySelector('#points').textContent = points
    var questionData = questions[currentQuestionIndex];
    console.log(questionData.question)
    document.querySelector('#question-title').textContent = questionData.question
    document.querySelector('.question-choices').innerHTML = '';
    for (var i = 0; i < questionData.choices.length; i++) {
        var button = document.createElement('button');
        button.setAttribute('value', questionData.choices[i]);
        button.textContent = questionData.choices[i]
        button.addEventListener('click', userInput)
        document.querySelector('.question-choices').appendChild(button)
    }
}
function userInput(e) {
    if (e.target.value === questions[currentQuestionIndex].answer) {
        points += 5;
        window.alert('Correct');
        currentQuestionIndex++

    } else {
        window.alert('Incorrect');
        currentQuestionIndex++
    }
    if (currentQuestionIndex === questions.length) {
        document.querySelector('.end-state').removeAttribute('class', 'hide')
        document.querySelector('.questions').setAttribute('class', 'hide')
        clearInterval(timerId);
    } else {
        getQuestion()
    }
}

function quizEnd(){
    // 
}


startQuizBtn.addEventListener('click', startQuiz)