import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import styles from "./Login.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
// import ErrorModal from '../UI/ErrorModal.js';
import Wrapper from "../Helpers/Wrapper";
import Swal from "sweetalert2";
import Avatar from "./Avatar";
import { userActions } from "../Redux/Redux";

const Login = (props) => {
  const dispatch = useDispatch();
  const BluWhite1 = require("../Media/Blu/1x/1x/BluWhite1.png");
  const [username, setUsername] = useState("");
  // Error modal
  // const [error, setError] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  function randomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  }

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(username.trim().length > 0);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [username]);

  const submitUsernameHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0) {
      Swal.fire({
        title: "Wrong username!",
        text: "Please eneter valid username.",
        icon: "error",
        confirmButtonText: "Back",
        confirmButtonColor: "#2f68b6",
      });
      // Error Module
      // setError({
      //     title: 'Invalid username',
      //     message: 'Please enter a valid username to continuoue.',
      //   });
      return;
    }
    props.onSubmit();
    const color = randomColor();
    dispatch(userActions.setColor(color));
    console.log(color)
    dispatch(userActions.user(username));

    console.log(username);
  };

  // const errorHandler = () => {
  //     setError(null);
  //   };

  return (
    <Wrapper>
      <div className={styles.container}>
        {/* {error && (
            <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
            />
        )} */}

        <Card className={styles.loginCard}>
          <form className={styles.formStyles} onSubmit={submitUsernameHandler}>
            {/* <label>Username</label> */}
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={changeUsernameHandler}
            ></input>
            <Avatar type="avatar"></Avatar>

            <Button
              type="submit"
              disabled={!formIsValid}
              onClick={submitUsernameHandler}
              className={styles.loginButton}
            >
              <span className="buttonText">Submit</span>
            </Button>
          </form>
        </Card>
        <div className={styles.imagesContainer}>
          <img src={BluWhite1} alt="Blu" />
          <h1>blu blu</h1>
        </div>
      </div>
    </Wrapper>
  );
};
export default Login;
