import React from 'react';
import style from './OurTeachers.module.css'

import item4 from "../../assets/img/item4.svg";
import item7 from "../../assets/img/item7.svg";
import item3 from "../../assets/img/item3.svg";
const OurTeachers = () => {
    return (
        <div className={style.OurTeachers}>
            <div className={style.item3}><img src={item3} alt=""/></div>
            <div className={style.item4}><img src={item4} alt=""/></div>
            <div className={style.item7}><img src={item7} alt=""/></div>
            <h2 className={style.nameSector}>Наши педагоги</h2>
            <div className={style.cardContainer}>

                <div className={style.cardContainerFirst}>
                    <div>
                        <div className={style.img}></div>
                        <p className={style.textFio}>Ф.И.О</p>
                        <p className={style.textDescription}>Текст текст текст текстТекст текст текст текстТекст текст текст текстт текст текст текстТкст текст текстТекст текст текст текстт текст текс</p>
                    </div>
                </div>
                <div className={style.cardContainerTwo}>
                    <div  className={style.card}>
                        <div className={style.img}></div>
                        <p className={style.textFio}>Ф.И.О</p>
                        <p className={style.textDescription}>Текст текст текст текстТекст текст текст текстТекст текст текст текстт текст текст текстТкст текст текстТекст текст текст текстт текст текс</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurTeachers;