import { useState } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./Mouth.module.css";
import { avatarActions } from "../../Redux/Redux";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
let counter = 0;
const Mouth = () => {
  const mouthType = [
    "grin",
    "sad",
    "openSmile",
    "lips",
    "open",
    "serious",
    "tongue",
  ];
  const dispatch = useDispatch();
  const [counterBig, setCounterBig] = useState(false);
  const [counterSmall, setCounterSmall] = useState(true);
  const nextHandler = (event) => {
    event.preventDefault();
    if (counter < mouthType.length - 1) {
      if (counter === mouthType.length - 1) {
        setCounterBig(true);
      } else {
        setCounterBig(false);
      }
      counter += 1;
      if (counter > 0) {
        setCounterSmall(false);
      }
      dispatch(avatarActions.mouthType(mouthType[counter]));
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
      if (counter < mouthType.length - 1) {
        setCounterBig(false);
      }
      dispatch(avatarActions.mouthType(mouthType[counter]));
    }
  };

  return (
    <Wrapper>
      <div className={styles.mouthPicker}>
        <button onClick={previousHandler} disabled={counterSmall}>
          <AiOutlineLeft />
        </button>
        <span>Mouth</span>
        <button onClick={nextHandler} disabled={counterBig}>
          <AiOutlineRight />
        </button>
      </div>
    </Wrapper>
  );
};

export default Mouth;
