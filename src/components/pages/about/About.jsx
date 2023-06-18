import styles from "./About.module.scss";

import AboutAdvantages from "./about-advantages/AboutAdvantages";
import AboutProfit from "./about-profit/AboutProfit";

const About = () => {
    return (
        <div className={styles.about}>
            <div className="container">
                <AboutAdvantages />
                <AboutProfit />
            </div>
        </div>
    );
};

export default About;
