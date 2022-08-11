import { useDispatch } from "react-redux";
import styles from "./Gender.module.css";

const Gender = () => {
  const dispatch = useDispatch();
  const female = require("../../Media/female.png");
  const male = require("../../Media/male.png");
  const genderHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    dispatch({
      type: "gender",
      gender: event.target.value,
    });
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
