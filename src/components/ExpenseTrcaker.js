import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import Expenses from './Expenses';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    // Load expenses from local storage on component mount
    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(storedExpenses);
    }, []);

    // Save expenses to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const addOrUpdateExpense = () => {
        if (editIndex !== null) {
            const updatedExpenses = [...expenses];
            updatedExpenses[editIndex] = { amount, date, category };
            setExpenses(updatedExpenses);
            setEditIndex(null);
        } else {
            setExpenses([...expenses, { amount, date, category }]);
        }
        setAmount('');
        setDate('');
        setCategory('');
    };

    const editExpense = (index) => {
        setEditIndex(index);
        setAmount(expenses[index].amount);
        setDate(expenses[index].date);
        setCategory(expenses[index].category);
    };

    const deleteExpense = (index) => {
        const updatedExpenses = expenses.filter((_, i) => i !== index);
        setExpenses(updatedExpenses);
    };

    return (
        <div>
            <ExpenseForm 
                onAddExpense={addOrUpdateExpense} 
                amount={amount} 
                setAmount={setAmount} 
                date={date} 
                setDate={setDate} 
                category={category} 
                setCategory={setCategory} 
            />
            <Expenses 
                items={expenses} 
                onEditExpense={editExpense} 
                onDeleteExpense={deleteExpense} 
            />
        </div>
    );
};

export default ExpenseTracker;
