import React from 'react';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import item1 from "../../assets/img/item1.svg";
import item2 from "../../assets/img/item2.svg";
import item5 from "../../assets/img/item5.svg";
import styles from "./Map.module.css";
const MapY = () => {
    return (
        <div id="Map" className={styles.mapContainer}>

            <div className={styles.item1}><img src={item1} alt="img"/></div>
            <div className={styles.item2}><img src={item2} alt="img"/></div>
            <div className={styles.item5}><img src={item5} alt="img"/></div>
            <h2 className={styles.mapText}>Контакты и местоположение</h2>
            <YMaps
                query={{apikey: '5216b3f3-d8be-4710-a7ad-cdc882a3825d'}}
                width={989}
                height={524}>

                <Map
                    className={styles.map}
                    defaultState={{
                        center: [55.751574, 37.573856],
                        zoom: 9,

                    }}
                >
                    <Placemark geometry={[55.684758, 37.738521]} />
                </Map>
            </YMaps>
            <div className={styles.descriptionContainer}>
                <div className={styles.textContainer}>
                    <p>Адрес адрес адрес адрес адрес адрес адрес адрес</p>
                    <p>Телефоны: +732563643467 +732563643467</p>
                    <p>Мейл: ebvwvwa@mail.ru</p>
                </div>
            </div>
        </div>

    );
};

export default MapY;