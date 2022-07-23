import React, {useState} from 'react';
import styles from './Login.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const changeUsernameHandler = (event) => {
        setUsername(event.target.value);
    };
    const changePasswordHandler = (event) => {
        setPassword(event.target.value);
    };
   
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(username);
        console.log(password);
        setUsername('');
        setPassword('');
    };
return (
    <Card>
        <form className={styles.formStyles} onSubmit={submitHandler}>
            {/* <label>Username</label> */}
            <input type='text' placeholder='Username' value ={username} onChange={changeUsernameHandler}></input>
            {/* <label>Password</label> */}
            <input type='password' placeholder='Password' value={password} onChange={changePasswordHandler}></input>
            <Button type='submit'>Submit</Button>
        </form>
    </Card>
)
} 

export default Login;