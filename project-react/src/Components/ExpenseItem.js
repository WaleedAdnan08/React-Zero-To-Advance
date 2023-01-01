import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props) {
    return <div className='expense-item'>
        <ExpenseDate date={props.date}/> {/*This is a self closing tag, same as <ExpenseItem></ExpenseItem>*/}
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
    </div>
}
export default ExpenseItem;