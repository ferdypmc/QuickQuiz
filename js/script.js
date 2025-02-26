const themeIconContainer = document.getElementById('theme-icon-container');
const questionContainer = document.getElementById('question-container');
const scoreContainer = document.getElementById('score-container');
const scoreValue = document.getElementById("score");
const currentQuestionCountContainer = document.getElementById('current-question');
const totalQuestionCountContainer = document.getElementById('total-question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const skipButton = document.getElementById('skip-btn');


let score = 0;
let currentQuestionIndex = 0;
totalQuestionCountContainer.innerText = questions.length;

function startGame() {
    setDefaultBrowserTheme();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.disabled = true;
    nextButton.classList.add("disabled");
    currentQuestionCountContainer.innerText = currentQuestionIndex+1;
    scoreValue.innerText = score;

    // Shuffle the questions array
    questions = shuffleArray(questions);
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = "Q: "+question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.correct = answer.correct;
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const selectedBtn = event.target;
    const correct = answer.correct;

    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.disabled = true;
    });

    if (correct) {
        score++;
    }

    scoreValue.innerText = score;
    nextButton.disabled = false;
    nextButton.classList.remove("disabled");
    skipButton.disabled = true;
    skipButton.classList.add("disabled");
}

function nextQuestion() {
    currentQuestionIndex++;
    nextButton.disabled = true;
    nextButton.classList.add("disabled");
    skipButton.disabled = false;
    skipButton.classList.remove("disabled");

    if (currentQuestionIndex < questions.length) {
        currentQuestionCountContainer.innerText = currentQuestionIndex+1;
        showQuestion(questions[currentQuestionIndex]);
        resetButtons();
    } else {
        skipButton.innerHTML = `Restart <i class="fa-solid fa-play"></i>`;
        nextButton.innerText = 'Finished';
        showFinalMessage();
        skipButton.addEventListener("click", () => {
            location.reload();
        });
    }
}

function resetQuiz(){
    location.reload();
}

function showFinalMessage(){
    var message = "";
    if(score >= (questions.length * 70) / 100){
        message = `Congratulations! You have completed the Quiz. <br> You Correctly Answered ${score} Out of ${questions.length} Questions`;
    }else if(score > 0){
        message = `You did not completed the Quiz. <br> You Answered only ${score} Questions Correctly Out of ${questions.length} Questions`;
    }else{
        message = `You did not Answer Any Questions`; 
    }

    scoreContainer.innerHTML = message;
}


function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct === 'true') {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


function resetButtons() {
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = false;
        clearStatusClass(button);
    });
}


startGame();


// ===================== Change Theme ================

themeIconContainer.addEventListener("click", themeToggler);

function themeToggler(){
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        sessionStorage.setItem("theme", "dark");
        themeIconContainer.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
        themeIconContainer.title = 'Light Mode';
    }else{
        sessionStorage.setItem("theme", "light");
        themeIconContainer.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>';
        themeIconContainer.title = 'Dark Mode';
    }
}

function setDefaultBrowserTheme(){
    if(sessionStorage.getItem("theme") === "light"){
        document.body.classList.remove('dark-theme');
        themeIconContainer.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>';
        themeIconContainer.title = 'Dark Mode';
    }else if(sessionStorage.getItem("theme") === "dark"){
        document.body.classList.add('dark-theme');
        themeIconContainer.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
        themeIconContainer.title = 'Light Mode';
    }
}


// Function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}