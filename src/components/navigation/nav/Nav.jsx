import styles from "./Nav.module.scss";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Contacts from "./nav-contacts/Contacts";
import Menu from "./nav-menu/Menu";

const Navigation = () => {
    const [isNavScroll, setIsNavScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            console.log("scroll");
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className={styles.nav}>
            {isNavScroll && <div className={styles.bg}></div>}
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
