import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import Login from "./Components/Login/Login";
import Header from "./Components/UI/Header";
import { userActions } from "./Components/Redux/Redux";
import Swal from "sweetalert2";

let drone = undefined;
let room = undefined;
function App(props) {
 

  const username = useSelector((state) => state.user.username);
  const avatar = useSelector((state) => state.avatar);
  if (username.trim().length > 0 && drone === undefined) {
    drone = new window.Scaledrone("RSmMr0wjWTDtXT0h", {
      data: {
        username: username,
        avatar: avatar
      
      },
    });
    drone.on("close", async (event) => {
      drone = undefined;
      room = undefined;
      // console.log("Drone disconnected");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      await Toast.fire({
        icon: "info",
        title: "Disconnected! Login again.",
      });
    });
  }
  if(drone && room === undefined){
    room = drone.subscribe("observable-general");
  }

  const dispatch = useDispatch();
  const [userIsActive, setUserIsActive] = useState(false);
  // const [thisUser, setThisUser] = useState('');
  const setUser = () => {
    dispatch(userActions.isActive(1));
    setUserIsActive(true);
  };
  const setUserInactive = () => {
    setUserIsActive(false);
  };

  return (
    <div className="App">
      {userIsActive === true ? (
        <Header  drone={drone}></Header>
      ) : (
        <Header></Header>
      )}
      {userIsActive === true ? (
        <Chat onSubmit={setUserInactive} drone={drone} room={room} />
      ) : (
        <Login onSubmit={setUser} drone={drone} />
      )}
    </div>
  );
}

export default App;
