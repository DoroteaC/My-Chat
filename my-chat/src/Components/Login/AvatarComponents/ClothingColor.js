import { useDispatch } from "react-redux";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./ClothingColor.module.css";

const ClothingColor = () => {
  const dispatch = useDispatch();

  const clothingColorHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "clothingColor",
      clothingColor: event.target.value,
    });
    console.log(event.target.value);
  };
  //   const clothingColor = [
  //    'white', 'blue', 'black', 'green', 'red'
  //   ];
  return (
    <Wrapper>
      <form className={styles.clothingColorForm}>
        <p>Clothing color</p>
       
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
      </form>
    </Wrapper>
  );
};

export default ClothingColor;
