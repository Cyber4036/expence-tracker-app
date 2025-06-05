# Expense Tracker App

A simple web application to track your income and expenses, built with the MERN stack (MongoDB, Express.js, React, Node.js) and visualized with charts.

## Features

*   **Add Transactions:** Easily record income and expenses with title, amount, type (income/expense), date, and category.
*   **View Transactions:** See a list of all your transactions.
*   **Categorize Spending:** Assign categories to expenses for better tracking.
*   **Visual Charts:** View a bar chart summarizing spending by category.
*   **Dark Mode:** Toggle between light and dark themes for comfortable viewing.

## Tech Stack

*   **Frontend:** React, Vite, Axios, Tailwind CSS, Recharts
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB (with Mongoose)

## Prerequisites

*   Node.js (v18.x or later recommended)
*   npm or yarn
*   MongoDB (local instance or a cloud-hosted solution like MongoDB Atlas)

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Cyber4036/expence-tracker-app.git
    cd expense-tracker-app
    ```

2.  **Setup Backend (Server):**
    ```bash
    cd server
    npm install
    ```
    *   Create a `.env` file in the `server` directory.
    *   Add your MongoDB connection string to the `.env` file:
        ```env
        MONGODB_URI=your_mongodb_connection_string
        PORT=5001
        ```
    *   Start the backend server:
        ```bash
        npm start
        ```
        The server will typically run on `http://localhost:5001`.

3.  **Setup Frontend (Client):**
    *   Open a new terminal window.
    ```bash
    cd client
    npm install
    ```
    *   The client is configured to proxy API requests to `http://localhost:5001` (defined in `client/vite.config.js`).
    *   Start the frontend development server:
        ```bash
        npm run dev
        ```
        The client will typically run on `http://localhost:5173` (or another port if 5173 is busy).

4.  **Access the application:**
    Open your browser and navigate to the URL provided by the Vite development server (e.g., `http://localhost:5173`).






