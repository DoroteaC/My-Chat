import { useSelector } from "react-redux";

const Messages = (props) => {
  const allMessages = useSelector((state) => state.message.allMessages);
  const message = useSelector((state) => state.message.currentMessage);
  const username = useSelector((state) => state.user.username);
  const userColor = useSelector((state) => state.user.userColor);
  const userId = useSelector((state) => state.user.id);
  const renderMessage = (message) => {
    const {text} = message;
    const messageFromMe = message.id === userId;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
    return (
      <li className={className}>
        <span className="avatar" style={{ backgroundColor: userColor }} />
        <div className="Message-content">
          <div className="username">{username}</div>
          <div className="text">{message}</div>
        </div>
      </li>
    );
  };

  return (
    <ul className="Messages-list">
      {allMessages.map((m) => renderMessage(m))}
    </ul>
  );
};
export default Messages;
