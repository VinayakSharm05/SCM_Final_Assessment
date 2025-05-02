    document.getElementById('contact').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Display alert message
        alert('Message sent successfully!');

        // Optionally, you can reset the form
        this.reset();
    });
    // Improved: Log a message to the console for debugging purposes
    console.log('Contact form submission handled.');

    
    function doNothing() {

    }
    doNothing();
