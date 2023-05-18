import styles from "./Nav.module.scss";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Contacts from "./nav-contacts/Contacts";
import Menu from "./nav-menu/Menu";

const Navigation = () => {
    const location = useLocation();
    const valScroll = useSelector((state) => state.scroll);
    const [isHide, setIsHide] = useState(false);

    useEffect(() => {
        if (location.pathname == "/" && valScroll < 20) setIsHide(false);
        else setIsHide(true);
    }, [location, valScroll]);

    return (
        <div className={styles.nav + (isHide ? " " + styles["nav-hide"] : "")}>
            <div className={styles.bg}></div>
            <div className={styles.container}>
                <div
                    className={styles["logo-wrap"]}
                    onClick={() => {
                        window.scrollTo({
                            behavior: "smooth",
                            top: 0,
                            left: 0,
                        });
                    }}
                >
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
                </div>
                <div className={styles.box}>
                    <Contacts isNavHide={isHide} />
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Navigation;
