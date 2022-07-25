import React, {useState, useEffect} from 'react';
import styles from './Login.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal.js';
import Wrapper from '../Helpers/Wrapper';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    const changeUsernameHandler = (event) => {
        setUsername(event.target.value);
    };
    // const [password, setPassword] = useState('');
    // const changePasswordHandler = (event) => {
    //     setPassword(event.target.value);
    // };
   
    useEffect(()=>{
       const timer = setTimeout(()=>{
            setFormIsValid(
                username.trim().length>0, 
            );
        },500);
       return ()=>{
        clearTimeout(timer);
       }
      },[username]);

    const submitHandler = (event) => {
        event.preventDefault();
        if(username.trim().length===0){
            setError({
                title: 'Invalid username',
                message: 'Please enter a valid username to continuoue.',
              });
              return;
        }
        console.log(username);
            setUsername('');
        // console.log(password);
        // setPassword('');
    };

    const errorHandler = () => {
        setError(null);
      };

return (
    <Wrapper>
        {error && (
            <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
            />
        )}
        <Card>
            <form className={styles.formStyles} onSubmit={submitHandler}>
                {/* <label>Username</label> */}
                <input type='text' placeholder='Username' value ={username} onChange={changeUsernameHandler} ></input>
                {/* <label>Password</label> */}
                {/* <input type='password' placeholder='Password' value={password} onChange={changePasswordHandler}  ></input> */}
                <Button type='submit' disabled={!formIsValid}><span className='buttonText' >Submit</span></Button>
            </form>
        </Card>
    </Wrapper>
)
} 

export default Login;