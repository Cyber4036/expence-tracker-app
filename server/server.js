const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;
const mongoose = require('mongoose');
require('dotenv').config();

// IMPORTANT: Configure CORS for specific origins in production
const allowedOrigins = [
  'http://localhost:5173', // Your frontend local development URL
  // Remove the trailing slash here: 'https://fascinating-mermaid-361146.netlify.app/'
  // Browsers send the origin *without* a trailing slash.
  'https://fascinating-mermaid-361146.netlify.app', // <-- CORRECTED: No trailing slash
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) { // For requests from tools like Postman or curl, or same-origin (less likely in browser)
      console.log('CORS: No origin (allowing)');
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin)) { // Use .includes for array checking
      console.log(`CORS: Origin ${origin} allowed.`);
      return callback(null, true);
    } else {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      console.error(`CORS: Blocking origin ${origin}. Full message: ${msg}`);
      return callback(new Error(msg), false);
    }
  }
}));

app.use(express.json());

const transactionRoutes = require('./routes/transactions'); // <-- Confirm this path!


app.use('/api/transactions', transactionRoutes);

mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true, // Deprecated, remove
  // useUnifiedTopology: true, // Deprecated, remove
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Expense Tracker API!');
});

app.get('/api', (req, res) => {
  res.json({ message: "Hello from the Expense Tracker API!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  if (process.env.NODE_ENV === 'production') {
    // Ensure this URL is your actual Render backend URL
    console.log(`Deployed API URL: https://xpence-tracker-app.onrender.com`);
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