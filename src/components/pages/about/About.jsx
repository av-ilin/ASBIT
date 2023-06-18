import styles from "./About.module.scss";

import AboutAdvantages from "./about-advantages/AboutAdvantages";
import AboutProfit from "./about-profit/AboutProfit";
import AboutCompany from "./about-company/AboutCompany";
import AboutPay from "./about-pay/AboutPay";

const About = () => {
    return (
        <div className={styles.about}>
            <div className="container">
                <AboutAdvantages />
                <AboutProfit />
                <AboutCompany />
                <AboutPay />
            </div>
        </div>
    );
};

export default About;
