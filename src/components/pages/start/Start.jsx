import styles from "./Start.module.scss";

import HowStart from "./how-start/HowStart";
import SimpleStart from "./simple-start/SimpleStart";
import RefStart from "./ref-start/RefStart";

const Start = () => {
    return (
        <div className={styles.start}>
            <div className="container">
                <SimpleStart />
                <HowStart />
                <RefStart />
            </div>
        </div>
    );
};

export default Start;
