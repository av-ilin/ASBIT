import styles from "./ButtonColor.module.scss";

const ButtonColor = ({
    shadow = false,
    text = "Unknown",
    width = 223,
    height = 58,
}) => {
    return (
        <button
            className={shadow ? styles["button-shadow"] : styles.button}
            style={{
                width,
                height,
            }}
        >
            {text}
        </button>
    );
};

export default ButtonColor;
