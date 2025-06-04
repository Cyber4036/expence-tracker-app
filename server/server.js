// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001; // Using 5001 to avoid potential conflict with frontend

app.use(cors()); // Enable CORS for all routes and origins

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for the root path

app.get('/', (req, res) => {
  res.send('Welcome to the Expense Tracker API!');
});


// Basic route to check if server is running
app.get('/api', (req, res) => {
  res.json({ message: "Hello from the Expense Tracker API!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});