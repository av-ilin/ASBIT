import styles from "./AboutPay.module.scss";

const AboutPay = () => {
    return (
        <div className={styles.pay}>
            <div className={styles.system}>
                <img src="images/pay/bitcoin.svg" alt="paysystem icon" />
            </div>
            <div className={styles.system}>
                <img src="images/pay/ethereum.svg" alt="paysystem icon" />
            </div>
            <div className={styles.system}>
                <img src="images/pay/tether.svg" alt="paysystem icon" />
            </div>
            <div className={styles.system}>
                <img src="images/pay/tron.svg" alt="paysystem icon" />
            </div>
            <div className={styles.system}>
                <img src="images/pay/payeer.svg" alt="paysystem icon" />
            </div>
            <div className={styles.system}>
                <img src="images/pay/qiwi.svg" alt="paysystem icon" />
            </div>
        </div>
    );
};

export default AboutPay;
