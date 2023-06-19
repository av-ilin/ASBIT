import styles from "./Burger.module.scss";
import { Link } from "react-router-dom";
import ButtonColor from "../../../ui/button-color/ButtonColor";

import { useState } from "react";

const Burger = () => {
    const [isBarActive, setIsBarActive] = useState(false);

    return (
        <div className={styles["burger-wrap"]}>
            <ButtonColor text="Перейти в бот" width={171} height={46} />
            <div className={styles.burger} onClick={() => setIsBarActive(true)}>
                <div />
                <div />
                <div />
            </div>
            <div
                className={
                    styles.bar +
                    (isBarActive ? " " + styles["bar--active"] : "")
                }
            >
                <div
                    className={styles.exit}
                    onClick={() => setIsBarActive(false)}
                >
                    <div />
                    <div />
                </div>
                <Link
                    className={styles.item}
                    to="/"
                    onClick={() => setIsBarActive(false)}
                >
                    Главная
                </Link>
                <Link
                    className={styles.item}
                    to="/start"
                    onClick={() => setIsBarActive(false)}
                >
                    Начать
                </Link>
                <Link
                    className={styles.item}
                    to="/about"
                    onClick={() => setIsBarActive(false)}
                >
                    О нас
                </Link>
                <Link
                    className={styles.item}
                    to="/faq"
                    onClick={() => setIsBarActive(false)}
                >
                    FAQ & Rules
                </Link>
            </div>
        </div>
    );
};

export default Burger;
