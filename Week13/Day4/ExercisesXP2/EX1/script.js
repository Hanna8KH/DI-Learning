fetch('http://localhost:3000/')
  .then(response => response.json())
  .then(user => {
    console.log(user);
  });