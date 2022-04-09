import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2020');
  const changeFilterHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
        selected={filteredYear}
        onChangeFilter = {changeFilterHandler} 
        />
        <ExpensesList items={filteredExpenses} />
        
      </Card>
    </div>
  );
};

export default Expenses;