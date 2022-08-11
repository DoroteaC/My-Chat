import { useState } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./Eyes.module.css";
let counter = 0;
const Eyes =() =>{
    const eyesType = ['normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'heart'];
    const arrowNext = require("../../Media/right-arrow.png");
  const arrowPrev = require("../../Media/left-arrow.png");
  const dispatch = useDispatch();
  const [counterBig, setCounterBig] = useState(false);
  const [counterSmall, setCounterSmall] = useState(true);
  const nextHandler = (event) => {
    event.preventDefault();
    if (counter < eyesType.length - 1) {
      if (counter === eyesType.length - 1) {
        setCounterBig(true);
      } else {
        setCounterBig(false);
      }
      counter += 1;
      if (counter > 0) {
        setCounterSmall(false);
      }
      console.log(counter);
      console.log(eyesType[counter]);
      dispatch({ type: "eyesType", eyes: eyesType[counter] });
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
      if (counter < eyesType.length - 1) {
        setCounterBig(false);
      }
      console.log(counter);
      console.log(eyesType[counter]);
      dispatch({ type: "eyesType", eyes: eyesType[counter] });
    }
  };

  return (
    <Wrapper>
      <div className={styles.eyesPicker}>
        <button onClick={previousHandler} disabled={counterSmall}>
          <img src={arrowPrev} alt="" />
        </button>
        <span>Eyes</span>
        <button onClick={nextHandler} disabled={counterBig}>
          <img src={arrowNext} alt="" />
        </button>
      </div>
    </Wrapper>
  );
};

export default Eyes;