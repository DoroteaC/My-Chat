import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${styles.cardContainer} ${props.className} rounded-lg`}>
      {props.children}
    </div>
  );
};

export default Card;
