// Quiz Data - 20 Questions
const quizQuestions = [
  { question: "What is the basic unit of a tissue?", options: ["Organs", "Cells", "Blood", "Proteins"], correct: 1 },
  { question: "What is the pH of a neutral substance?", options: ["0", "7", "14", "5"], correct: 1 },
  { question: "What process occurs in the mitochondria?", options: ["Photosynthesis", "Respiration", "Digestion", "Osmosis"], correct: 1 },
  { question: "Which organ is part of the digestive system?", options: ["Heart", "Stomach", "Brain", "Lungs"], correct: 1 },
  { question: "Which gas is needed for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correct: 1 },
  { question: "What substance strengthens plant cell walls?", options: ["Glucose", "Starch", "Cellulose", "Chlorophyll"], correct: 2 },
  { question: "What is the pH range for acids?", options: ["0-6", "8-14", "0-7", "7-14"], correct: 0 },
  { question: "What is the role of red blood cells?", options: ["Clotting", "Transporting oxygen", "Fighting infections", "Removing waste"], correct: 1 },
  { question: "What does the term 'aerobic' mean?", options: ["Without air", "With oxygen", "In water", "With sunlight"], correct: 1 },
  { question: "Which part of the plant absorbs water?", options: ["Stem", "Leaves", "Roots", "Flowers"], correct: 2 },
  { question: "What is the main component of blood plasma?", options: ["Water", "Proteins", "Glucose", "Carbon Dioxide"], correct: 0 },
  { question: "Which is an example of an alkali?", options: ["Vinegar", "Lemon juice", "Soap", "Milk"], correct: 2 },
  { question: "What is the function of chloroplasts?", options: ["Respiration", "Photosynthesis", "Protein synthesis", "Reproduction"], correct: 1 },
  { question: "Which joint allows movement in all directions?", options: ["Hinge", "Fixed", "Ball and socket", "Pivot"], correct: 2 },
  { question: "What is pressure measured in?", options: ["Watts", "Pascals", "Joules", "Litres"], correct: 1 },
  { question: "What type of muscle is found in the heart?", options: ["Skeletal", "Smooth", "Cardiac", "Voluntary"], correct: 2 },
  { question: "What do enzymes do?", options: ["Break down food", "Provide energy", "Store fat", "Transport oxygen"], correct: 0 },
  { question: "What does a skeleton provide for the body?", options: ["Oxygen", "Support and protection", "Energy", "Hormones"], correct: 1 },
  { question: "What is the main product of photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Glucose", "Chlorophyll"], correct: 2 },
  { question: "What is diffusion?", options: ["A type of joint", "Movement of particles from high to low concentration", "Breaking down glucose", "Transporting oxygen"], correct: 1 },
];

// Quiz Logic
let currentQuestion = 0;
let score = 0;

// Get elements
const quizButton = document.getElementById('quiz-button');
const quizModal = document.getElementById('quiz-modal');
const closeQuizButton = document.getElementById('close-quiz');
const quizContent = document.querySelector('.quiz-content');

// Start Quiz
quizButton.addEventListener('click', startQuiz);

function startQuiz() {
  quizModal.classList.remove('hidden');
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

// Show Question
function showQuestion() {
  const question = quizQuestions[currentQuestion];
  quizContent.innerHTML = `
    <h3>Question ${currentQuestion + 1} of ${quizQuestions.length}</h3>
    <p>${question.question}</p>
    <div id="quiz-options">
      ${question.options
        .map((option, index) => `<button class="quiz-option" data-index="${index}">${option}</button>`)
        .join("")}
    </div>
  `;
  document.querySelectorAll('.quiz-option').forEach((button) =>
    button.addEventListener('click', checkAnswer)
  );
}

// Check Answer
function checkAnswer(event) {
  const selectedOption = parseInt(event.target.dataset.index, 10);
  if (selectedOption === quizQuestions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

// Show Results
function showResults() {
  quizContent.innerHTML = `
    <h3>Quiz Completed!</h3>
    <p>Your score is ${score} out of ${quizQuestions.length}.</p>
    <button id="restart-quiz">Restart Quiz</button>
    <button id="close-quiz-final">Close</button>
  `;
  document.getElementById('restart-quiz').addEventListener('click', startQuiz);
  document.getElementById('close-quiz-final').addEventListener('click', () => {
    quizModal.classList.add('hidden');
  });
}

// Close Quiz Modal
closeQuizButton.addEventListener('click', () => {
  quizModal.classList.add('hidden');
});
