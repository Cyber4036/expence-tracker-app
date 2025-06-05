function DashboardSummary({ transactions }) {
  const income = transactions
    .filter((tx) => tx.amount > 0)
    .reduce((acc, tx) => acc + tx.amount, 0);

  const expenses = transactions
    .filter((tx) => tx.amount < 0)
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = income + expenses;

  const format = (num) => `$${num.toFixed(2)}`;

  return (
    <div className="grid grid-cols-3 gap-4 text-center mb-6">
      <div className="bg-green-100 dark:bg-green-900 p-4 rounded shadow">
        <h3 className="font-semibold text-green-700 dark:text-green-200">Income</h3>
        <p className="text-lg font-bold">{format(income)}</p>
      </div>
      <div className="bg-red-100 dark:bg-red-900 p-4 rounded shadow">
        <h3 className="font-semibold text-red-700 dark:text-red-200">Expenses</h3>
        <p className="text-lg font-bold">{format(Math.abs(expenses))}</p>
      </div>
      <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded shadow">
        <h3 className="font-semibold text-blue-700 dark:text-blue-200">Balance</h3>
        <p className="text-lg font-bold">{format(balance)}</p>
      </div>
    </div>
  );
}

export default DashboardSummary;
