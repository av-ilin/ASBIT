import styles from "./RefStart.module.scss";

import ButtonTrans from "./../../../ui/button-trans/ButtonTrans";

const RefStart = () => {
    return (
        <div className={styles.partners}>
            <div className={styles.info}>
                <h2>приглашай партнеров и зарабатывай вместе с нами</h2>
                <p>
                    Нашим партнерам мы предоставляем щедрое реферальное
                    вознаграждение, имеющее три уровня в глубину.
                </p>
                <ButtonTrans text="Узнать подробнее" />
            </div>
            <img src="images/start_partners.png" alt="" />
        </div>
    );
};

export default RefStart;
