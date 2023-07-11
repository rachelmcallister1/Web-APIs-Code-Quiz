// Create variables for all document query selectors
var points = document.querySelector('#points');
var questionTitle = document.querySelector('#question-title')
var questionChoices = document.querySelector('.question-choices');
var endState = document.querySelector('.end-state');
var questions = document.querySelector('.questions')
var submitBtn = document.querySelector('#submit')
var submitInitials = document.querySelector('#initials')
var resultsBlock = document.querySelector('#results')

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
        // document.querySelector('.end-state').classList.remove('hide')
        document.querySelector('.questions').setAttribute('class', 'hide')
        clearInterval(timerId);
        quizEnd();
    } else {
        getQuestion()
    }
}

function quizEnd(){
    var endingScreen = document.querySelector('.end-state')
    endingScreen.classList.remove('hide')

    var finalScore = document.querySelector('#final-score')
    finalScore.textContent = points;
}

function submitForm(event){
    event.preventDefault();
    console.log(submitInitials.value)
    localStorage.setItem(submitInitials.value, points)
   // add for loop 
   displayLocalStorageItems()
}

startQuizBtn.addEventListener('click', startQuiz)
submitBtn.addEventListener('click', submitForm)

//Take all scores from localStorage and display them (different players) , get all items from localStorage. 
// Loop around the items and then put them on screen. 
// create array and set it equal to xxx 

function displayLocalStorageItems() {
    // Get an array of all the keys in localStorage
    const keys = Object.keys(localStorage);

    // Create an h1 element
    const h2 = document.createElement('h2');
    h2.textContent = 'Highscores';
    
    // Append the h2 element to the resultsBlock element
    resultsBlock.appendChild(h2);

    // Iterate over the keys
    for (const key of keys) {
        // Get the value associated with the key
        const value = localStorage.getItem(key);

        // Do something with the key and value
        console.log(`Key: ${key}, Value: ${value}`);

        // Create a list item element
        const listItem = document.createElement('div');

        // Add the key and value to the list item element
        listItem.textContent = `${key}: ${value}`;

        // Append the list item element to the resultsBlock element
        resultsBlock.appendChild(listItem);


        resultsBlock
    }
}

