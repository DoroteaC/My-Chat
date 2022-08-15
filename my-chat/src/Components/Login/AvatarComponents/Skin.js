import { useState } from "react";
import { useDispatch} from "react-redux";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./Skin.module.css";
import {avatarActions} from '../../Redux/Redux'
let counter = 0;
const Skin = () => {
   
  const skinType = [
    'light', 'yellow', 'brown', 'dark', 'red', 'black'
  ];
  const arrowNext = require("../../Media/right-arrow.png");
  const arrowPrev = require("../../Media/left-arrow.png");
  const dispatch = useDispatch();
  const [counterBig, setCounterBig] = useState(false);
  const [counterSmall, setCounterSmall] = useState(true);
 
  const nextHandler = (event) => {
    
    event.preventDefault();
        if (counter < skinType.length - 1) {
            if (counter === skinType.length - 1) {
              setCounterBig(true);
            } else {
              setCounterBig(false);
            }
            counter += 1;
            if (counter > 0) {
              setCounterSmall(false);
            }
            console.log(counter);
            console.log(skinType[counter]);
            dispatch(avatarActions.skinType(skinType[counter]));
          }
        
  };
  const previousHandler = (event) => {
    event.preventDefault();
    if (counter > 0) {
      if (counter === 0) {
        setCounterSmall(true);
      } else {
        setCounterSmall(false);
      }
      counter -= 1;
      if (counter < skinType.length - 1) {
        setCounterBig(false);
      }
      console.log(counter);
      console.log(skinType[counter]);
      dispatch(avatarActions.skinType(skinType[counter]));
    }
  };

  return (
    <Wrapper>
      <div className={styles.skinPicker}>
        <button onClick={previousHandler} disabled={counterSmall}>
          <img src={arrowPrev} alt="" />
        </button>
        <span>Skin</span>
        <button onClick={nextHandler} disabled={counterBig}>
          <img src={arrowNext} alt="" />
        </button>
      </div>
    </Wrapper>
  );
};

export default Skin;
