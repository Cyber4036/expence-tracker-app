// client/src/api.js
const BASE_URL = 'https://xpence-tracker-app.onrender.com'; // Use relative path for Vite proxy

export async function getTransactions() {
  const res = await fetch(`${BASE_URL}/transactions`);
  if (!res.ok) throw new Error('Failed to fetch transactions');
  return res.json();
}

export async function addTransaction(transaction) {
  const res = await fetch(`${BASE_URL}/transactions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  });
  
  if (!res.ok) throw new Error('Failed to add transaction');
  return res.json();
}


export const deleteTransaction = async (id) => {
  const res = await fetch(`http://localhost:5001/api/transactions/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete transaction');
  return true;
};
