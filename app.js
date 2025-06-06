const express = require('express');
const app = express();

// // Zmienna sprawdzająca, czy jesteśmy w trybie testowym:
const isTest = process.env.NODE_ENV === 'test';

app.get('/', async (req, res) => {
  try {
    res.json({ message: "Test message" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Jeżeli nie jesteśmy w trybie testowym, uruchamiamy serwer:
if (!isTest) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
