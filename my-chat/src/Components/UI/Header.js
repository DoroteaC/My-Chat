import styles from './Header.module.css';
import Button from './Button';

const Header = () => {
    const BluWhite1 = require('../Media/Blu/1x/1x/BluWhite1.png');
    return (
        <div className={styles.header}>
            <img src={BluWhite1} alt="Blu" />
            <h1>blu blu</h1>
           
        </div>
    )
}

export default Header;