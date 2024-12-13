document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.get-started').addEventListener('click', function () {
      let name = document.querySelector('.enter-your-name').value.trim();
      let phone = document.querySelector('.enter-your-number').value.trim();
      let email = document.querySelector('.enter-your-email').value.trim();
      let message = document.querySelector('.enter-your-message').value.trim();
  
      if (name === '') {
        alert('Please enter your name.');
        return;
      }
  
      if (phone === '') {
        alert('Please enter your phone number.');
        return;
      }
  
      if (email === '') {
        alert('Please enter your email.');
        return;
      }
  
      if (message === '') {
        alert('Please enter your message.');
        return;
      }
  
      
    });
  });
  