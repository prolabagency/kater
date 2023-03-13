import React, { useState } from 'react'
import * as react from 'swiper/react'
import { Navigation, Pagination,Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'


import styles from '../ForWork/forwork.module.scss'
import more from '../../assets/img/seemore.svg'
import SwiperButtons from './SwiperButtons'


const Forwork = () => {
  const [seeMore, setSeeMore] = useState(false)



  return (
    <div className={styles.Forwork}>
      <div className={styles.work__inner}>
        <div className={styles.work__head}>
          <div className={styles.work__head__left}>
            <p>От слов к делу,</p>
            <p>выполненные проекты</p>
          </div>
          <div className={styles.work__head__right}>
            {
              seeMore?
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus ratione in enim illum nam adipisci fugit ad praesentium error maxime aliquid, temporibus omnis, alias voluptatem officiis unde labore fuga?</p>
            :
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ducimus ratione in enim illum nam adipisci fugit ad praesentium error maxime </p>


            }
            {
              seeMore?
            <p className={styles.work__seemore} onClick={() => setSeeMore(!seeMore)}>Скрыть...</p>
              
              :
            <p className={styles.work__seemore} onClick={() => setSeeMore(!seeMore)}>увидеть больше <Image src={more} alt="" /></p>

            }
          </div>
        </div>

        <div className={styles.work__bottom}>
          <react.Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{delay:4000}}
            spaceBetween={60}
            slidesPerView="auto"
          >
            <react.SwiperSlide className={styles.res_slide}>
              <div className={styles.quantity_box}>
                1
              </div>
              <div className={styles.res__slide__describe}>
                <div className={styles.slide__about__inside}>
                  <div className={styles.slide__title}>
                    SIMRAD
                  </div>
                  <div className={styles.slide__describe}>
                    Поставка навигационного оборудования 2 комплекта на 2 катера. г.Москва
                  </div>
                </div>
              </div>

            </react.SwiperSlide>
            <react.SwiperSlide className={styles.res_slide}>
              <div className={styles.quantity_box}>
                2
              </div>
              <div className={styles.res__slide__describe}>
                <div className={styles.slide__about__inside}>
                  <div className={styles.slide__title}>
                    YAMAHA
                  </div>
                  <div className={styles.slide__describe}>
                    Поставка лодочного мотора YAMAHA CETL 60 г. Уфа
                  </div>
                </div>
              </div>
            </react.SwiperSlide>
            <react.SwiperSlide className={styles.res_slide}>
              <div className={styles.quantity_box}>
                3
              </div>
              <div className={styles.res__slide__describe}>
                <div className={styles.slide__about__inside}>
                  <div className={styles.slide__title}>
                    RAYMARINE
                  </div>
                  <div className={styles.slide__describe}>
                    Поставка картплоттера AXIOM 9+ г. Ярославль
                  </div>
                </div>
              </div>
            </react.SwiperSlide>
            <react.SwiperSlide className={styles.res_slide}>
              <div className={styles.quantity_box}>
                4
              </div>
              <div className={styles.res__slide__describe}>
                <div className={styles.slide__about__inside}>
                  <div className={styles.slide__title}>
                    RAYMARINE
                  </div>
                  <div className={styles.slide__describe}>
                    Поставка картплоттера AXIOM 9+ г. Ярославль
                  </div>
                </div>
              </div>
            </react.SwiperSlide>
            <react.SwiperSlide className={styles.res_slide}>
              <div className={styles.quantity_box}>
                5
              </div>
              <div className={styles.res__slide__describe}>
                <div className={styles.slide__about__inside}>
                  <div className={styles.slide__title}>
                    LOWRANCE
                  </div>
                  <div className={styles.slide__describe}>
                    Поставка картплоттера FS -9 Activ -imaging3–1 гг. Нижний Новгород
                  </div>
                </div>
              </div>
            </react.SwiperSlide>
            <react.SwiperSlide className={styles.res_slide}>
              <div className={styles.quantity_box}>
                6
              </div>
              <div className={styles.res__slide__describe}>
                <div className={styles.slide__about__inside}>
                  <div className={styles.slide__title}>
                    SIMRAD
                  </div>
                  <div className={styles.slide__describe}>
                    Поставка навигационого оборудования на яхту г. Ростов- на Дону
                  </div>
                </div>
              </div>
            </react.SwiperSlide>
            <SwiperButtons />
          </react.Swiper>
        </div>
      </div>
    </div>
  )
}

export default Forwork
