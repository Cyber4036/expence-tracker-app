import { deleteTransaction } from '../api';

function TransactionList({ transactions, onDelete }) {
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this transaction?')) return;
    try {
      await deleteTransaction(id);
      onDelete(id); // Notify parent to remove from state
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Failed to delete transaction.');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Transaction History</h2>
      <ul className="space-y-2">
        {transactions.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400">No transactions yet.</li>
        ) : (
          transactions.map((tx) => (
            <li
              key={tx._id}
              className={`p-2 rounded border-l-4 ${
                tx.amount < 0
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/30'
                  : 'border-green-500 bg-green-50 dark:bg-green-900/30'
              }`}
            >
              <div className="font-medium">{tx.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {tx.category || 'Uncategorized'} • ${tx.amount} •{' '}
                {new Date(tx.date).toLocaleDateString()}
              </div>
              <button
                onClick={() => handleDelete(tx._id)}
                className="text-sm px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TransactionList;





// function TransactionList({ transactions }) {
//   return (
//     <div className="transaction-list">
//       <h2>Transaction History</h2>
//       <ul>
//         {transactions.map((tx) => (
//           <li key={tx._id} className={tx.amount < 0 ? 'expense' : 'income'}>
//             <strong>{tx.title}</strong> | {tx.category || 'Uncategorized'} | 
//             ${tx.amount} on {new Date(tx.date).toLocaleDateString()}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TransactionList;
