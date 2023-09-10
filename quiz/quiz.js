
const questions = [
    {
        question: "How often do you feel stressed?",
        options: [
            { value: "rarely", score: 1 },
            { value: "sometimes", score: 2 },
            { value: "often", score: 3 }
        ]
    },
    {
        question: "Do you experience difficulty sleeping?",
        options: [
            { value: "rarely", score: 1 },
            { value: "sometimes", score: 2 },
            { value: "often", score: 3 }
        ]
    },
    {
        question: "Are you finding it hard to concentrate on tasks?",
        options: [
            { value: "rarely", score: 1 },
            { value: "sometimes", score: 2 },
            { value: "often", score: 3 }
        ]
    },
    {
        question: "How often do you feel anxious or worried?",
        options: [
            { value: "rarely", score: 1 },
            { value: "sometimes", score: 2 },
            { value: "often", score: 3 }
        ]
    },
    {
        question: "Do you experience changes in appetite?",
        options: [
            { value: "rarely", score: 1 },
            { value: "sometimes", score: 2 },
            { value: "often", score: 3 }
        ]
    },
    {
        question: "Do you have trouble enjoying activities you used to enjoy?",
        options: [
            { value: "rarely", score: 1 },
            { value: "sometimes", score: 2 },
            { value: "often", score: 3 }
        ]
    },
    {
        question: "Do you feel a lack of energy or motivation?",
        options: [
            { value: "rarely", score: 1 },
            { value: "sometimes", score: 2 },
            { value: "often", score: 3 }
        ]
    },
    {
        question: "Are you withdrawing from social interactions?",
        options: [
            { value: "rarely", score: 1 },
            { value: "sometimes", score: 2 },
            { value: "often", score: 3 }
        ]
    },
    {
        question: "Have you experienced sudden mood swings?",
        options: [
            { value: "rarely", score: 1 },
            { value: "sometimes", score: 2 },
            { value: "often", score: 3 }
        ]
    },
    {
        question: "Do you have thoughts of self-harm or suicide?",
        options: [
            { value: "never", score: 1 },
            { value: "sometimes", score: 2 },
            { value: "often", score: 3 }
        ]
    }
];


// Initialize a variable to store the user's total score
let totalScore = 0;

// quiz.js

// ... (previous code)

// Function to dynamically generate quiz questions
function generateQuizQuestions() {
    const quizContainer = document.getElementById("quiz-container");

    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <h2>Question ${index + 1}</h2>
            <p>${question.question}</p>
        `;

        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");

        question.options.forEach((option, optionIndex) => {
            const label = document.createElement("label");
            label.innerHTML = `
                <input type="radio" name="question${index + 1}" value="${option.value}" id="q${index + 1}o${optionIndex + 1}">
                ${option.value}
            `;

            optionsDiv.appendChild(label);
        });

        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
    });
}



// Generate quiz questions when the page loads
window.addEventListener("load", generateQuizQuestions);


function calculateScore() {
    totalScore = 0; // Reset the totalScore

    for (const question of questions) {
        const selectedOption = document.querySelector(`input[name="question${questions.indexOf(question) + 1}"]:checked`);
        if (selectedOption) {
            totalScore += question.options.find(option => option.value === selectedOption.value).score;
        }
    }

    // Store the totalScore in localStorage
    localStorage.setItem("totalScore", totalScore);
    window.location.href = window.location.href.replace("quiz.html" , "results/result.html")
}


// Add an event listener for the submit button
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
    calculateScore();
});