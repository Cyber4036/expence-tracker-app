export function exportToCSV(transactions) {
  const headers = ['Title', 'Amount', 'Date', 'Category'];
  const rows = transactions.map((tx) => [
    tx.title,
    tx.amount,
    new Date(tx.date).toISOString().split('T')[0],
    tx.category || '',
  ]);

  let csvContent =
    'data:text/csv;charset=utf-8,' +
    [headers, ...rows].map((e) => e.join(',')).join('\n');

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'transactions.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
