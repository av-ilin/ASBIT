import styles from "./Home.module.scss";

import Background from "../../ui/background/Background";

const Home = () => {
    return (
        <div className={styles.home}>
            <Background />
            <div className={styles.container}>
                <h1 className={styles.title}>
                    ПЕРЕДОВОЙ КРИПТОДОБЫВАЮЩИЙ СЕРВИС
                </h1>
                <h5 className={styles.subtitle}>
                    Инвестиции в собственный бизнес по добыче цифрового золота.
                </h5>
            </div>
        </div>
    );
};

export default Home;
