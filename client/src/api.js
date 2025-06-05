// client/src/api.js

// The BASE_URL should point to the root of your *backend API*, including the /api prefix.
// Make sure this exactly matches your Render service URL + the /api prefix you use in server.js.
// Example: https://xpence-tracker-app.onrender.com/api
const BASE_URL = 'https://xpence-tracker-app.onrender.com/api'; // <-- CORRECTED: Added /api


export async function getTransactions() {
  const res = await fetch(`${BASE_URL}/transactions`); // Now correctly hits /api/transactions
  // It's good practice to parse the JSON and check for a 'success' or 'data' property
  // if your backend consistently wraps responses.
  const data = await res.json();
  if (!res.ok) {
    // If your backend sends error messages in the JSON, you can throw that.
    // For now, a generic error message is fine.
    throw new Error(data.message || 'Failed to fetch transactions');
  }
  // Assuming your backend response is { success: true, count: X, data: [...] }
  return res.json(); // <--- IMPORTANT: Access the actual array
}

export async function addTransaction(transaction) {
  const res = await fetch(`${BASE_URL}/transactions`, { // Correctly hits /api/transactions
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Failed to add transaction');
  }
  return data.data; // Assuming your backend returns { success: true, data: newTransaction }
}


export const deleteTransaction = async (id) => {
  // Use the consistent BASE_URL for consistency and correctness
  const res = await fetch(`${BASE_URL}/transactions/${id}`, { // Correctly hits /api/transactions/:id
    method: 'DELETE',
  });

  const data = await res.json(); // Even for DELETE, backend might send a response
  if (!res.ok) {
    throw new Error(data.message || 'Failed to delete transaction');
  }
  return true; // Or return data if your backend sends a confirmation message
};


// // client/src/api.js
// const BASE_URL = 'https://xpence-tracker-app.onrender.com'; // Use relative path for Vite proxy

// export async function getTransactions() {
//   const res = await fetch(`${BASE_URL}/transactions`);
//   if (!res.ok) throw new Error('Failed to fetch transactions');
//   return res.json();
// }

// export async function addTransaction(transaction) {
//   const res = await fetch(`${BASE_URL}/transactions`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(transaction),
//   });
  
//   if (!res.ok) throw new Error('Failed to add transaction');
//   return res.json();
// }


// export const deleteTransaction = async (id) => {
//   const res = await fetch(`https://xpence-tracker-app.onrender.com/transactions/${id}`, {
//     method: 'DELETE',
//   });
//   if (!res.ok) throw new Error('Failed to delete transaction');
//   return true;
// };
