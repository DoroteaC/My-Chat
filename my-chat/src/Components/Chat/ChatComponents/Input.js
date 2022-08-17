import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../../Redux/Redux";
import Button from "../../UI/Button";

const Input = (props) => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.message.message);
  const room = props.drone.subscribe("general");
  const [message, setMessage] = useState("");
  room.on("open", (error) => {
    if (error) {
      return console.error(error);
    } else {
      console.log('Connected to room')
    }
    // Connected to room
  });

  room.on("message", (message) => {
    console.log(message);
  });

  const changeMessageHandler = (event) => {
    setMessage(event.target.value);
    dispatch(messageActions.currentMessage(event.target.value))
  };

  const buttonHandler = (event) => {
    event.preventDefault();
    ;
    props.drone.publish({
      room: "general",
      message: { message: input },
    });
    dispatch(messageActions.currentMessage(message));
    props.onSubmit(event);
    console.log(input);
    setMessage("");
  };

  return (
    <form onSubmit={buttonHandler}>
      <input value={message} onChange={changeMessageHandler}></input>
      <Button>Send</Button>
    </form>
  );
};

export default Input;
