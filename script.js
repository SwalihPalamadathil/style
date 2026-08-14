const registrationForm = document.querySelector("form");

registrationForm.addEventListener("submit", function (event) {
    // Prevent the form from refreshing/submitting the page
    event.preventDefault();

    // Get the student's name
    const studentName = document.getElementById("student-name").value;

    // Show success message
    alert("Application submitted successfully for " + studentName + "!");
});