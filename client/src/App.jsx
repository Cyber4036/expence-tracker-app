// client/src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/api') // Your backend API URL
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMessage(data.message);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setError(`Failed to fetch message: ${error.message}`);
      });
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <>
      <h1>Expense Tracker</h1>
      <p>Message from backend: {message}</p>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </>
  );
}

export default App;