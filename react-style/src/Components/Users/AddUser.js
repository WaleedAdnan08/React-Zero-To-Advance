import React from 'react';
import Card from '../UI/Card';

const AddUser = props => {
    const AddUserHandler = (event) => {
        event.preventDefault();
    }
    return (
        <Card>
        <form onSubmit={AddUserHandler}>
            <label htmlFor='username'>UserName</label>
            <input id='username' type='text'></input>

            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type='number'></input>
            <button type='submit'>Add User</button>
        </form>
        </Card>
    );
}
export default AddUser;