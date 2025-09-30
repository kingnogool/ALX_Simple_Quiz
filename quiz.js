function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4";

    // Retrieve the User’s Answer
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = ''; // Initialize userAnswer

    if (selectedChoice) {
        userAnswer = selectedChoice.value;
    }

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = 'green'; // Optional: make correct feedback green
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = 'red'; // Optional: make incorrect feedback red
    }
}

// Add an Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
