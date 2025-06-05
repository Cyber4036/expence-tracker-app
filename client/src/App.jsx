import { useEffect, useState } from 'react';
import './App.css'; // Keep if you need custom styles
import { getTransactions } from './api';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import DashboardSummary from './components/DashboardSummary';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (err) {
      console.error(err.message);
      setError('Failed to fetch transactions.');
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleAdd = (newTx) => {
    setTransactions((prev) => [newTx, ...prev]);
  };

  const filtered = transactions.filter((tx) => {
    const matchCategory = categoryFilter
      ? tx.category?.toLowerCase().includes(categoryFilter.toLowerCase())
      : true;

    const matchDate = dateFilter
      ? new Date(tx.date).toISOString().slice(0, 10) === dateFilter
      : true;

    return matchCategory && matchDate;
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 transition-colors duration-300">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Expense Tracker</h1>
          <button
            onClick={toggleTheme}
            className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded">
            {error}
          </div>
        )}

        <TransactionForm onAdd={handleAdd} />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Filter by category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-2 rounded border dark:bg-gray-800 dark:border-gray-600 w-full"
          />
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="p-2 rounded border dark:bg-gray-800 dark:border-gray-600 w-full"
          />
        </div>

        <DashboardSummary transactions={filtered} />
        <TransactionList transactions={filtered} />
      </div>
    </div>
  );
}

export default App;




// // client/src/App.jsx
// import { useEffect, useState } from 'react';
// import './App.css';
// import { getTransactions } from './api';
// import TransactionForm from './components/TransactionForm';
// import TransactionList from './components/TransactionList';

// function App() {
//   const [transactions, setTransactions] = useState([]);
  
//   const fetchTransactions = async () => {
//     try {
//       const data = await getTransactions();
//       setTransactions(data);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const handleAdd = (newTx) => {
//     setTransactions((prev) => [newTx, ...prev]);
//   };

//   return (
//     <div className="App">
//       <h1>Expense Tracker</h1>
//       <TransactionForm onAdd={handleAdd} />
//       <TransactionList transactions={transactions} />
//     </div>
//   );
// }

// export default App;




// import { useState, useEffect } from 'react';
// import TransactionForm from './components/TransactionForm';
// import TransactionList from './components/TransactionList';
// import Summary from './components/Summary';

// function App() {
//   const [transactions, setTransactions] = useState([]);

//   const fetchTransactions = async () => {
//     const res = await fetch('http://localhost:5001/api/transactions');
//     const data = await res.json();
//     setTransactions(data);
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const handleAddTransaction = (newTx) => {
//     setTransactions(prev => [newTx, ...prev]);
//   };

//   return (
//     <div className="app">
//       <h1>Expense Tracker</h1>
//       <TransactionForm onAdd={handleAddTransaction} />
//       <Summary transactions={transactions} />
//       <TransactionList transactions={transactions} />
//     </div>
//   );
// }

// export default App;
