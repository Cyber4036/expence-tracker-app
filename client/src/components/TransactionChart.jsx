import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell} from 'recharts';

function TransactionChart({ transactions }) {
  // Group by category
  const categoryMap = {};

  transactions.forEach((tx) => {
    const cat = tx.category || 'Uncategorized';
    if (!categoryMap[cat]) categoryMap[cat] = { amount: 0, type: tx.amount >= 0 ? 'Income' : 'Expense' };
    categoryMap[cat].amount += tx.amount;
  });

  const data = Object.entries(categoryMap).map(([category, {amount, type}]) => ({
    category,
    amount: Math.abs(amount),
    type, // Show absolute values
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Spending by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" name="Amount">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.type === 'Income' ? '#22c55e' : '#ef4444'} // green or red
            />
          ))}
        </Bar>
      </BarChart>

      </ResponsiveContainer>
    </div>
  );
}

export default TransactionChart;
