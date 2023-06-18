import styles from "./About.module.scss";

import AboutAdvantages from "./about-advantages/AboutAdvantages";

const About = () => {
    return (
        <div className={styles.about}>
            <div className="container">
                <AboutAdvantages />
            </div>
        </div>
    );
};

export default About;
