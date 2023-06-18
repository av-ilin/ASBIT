import styles from "./AboutAdvantages.module.scss";

import Advantage from "./Advantage";

const AboutAdvantages = () => {
    return (
        <div className={styles.advantages}>
            <h1>Наши преимущества</h1>
            <div className={styles.wrapper}>
                <Advantage
                    name="Выгодно"
                    text="Диверсификация рисков инвесторов за счет майнинга"
                    img="images/advantages/profitably.svg"
                />
                <Advantage
                    name="Профессионализм"
                    text="За счет работы опытной команды профессионалов"
                    img="images/advantages/professionalism.svg"
                />
                <Advantage
                    name="Прибыль и минимизация рисков."
                    text="Трейдинг и диверсификация прибыли в майнинг позволяет сократить риски просадок и приносит значительный доход."
                    img="images/advantages/shield.svg"
                />
                <Advantage
                    name="Удобно и мобильно"
                    text="Управление инвестициями с помощью мобильного телефона из любой точки мира, в простом интерфейсе телеграм бота."
                    img="images/advantages/mobile.svg"
                />
                <Advantage
                    name="Доступность"
                    text="Гибкие варианты инвестирования, сумма инвестиций от 10 $."
                    img="images/advantages/racket.svg"
                />
                <Advantage
                    name="Ежедневные выплаты"
                    text="Вывод средств в любое время, согласно регламента."
                    img="images/advantages/gold.svg"
                />
                <Advantage
                    name="Техническая поддержка"
                    text="В режиме онлайн, позволяет решать все вопросы мгновенно."
                    img="images/advantages/message.svg"
                />
                <Advantage
                    name="Безопасность."
                    text="Защита денежных средств от взломов и кибер атак внутри Telegram мессенджера."
                    img="images/advantages/save.svg"
                />
            </div>
        </div>
    );
};

export default AboutAdvantages;
