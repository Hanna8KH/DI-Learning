const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const user = {
    firstname: 'John',
    lastname: 'Doe'
  };
  res.json(user);
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
