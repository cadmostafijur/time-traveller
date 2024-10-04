// Global quiz results
let totalCorrect = 0;
let totalWrong = 0;

// Function to submit quiz and display feedback
function submitQuiz(quizId, nextPage, correctAnswers) {
    const form = document.getElementById(quizId);
    let feedback = document.getElementById('feedback');
    let correct = 0;
    let wrong = 0;
    feedback.innerHTML = ""; // Clear previous feedback

    // Loop through each question and check the answers
    correctAnswers.forEach((correctAnswer, index) => {
        const question = form.elements[`q${index + 1}`];
        const selected = Array.from(question).find(radio => radio.checked);

        if (selected) {
            if (selected.value === correctAnswer) {
                correct++;
                feedback.innerHTML += `<p>Question ${index + 1}: Correct!</p>`;
            } else {
                wrong++;
                feedback.innerHTML += `<p>Question ${index + 1}: Wrong. The correct answer is "${correctAnswer}".</p>`;
            }
        } else {
            wrong++;
            feedback.innerHTML += `<p>Question ${index + 1}: Not answered. The correct answer is "${correctAnswer}".</p>`;
        }
    });

    totalCorrect += correct;
    totalWrong += wrong;

    // Show a "Next" button after showing feedback
    feedback.innerHTML += `<button onclick="window.location.href='${nextPage}'" class="next-btn">Next</button>`;
}

// Function to display quiz results on the finish page
function displayResults() {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = `You answered ${totalCorrect} questions correctly and ${totalWrong} questions incorrectly.`;
    }
}
