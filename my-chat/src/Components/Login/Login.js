import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
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
  // const BluText = require('../Media/BluTextWhite.png');
  const [username, setUsername] = useState("");
  // Error modal
  // const [error, setError] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  // const [password, setPassword] = useState('');
  // const changePasswordHandler = (event) => {
  //     setPassword(event.target.value);
  // };

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
    dispatch(userActions.user(username));
    console.log(username);

    // console.log(password);
    // setPassword('');
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
       
          <Card>
          
            <form
              className={styles.formStyles}
              onSubmit={submitUsernameHandler}
            >
              {/* <label>Username</label> */}
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={changeUsernameHandler}
              ></input>
               <Avatar></Avatar> 

              {/* <label>Password</label> */}
              {/* <input type='password' placeholder='Password' value={password} onChange={changePasswordHandler}  ></input> */}
              <Button type="submit" disabled={!formIsValid}>
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
