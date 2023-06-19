import styles from "./Nav.module.scss";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Contacts from "./nav-contacts/Contacts";
import Menu from "./nav-menu/Menu";
import Burger from "./nav-burger/Burger";

const Navigation = () => {
    const location = useLocation();
    const windowScroll = useSelector((state) => state.scroll);
    const window_w = useSelector((state) => state.window_w);
    const [isBurger, setIsBurger] = useState(false);

    useEffect(() => {
        if (location.pathname == "/" && windowScroll < 20 && window_w > 1024)
            setIsBurger(false);
        else setIsBurger(true);
    }, [location, windowScroll, window_w]);

    return (
        <div
            className={styles.nav + (isBurger ? " " + styles["nav-hide"] : "")}
            style={{
                background: windowScroll < 20 ? "transparent" : "",
            }}
        >
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
                <div
                    className={
                        styles.box +
                        (isBurger ? " " + styles["box-burger"] : "")
                    }
                >
                    <Contacts isBurger={isBurger} />
                    {isBurger ? <Burger /> : <Menu />}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
