// Get elements
const quizButton = document.getElementById('quiz-button');
const quizModal = document.getElementById('quiz-modal');
const closeQuizButton = document.getElementById('close-quiz');

// Open quiz modal
quizButton.addEventListener('click', () => {
  quizModal.classList.remove('hidden');
});

// Close quiz modal
closeQuizButton.addEventListener('click', () => {
  quizModal.classList.add('hidden');
});
