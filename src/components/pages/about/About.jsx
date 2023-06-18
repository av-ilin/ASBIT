import styles from "./About.module.scss";

import AboutAdvantages from "./about-advantages/AboutAdvantages";
import AboutProfit from "./about-profit/AboutProfit";
import AboutCompany from "./about-company/AboutCompany";

const About = () => {
    return (
        <div className={styles.about}>
            <div className="container">
                <AboutAdvantages />
                <AboutProfit />
                <AboutCompany />
            </div>
        </div>
    );
};

export default About;
