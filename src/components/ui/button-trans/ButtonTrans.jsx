import styles from "./ButtonTrans.module.scss";

const ButtonTrans = ({ text = "Unknown", width = 206, height = 46 }) => {
    return (
        <button
            className={styles.button}
            style={{
                width,
                height,
            }}
        >
            {text}
        </button>
    );
};

export default ButtonTrans;
