const questions = [
    {
        question: "What is a tissue in biology?",
        options: ["A group of cells", "An organ", "A system", "A single cell"],
        correct: 0,
    },
    {
        question: "Which organ pumps blood in the body?",
        options: ["Lungs", "Heart", "Brain", "Liver"],
        correct: 1,
    },
    {
        question: "What does the pH scale measure?",
        options: ["Temperature", "Acidity or alkalinity", "Pressure", "Energy"],
        correct: 1,
    },
    {
        question: "What is the pH of a neutral substance?",
        options: ["0", "7", "14", "10"],
        correct: 1,
    },
    {
        question: "Which ion is released by acids?",
        options: ["OH⁻", "H⁺", "Na⁺", "Cl⁻"],
        correct: 1,
    },
    {
        question: "What is the main function of the skeleton?",
        options: ["Circulation", "Protection and structure", "Digestion", "Photosynthesis"],
        correct: 1,
    },
    {
        question: "What unit measures pressure?",
        options: ["Meters", "Newtons", "Pascals", "Watts"],
        correct: 2,
    },
    {
        question: "What process do plants use to make food?",
        options: ["Respiration", "Photosynthesis", "Fermentation", "Osmosis"],
        correct: 1,
    },
    {
        question: "What is the waste product of respiration?",
        options: ["Oxygen", "Carbon dioxide", "Water", "Glucose"],
        correct: 1,
    },
    {
        question: "What pigment is required for photosynthesis?",
        options: ["Chlorophyll", "Haemoglobin", "Keratin", "Melanin"],
        correct: 0,
    },
    // Add more questions here as needed
];

const quizContainer = document.getElementById("quiz-questions");
const submitButton = document.getElementById("submit-quiz");
const resultContainer = document.getElementById("quiz-result");

// Generate quiz questions
questions.forEach((q, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
        <p>${index + 1}. ${q.question}</p>
        ${q.options
            .map(
                (option, i) =>
                    `<label>
                        <input type="radio" name="question-${index}" value="${i}"> ${option}
                    </label><br>`
            )
            .join("")}
    `;
    quizContainer.appendChild(questionElement);
});

// Quiz submission logic
submitButton.addEventListener("click", () => {
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(
            `input[name="question-${index}"]:checked`
        );
        if (selectedOption && parseInt(selectedOption.value) === q.correct) {
            score++;
        }
    });

    resultContainer.textContent = `You scored ${score} out of ${questions.length}!`;
});
