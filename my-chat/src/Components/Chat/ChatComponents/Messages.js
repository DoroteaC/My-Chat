import { BigHead } from "@bigheads/core";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../../Redux/Redux";
import "./Messages.css";

const Messages = (message) => {
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);
  const allMessages = useSelector((state) => state.message.allMessages);
  const userId = useSelector((state) => state.user.id);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [message]);
  const renderMessage = (message) => {
    const messageFromMe = message.id === userId;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
    dispatch(messageActions.saveLastId(message.id));
    return (
      <li className={className} key={Math.random()}>
        <span className="avatar">
          {!message.sameSender && (
            <BigHead
              className="avatarsvg"
              body={message.avatar.gender}
              accessory="none"
              circleColor="blue"
              clothing={message.avatar.clothing}
              clothingColor={message.avatar.clothingColor}
              eyebrows={message.avatar.eyebrows}
              eyes={message.avatar.eyes}
              facialHair={message.avatar.beard}
              graphic="react"
              hair={message.avatar.hair}
              hairColor={message.avatar.hairColor}
              hat="none"
              lashes="false"
              lipColor="red"
              mouth={message.avatar.mouth}
              skinTone={message.avatar.skin}
            />
          )}{" "}
        </span>
        <div className="Message-content">
          {!message.sameSender && (
            <div className="username">{message.username}</div>
          )}
          <div className="text" style={{ backgroundColor: message.userColor }}>
            {message.text}
          </div>
        </div>
      </li>
    );
  };

  return (
    <ul className="Messages-list">
      {allMessages.map((m) => renderMessage(m))}
      <li className='lastLi'ref={messagesEndRef}> Proba </li>
    </ul>
  );
};
export default Messages;
