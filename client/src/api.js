// client/src/api.js
const BASE_URL = '/api'; // Use relative path for Vite proxy

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
  });// In your client/src/App.jsx
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount) return;
  
    try {
      // Create a new payload with amount converted to a number
      const payload = {
        ...formData,
        amount: parseFloat(formData.amount) // Or parseInt, if amount should be an integer
      };
  
      // Ensure you are using the correct API endpoint and method
      // If you intend to use your api.js, you would call:
      // await addTransaction(payload); 
      // But since the error is AxiosError, you are likely doing:
      await axios.post('/api/transactions', payload); // Send the modified payload
  
      setFormData({ title: '', amount: '', type: 'income' });
      fetchTransactions(); // Or your equivalent function to refresh data
    } catch (error) {
      console.error("Failed to add transaction:", error);
      // You can add user-facing error handling here
    }
  };
  
  if (!res.ok) throw new Error('Failed to add transaction');
  return res.json();
}
