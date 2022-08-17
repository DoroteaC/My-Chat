import React, { useState } from "react";
import styles from './Input.module.css';
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../../Redux/Redux";
import Button from "../../UI/Button";

const Input = (props) => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.message.message);
  const username = useSelector((state) => state.user.username);
  
  const [message, setMessage] = useState("");
  

   const changeMessageHandler  = (event) =>  {
    setMessage(event.target.value);
  };

  const buttonHandler = (event) => {
    event.preventDefault();
    dispatch(messageActions.currentMessage(message));
    props.onSubmit(event);
    console.log(input);
    setMessage("");
  };

  return (
    <form className={styles.inputForm} onSubmit={buttonHandler}>
      <input value={message} onChange={changeMessageHandler}></input>
      <Button>Send</Button>
    </form>
  );
};

export default Input;
