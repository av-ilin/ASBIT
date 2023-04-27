import styles from "./Nav.module.scss";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Contacts from "./nav-contacts/Contacts";
import Menu from "./nav-menu/Menu";

const Navigation = () => {
    const [isNavScroll, setIsNavScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 20) setIsNavScroll(true);
            else setIsNavScroll(false);
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div
            className={
                styles.nav + (isNavScroll ? " " + styles["nav-scroll"] : "")
            }
        >
            <div className={styles.bg}></div>
            <div className={styles.container}>
                <Link className={styles["logo-wrap"]} to="/">
                    <img
                        className={styles["logo"]}
                        src="images/logo.svg"
                        alt="logo"
                    />
                    <img
                        className={styles["logo-hover"]}
                        src="images/logo-hover.svg"
                        alt="logo"
                    />
                </Link>
                <div className={styles.box}>
                    <Contacts isNavScroll={isNavScroll} />
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Navigation;
