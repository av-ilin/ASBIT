import styles from "./SimpleStart.module.scss";

const SimpleStart = () => {
    return (
        <div>
            <h2 className={styles.title}>
                Мы <span>сделали крипозаработок простым</span> как никогда!
            </h2>
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles["item__num"]}>1</div>
                    <p>Специальные знания о криптовалютах Вам не потребуются</p>
                </div>
                <div className={styles.item}>
                    <div className={styles["item__num"]}>2</div>
                    <p>
                        Потратить несколько минут в день для получения прибыли
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles["item__num"]}>3</div>
                    <p>
                        Вы работаете только в Telegram боте из любой точки Мира
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SimpleStart;
