import React from 'react';
import styles from "./Header.module.css"

const menu=[{text:'О нас',id:'#SectorTwo'}, {text:'Услуги',id:"#InfoContainer"},
    {text:'Галерея',id:"#Gallery"}, {text:'Персонал',id:"#ourTeachers"}, {text:'Контакты',id:"#Map"}]

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.container}>
                <div className={styles.logo}></div>
                <ul className={styles.menu}>
                    {menu.map((item)=>(
                        <div className={styles.menuItem}>
                            <li ><a href={item.id}>{item.text}</a>

                            </li>
                        </div>

                    ))}

                </ul>
            </div>

        </div>
    );
};

export default Header;