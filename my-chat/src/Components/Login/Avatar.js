import { BigHead } from "@bigheads/core";
import { useSelector } from 'react-redux';
// import { useState } from "react";
import styles from "./Avatar.module.css";
import Gender from "./AvatarComponents/Gender";
import HairColor from "./AvatarComponents/HairColor";

const Avatar = () => {
    const gender = useSelector(state => state.gender);
    const hairColor = useSelector(state => state.hairColor);

  return (
    <div className={styles.avatar}>
      <BigHead
        body={gender}
        accessory="none"
        circleColor='blue'
        clothing="tankTop"
    clothingColor="black"
    eyebrows="raised"
    eyes="normal"
    facialHair="none"
    graphic="react"
    hair="short"
    hairColor={hairColor}
    hat="none"
    lashes="false"
    lipColor="purple"
    mouth="openSmile"
    skinTone='light'
      />
      <div className={styles.chooseAvatar}>
      <Gender></Gender>
      <HairColor></HairColor>
       
      </div>
    </div>
  );
};

export default Avatar;
