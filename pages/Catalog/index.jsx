import React from "react";
import Brestlers from "../../Components/Bestlers/Bestlers";


import Footer from '../../Components/Footer/Footer'
import styles from '../Catalog/catalog.module.scss'


const Details = [
  {
    id: 1,
    img: '/imgs/detail.png',
    title: 'Подвесные бензиновые моторы',
  },

  {
    id: 2,
    img: '/imgs/varka.png',
    title: 'Тролинговые GPS моторы',

  },

  {
    id: 3,
    img: '',
    title: 'Дизель генераторы',

  },

  {
    id: 4,
    img: '',
    title: 'Картплоттеры',

  },

  {
    id: 5,
    img: '',
    title: 'Картплоттеры с  NMEA /ETHERNET',

  },

]

export default function Catalog() {

  return (
    <div className={styles.Catalog}>
      <Brestlers />
    </div>
  )
}