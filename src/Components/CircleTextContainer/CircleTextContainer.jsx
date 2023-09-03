import React from 'react';
import style from './CircleTextContainer.module.css';

const circleText=['Мы проводим занятия с малышами от 12 месяцев и старше.','Наши занятия нацелены на комплексное развитие.','У нас на занятиях разрешено, по желанию клиента, присутствие родителей или сопровождающих взрослых.','Все педагоги имеют высшее профильное образование и стаж работы не менее 8 лет.','Наш кабинет имеет огромную базу уникальных игровых пособий и наглядного материала.','Мы сторонники гуманной педагогики! Наши педагоги найдут подход к каждому маленькому клиенту.']

const CircleTextContainer = () => {
    return (
        <>{circleText.map((item)=>(
            <div className={style.circleTextContainer}>
                <p className={style.text}>{item}</p>
            </div>
        ))}

        </>
    );
};

export default CircleTextContainer;