const quiz = document.getElementById("start-btn")
function startTheQuiz() { 
    console.log ("I am here 2");
    var startDiv = document.getElementById('quiz')
    startDiv.setAttribute('class', 'hide')
}
quiz.addEventListener('click', startTheQuiz);

