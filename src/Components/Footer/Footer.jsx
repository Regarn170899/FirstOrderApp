import React from 'react';
import logo from '../../assets/img/headerLogo.svg';
import styles from './Footer.module.css';
const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.contentContainer}>
                <img src={`${logo}`} alt="logo"/>
                <p className={styles.text}>ТекстТекстТекст<br/>ТекстТекстТекст<br/>ТекстТе</p>
                <p className={styles.text}>ТекстТекстТекст<br/>ТекстТекстТекст<br/>ТекстТе</p>
                <p className={styles.text}>ТекстТекстТекст<br/>ТекстТекстТекст<br/>ТекстТе</p>
                <p className={styles.text}>ТекстТекстТекст<br/>ТекстТекстТекст<br/>ТекстТе</p>
            </div>

        </div>
    );
};

export default Footer;