function TransactionList({ transactions }) {
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
