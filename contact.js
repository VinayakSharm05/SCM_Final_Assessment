    document.getElementById('contact').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Display alert message
        alert('Message sent successfully!');

        // Optionally, you can reset the form
        this.reset();
    });
