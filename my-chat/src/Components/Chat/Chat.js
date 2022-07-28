import styles from './chat.module.css';

const Chat = (props) => {
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
            <form>
                <input></input>
                <button></button>
            </form>
        </div>
      </div>
      <div className={styles.chatOnline}>
        <ul></ul>
      </div>
    </div>
  );
};

export default Chat;
