import { useDispatch } from 'react-redux';
import Wrapper from "../../Helpers/Wrapper";
import styles from './HairColor.module.css'

const HairColor = () => {
    const dispatch = useDispatch();

    const hairColorHandler = (event) =>{
        event.preventDefault();
        dispatch({type: 'hairColor',hairColor: event.target.value})

    }
//   const colorHair = [
//     "blonde",
//     "orange",
//     "black",
//     "white",
//     "brown",
//     "blue",
//     "pink",
//   ];
  return (
    <Wrapper>
      <form className={styles.hairColorForm}>
        <p>Hair color</p>
        <button id="blonde" value="blonde" className={styles.blonde} onClick={hairColorHandler}></button>
        <button id="orange" value="orange" className={styles.orange} onClick={hairColorHandler}></button>
        <button id="black" value="black" className={styles.black} onClick={hairColorHandler}></button>
        <button id="white" value="white" className={styles.white} onClick={hairColorHandler}></button>
        <button id="brown" value="brown" className={styles.brown} onClick={hairColorHandler}></button>
        <button id="blue" value="blue" className={styles.blue} onClick={hairColorHandler}></button>
        <button id="pink" value="pink" className={styles.pink} onClick={hairColorHandler}></button>
      </form>
    </Wrapper>
  );
};

export default HairColor;
