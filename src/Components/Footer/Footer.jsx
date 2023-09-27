import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.logo}></div>
                <p className={styles.text}>ТекстТекстТекст<br/>ТекстТекстТекст<br/>ТекстТе</p>
                <p className={styles.text}>ТекстТекстТекст<br/>ТекстТекстТекст<br/>ТекстТе</p>
                <p className={styles.text}>ТекстТекстТекст<br/>ТекстТекстТекст<br/>ТекстТе</p>
                <p className={styles.text}>ТекстТекстТекст<br/>ТекстТекстТекст<br/>ТекстТе</p>
            </div>

        </div>
    );
};

export default Footer;