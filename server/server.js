// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001; // Using 5001 as a fallback for local, but process.env.PORT for deploy
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file (for local development only)

// IMPORTANT: Configure CORS for specific origins in production
// During development, you can use app.use(cors()); for simplicity.
// For production, list your deployed frontend URLs.
const allowedOrigins = [
  'http://localhost:5173', // Your frontend local development URL (e.g., Vite default)
  // Add your deployed Netlify/Vercel/etc. frontend URL(s) here:
  'https://fascinating-mermaid-361146.netlify.app/', //for Netlify
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, or curl requests)
    // This is good for API testing but in a browser, 'origin' will always be present
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin. Blocked origin: ' + origin;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// Middleware to parse JSON bodies
app.use(express.json());

const transactionRoutes = require('./routes/transactions'); 

app.use('/api/transactions', transactionRoutes); // This mounts the routes under /api/transactions

// MongoDB Connection
// Remove deprecated options for newer Mongoose/MongoDB Driver versions
mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true, // Deprecated, remove
  // useUnifiedTopology: true, // Deprecated, remove
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
  // It's good practice to exit the process if DB connection fails
  process.exit(1);
});

// Basic route for the root path
// This is fine, but typically a backend API doesn't serve a root path
// if it's meant purely for data. It's harmless though.
app.get('/', (req, res) => {
  res.send('Welcome to the Expense Tracker API!');
});

// Basic route to check if server is running
app.get('/api', (req, res) => {
  res.json({ message: "Hello from the Expense Tracker API!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  if (process.env.NODE_ENV === 'production') {
    console.log(`Deployed API URL: https://xpence-tracker-app.onrender.com`); // Update with your actual deployed URL
  }
});



// // server/server.js
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 5001; // Using 5001 to avoid potential conflict with frontend
// const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables

// app.use(cors()); // Enable CORS for all routes and origins

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Use the transaction routes

// const transactionRoutes = require('./routes/transactions');
// app.use('/api/transactions', transactionRoutes);


// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('✅ Connected to MongoDB');
// }).catch(err => {
//   console.error('❌ MongoDB connection error:', err);
// });


// // Basic route for the root path

// app.get('/', (req, res) => {
//   res.send('Welcome to the Expense Tracker API!');
// });


// // Basic route to check if server is running
// app.get('/api', (req, res) => {
//   res.json({ message: "Hello from the Expense Tracker API!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });