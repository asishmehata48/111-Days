const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const storedName = document.getElementById('storedName');
const storedEmail = document.getElementById('storedEmail');
const message = document.getElementById('message');

// Show stored data on load
window.addEventListener('DOMContentLoaded', () => {
  const userData = localStorage.getItem('userProfile');
  if (userData) {
    try {
      const parsedData = JSON.parse(userData);
      storedName.textContent = parsedData.name || "N/A";
      storedEmail.textContent = parsedData.email || "N/A";
    } catch (err) {
      console.error("Error parsing stored data:", err);
    }
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.textContent = '';

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name === '' || email === '') {
    message.textContent = "Both fields are required.";
    return;
  }

  const user = {
    name,
    email
  };

  try {
    localStorage.setItem('userProfile', JSON.stringify(user));
    storedName.textContent = name;
    storedEmail.textContent = email;
    message.style.color = 'green';
    message.textContent = "Profile saved successfully!";
    form.reset();
  } catch (error) {
    console.error("Storage Error:", error);
    message.textContent = "Something went wrong. Try again.";
  }
});
