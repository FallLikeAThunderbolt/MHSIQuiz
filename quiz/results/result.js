document.addEventListener("DOMContentLoaded", function () {
    const resultsText = document.getElementById("results-text");

    // Retrieve the user's total score from local storage
    const totalScore = parseInt(localStorage.getItem("totalScore") || 0);
    console.log(totalScore)

    // Define assessment categories and their corresponding messages
    const assessments = [
        { minScore: 0, maxScore: 10, message: "You're doing well. Keep up the good work!" },
        { minScore: 11, maxScore: 20, message: "You may be experiencing mild stress. Consider seeking support or relaxation techniques." },
        { minScore: 21, maxScore: 30, message: "You should seek professional help for your mental health." }
    ];

    // Determine the user's assessment based on their total score
    let userAssessment = "";
    for (const assessment of assessments) {
        if (totalScore >= assessment.minScore && totalScore <= assessment.maxScore) {
            userAssessment = assessment.message;
            break;
        }
    }

    // Display the user's assessment
    resultsText.innerHTML = `<p>${userAssessment}</p>`;
});







