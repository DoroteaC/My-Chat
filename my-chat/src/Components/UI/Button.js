import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button className={styles.buttonStyle} type={props.type}>{props.children}</button>
    )
}

export default Button;