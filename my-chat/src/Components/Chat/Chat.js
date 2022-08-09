import { useSelector, useDispatch } from 'react-redux';

import styles from "./Chat.module.css";

const Chat = (props) => {
  const dispatch = useDispatch();
  const usersname = useSelector(state => state.usersname);
  const buttonHandler = (event) => {
    event.preventDefault();
    console.log(usersname)
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
          <ul>
            <li> Poruka 1 </li>
            <li> Poruka 1 </li>
            <li> Poruka 1 </li>
            <li> Poruka 1 </li>
          </ul>
        </div>
        <div className={styles.chatWrite}>
          <form onSubmit={buttonHandler}>
            <input></input>
            <button>Send</button>
          </form>
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
