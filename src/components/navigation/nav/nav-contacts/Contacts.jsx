import styles from "./Contacts.module.scss";

const Contacts = ({ isBurger = false }) => {
    return (
        <div className={styles.contacts}>
            <div className={styles.social}>
                <a target="_blank" href="https://vk.com/">
                    <img src="images/social/VK.svg" alt="vk logo" />
                </a>
                <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=Q-ejz2RmueE"
                >
                    <img src="images/social/Youtube.svg" alt="YouTube logo" />
                </a>
                <a target="_blank" href="https://t.me/av_ilin">
                    <img src="images/social/Telegram.svg" alt="tg logo" />
                </a>
                <a target="_blank" href="https://t.me/av_ilin">
                    <img src="images/social/Telegram.svg" alt="tg logo" />
                </a>
            </div>
            <div
                className={styles.mail}
                style={{
                    display: isBurger ? "none" : "",
                }}
            >
                <img src="images/social/Mail.svg" alt="mail icon" />
                <a href="mailto:support@as-bitpro.ru">support@as-bitpro.ru</a>
                <a href="mailto:admin@as-bitpro.ru">admin@as-bitpro.ru</a>
            </div>
        </div>
    );
};

export default Contacts;
