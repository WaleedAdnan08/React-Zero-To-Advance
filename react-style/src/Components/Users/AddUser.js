import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const AddUserHandler = (event) => {
        event.preventDefault();
    }
    const userNameChangeHandler = (event) => {

    }
    return (
        <Card className={classes.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor='username'>UserName</label>
                <input id='username' type='text' onChange={userNameChangeHandler}></input>
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number'></input>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
}
export default AddUser;