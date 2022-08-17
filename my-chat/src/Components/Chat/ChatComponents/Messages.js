import { useRef } from "react";
import { useSelector } from "react-redux";

const Messages = (props) => {
  const allMessages = useSelector((state) => state.message.allMessages);
  const userColor = useSelector((state) => state.user.userColor);
  const userId = useSelector((state) => state.user.id);
  const renderMessage = (message) => {
    const messageFromMe = message.id === userId;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
    return (
      <li className={className} key= {Math.random()} >
        <span className="avatar" style={{ backgroundColor: userColor }} />
        <div className="Message-content">
          <div className="username">{message.username}</div>
          <div className="text">{message.text}</div>
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
