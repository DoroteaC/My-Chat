import { useState } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./Clothing.module.css";
import { avatarActions } from "../../Redux/Redux";
import { AiOutlineRight, AiOutlineLeft} from "react-icons/ai";
let counter = 0;
const Skin = () => {
  const clothingType = [
    'shirt',  'naked', 'dressShirt', 'vneck', 'tankTop', 'dress'
  ];
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
      dispatch(avatarActions.clothingType(clothingType[counter]));
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
      dispatch(avatarActions.clothingType(clothingType[counter]));
    }
  };

  return (
    <Wrapper>
      <div className={styles.clothingPicker}>
        <button onClick={previousHandler} disabled={counterSmall}>
        <AiOutlineLeft/>
        </button>
        <span>Clothing</span>
        <button onClick={nextHandler} disabled={counterBig}>
        <AiOutlineRight/>
        </button>
      </div>
    </Wrapper>
  );
};

export default Skin;
