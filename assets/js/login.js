function login() {
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();


  if (!username || !password) {
      alert('Please enter both username and password.');
      return;
  }

  
  if (username === "user" && password === "password123") {
      alert('Login successful!');
     
      window.location.href = ""; // redirect link baad me add karna hai
  } else {
      alert('Invalid username or password.');
  }
}