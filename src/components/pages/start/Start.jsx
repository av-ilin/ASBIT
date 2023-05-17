import styles from "./Start.module.scss";

import HowStart from "./how-start/HowStart";

const Start = () => {
    return (
        <div className={styles.start}>
            <div className="container">
                <HowStart />
            </div>
        </div>
    );
};

export default Start;
