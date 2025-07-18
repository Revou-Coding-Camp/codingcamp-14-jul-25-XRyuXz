function welcomeUser() {
      const person = prompt("Please enter your name", "Sung");
      const nameDisplay = document.getElementById("userName");
      const nameInput = document.getElementById("name");

      if (person && person.trim() !== "") {
        nameDisplay.textContent = person.trim();
        nameInput.value = person.trim();
      } else {
        nameDisplay.textContent = "Guest";
        nameInput.value = "Guest";
      }
    }

    // Update live preview
    function updatePreview() {
      document.getElementById('previewName').textContent = document.getElementById('name').value || '-';
      document.getElementById('previewEmail').textContent = document.getElementById('email').value || '-';
      document.getElementById('previewGender').textContent = document.getElementById('gender').value || '-';
      document.getElementById('previewMessage').textContent = document.getElementById('messageInput').value || '-';
    }

    // Update current time
    function updateTime() {
      const now = new Date();
      document.getElementById('time').textContent = now.toLocaleString('en-GB', { timeZone: 'Asia/Makassar' }); //Bali Indonesia
    }

    // Form validation
    function validateForm(event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const gender = document.getElementById('gender').value;
      const message = document.getElementById('messageInput').value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name === '') {
        alert("Name is required.");
        return;
      }
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (gender === '') {
        alert("Please select your gender.");
        return;
      }
      if (message === '') {
        alert("Message cannot be empty.");
        return;
      }

      alert("Form submitted successfully!");
    }

    document.addEventListener('DOMContentLoaded', () => {
      welcomeUser();
      updateTime();
      setInterval(updateTime, 1000);

      // Form event listeners
      document.getElementById('contactForm').addEventListener('submit', validateForm);

      ['name', 'email', 'gender', 'messageInput'].forEach(id => {
        document.getElementById(id).addEventListener('input', updatePreview);
      });
    });