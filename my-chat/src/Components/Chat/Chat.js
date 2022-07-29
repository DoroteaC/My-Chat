import styles from './Chat.module.css';

const Chat = (props) => {
const buttonHandler = (event)=> {
  event.preventDefault();
}
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
        <ul></ul>
      </div>
    </div>
  );
};

export default Chat;
