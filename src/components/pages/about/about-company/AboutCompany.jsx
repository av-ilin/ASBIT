import styles from "./AboutCompany.module.scss";

const AboutCompany = () => {
    return (
        <div className={styles.company}>
            <img src="images/about_triding.png" alt="triding" />
            <div className={styles.text}>
                <h1>О Компании</h1>
                <p>
                    <b>
                        Компания AS-BIT была основана крипто фаундером и его
                        командой крито энтузиастов еще в 2019 году.
                    </b>
                    Нашей целью с самого момента зарождения было получение
                    максимальной прибыли и обеспечение стабильности в работе
                    компании. Были открыты и запущены в работу современные
                    Дата-центры и офисы в нескольких городах России и за ее
                    пределами. В процессе активного поиска выгодной торговой
                    стратегии нами была выбрана та, что повысила прибыльность и
                    минимизировала риски. В 2022 году был запущен торговый бот,
                    который автоматизировал процесс совершения сделок. В
                    2021-2022 годах наша команда показала отличный результат
                    работы, что позволило расширить бизнес и запустить
                    инвестиционный проект AS-BIT invest Company на основе
                    Telegram-бота.
                    <b>
                        Мы можем предложить инвесторам самый надежный и выгодный
                        вид инвестиций. Мы превращаем электричество в деньги и
                        даем готовое инвест-решение.
                    </b>
                </p>
            </div>
        </div>
    );
};

export default AboutCompany;
