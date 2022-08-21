import { useState } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./Hair.module.css";
import { avatarActions } from "../../Redux/Redux";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
let counter = 0;
const Hair = () => {
  const hairStyles = [
    "long",
    "bun",
    "short",
    "pixie",
    "balding",
    "buzz",
    "afro",
    "bob",
  ];
  const dispatch = useDispatch();
  const [counterBig, setCounterBig] = useState(false);
  const [counterSmall, setCounterSmall] = useState(true);
  const nextHandler = (event) => {
    event.preventDefault();
    if (counter < hairStyles.length - 1) {
      if (counter === hairStyles.length - 1) {
        setCounterBig(true);
        console.log("limit");
      } else {
        setCounterBig(false);
      }
      counter += 1;
      if (counter > 0) {
        setCounterSmall(false);
      }
      dispatch(avatarActions.hairType(hairStyles[counter]));
    }
  };
  const previousHandler = (event) => {
    event.preventDefault();
    if (counter > 0) {
      if (counter === 0) {
        setCounterSmall(true);
        console.log("limit");
      } else {
        setCounterSmall(false);
      }
      counter -= 1;
      if (counter < hairStyles.length - 1) {
        setCounterBig(false);
      }
      dispatch(avatarActions.hairType(hairStyles[counter]));
    }
  };

  return (
    <Wrapper>
      <div className={styles.hairPicker}>
        <button onClick={previousHandler} disabled={counterSmall}>
          <AiOutlineLeft />
        </button>
        <span>Hair Style</span>
        <button onClick={nextHandler} disabled={counterBig}>
          <AiOutlineRight />
        </button>
      </div>
    </Wrapper>
  );
};

export default Hair;
