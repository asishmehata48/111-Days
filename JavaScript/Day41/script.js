const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Real-time validation
nameInput.addEventListener('input', () => {
  nameInput.value.trim().length < 3
    ? setError(nameInput, 'Name must be at least 3 characters')
    : setSuccess(nameInput);
});

emailInput.addEventListener('input', () => {
  !isValidEmail(emailInput.value.trim())
    ? setError(emailInput, 'Email is not valid')
    : setSuccess(emailInput);
});

passwordInput.addEventListener('input', () => {
  passwordInput.value.length < 6 || !/\d/.test(passwordInput.value)
    ? setError(passwordInput, 'Password must be 6+ characters and contain numbers')
    : setSuccess(passwordInput);
});

confirmPasswordInput.addEventListener('input', () => {
  confirmPasswordInput.value !== passwordInput.value
    ? setError(confirmPasswordInput, 'Passwords do not match')
    : setSuccess(confirmPasswordInput);
});

// On form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  let isValid = true;

  if (name.length < 3) {
    setError(nameInput, 'Name must be at least 3 characters');
    isValid = false;
  } else {
    setSuccess(nameInput);
  }

  if (!isValidEmail(email)) {
    setError(emailInput, 'Email is not valid');
    isValid = false;
  } else {
    setSuccess(emailInput);
  }

  if (password.length < 6 || !/\d/.test(password)) {
    setError(passwordInput, 'Password must be 6+ characters and contain numbers');
    isValid = false;
  } else {
    setSuccess(passwordInput);
  }

  if (password !== confirmPassword) {
    setError(confirmPasswordInput, 'Passwords do not match');
    isValid = false;
  } else {
    setSuccess(confirmPasswordInput);
  }

  if (isValid) {
    const formData = {
      name,
      email,
      password // ⚠️ Do not store plaintext passwords in real apps!
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('🎉 Registration successful!');
    form.reset();
    document.querySelectorAll('.input-group').forEach(group => group.className = 'input-group');
  }
}

function setError(input, message) {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector('small');
  small.innerText = message;
  small.style.display = 'block';
  inputGroup.className = 'input-group error';
}

function setSuccess(input) {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector('small');
  small.innerText = '';
  small.style.display = 'none';
  inputGroup.className = 'input-group success';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
