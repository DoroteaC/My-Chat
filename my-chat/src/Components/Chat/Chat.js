import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Messages from "./ChatComponents/Messages";
import Input from "./ChatComponents/Input";
import styles from "./Chat.module.css";
import { messageActions } from "../Redux/Redux";

const Chat = (props) => {
  const dispatch = useDispatch();
  const usersname = useSelector((state) => state.user.username);
  const input = useSelector((state) => state.message.message);
  const messages = useSelector((state) => state.message.allMessages);
const drone = props.drone;
  
  drone.on("open", (error) => {
    if (error) {
      Swal.fire({
        title: "Error connecting!",
        text: "Please try connecting again.",
        icon: "error",
        confirmButtonText: "Back",
        confirmButtonColor: "#2f68b6",
      });
    } else {
      Swal.fire({
        title: "Connected",
        text: "You are connected, ready to start chatting?",
        icon: "success",
        confirmButtonText: "Ready",
        confirmButtonColor: "#2f68b6",
      });
      console.log("Connected");
    }
  });

  const room = drone.subscribe("general");

  room.on("open", (error) => {
    if (error) {
       console.log(error);
    } else {
      console.log('joined room')
    }
  });

  room.on("message", (message) => {
    console.log(message);
    dispatch(messageActions.addMessage(message.data.text))
    dispatch(messageActions.addCurrentMessage(message.data.text))
    console.log(messages);
    ;
  });

  const buttonHandler = (event) => {
    event.preventDefault();
    console.log(usersname + " pressed send!");
    drone.publish({
      room: "general",
      message: { text: input },
      user: {username: usersname, avatar : {}}
    }
    )
    
    
}
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
        <ul>
          <li> Alen</li>
          <li> Luka 1 </li>
          <li> Tatjana </li>
          <li> Dalia </li>
        </ul>
      </div>
    </div>
  );
};

export default Chat;
