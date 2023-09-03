import React from 'react';
import styles from './InfoContainerReverse.module.css';


const InfoContainerRevers = (props) => {
    return (
        <div className={styles.info}>
            <div className={styles.infoContainer}>
                <div className={styles.bottomContainer}>
                    <div className={styles.imgContainer}></div>
                    <div className={styles.textContainer}>
                        <p className={styles.text}>Возраст: от 12 месяцев до 2х лет. Занятие проходит в индивидуальной
                            форме.</p>
                        <p className={styles.text}>
                            С помощью игровых пособий мы развиваем:<br/>
                            1.крупную и мелкую моторику<br/>
                            2.внимание, мышление<br/>
                            3.цветовосприятие<br/>
                            а также стимулируем речевое развитие.</p>
                    </div>
                </div>
                <div className={props.show ? styles.topContainer : `${styles.topContainer} ${styles.move}`}>
                    <div className={styles.topTextContainer}>
                        <p className={styles.firstText}>“Маленький гений”</p>
                        <p className={styles.secondText}> комплексное развитие</p>
                    </div>
                    <div className={styles.bottomTextContainer}>
                        <p>Возраст: от 12 месяцев до 2х лет.<br/> * Развитие: крупной и мелкой моторики внимания,усидчивости.
                            *<br/> С помощью игровых музыкальных инструментов развиваем<br/> чувство ритма, эстетическое
                            восприятие.<br/> *Развитие творческих способностей:<br/> рисуем пальчиками ,<br/>картины из пластилина.<br/>
                            Различные поделки и аппликации из природных материалов.<br/> Количество занятий: 2 раза в неделю
                            ( согласно вашего<br/> индивидуального расписания)</p>
                    </div>
                    <div>
                        <button className={styles.btnTopContainer}>Кнопка</button>
                    </div>
                </div>
            </div>
            <button className={props.show? styles.btn :`${styles.btn} ${styles.btnMove}`} onClick={() => props.setShow(!props.show)}>{!props.show? 'Подробнее' : 'Скрыть'}</button>
            <div>
            </div>

        </div>
    );
};

export default InfoContainerRevers;