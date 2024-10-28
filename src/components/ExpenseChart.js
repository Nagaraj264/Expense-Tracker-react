import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import './ExpenseChart.css'; // Import the CSS file

// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title);

const ExpenseChart = ({ expenses }) => {
  const chartData = {
    labels: expenses.map(expense => new Date(expense.date).toLocaleDateString()), // Ensure date is formatted correctly
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map(expense => expense.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
      },
    ],
  };

  return (
    <div className="expense-chart"> {/* Apply the expense-chart class */}
      <h2>Expenses Overview</h2>
      <div className="chart-container"> {/* Add a container for the chart */}
        <Bar data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default ExpenseChart;
