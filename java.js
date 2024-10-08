function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const error = document.getElementById('error');

    if (!name || !email || !password || !confirmPassword) {
      error.textContent = 'All fields are required';
      return false;
    }

    if (password !== confirmPassword) {
      error.textContent = 'Passwords do not match';
      return false;
    }

    error.textContent = '';
    return true;
  }