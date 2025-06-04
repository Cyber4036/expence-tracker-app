// client/src/App.jsx
import { useEffect, useState } from 'react';
import './App.css';
import { getTransactions } from './api';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleAdd = (newTx) => {
    setTransactions((prev) => [newTx, ...prev]);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <TransactionForm onAdd={handleAdd} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;




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
