import React, { useEffect, useState } from 'react'


import styles from  '../Bestlers/braslets.module.scss'
import Cart from './Cart'




const Bestler = ({ cart, loading }) => {


    if (loading) {
        return <h2>Загрузка ...</h2>
    }

    return (
        <div className={styles.brestler__cards}>
            {
                cart.map((item) => <Cart item={item} id ={item.id}/>)
            }

        </div>
        

    )
}

export default Bestler
