import { useState } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./Beard.module.css";
import { avatarActions } from "../../Redux/Redux";
import { AiOutlineRight, AiOutlineLeft} from "react-icons/ai";
let counter = 0;
const Beard = () => {
  const beardType = [
    'none', 'stubble', 'mediumBeard'
  ];
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
      dispatch(avatarActions.beardType(beardType[counter]));
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
      dispatch(avatarActions.beardType(beardType[counter]));
    }
  };

  return (
    <Wrapper>
      <div className={styles.beardPicker}>
        <button onClick={previousHandler} disabled={counterSmall}>
        <AiOutlineLeft/>
        </button>
        <span>Beard</span>
        <button onClick={nextHandler} disabled={counterBig}>
        <AiOutlineRight/>
        </button>
      </div>
    </Wrapper>
  );
};

export default Beard;
