import React, { useState } from "react";
import styles from "./Input.module.css";
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../../Redux/Redux";
import Button from "../../UI/Button";

import { AiOutlineArrowUp } from "react-icons/ai";

const Input = (props) => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.message.message);
  const username = useSelector((state) => state.user.username);
  const userColor = useSelector((state) => state.user.userColor);
  const lastUserId = useSelector((state) => state.message.lastId);
  const id = useSelector((state) => state.user.id);
  const gender = useSelector((state) => state.avatar.gender);
  const hairColor = useSelector((state) => state.avatar.hairColor);
  const hair = useSelector((state) => state.avatar.hairStyle);
  const eyes = useSelector((state) => state.avatar.eyes);
  const eyebrows = useSelector((state) => state.avatar.eyebrows);
  const mouth = useSelector((state) => state.avatar.mouth);
  const skin = useSelector((state) => state.avatar.skin);
  const beard = useSelector((state) => state.avatar.beard);
  const clothing = useSelector((state) => state.avatar.clothing);
  const clothingColor = useSelector((state) => state.avatar.clothingColor);
  const [message, setMessage] = useState("");
  const [sameSender, setSameSender] = useState(false);

  const changeMessageHandler = (event) => {
    setMessage(event.target.value);
    if (id === lastUserId) {
      setSameSender(true);
    } else {
      setSameSender(false);
    }
    dispatch(
      messageActions.currentMessage({
        text: event.target.value,
        username,
        userColor,
        id,
        sameSender,
        avatar: {
          gender,
          hairColor,
          hair,
          eyes,
          eyebrows,
          mouth,
          skin,
          beard,
          clothing,
          clothingColor,
        },
      })
    );
  };

  const buttonHandler = (event) => {
    event.preventDefault();
    if (message.trim().length === 0) {
      console.log("empty message");
      return;
    } else {
      props.onSubmit(event);
      console.log(input);
      setMessage("");
    }
  };

  return (
    <form className={styles.inputForm} onSubmit={buttonHandler}>
      <input
        value={message}
        onChange={changeMessageHandler}
        placeholder="Start blubbing..."
      ></input>
      <Button id={styles.messageInputButton} className={styles.inputButton}>
        {" "}
        <AiOutlineArrowUp />{" "}
      </Button>
    </form>
  );
};
// AiOutlineArrowUp
export default Input;
