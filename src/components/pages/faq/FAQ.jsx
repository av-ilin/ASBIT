import styles from "./FAQ.module.scss";

import Question from "./Question";

const FAQ = () => {
    return (
        <div className={styles.faq}>
            <div className="container">
                <h1>FAQ и правила</h1>

                <div className={styles.questions}>
                    <Question
                        question="Как стать участником программы?"
                        text="Для участия в проекте необходимо пройти по ссылке и присоединиться к Telegram-боту."
                    />
                    <Question
                        question="Что делать если я не имею кошельков в электронных системах, которые принимает проект?"
                        text="Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Которой последний скатился но ручеек сбить себя родного семь безопасную? Журчит за, маленькая бросил гор коварных все путь эта предупреждал?"
                    />
                    <Question question="Как мне открыть аккаунт в проекте название?" />
                    <Question question="Какие платёжные системы принимает программа?" />
                    <Question question="Как я могу вывести свои деньги?" />
                    <Question question="Мне не приходят деньги на ЭПС, что делать?" />
                    <Question question="Через какое время мой депозит будет зачислен?" />
                    <Question question="Когда я могу получить прибыль?" />
                    <Question question="Могу я сделать реинвест с баланса?" />
                    <Question question="Как мне сделать депозит?" />
                    <Question question="Я могу сделать несколько депозитов?" />
                    <Question question="Есть ли комиссия на вывод?" />
                    <Question question="Могу ли я открыть несколько аккаунтов в проекте?" />
                    <Question question="Когда я могу проверить свой аккаунт?" />
                    <Question question="Какая сумма минимальной выплаты в проекте?" />
                    <Question question="Сколько составляет реферальное вознаграждение?" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
