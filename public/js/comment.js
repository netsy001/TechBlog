const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#nemail-login').value.trim();
    const password = document.querySelector('#npassword-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/index');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('.name').value.trim();
    const email = document.querySelector('.email').value.trim();
    const password = document.querySelector('.password').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.Login')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('signup', signupFormHandler);