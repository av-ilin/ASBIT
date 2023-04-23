import styles from "./Home.module.scss";

import Background from "../../ui/background/Background";
import ButtonColor from "../../ui/button-color/ButtonColor";
import Plans from "./plans/Plans";

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
                <ButtonColor text="Зарегестрироватся" shadow />
            </div>
            <div
                className="container"
                style={{
                    marginBottom: "50vh",
                }}
            >
                <Plans />
            </div>
        </div>
    );
};

export default Home;
