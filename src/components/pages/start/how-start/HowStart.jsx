import styles from "./HowStart.module.scss";

const HowStart = () => {
    return (
        <div className={styles.how}>
            <div className={styles.inner}>
                <h1>Как начать работу?</h1>
                <p>Всего три простых шага</p>
                <div className={styles.how__list}>
                    <div className={styles["how__list-item"]}>
                        <h3>1.</h3>
                        <p>
                            Пройти быструю регистрацию, авторизовавшись в{" "}
                            <a href="https://t.me/asbit_robot" target="_blank">
                                https://t.me/asbit_robot
                            </a>
                        </p>
                    </div>
                    <div className={styles["how__list-item"]}>
                        <h3>2.</h3>
                        <p>
                            Пополнить инвестиционный счет c помощью банковской
                            карты, usdt, btc или qiwi
                        </p>
                    </div>
                    <div className={styles["how__list-item"]}>
                        <h3>3.</h3>
                        <p>
                            Получать ежедневный доход, управлять депозитом в
                            Telegram боте и выводить прибыль
                        </p>
                    </div>
                </div>
            </div>
            <img src="images/start_iphone-bcoin.png" alt="" />
        </div>
    );
};

export default HowStart;
