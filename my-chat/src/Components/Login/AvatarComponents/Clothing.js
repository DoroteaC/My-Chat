import { useState } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./Clothing.module.css";
let counter = 0;
const Skin = () => {
  const clothingType = [
    'shirt',  'naked', 'dressShirt', 'vneck', 'tankTop', 'dress'
  ];
  const arrowNext = require("../../Media/right-arrow.png");
  const arrowPrev = require("../../Media/left-arrow.png");
  const dispatch = useDispatch();
  const [counterBig, setCounterBig] = useState(false);
  const [counterSmall, setCounterSmall] = useState(true);
  const nextHandler = (event) => {
    event.preventDefault();
    if (counter < clothingType.length - 1) {
      if (counter === clothingType.length - 1) {
        setCounterBig(true);
      } else {
        setCounterBig(false);
      }
      counter += 1;
      if (counter > 0) {
        setCounterSmall(false);
      }
      console.log(counter);
      console.log(clothingType[counter]);
      dispatch({ type: "clothingType", clothing: clothingType[counter] });
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
      if (counter < clothingType.length - 1) {
        setCounterBig(false);
      }
      console.log(counter);
      console.log(clothingType[counter]);
      dispatch({ type: "clothingType", clothing: clothingType[counter] });
    }
  };

  return (
    <Wrapper>
      <div className={styles.clothingPicker}>
        <button onClick={previousHandler} disabled={counterSmall}>
          <img src={arrowPrev} alt="" />
        </button>
        <span>Clothing</span>
        <button onClick={nextHandler} disabled={counterBig}>
          <img src={arrowNext} alt="" />
        </button>
      </div>
    </Wrapper>
  );
};

export default Skin;