import React from 'react';
import styles from "./Header.module.css"

const menu=['О нас','Услуги','Галерея','Персонал','Контакты']

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.container}>
                <div className={styles.logo}><img src="../../assets/img/headerLogo.svg" alt=""/></div>
                <ul className={styles.menu}>
                    {menu.map((item)=>(
                        <div className={styles.menuItem}>
                            <li >
                                {item}
                            </li>
                        </div>

                    ))}

                </ul>
            </div>

        </div>
    );
};

export default Header;