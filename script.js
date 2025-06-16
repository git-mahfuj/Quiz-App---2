/* DOM element Select*/

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-txt");
const answersContainer = document.getElementById("answer-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
    {
        question: "In which year did Bangladesh gain independence?",
        answers: [
            { text: "1965", correct: false },
            { text: "1971", correct: true },
            { text: "1980", correct: false },
            { text: "1990", correct: false },
        ],
    },
    {
        question: "Who wrote the national anthem of Bangladesh?",
        answers: [
            { text: "Kazi Nazrul Islam", correct: false },
            { text: "Rabindranath Tagore", correct: true },
            { text: "Sukanta Bhattacharya", correct: false },
            { text: "Jasim Uddin", correct: false },
        ],
    },
    {
        question: "What is the longest river in Bangladesh?",
        answers: [
            { text: "Ganges", correct: false },
            { text: "Jamuna", correct: true },
            { text: "Padma", correct: false },
            { text: "Karnaphuli", correct: false },
        ],
    },
    {
        question: "What is the national flower of Bangladesh?",
        answers: [
            { text: "Rose", correct: false },
            { text: "Water Lily", correct: true },
            { text: "Hibiscus", correct: false },
            { text: "Tagar", correct: false },
        ],
    },
    {
        question: "What is the largest sea beach in Bangladesh?",
        answers: [
            { text: "Kuakata", correct: false },
            { text: "Cox’s Bazar", correct: true },
            { text: "Patenga", correct: false },
            { text: "Sandwip", correct: false },
        ],
    },
    {
        question: "How many divisions are there in Bangladesh?",
        answers: [
            { text: "5", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false },
        ],
    },
    {
        question: "What is the capital city of Bangladesh?",
        answers: [
            { text: "Chittagong", correct: false },
            { text: "Dhaka", correct: true },
            { text: "Sylhet", correct: false },
            { text: "Khulna", correct: false },
        ],
    },
    {
        question: "Who was the first President of Bangladesh?",
        answers: [
            { text: "Ziaur Rahman", correct: false },
            { text: "Sheikh Mujibur Rahman", correct: true },
            { text: "Hussain Muhammad Ershad", correct: false },
            { text: "Tajuddin Ahmad", correct: false },
        ],
    },
    {
        question: "What is the currency of Bangladesh?",
        answers: [
            { text: "Rupee", correct: false },
            { text: "Taka", correct: true },
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false },
        ],
    },
    {
        question: "What is the national animal of Bangladesh?",
        answers: [
            { text: "Royal Bengal Tiger", correct: true },
            { text: "Elephant", correct: false },
            { text: "Leopard", correct: false },
            { text: "Deer", correct: false },
        ],
    },
    {
        question: "Which famous mosque is located in Bagerhat and is recognized as a UNESCO World Heritage Site?",
        answers: [
            { text: "Sixty Dome Mosque", correct: true },
            { text: "Baitul Mukarram", correct: false },
            { text: "Chhota Sona Mosque", correct: false },
            { text: "Star Mosque", correct: false },
        ],
    },
    {
        question: "Which Bengali poet is known as the 'Rebel Poet'?",
        answers: [
            { text: "Jasim Uddin", correct: false },
            { text: "Rabindranath Tagore", correct: false },
            { text: "Kazi Nazrul Islam", correct: true },
            { text: "Michael Madhusudan Dutt", correct: false },
        ],
    },
    {
        question: "On which date is International Mother Language Day celebrated?",
        answers: [
            { text: "March 21", correct: false },
            { text: "February 21", correct: true },
            { text: "April 21", correct: false },
            { text: "May 1", correct: false },
        ],
    },
    {
        question: "Which district in Bangladesh is famous for tea gardens?",
        answers: [
            { text: "Rangamati", correct: false },
            { text: "Sylhet", correct: true },
            { text: "Cox's Bazar", correct: false },
            { text: "Barisal", correct: false },
        ],
    },
    {
        question: "What is the name of Bangladesh's first satellite?",
        answers: [
            { text: "Bangabandhu-1", correct: true },
            { text: "BDSat-1", correct: false },
            { text: "BanglaCom-1", correct: false },
            { text: "SkyNet BD", correct: false },
        ],
    },
];

/* Declare Var */

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

/* Evenet Listeners */
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    console.log("quizStarted")
    currentQuestionIndex = 0;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    showQuestions()
}
function showQuestions() {
    answersDisabled = false;
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    const currentQuiz = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuiz.question;
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    /*answer*/
    answersContainer.innerHTML = "";
    currentQuiz.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.textContent = answer.text;
        button.dataset.correct = answer.correct;
        answersContainer.appendChild(button);
        button.addEventListener("click", selectAnswer)

    })
}
function selectAnswer(e) {
    currentQuestionSpan.textContent = currentQuestionIndex+1;
    if (answersDisabled) return
    answersDisabled = true;
    const selectedButton = e.target;
    const isSelected = selectedButton.dataset.correct === "true";
    console.log(isSelected)
    Array.from(answersContainer.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    })
    if (isSelected) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestions()
        } else {
            showResult()
        }
    }, 1000);
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    finalScoreSpan.textContent = score;
    const percentage = (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "Perfect! You're a genius!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Great job! You know your stuff!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good effort! Keep learning!";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Not bad! Try again to improve!";
    } else {
        resultMessage.textContent = "Keep studying! You'll get better!";
    }
}


function restartQuiz() {
    console.log("quizRestarted")
    resultScreen.classList.remove("active");

    startQuiz();
}



