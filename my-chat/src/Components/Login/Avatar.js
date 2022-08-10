import { BigHead } from "@bigheads/core";
import { useState } from "react";
import styles from "./Avatar.module.css";

const Avatar = () => {
    // const skin = ['light', 'brown', 'dark',  'black']
const [gender, setGender] = useState('chest');
// const [skinColor, setSkinColor] = useState(skin[0]);
    const genderHandler = (event) =>{
        setGender(event.target.value);
    };
    // const skinHandlerNext = () => {
    //    for(i=0,i<=3,i++){
    //         setSkinColor(i)}
    //     }
    // }
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
    hairColor="black"
    hat="none"
    lashes="false"
    lipColor="purple"
    mouth="openSmile"
    skinTone='light'
      />
      <div className={styles.chooseAvatar}>
        <div>
          <span>Gender</span>
          <form onClick={genderHandler}>
            <input type="radio" id="F" name="gender" value="breasts" />
            <label for="F"><img src="../Media/female.png" alt="female"/></label>
            <input type="radio" id="M" name="gender"  value="chest" />
            <label for="M">Male</label>
          </form>
        </div>
        {/* <div>
          <span>Skin</span>
          <span id='next' onClick={skinHandlerNext}><img src="../Media/right-arrow.png" alt="right arrow"/></span>
        </div>
        <div>
          <span>Hair</span>
        </div>
        <div>
          <span>Hair color</span>
        </div>
        <div>
          <span>Eyes</span>
        </div>
        <div>
          <span>Mouth</span>
        </div> */}
      </div>
    </div>
  );
};

export default Avatar;
