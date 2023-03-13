import React from 'react'
import {useSwiper} from 'swiper/react'


import { NextBtn, PrewBtn } from '../../assets/svg/svg'
import styles from '../ForWork/forwork.module.scss'


const SwiperButtons = () => {
    const swiper = useSwiper()


  return (

    <div className={styles.swiper_nav_bars}>
        <button onClick={() => swiper.slidePrev() }><PrewBtn/></button>
        <button onClick={() => swiper.slideNext()}><NextBtn/></button>
    </div>
  )
}

export default SwiperButtons
