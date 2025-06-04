// server/models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    default: 'General'
  },
  type: {
    type: String,
    enum: ['income', 'expense'],
    required: true
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);
