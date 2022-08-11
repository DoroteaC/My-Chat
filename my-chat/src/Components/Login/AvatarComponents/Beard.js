import { useState } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./Beard.module.css";
let counter = 0;
const Beard = () => {
  const beardType = [
    'none', 'stubble', 'mediumBeard'
  ];
  const arrowNext = require("../../Media/right-arrow.png");
  const arrowPrev = require("../../Media/left-arrow.png");
  const dispatch = useDispatch();
  const [counterBig, setCounterBig] = useState(false);
  const [counterSmall, setCounterSmall] = useState(true);
  const nextHandler = (event) => {
    event.preventDefault();
    if (counter < beardType.length - 1) {
      if (counter === beardType.length - 1) {
        setCounterBig(true);
      } else {
        setCounterBig(false);
      }
      counter += 1;
      if (counter > 0) {
        setCounterSmall(false);
      }
      console.log(counter);
      console.log(beardType[counter]);
      dispatch({ type: "beardType", beard: beardType[counter] });
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
      if (counter < beardType.length - 1) {
        setCounterBig(false);
      }
      console.log(counter);
      console.log(beardType[counter]);
      dispatch({ type: "beardType", beard: beardType[counter] });
    }
  };

  return (
    <Wrapper>
      <div className={styles.beardPicker}>
        <button onClick={previousHandler} disabled={counterSmall}>
          <img src={arrowPrev} alt="" />
        </button>
        <span>Beard</span>
        <button onClick={nextHandler} disabled={counterBig}>
          <img src={arrowNext} alt="" />
        </button>
      </div>
    </Wrapper>
  );
};

export default Beard;