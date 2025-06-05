// server/routes/transactions.js
const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// POST /api/transactions - Create a transaction
router.post('/', async (req, res) => {
  try {
    const { title, amount, date, category } = req.body;
    const type = amount >= 0 ? 'income' : 'expense';

    const newTransaction = new Transaction({
      title,
      amount,
      date,
      category,
      type
    });

    const saved = await newTransaction.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/transactions - Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/transactions/:id - Delete a transaction
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Transaction.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Transaction not found' });
    res.json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
