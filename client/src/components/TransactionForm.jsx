// client/src/components/TransactionForm.jsx
import { useState } from 'react';
import { addTransaction } from '../api';

export default function TransactionForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, amount, date, category } = formData;
    if (!title || !amount || !date) return alert('Please fill required fields');
    try {
      const transaction = await addTransaction({
        title,
        amount: parseFloat(amount),
        date,
        category,
      });
      onAdd(transaction);
      setFormData({ title: '', amount: '', date: '', category: '' });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
      <input name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" type="number" />
      <input name="date" value={formData.date} onChange={handleChange} type="date" />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <button type="submit">Add Transaction</button>
    </form>
  );
}




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
