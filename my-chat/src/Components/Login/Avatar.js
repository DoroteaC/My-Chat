import { BigHead } from "@bigheads/core";
import { useSelector } from "react-redux";
// import { useState } from "react";
import styles from "./Avatar.module.css";
import Gender from "./AvatarComponents/Gender";
import HairColor from "./AvatarComponents/HairColor";
import Hair from "./AvatarComponents/Hair";
import Eyes from "./AvatarComponents/Eyes";
import Eyebrows from "./AvatarComponents/Eyebrows";
import Mouth from "./AvatarComponents/Mouth";
import Skin from "./AvatarComponents/Skin";
import Beard from "./AvatarComponents/Beard";
import ClothingColor from "./AvatarComponents/ClothingColor";
import Clothing from "./AvatarComponents/Clothing";

const Avatar = () => {
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


  return (
        <div className={styles.avatar}>
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
          <div className={styles.chooseAvatar}>
            <Gender></Gender>
            <HairColor></HairColor>
            <Skin></Skin>
            <Hair></Hair>
            <Eyebrows></Eyebrows>
            <Eyes></Eyes>
            <Beard></Beard>
            <Mouth></Mouth>
            <Clothing></Clothing>
            <ClothingColor></ClothingColor>
          </div>
      </div>
  );
};

export default Avatar;
