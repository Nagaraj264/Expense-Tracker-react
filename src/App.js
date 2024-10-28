import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expenses';
import ExpenseChart from './components/ExpenseChart';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editExpenseIndex, setEditExpenseIndex] = useState(null);

  const addExpenseHandler = (expenseData) => {
    if (editExpenseIndex !== null) {
      // Update existing expense
      setExpenses((prevExpenses) => {
        const updatedExpenses = [...prevExpenses];
        updatedExpenses[editExpenseIndex] = { ...expenseData, id: updatedExpenses[editExpenseIndex].id };
        return updatedExpenses;
      });
      setEditExpenseIndex(null); // Reset index after editing
    } else {
      // Add new expense
      setExpenses((prevExpenses) => {
        return [...prevExpenses, { ...expenseData, id: Math.random().toString() }];
      });
    }
  };

  const handleEditExpense = (index) => {
    setEditExpenseIndex(index);
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm 
        onAddExpense={addExpenseHandler} 
        expenseToEdit={editExpenseIndex !== null ? expenses[editExpenseIndex] : null} 
      />
      <ExpenseChart expenses={expenses} />
      <Expenses 
        items={expenses} 
        onEditExpense={handleEditExpense} 
        onDeleteExpense={handleDeleteExpense} 
      />
    </div>
  );
}

export default App;
