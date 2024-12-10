/* Base Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #f0f8ff;
    color: #333;
}

header {
    background: #4CAF50;
    color: white;
    text-align: center;
    padding: 20px 0;
}

h1 {
    margin: 0;
}

button.quiz-btn {
    background-color: #4CAF50;
    color: white;
    padding: 15px 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
}

button.quiz-btn:hover {
    background-color: #45a049;
}

footer {
    text-align: center;
    padding: 10px 0;
    background: #4CAF50;
    color: white;
}

/* Main Content Styles */
.content {
    padding: 20px;
    max-width: 900px;
    margin: auto;
}

h2 {
    color: #4CAF50;
}

/* Modal for quiz */
.quiz-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}

.quiz-container {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    width: 80%;
    max-width: 600px;
    position: relative;
    animation: fadeIn 0.5s ease-in-out;
}

.quiz-answer {
    background-color: #f1f1f1;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.quiz-answer:hover {
    background-color: #e0e0e0;
}

/* Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.correct {
    background-color: #4CAF50;
    color: white;
}

.incorrect {
    background-color: #f44336;
    color: white;
}
