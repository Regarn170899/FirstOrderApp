import React from 'react';
import styles from "./SectorTwo.module.css"
import CircleTextContainer from "../CircleTextContainer/CircleTextContainer";

const SectorTwo = () => {
    return (
        <div className={styles.sectorContainer}>
            <div className={styles.topContainer}>
                <div className={styles.imgContainer}>
                </div>
                <div className={styles.textContainer}>
                    <h4 className={styles.headerText}>О нас</h4>
                    <p>Добро пожаловать на наш сайт! Каждый родитель мечтает видеть своего ребенка счастливым! Мы создали наш. Кабинет дошкольного развития,, в первую очередь для того, чтобы приходя к нам Ваши дети чувствовали себя самыми талантливыми,самыми разумными, самыми лучшими!!! Нам есть чем гордиться - большинство наших клиентов пришли к нам по рекомендации друзей и родителей наших учеников!</p>
                </div>
            </div>
            <div>
                <div className={styles.whiteBlock}>
                    <div className={styles.circleContainer}>
                        <CircleTextContainer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectorTwo;