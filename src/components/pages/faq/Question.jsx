import styles from "./FAQ.module.scss";

import { useState } from "react";

const Question = ({
    question = "",
    text = "Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Которой последний скатился но ручеек сбить себя родного семь безопасную? Журчит за, маленькая бросил гор коварных все путь эта предупреждал?",
} = {}) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={styles.question}>
            <div
                className={styles["faq-but"]}
                onClick={() => setVisible((prev) => !prev)}
                style={{
                    transform: visible ? "rotate(45deg)" : "rotate(0)",
                }}
            >
                <p>+</p>
            </div>
            <h3>{question}</h3>
            <p
                style={{
                    maxHeight: visible ? "100px" : "0",
                    marginBottom: visible ? "26px" : "0",
                }}
            >
                {text}
            </p>
            <hr />
        </div>
    );
};

export default Question;
