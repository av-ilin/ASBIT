import styles from "./ButtonColor.module.scss";

const ButtonColor = ({ shadow = false, text = "Unknow" }) => {
    console.log(shadow);
    return (
        <button className={styles.button + (shadow ? " shadow" : "")}>
            {text}
        </button>
    );
};

export default ButtonColor;
