import { useDispatch } from "react-redux";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./ClothingColor.module.css";
import { avatarActions } from "../../Redux/Redux";

const ClothingColor = () => {
  const dispatch = useDispatch();
  const clothingColorHandler = (event) => {
    event.preventDefault();
    const color = event.target.value;
    dispatch(avatarActions.clothingColor(color));
    // console.log(event.target.value);
  };
  return (
    <Wrapper>
      <div className={styles.clothingColorForm}>
        <p>Clothing color</p>
        <div>
          <button
            id="black"
            value="black"
            className={styles.black}
            onClick={clothingColorHandler}
          ></button>
          <button
            id="white"
            value="white"
            className={styles.white}
            onClick={clothingColorHandler}
          ></button>
          <button
            id="blue"
            value="blue"
            className={styles.blue}
            onClick={clothingColorHandler}
          ></button>
          <button
            id="green"
            value="green"
            className={styles.green}
            onClick={clothingColorHandler}
          ></button>
          <button
            id="red"
            value="red"
            className={styles.red}
            onClick={clothingColorHandler}
          ></button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ClothingColor;
