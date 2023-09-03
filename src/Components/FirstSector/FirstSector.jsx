import React from 'react';
import styles from './FirstSector.module.css';
import "../../App.css"
import AnimationLine from "../AnimationLine/AnimationLine";
const FirstSector = () => {
    return (
        < >
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Кабинет дошкольного
                    развития</h1>
            </div>
            <AnimationLine/>
        </>
    );
};

export default FirstSector;