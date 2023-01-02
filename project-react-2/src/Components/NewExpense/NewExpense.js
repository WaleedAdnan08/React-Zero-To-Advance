import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  const saveExpenseDataHandler=(enteredExpenesData)=>{
    const ExpenseData={
      ...enteredExpenesData,
      id: Math.random().toString()
    };
    console.log(ExpenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;