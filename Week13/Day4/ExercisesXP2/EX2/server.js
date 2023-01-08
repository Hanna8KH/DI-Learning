const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.get('/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('/:id', (req, res) => {
  res.json({ id: req.params.id });
});

