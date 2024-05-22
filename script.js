document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Handle form submission
    const signupForm = document.querySelector(".email-signup-form");
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const emailInput = document.querySelector(".email-input").value;
        if (validateEmail(emailInput)) {
            alert("Thank you for signing up!");
            signupForm.reset();
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Handle button clicks
    const restakeNowButtons = document.querySelectorAll(".restake-now, .restake-now-footer");
    restakeNowButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Restake Now button clicked!");
        });
    });

    const signUpNowButtons = document.querySelectorAll(".sign-up-now");
    signUpNowButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector("#signup-form").scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
