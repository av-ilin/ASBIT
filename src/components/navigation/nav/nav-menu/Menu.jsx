import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
import ButtonColor from "../../../ui/button-color/ButtonColor";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <Link className={styles.item} to="/">
                Главная
            </Link>
            <Link className={styles.item} to="/start">
                Начать
            </Link>
            <Link className={styles.item} to="/about">
                О нас
            </Link>
            <Link className={styles.item} to="/faq">
                FAQ & Rules
            </Link>
            <ButtonColor text="Перейти в бот" width={171} height={46} />
        </div>
    );
};

export default Menu;
