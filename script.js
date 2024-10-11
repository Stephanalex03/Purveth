document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Display a confirmation message
    alert("Thank you for your submission! We will get back to you soon.");

    // Optionally, you can reset the form
    this.reset();

    // Then submit the form
    this.submit();
});
