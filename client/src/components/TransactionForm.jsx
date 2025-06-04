import { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      const data = await res.json();
      onAdd(data); // Push to list
      setTitle('');
      setAmount('');
      setDate('');
      setCategory('');
    } catch (err) {
      console.error('Error adding transaction:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
