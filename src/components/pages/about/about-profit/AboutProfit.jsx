import styles from "./AboutProfit.module.scss";

const AboutProfit = () => {
    return (
        <div className={styles.profit}>
            <h1>
                Обеспечение <span>доходности</span>
            </h1>
            <div className={styles["feature-wrap"]}>
                <div className={styles.feature}>
                    <div className={styles["feature__head"]}>
                        <img src="images/icon_trade.svg" />
                        <h3>Трейдинг криптовалют</h3>
                    </div>
                    <p>
                        Является основным направлением деятельности компании
                        AS-BIT – это вид торговли, суть которого заключается в
                        заработке на перемене курсов виртуальных монет.
                    </p>
                    <p>
                        <strong>Скальпинг</strong> основная стратегия, по
                        которой работают трейдеры нашей компании. Его также
                        называют моментальной торговлей.
                    </p>
                    <p>
                        <strong>Смысл скальпинга</strong> – в заработке на
                        коротких торговых стратегиях, которая подходит для самых
                        “переменчивых” монет.
                    </p>
                    <p>
                        <strong>Главная задача скальперов</strong> – совершить
                        максимально возможное количество краткосрочных сделок в
                        течение торгового дня, чтобы в сумме получить значимый
                        доход.
                    </p>
                </div>
                <div className={styles.feature}>
                    <div className={styles["feature__head"]}>
                        <img src="images/icon_mine.svg" />
                        <h3>Майнинг</h3>
                    </div>
                    <p>
                        <strong>
                            Вкладывая в добычу биткоина вы зарабатываете на
                            добыче цифрового золота.
                        </strong>
                    </p>
                    <p>
                        Это круче, чем добывать нефть или газ, поскольку майнинг
                        приносит солидный пассивный доход, обеспечивая при этом
                        мобильность по всему миру.
                    </p>
                    <p>
                        <strong>
                            Bitcoin самая дорогая монета на планете земля.
                        </strong>
                    </p>
                    <p>
                        Мы предлагаем возможность ощутить преимущества добычи
                        криптоактивов, инвестируя в Майнинг. Вы исследуете
                        прибыльный мир майнинга криптовалют, получите прибыль,
                        внося свой вклад в рост экосистемы цифровых активов.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutProfit;
