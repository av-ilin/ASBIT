import styles from "./Nav.module.scss";

import Contacts from "./nav-contacts/Contacts";
import Menu from "./nav-menu/Menu";

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.container}>
                <img src="images/logo.svg" alt="" />
                <div className={styles.box}>
                    <Contacts />
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Navigation;
