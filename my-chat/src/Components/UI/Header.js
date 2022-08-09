
import { useDispatch } from 'react-redux';
import styles from './Header.module.css';
import Button from './Button';


const Header = (props) => {
    const dispatch = useDispatch();
    const BluWhite1 = require('../Media/Blu/1x/1x/BluWhite1.png');
    const logoutHandler = (event) => {
        event.preventDefault();
        dispatch({type: 'user', username: ''})
        props.onSubmit();
    }
    return (
        <div className={styles.header}>
            <img src={BluWhite1} alt="Blu" />
            <h1>blu blu</h1>
           <div><Button onClick={logoutHandler}>Logout</Button></div>
        </div>
    )
}

export default Header;