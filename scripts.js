// Add any interactivity or form validation here if needed
document.querySelector('.message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
    // Here you could integrate an email service or backend to handle the form submission
  });
  