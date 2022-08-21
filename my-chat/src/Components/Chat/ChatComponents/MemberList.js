import { BigHead } from "@bigheads/core";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { membersActions,userActions, avatarActions } from "../../Redux/Redux";
import './MemberList.css'
import { AiOutlineLogout } from "react-icons/ai";
const MemberList = (props) => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.allMembers);
const drone = props.drone;
  const membersEndRef = useRef(null);
  const [active,setActive] = useState(false);

  const logoutHandler = (event) => {
    event.preventDefault();
    props.onSubmit();
    dispatch(membersActions.reset());
    dispatch(userActions.reset());
    dispatch(avatarActions.reset());
    // drone.unsubscribe('observable-general');
    drone.close();
    // console.log(activeUser);
  };

  const renderMembers = (member) => {
    if (members.length === 0) {
      return <p>nema aktivnih članova</p>;
    } else {
      return (
        <li className='memberListItem' key={Math.random()}>
          <span className='memberListAvatar'>
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
          <div className='memberListUsername'>
            <div>{member.clientData.username}</div>
          </div>
        </li>
      );
    }
  };

  return (
    <ul className={active ? 'memberList active' : 'memberList'} onMouseEnter={() => setActive(true)}
    onMouseLeave={() => setActive(false)}>
      <li className = 'logoutButton' onClick={logoutHandler}>
        
        <span className='logoutIcon' >
          <AiOutlineLogout style={{ color: "aliceblue"}} />
        </span>
        <span className='logoutTitle'>Logout</span>
        
      </li>
      {members.map((m) => renderMembers(m))}
      <li className="lastLi" ref={membersEndRef}>
        <p></p>
      </li>
    </ul>
  );
};
export default MemberList;
