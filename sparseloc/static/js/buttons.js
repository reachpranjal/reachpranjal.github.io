// Button toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all buttons that should have toggle functionality
  const toggleButtons = document.querySelectorAll('.button.is-dark.is-toggle');

  // Add click event listener to each toggle button
  toggleButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      // Prevent the default link behavior if it's a link
      if (button.tagName === 'A') {
        event.preventDefault();
      }

      // Toggle the disabled class
      button.classList.toggle('is-disabled');

      // If the button has a data-toggle-target attribute, toggle that element too
      const targetSelector = button.getAttribute('data-toggle-target');
      if (targetSelector) {
        const targetElements = document.querySelectorAll(targetSelector);
        targetElements.forEach(element => {
          element.classList.toggle('is-hidden');
        });
      }
    });
  });
});