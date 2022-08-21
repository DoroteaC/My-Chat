import { BigHead } from "@bigheads/core";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { membersActions } from "../../Redux/Redux";
import styles from './MemberList.module.css';
const MemberList = (props) => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.allMembers);
  
  const membersEndRef = useRef(null);
  const renderMembers = (member) => {
    if (members.length === 0) {
      return <p>nema aktivnih članova</p>
    } else {
      return (
        <li className={styles.memberListItem} key={Math.random()}>
          <span className={styles.memberListAvatar}>
            <BigHead
              className="avatarsvg"
              body={member.clientData.avatar.gender}
              accessory="none"
              circleColor="blue"
              clothing={member.clientData.avatar.clothing}
              clothingColor={member.clientData.avatar.clothingColor}
              eyebrows={member.clientData.avatar.eyebrows}
              eyes={member.clientData.avatar.eyes}
              facialHair={member.clientData.avatar.beard}
              graphic="react"
              hair={member.clientData.avatar.hairStyle}
              hairColor={member.clientData.avatar.hairColor}
              hat="none"
              lashes="false"
              lipColor="red"
              mouth={member.clientData.avatar.mouth}
              skinTone={member.clientData.avatar.skin}
            />
          </span>
          <div className={styles.memberListUsername}>
            <div >{member.clientData.username}</div>
          </div>
        </li>
      );
    }

  };

  return (
    <ul className={styles.memberList}>
      {members.map((m) => renderMembers(m))}
      <li className="lastLi" ref={membersEndRef}>
        <p>Proba</p>
      </li>
    </ul>
  );
};
export default MemberList;
