
import { useDispatch } from 'react-redux';

import styles from './Gender.module.css';

const Gender = () =>{
    const dispatch = useDispatch();
    const  female = require("../../Media/female.png");
    const  male = require("../../Media/male.png");
    const genderHandler = (event) =>{
        dispatch({type: 'gender', gender: event.target.value});
    };
return (<div>
<span className={styles.span}>Gender</span>
<form className={styles.genderForm} onClick={genderHandler}>
  <input type="radio" id="F" name="gender" value="breasts"/>
  <label for="F"><img src={female} alt="female"/></label>
  <input type="radio" id="M" name="gender" value="chest"/>
  <label for="M"><img src={male} alt="male"/></label>
</form>
</div>)}

export default Gender