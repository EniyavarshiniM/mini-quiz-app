const questions = [
    {
        question: "What is 2 + 2?",
        options: ["2", "3", "4", "5"],
        answer: 2
    },
    {
        question: "Capital of India?",
        options: ["Chennai", "Delhi", "Mumbai", "Kolkata"],
        answer: 1
    },
    {
        question: "Which language runs in browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

// Load Question
function loadQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    for (let i = 0; i < 4; i++) {
        let btn = document.getElementById("opt" + i);
        btn.innerText = q.options[i];

        // Reset color
        btn.style.backgroundColor = "#4CAF50";

        // Enable buttons
        btn.disabled = false;
    }
}

// Check Answer (with color)
function checkAnswer(index) {
    let correct = questions[currentQuestion].answer;

    for (let i = 0; i < 4; i++) {
        let btn = document.getElementById("opt" + i);

        // Disable buttons after click
        btn.disabled = true;

        if (i === correct) {
            btn.style.backgroundColor = "green";
        } else {
            btn.style.backgroundColor = "red";
        }
    }

    if (index === correct) {
        score++;
    }
}

// Next Question
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Finished!";
        document.querySelector(".options").innerHTML = "";
        document.getElementById("score").innerText = "Score: " + score;
    }
}

// Restart Quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    document.querySelector(".options").innerHTML = `
        <button onclick="checkAnswer(0)" id="opt0"></button>
        <button onclick="checkAnswer(1)" id="opt1"></button>
        <button onclick="checkAnswer(2)" id="opt2"></button>
        <button onclick="checkAnswer(3)" id="opt3"></button>
    `;

    document.getElementById("score").innerText = "";
    loadQuestion();
}

// Start quiz
loadQuestion();