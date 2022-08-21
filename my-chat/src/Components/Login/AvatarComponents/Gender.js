import { useDispatch } from "react-redux";
import styles from "./Gender.module.css";
import { avatarActions } from "../../Redux/Redux";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

const Gender = () => {
  const dispatch = useDispatch();
  const genderHandler = (event) => {
    event.preventDefault();
    const genderValue = event.target.value;
    dispatch(avatarActions.gender(genderValue));
    // console.log(genderValue)
  };
  return (
    <div className={styles.genderForm}>
      <span className={styles.span}>Gender</span>
      <div>
        <button
          className={styles.chest}
          id="chest"
          value="chest"
          onClick={genderHandler}
        >
          <BsGenderMale style={{ color: "#05D6D9" }} />
        </button>
        <button
          className={styles.breasts}
          id="breasts"
          value="breasts"
          onClick={genderHandler}
        >
          <BsGenderFemale style={{ color: "#B91372" }} />
        </button>
      </div>
    </div>
  );
};

export default Gender;
