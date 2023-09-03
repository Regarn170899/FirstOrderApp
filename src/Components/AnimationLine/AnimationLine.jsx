import React from 'react';
import styles from "../FirstSector/FirstSector.module.css";
import item1 from "../../assets/img/item1.svg";
import item2 from "../../assets/img/item2.svg";
import item3 from "../../assets/img/item3.svg";
import item4 from "../../assets/img/item4.svg";
import item5 from "../../assets/img/item5.svg";
import item6 from "../../assets/img/item6.svg";
import item7 from "../../assets/img/item7.svg";
import item8 from "../../assets/img/item8.svg";

const AnimationLine = () => {
    return (
        <div className={styles.animateContainer}>
            <div className="items-wrap">
                <div className="items marquee">
                    <div className="item"><img src={item1} alt=""/></div>
                    <div className="item"><img src={item2} alt=""/></div>
                    <div className="item"><img src={item3} alt=""/></div>
                    <div className="item"><img src={item4} alt=""/></div>
                    <div className="item"><img src={item5} alt=""/></div>
                    <div className="item"><img src={item6} alt=""/></div>
                    <div className="item"><img src={item7} alt=""/></div>
                    <div className="item"><img src={item8} alt=""/></div>
                </div>
                <div aria-hidden="true" className="items marquee">
                    <div className="item"><img src={item1} alt=""/></div>
                    <div className="item"><img src={item2} alt=""/></div>
                    <div className="item"><img src={item3} alt=""/></div>
                    <div className="item"><img src={item4} alt=""/></div>
                    <div className="item"><img src={item5} alt=""/></div>
                    <div className="item"><img src={item6} alt=""/></div>
                    <div className="item"><img src={item7} alt=""/></div>
                    <div className="item"><img src={item8} alt=""/></div>
                </div>
            </div>
        </div>
    );
};

export default AnimationLine;