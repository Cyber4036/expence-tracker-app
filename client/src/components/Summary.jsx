// function Summary({ transactions }) {
//   const income = transactions.filter(tx => tx.amount > 0).reduce((acc, tx) => acc + tx.amount, 0);
//   const expense = transactions.filter(tx => tx.amount < 0).reduce((acc, tx) => acc + tx.amount, 0);
//   const balance = income + expense;

//   return (
//     <div className="summary">
//       <h2>Summary</h2>
//       <p>Balance: ${balance.toFixed(2)}</p>
//       <p>Total Income: ${income.toFixed(2)}</p>
//       <p>Total Expenses: ${Math.abs(expense).toFixed(2)}</p>
//     </div>
//   );
// }

// export default Summary;
