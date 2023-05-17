import styles from "./PlansItem.module.scss";

const PlansItem = ({
    percent = 1,
    days = 100,
    description = "от 10 до 3 000$ - тело депозита замораживается на 100 дней.",
    fine = [30, 20, 10],
}) => {
    return (
        <div className={styles.item}>
            <div
                className={
                    styles["item__side"] + " " + styles["item__side--front"]
                }
            >
                <img src="images/home_plan-item.png" alt="" />
                <h5>{percent}%</h5>
                <h6>на {days} дней</h6>
                <p>{description}</p>
            </div>
            <div
                className={
                    styles["item__side"] + " " + styles["item__side--back"]
                }
            >
                <img src="images/icon__info.png" alt="" />
                <p>
                    Вывод депозита 1-30 дней - <b>штраф {fine[0]}%</b>
                </p>
                <p>
                    Вывод депозита 31-70 дней - <b>штраф {fine[1]}%</b>
                </p>
                <p>
                    Вывод депозита 71-100 дней - <b>штраф {fine[2]}%</b>
                </p>
            </div>
        </div>
    );
};

export default PlansItem;
