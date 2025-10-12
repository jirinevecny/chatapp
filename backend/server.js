const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Hello World endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Bonjour! Welcome to ChatApp API' });
});

app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Bonjour!',
    greeting: 'Hello World from ChatApp',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
