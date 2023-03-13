import React from 'react'
import Image from 'next/image'


import suzuki from '../../assets/img/suzuki.svg'
import yamaha from '../../assets/img/yamaha.svg'
import mercury from '../../assets/img/mercury.svg'
import { ClosePopUp } from '../../assets/svg/svg'
import styles from '../Bestlers/braslets.module.scss'


const Modal = ({ active, setActive, item }) => {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className={styles.left__modal__content}>
                    <div className={styles.left__modal__insiders}>
                         <div className={styles.motorbich}>
                        MOTORS
                    </div>
                    <div className={styles.motorbichIMG}>
                        <Image
                            src={item.img}
                            alt=""
                            width='344'
                            height='436'
                        />
                    </div>
                    </div>

                   
                </div>

                <div className={styles.right__modal__content}>
                    <div className={styles.moda__petrol__content}>
                        <div className={styles.modal__right__title}>
                            {item.title}
                        </div>
                        <div className={styles.modal__right__describe}>
                            Наша компания поставляет подвесные бензиновые двигатели в полной комплектации от официального дилера под заказ. Срок поставки от 15 до 20 дней. Предоплата 50%
                        </div>
                    </div>

                    <div className={styles.modal__content__brands}>
                        <div className={styles.modal__right__title}>
                            Бренды
                        </div>

                        <div className={styles.modal__right__describe}>
                            Мы поставляем моторы из этих брендов
                        </div>
                        <div className={styles.modal__right__brandimg}>
                            <div className={styles.modal__brand__imgages}>
                                <Image src={suzuki} alt="" />
                            </div>
                            <div className={styles.modal__brand__imgages}>
                                <Image src={yamaha} alt="" />
                            </div>
                            <div className={styles.modal__brand__imgages}>
                                <Image src={mercury} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.modal__content__motors}>
                        <div className={styles.modal__right__title}>
                            Моторы
                        </div>

                        <div className={styles.about__content__theirgun}>
                            <div className={styles.content__motor__power}>
                                Высокая мощность - 800 - 1200 сил
                            </div>
                            <div className={styles.content__motor__power}>
                                Средняя мощность - 450 - 800 сил
                            </div>
                            <div className={styles.content__motor__power}>
                                Низкая мощность -  до 450 сил
                            </div>
                        </div>
                        <div className={styles.content__modal__call}>
                            <button>Позвонить</button>
                        </div>
                    </div>

                </div>

                <div className={styles.modal__content__closes} onClick={() => setActive(false)}>
                    <ClosePopUp />
                </div>
            </div>
        </div>
    )
}

export default Modal
