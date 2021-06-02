import React, { useState } from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";

const AddUser = props =>{
    const [enteredUserName, setEnteredUserName]= useState('');
    const [enteredUserAge, setEnteredAge]= useState('');
    const [errorHandler, setErrorHandler] = useState();

    const userNameHandler = (event) =>{
        setEnteredUserName(event.target.value);
    }
    const userAgeHandler = (event) =>{
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault()
        if (!enteredUserName){
            setErrorHandler({
                title: 'Invalid input',
                message: 'Type a valid name and/or age',
            });
            return;
        }
        if(enteredUserAge < 1){
            setErrorHandler({
                title: 'Invalid age ',
                message: 'Type a valid age (> 0)',
            });
            return;
        }
        props.onAddUser({username: enteredUserName, userage:enteredUserAge})
        setEnteredUserName('');
        setEnteredAge('');
    }
    const errorDealer = () => {
        setErrorHandler(null);
    }

    return(
        <div>
            {errorHandler && <ErrorModal title={errorHandler.title} message={errorHandler.message} confirm={errorDealer} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label
                        id='label'
                        htmlFor='username'
                    >Username</label>
                    <input
                        id='username'
                        type='text'
                        value={enteredUserName}
                        onChange={userNameHandler}/>
                    <label
                        htmlFor='user-age'
                    >Age (Years)</label>
                    <input
                        id='user-age'
                        type='number'
                        value={enteredUserAge}
                        onChange={userAgeHandler}
                    />
                    <Button
                        onClick={props.onClick}
                        type='submit'
                    >Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;