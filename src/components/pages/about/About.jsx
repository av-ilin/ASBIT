import styles from "./About.module.scss";

import Activity from "./activity/Activity";

const About = () => {
    return (
        <div className={styles.about}>
            <Activity />
        </div>
    );
};

export default About;
