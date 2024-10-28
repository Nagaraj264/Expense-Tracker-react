import React, { useState, useEffect } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // Effect to set form fields when editing an existing expense
  useEffect(() => {
    if (props.expenseToEdit) {
      setTitle(props.expenseToEdit.title);
      setAmount(props.expenseToEdit.amount);
      setDate(props.expenseToEdit.date.toISOString().substring(0, 10));
    } else {
      // Reset form if not editing
      setTitle('');
      setAmount('');
      setDate('');
    }
  }, [props.expenseToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onAddExpense(expenseData); // This function will handle both add and edit
    // Reset form fields after submission
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="expense-form">
      <h2>{props.expenseToEdit ? 'Edit Expense' : 'Add New Expense'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">{props.expenseToEdit ? 'Update Expense' : 'Add Expense'}</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
