import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import Button from "./Button";

const Header = (props) => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.isActive);
  const BluWhite1 = require("../Media/Blu/1x/1x/BluWhite1.png");
  const logoutHandler = (event) => {
    event.preventDefault();

    dispatch({ type: "active", isActive: 0 });
    props.onSubmit();
    dispatch({ type: "user", username: "" });
    console.log(activeUser);
  };
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={BluWhite1} alt="Blu" />
        <h1>blu blu</h1>
      </div>
      <div>
        {activeUser === 1 && (
          <Button className={styles.button} onClick={logoutHandler}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
