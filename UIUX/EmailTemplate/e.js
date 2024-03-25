document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the Learn More button
    var learnMoreBtn = document.getElementById('learnMoreBtn');
    learnMoreBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      alert('You clicked Learn More!');
      // You can add further functionality here, such as redirecting to another page
      // window.location.href = 'https://example.com';
    });
  });
  