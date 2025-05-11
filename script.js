// Countdown Timer
function countdownTimer() {
    const targetDate = new Date("May 02, 2025 16:59:59").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Flirty Lines
const flirtyLines = [
    "Thanks for being an amazing friend! 💕",
    "Remember our first day in MCA? Time flies! 🎓",
    "From coding partners to best friends! 💻❤️",
    "You made these MCA years unforgettable! ✨",
    "Thank you for all the help during assignments! 📚",
    "Our lab sessions were more fun with you! 🖥️",
    "Going to miss our college canteen talks! ☕",
    "Best debugging partner ever! 🐛✨",
    "Remember our project deadline nights? 💪",
    "You're the best friend anyone could ask for! 🌟",
    "MCA wouldn't be the same without you! 🎓",
    "Here's to our friendship and future success! 🚀"
];

let currentFlirtyIndex = 0;
function changeFlirtyLine() {
    currentFlirtyIndex = (currentFlirtyIndex + 1) % flirtyLines.length;
    document.getElementById("flirty-text").innerText = flirtyLines[currentFlirtyIndex];
}

// Quiz
const quizQuestions = [
    { question: "Which subject did we study together the most?", options: ["JAVA", "Python", "DBMS", "Web Dev"], answer: "JAVA" },
    { question: "Where was our favorite spot in college?", options: ["Library", "Canteen", "Lab", "Garden"], answer: "Canteen" },
    { question: "What was our go-to stress relief during exams?", options: ["Coffee", "Music", "Walking", "Coding"], answer: "Coffee" },
    { question: "Which project did we enjoy working on the most?", options: ["Database", "Web Dev", "Android", "Python"], answer: "Web Dev" }
];

let quizIndex = 0, score = 0;
function startQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.classList.remove("d-none");

    if (quizIndex < quizQuestions.length) {
        const q = quizQuestions[quizIndex];
        quizDiv.innerHTML = `<h4>${q.question}</h4>` + q.options.map(option =>
            `<input type="radio" name="q${quizIndex}" value="${option}"> ${option}<br>`).join("") +
            `<button onclick="nextQuestion()">Next</button>`;
    } else {
        quizDiv.innerHTML = "<h4>Quiz Completed! 💖</h4>";
        alert(`Quiz Completed! 🎉 Your Score: ${score}/5`);
    }
}

function nextQuestion() {
    let selected = document.querySelector(`input[name="q${quizIndex}"]:checked`);
    if (selected && selected.value === quizQuestions[quizIndex].answer) score++;
    quizIndex++;
    startQuiz();
}

// Automatically Play/Pause Videos on Hover
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".video-item");

    videos.forEach(video => {
        video.addEventListener("mouseover", () => video.play());
        video.addEventListener("mouseout", () => video.pause());
    });
});

// Secret Message
function revealMessage() {
    document.getElementById("secret-message").classList.remove("d-none");
}

// Surprise Fireworks
function showSurprise() {
    alert("🎆 Surprise! Love and joy for you! 💖");
}

// Start Timer on Load
window.onload = countdownTimer;

