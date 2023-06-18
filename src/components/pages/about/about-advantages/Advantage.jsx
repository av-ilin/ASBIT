import styles from "./AboutAdvantages.module.scss";

const Advantage = ({ name, img, text }) => {
    return (
        <div className={styles.advantage}>
            <div className={styles.icon}>
                <img src={img} alt="icon" />
            </div>
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    );
};

export default Advantage;
