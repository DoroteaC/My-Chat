import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import Button from "./Button";
import { avatarActions, messageActions, userActions } from "../Redux/Redux";
import Wrapper from "../Helpers/Wrapper";
import { BigHead } from "@bigheads/core";
import { AiOutlineLogout } from "react-icons/ai";

const Header = (props) => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.user.isActive);
  const username = useSelector((state) => state.user.username);
  const BluWhite1 = require("../Media/Blu/1x/1x/BluWhite1.png");
  const gender = useSelector((state) => state.avatar.gender);
  const hairColor = useSelector((state) => state.avatar.hairColor);
  const hairStyle = useSelector((state) => state.avatar.hairStyle);
  const eyesStyle = useSelector((state) => state.avatar.eyes);
  const eyebrows = useSelector((state) => state.avatar.eyebrows);
  const mouth = useSelector((state) => state.avatar.mouth);
  const skin = useSelector((state) => state.avatar.skin);
  const beard = useSelector((state) => state.avatar.beard);
  const clothing = useSelector((state) => state.avatar.clothing);
  const clothingColor = useSelector((state) => state.avatar.clothingColor);
  const drone = props.drone;
  const logoutHandler = (event) => {
    
    props.onSubmit();
    dispatch(userActions.reset());
    dispatch(avatarActions.reset());
    drone.unsubscribe('general');
    drone.close(console.log('disconected'));
    
    // console.log(activeUser);
  };
  const resetMessages = () => {
    dispatch(messageActions.reset())
  }
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={BluWhite1} alt="Blu" />
        <h1>blu blu</h1>
      </div>
      <div className={styles.headerAvatar}>
        {activeUser === 1 && (<Wrapper>
          <h3>Welcome {username} </h3>
          <BigHead className={styles.svg}
          body={gender}
          accessory="none"
          circleColor="blue"
          clothing={clothing}
          clothingColor={clothingColor}
          eyebrows={eyebrows}
          eyes={eyesStyle}
          facialHair={beard}
          graphic="react"
          hair={hairStyle}
          hairColor={hairColor}
          hat="none"
          lashes="false"
          lipColor="red"
          mouth={mouth}
          skinTone={skin}
        />
          <Button className={styles.button} onClick={logoutHandler}>
           <AiOutlineLogout style={{ color: 'white' }} /> Logout
          </Button>
          <Button className={styles.button} onClick={resetMessages}>
            Reset 
          </Button>
        </Wrapper>
          
        )}
      </div>
    </div>
  );
};

export default Header;
