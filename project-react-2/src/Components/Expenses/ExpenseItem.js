import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
const clickHandler=()=>console.log('Clicked!!!');
    return <Card className='expense-item'>
        <ExpenseDate date={props.date} /> {/*This is a self closing tag, same as <ExpenseItem></ExpenseItem>*/}
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card> 
  
}
export default ExpenseItem;