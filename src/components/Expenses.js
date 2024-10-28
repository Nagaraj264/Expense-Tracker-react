import React from 'react';
import './Expenses.css'; // Import the CSS file

const Expenses = ({ items, onEditExpense, onDeleteExpense }) => {
  return (
    <div className="expenses-container">
      <h2>Your Expenses</h2>
      <ul>
        {items.map((expense, index) => (
          <li key={expense.id}>
            {expense.title}: ${expense.amount} on {new Date(expense.date).toLocaleDateString()}
            <div>
              <button onClick={() => onEditExpense(index)}>Edit</button>
              <button onClick={() => onDeleteExpense(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
