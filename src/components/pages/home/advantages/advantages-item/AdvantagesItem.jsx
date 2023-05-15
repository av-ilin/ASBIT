import styles from "./AdvantagesItem.module.scss";

const AdvantagesItem = ({
    name = "Unknown",
    description = "Some advantage",
} = {}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <img
                    className={styles.check}
                    src="images/icon_check.png"
                    alt="check icon"
                />
                <div className={styles.text}>
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AdvantagesItem;
