import React from 'react'
import styles from '../Bestlers/braslets.module.scss'

import { Loading } from '../../assets/svg/svg'


const Pagination = ({ cartPerPage, totalCarts, paginate }) => {


    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCarts / cartPerPage); i++) {
        pageNumbers.push(i)
    }



    return (
        <div className={styles.paginationCustom}>
            {/* <div className={styles.paginate__seemore}>
                <button onClick={() => paginate()}>
                    Увидеть больше <Loading />
                </button>
            </div> */}
            <div className={styles.paginate__side}>

                {
                    pageNumbers.map((num) => {
                        return (
                            <div className={styles.page__num}>
                                <a href="#" onClick={() => paginate(num)} className={paginate ? styles.page__link : styles.page__link}>{num}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pagination
