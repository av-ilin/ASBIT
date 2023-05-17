import styles from "./Activity.module.scss";

const Activity = () => {
    return (
        <div className={styles.activity}>
            <div className={styles.inner}>
                <img src="images/home_activity-phone.png" alt="" />
                <div className={styles.description}>
                    <div className={styles.text}>
                        <h2>Деятельность компании</h2>
                        <p>
                            AS-BIT invest ведущая платформа для инвестирования в
                            криптовалюту и ее добычу.
                        </p>
                        <p>
                            Отдельная экосистема объединяющая самые актуальные
                            направления инвестирования в криптоиндустрии:
                        </p>
                    </div>
                    <div className={styles.list}>
                        <div>
                            <img
                                src="images/home_activity-trade.svg"
                                alt="trade icon"
                            />
                            <p>
                                <b>Трейдинг</b> - скальпинг криптовалют с
                                использованием автоматизированных роботов.
                            </p>
                        </div>
                        <div>
                            <img
                                src="images/home_activity-mine.svg"
                                alt="mine icon"
                            />
                            <p>
                                <b>Майнинг</b> - добыча Bitcoin с помощью asic в
                                оборудованных дата центрах
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;
