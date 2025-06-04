function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx._id} className={tx.amount < 0 ? 'expense' : 'income'}>
            <strong>{tx.title}</strong> | {tx.category || 'Uncategorized'} | 
            ${tx.amount} on {new Date(tx.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
