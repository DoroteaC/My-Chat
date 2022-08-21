import { BigHead } from "@bigheads/core";
import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../../Redux/Redux";
import "./Messages.css";

const Messages = (props, message) => {
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);
  const allMessages = useSelector((state) => state.message.allMessages);
  const userId = useSelector((state) => state.user.id);
  const lastMember = useSelector((state) => state.members.lastMember);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [showElement,setShowElement] = useState(false);
  useEffect(() => {
    if (props.newMember) {
      setShowElement(true)}else {
      setTimeout(function () {
        setShowElement(false)
      }, 1000);
    }
  }, []);


  useEffect(() => {
    scrollToBottom();
  }, [message]);
  const renderMessage = (message, isSameSender) => {
    let gender = message.avatar.gender;
    const messageFromMe = message.id === userId;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
    if (gender === undefined) { gender = 'chest' };
    return (
      <li className={className} key={Math.random()}>
        <span className="avatar">
          {!isSameSender && (
            <BigHead
              className="avatarsvg"
              body={gender}
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
          {!isSameSender && (
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
      {allMessages.map((m, index) => {
        let isSameSender = false;
        if(index > 0){
          let previousMessage = allMessages[index-1];
          if(previousMessage.clientId == m.clientId){
            isSameSender = true;
          }
        }
        return renderMessage(m, isSameSender);
      })}
      <li className='lastLi' ref={messagesEndRef}> {showElement&& <p> {lastMember.clientData.username} just joined</p>}</li>
    </ul>
  );
};
export default Messages;
