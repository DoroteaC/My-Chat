import React, { useState} from "react";
import Button from "../../UI/Button";

const Input = (props) => {
    const room = props.drone.subscribe("general");
  const [message, setMessage] = useState('');
    room.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      // Connected to room
    });
  
    room.on("message", (message) => {
      console.log(message)
    });

    const changeMessageHandler = (event) => {
      setMessage(event.target.value);
    };

const buttonHandler = (event) => {
  event.preventDefault();
    props.drone.publish({
        room: 'general',
        message: {message:message}
      });
      props.onSubmit(event);
}

    return (
        <form onSubmit={buttonHandler}>
        <input  onChange={changeMessageHandler}></input>
        <Button>Send</Button>
      </form>
    )
  };
  
  export default Input;
  