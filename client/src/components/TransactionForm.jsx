import { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      setError('Please fill in all required fields.');
      return;
    }

    const newTransaction = {
      title,
      amount: parseFloat(amount),
      date,
      category,
    };

    try {
      const res = await fetch('http://localhost:5001/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTransaction),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || 'Failed to add transaction.');
        return;
      }

      const data = await res.json();
      onAdd(data);

      // Clear form
      setTitle('');
      setAmount('');
      setDate('');
      setCategory('');
      setError(null);
    } catch (err) {
      console.error('Error adding transaction:', err);
      setError('Network error. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Add Transaction</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded text-sm">
          {error}
        </div>
      )}

      <div className="grid gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
          className="p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category (optional)"
          className="p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;




// import { useState } from 'react';

// function TransactionForm({ onAdd }) {
//   const [title, setTitle] = useState('');
//   const [amount, setAmount] = useState('');
//   const [date, setDate] = useState('');
//   const [category, setCategory] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newTransaction = {
//       title,
//       amount: parseFloat(amount),
//       date,
//       category,
//     };

//     try {
//       const res = await fetch('http://localhost:5001/api/transactions', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newTransaction),
//       });

//       const data = await res.json();
//       onAdd(data); // Push to list
//       setTitle('');
//       setAmount('');
//       setDate('');
//       setCategory('');
//     } catch (err) {
//       console.error('Error adding transaction:', err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form">
//       <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
//       <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
//       <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//       <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
//       <button type="submit">Add Transaction</button>
//     </form>
//   );
// }

// export default TransactionForm;
