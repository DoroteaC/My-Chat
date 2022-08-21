import { useState } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./Eyebrows.module.css";
import { avatarActions } from "../../Redux/Redux";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
let counter = 0;
const Eyebrows = () => {
  const eyebrowsType = [
    "raised",
    "leftLowered",
    "serious",
    "angry",
    "concerned",
  ];
  const dispatch = useDispatch();
  const [counterBig, setCounterBig] = useState(false);
  const [counterSmall, setCounterSmall] = useState(true);
  const nextHandler = (event) => {
    event.preventDefault();
    if (counter < eyebrowsType.length - 1) {
      if (counter === eyebrowsType.length - 1) {
        setCounterBig(true);
      } else {
        setCounterBig(false);
      }
      counter += 1;
      if (counter > 0) {
        setCounterSmall(false);
      }
      dispatch(avatarActions.eyebrowsType(eyebrowsType[counter]));
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
      if (counter < eyebrowsType.length - 1) {
        setCounterBig(false);
      }
      dispatch(avatarActions.eyebrowsType(eyebrowsType[counter]));
    }
  };

  return (
    <Wrapper>
      <div className={styles.eyebrowsPicker}>
        <button onClick={previousHandler} disabled={counterSmall}>
          <AiOutlineLeft />
        </button>
        <span>Eyebrows</span>
        <button onClick={nextHandler} disabled={counterBig}>
        <AiOutlineRight />
        </button>
      </div>
    </Wrapper>
  );
};

export default Eyebrows;
