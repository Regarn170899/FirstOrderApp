import React, {useState} from 'react';
import styles from './SectorThree.module.css';
import InfoContainer from "../InfoContainer/InfoContainer";
import InfoContainerRevers from "../InfoContanerRevers/InfoContainerRevers";
import item1 from "../../assets/img/item1.svg";
import item2 from "../../assets/img/item2.svg";
import item3 from "../../assets/img/item3.svg";
import item4 from "../../assets/img/item4.svg";
import item5 from "../../assets/img/item5.svg";
import item6 from "../../assets/img/item6.svg";
import item7 from "../../assets/img/item7.svg";
import item8 from "../../assets/img/item8.svg";


const SectorThree = () => {


    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)

    return (
        <div className={styles.sectorContainer}>
            <InfoContainer show={show1} setShow={setShow1}/>
            <InfoContainerRevers show={show2} setShow={setShow2}/>
            <InfoContainer show={show3} setShow={setShow3}/>
            <InfoContainerRevers show={show4} setShow={setShow4}/>
            <div className={styles.item1}><img src={item1} alt=""/></div>
            <div className={styles.item2}><img src={item2} alt=""/></div>
            <div className={styles.item3}><img src={item3} alt=""/></div>
            <div className={styles.item4}><img src={item4} alt=""/></div>
            <div className={styles.item5}><img src={item5} alt=""/></div>
            <div className={styles.item6}><img src={item6} alt=""/></div>
            <div className={styles.item7}><img src={item7} alt=""/></div>
            <div className={styles.item8}><img src={item8} alt=""/></div>
        </div>
    );
};

export default SectorThree;