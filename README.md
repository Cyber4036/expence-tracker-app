# Expense Tracker App

A full-stack web application for tracking personal income and expenses, built with the MERN (MongoDB, Express.js, React, Node.js) stack.

## ✨ Features Implemented

  * **Add Transactions:** Easily input new income or expense records with a title, amount, type (income/expense), and category.
  * **View Transactions:** Display a list of all recorded transactions.
  * **Filtering:** Filter transactions by category and date.
  * **Sorting:** Sort transactions by date (newest/oldest) and amount (highest/lowest).
  * **Delete Transactions:** Remove individual transactions from the list.
  * **Dashboard Summary:** See an overview of total income, total expenses, and your net balance.
  * **Interactive Chart:** Visualize your income and expense trends with a simple chart.
  * **Dark/Light Mode:** Toggle between dark and light themes for a personalized viewing experience.
  * **Export to CSV:** Download your filtered and sorted transactions as a CSV file.
  * **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.

## 🚀 How to Run Locally

Follow these steps to get the Expense Tracker up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

  * **Node.js**: [Download & Install Node.js](https://nodejs.org/) (includes npm)
  * **MongoDB**:
      * Locally: [Download & Install MongoDB Community Server](https://www.mongodb.com/try/download/community)
      * Cloud (Recommended): Create a free tier cluster on [MongoDB Atlas]

### 1\. Clone the Repository

Open your terminal or command prompt and clone the project:

```bash
git clone https://github.com/Cyber4036/expence-tracker-app.git
cd expence-tracker-app
```

### 2\. Backend Setup (Server)

Navigate into the `server` directory:

```bash
cd server
```

**a. Install Dependencies:**

```bash
npm install
# or
yarn install
```

**b. Configure Environment Variables:**

Create a file named `.env` in the `server` directory.
Add your MongoDB connection URI to this file:

```dotenv
MONGO_URI="YOUR_MONGODB_CONNECTION_STRING"
```

  * **For MongoDB Atlas:** Go to your Atlas cluster, click "Connect", choose "Connect your application", and copy the connection string. Replace `<username>` and `<password>` with your database user credentials. Example: `mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/expense-tracker?retryWrites=true&w=majority`
  * **For Local MongoDB:** Typically `mongodb://localhost:27017/expense_tracker_db`

**c. Run the Server:**

```bash
npm start
# or
yarn start
```

The server will start on `http://localhost:5001` (or the port defined by `process.env.PORT`). You should see a message in your console like `✅ Connected to MongoDB` and `Server is running on http://localhost:5001`.

### 3\. Frontend Setup (Client)

Open a **new terminal/command prompt window** and navigate to the `client` directory:

```bash
cd ../client # If you are still in the server directory
# or if you are in the root directory:
# cd client
```

**a. Install Dependencies:**

```bash
npm install
# or
yarn install
```

**b. Configure API Base URL:**

Since your frontend will be running locally but connecting to a local backend, you'll use a proxy configuration (Vite handles this well).

  * **For local development, your `client/src/api.js` should point to your local backend.**
    ```javascript
    // client/src/api.js
    // For local development, point to your local backend server
    const BASE_URL = 'http://localhost:5001/api';
    ```
    *(Note: When you deploy, you'll change this to your deployed backend URL.)*

**c. Run the Frontend:**

```bash
npm run dev
# or
yarn dev
```

The frontend will start on `http://localhost:5173` (or another available port). Your browser should automatically open the application.


Here's the link to the deployed Web-App ``` https://fascinating-mermaid-361146.netlify.app ```


