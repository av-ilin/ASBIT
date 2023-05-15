import styles from "./Advantages.module.scss";

import AdvantagesItem from "./advantages-item/AdvantagesItem";

const Advantages = () => {
    return (
        <div className={styles.advantages}>
            <AdvantagesItem
                name="Инстант"
                description="(ручные, быстрые) выплаты"
            />
            <AdvantagesItem
                name="Реферальная программа"
                description="имеет три уровня 7%, 3% и 1% "
            />
            <AdvantagesItem
                name="Тело депозита возвращается"
                description="в конце срока инвестирования. "
            />
            <AdvantagesItem
                name="Порог входа от 10$"
                description="и первая прибыль через 5-30 дней."
            />
            <AdvantagesItem
                name="Процент дохода выше чем"
                description="в банках и других видах инвестиций"
            />
            <AdvantagesItem
                name="Простое ведение бизнеса"
                description="с квалифицированной помощью"
            />
        </div>
    );
};

export default Advantages;
