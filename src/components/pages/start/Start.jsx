import styles from "./Start.module.scss";

import HowStart from "./how-start/HowStart";
import SimpleStart from "./simple-start/SimpleStart";

const Start = () => {
    return (
        <div className={styles.start} style={{ marginBottom: "300vh" }}>
            <div className="container">
                <SimpleStart />
                <HowStart />
            </div>
        </div>
    );
};

export default Start;
