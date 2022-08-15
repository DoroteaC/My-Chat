import { useDispatch } from "react-redux";
import styles from "./Gender.module.css";
import { avatarActions } from "../../Redux/Redux";

const Gender = () => {
  const dispatch = useDispatch();
  const female = require("../../Media/female.png");
  const male = require("../../Media/male.png");
  const genderHandler = (event) => {
    event.preventDefault();
    
    const genderValue = event.target.value;
    dispatch(avatarActions.gender(genderValue));
    console.log(event.target.value);
    
  };
  return (
    <div className={styles.genderForm}>
      <span className={styles.span}>Gender</span>

      <button
        className={styles.chest}
        id="chest"
        value="chest"
        onClick={genderHandler}
      ></button>
      <button
        className={styles.breasts}
        id="breasts"
        value="breasts"
        onClick={genderHandler}
      ></button>
    </div>
  );
};

export default Gender;
