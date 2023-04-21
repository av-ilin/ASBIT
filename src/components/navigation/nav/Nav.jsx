import styles from "./Nav.module.scss";

import { Link } from "react-router-dom";

import Contacts from "./nav-contacts/Contacts";
import Menu from "./nav-menu/Menu";

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.container}>
                <Link className={styles["logo-wrap"]} to="/">
                    <img
                        className={styles["logo"]}
                        src="images/logo.svg"
                        alt=""
                    />
                    <img
                        className={styles["logo-hover"]}
                        src="images/logo-hover.svg"
                        alt=""
                    />
                </Link>
                <div className={styles.box}>
                    <Contacts />
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Navigation;
