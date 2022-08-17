import { useSelector } from "react-redux";
import Button from "../UI/Button";
import Swal from "sweetalert2";
import Messages from "./ChatComponents/Messages";
import Input from "./ChatComponents/Input";
import styles from "./Chat.module.css";

const Chat = (props) => {
  const usersname = useSelector((state) => state.user.username);
  const drone = new window.Scaledrone("fH47iOzfM4qeMFdD");

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
        icon: "succes",
        confirmButtonText: "Ready",
        confirmButtonColor: "#2f68b6",
      });
      console.log("Connected");
    }
  });

  drone.on("disconnect", () => {
    Swal.fire({
      title: "Disconnected.",
      text: "Please try connecting again.",
      icon: "error",
      confirmButtonText: "Back",
      confirmButtonColor: "#2f68b6",
    });
  });
  const buttonHandler = (event) => {
    event.preventDefault();
    console.log(usersname + " pressed send!");
  };
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatGroups}>
        <ul>
          <li>Group 1</li>
          <li>Group 1</li>
          <li>Group 1</li>
        </ul>
      </div>
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
