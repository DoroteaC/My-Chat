import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Messages from "./ChatComponents/Messages";
import Input from "./ChatComponents/Input";
import styles from "./Chat.module.css";
import "./ChatS.css";
import { membersActions, messageActions, userActions } from "../Redux/Redux";
import React, { useEffect } from "react";
import MemberList from "./ChatComponents/MemberList";

const Chat = (props) => {
  const dispatch = useDispatch();
  const usersname = useSelector((state) => state.user.username);
  const input = useSelector((state) => state.message.message);
  const setInactiveUser = () => {
    props.onSubmit();
  };
  const drone = props.drone;
  const room = props.room;
  useEffect(() => {
    drone.on("open", async (error) => {
      if (error) {
        Swal.fire({
          title: "Error connecting!",
          text: "Please try connecting again.",
          icon: "error",
          confirmButtonText: "Back",
          confirmButtonColor: "#2f68b6",
        });
      } else {
        dispatch(userActions.setId(drone.clientId));
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
          icon: "success",
          title: "Connected",
        });
      }
    });

    room.on("open", (error) => {
      if (error) {
        console.log(error);
      }
    });
    room.on("message", (message) => {
      dispatch(messageActions.addMessage(message.data.text));
      dispatch(messageActions.saveLastId(message.clientId));
      dispatch(messageActions.addCurrentMessage(message.data.text));
    });
    room.on("members", function (members) {
      const me = members.find(function (member) {
        return member.id === drone.clientId;
      });
      dispatch(membersActions.currentMember(me));
      dispatch(membersActions.addMembers(members));
    });
    room.on("member_join", function (member) {
      dispatch(membersActions.newMember(true));
      dispatch(membersActions.addMember(member));
      dispatch(membersActions.lastMember(member));
    });
    room.on("member_leave", function (member) {
      dispatch(membersActions.didLeft(true));
      dispatch(membersActions.leftMember(member));
      dispatch(membersActions.removeMember(member));
    });
  }, [dispatch, drone, room]);

  const buttonHandler = (event) => {
    event.preventDefault();
    drone.publish({
      room: "observable-general",
      message: { text: input },
      user: { username: usersname, avatar: {} },
    });
  };
  return (
    <div className={styles.chatContainer}>
      <div className={styles.mainChatSpace}>
        <div className={styles.chatSpace}>
          <Messages drone={drone}></Messages>
          {/* <ul>
            <li> Poruka 1 </li>
            <li> Poruka 1 </li>
            <li> Poruka 1 </li>
            <li> Poruka 1 </li>
          </ul> */}
        </div>
        <div className={styles.chatWrite}>
          <Input drone={drone} onSubmit={buttonHandler}></Input>
        </div>
      </div>
      <div className={styles.chatOnline}>
        <MemberList onSubmit={setInactiveUser} drone={drone} room={room} />
        {/* <ul>
          <li> Alen</li>
          <li> Luka 1 </li>
          <li> Tatjana </li>
          <li> Dalia </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Chat;
