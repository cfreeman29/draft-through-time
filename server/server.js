const express = require('express');
const app = express();
const port = 3001; // Use a different port than your React app to avoid conflicts

app.get('/', (req, res) => {
  res.send('Drafted Through Time backend is running!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});