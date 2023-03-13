import React, { useEffect, useState } from 'react'
import { SortArrow } from '../../assets/svg/svg'


import Bestler from './Bestler'
import styles from  '../Bestlers/braslets.module.scss'
import Pagination from './Pagination'


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
    img: '/imgs/red.png',
    title: 'Дизель генераторы',

  },

  {
    id: 4,
    img: '/imgs/camera.png',
    title: 'Картплоттеры',

  },

  {
    id: 5,
    img: '/imgs/fivth.png',
    title: 'Картплоттеры с  NMEA /ETHERNET',
  },

  {
    id: 6,
    img: '/imgs/tv.png',
    title: 'МФД (дисплеи)',
  },

  {
    id: 7,
    img: '/imgs/ipad.png',
    title: 'ЭКНИС',
  },

  {
    id: 8,
    img: '/imgs/router.png',
    title: 'РЛС (радары)',
  },


  {
    id: 9,
    img: '/imgs/detail.png',
    title: 'АИС',
  },


  {
    id: 10,
    img: '/imgs/detail.png',
    title: 'GPS антенны/компасы',
  },

  {
    id: 11,
    img: '/imgs/detail.png',
    title: 'Автопилоты',
  },

  {
    id: 12,
    img: '/imgs/detail.png',
    title: 'Трандьюсеры (датчики)',
  },

  {
    id: 13,
    img: '/imgs/detail.png',
    title: ' Сетевые решения ETHERNET',
  },

  {
    id: 14,
    img: '/imgs/detail.png',
    title: 'Сетевые решения (NMEA 2000)',
  },

  {
    id: 15,
    img: '/imgs/detail.png',
    title: 'Морские Радиостанции',
  },

  {
    id: 16,
    img: '/imgs/detail.png',
    title: 'Индикаторные дисплеи',
  },

  {
    id: 17,
    img: '/imgs/detail.png',
    title: 'Морские Системы  кондиционирования',
  },

  {
    id: 18,
    img: '/imgs/detail.png',
    title: 'Интерцепторы/ транцевые плиты',
  },

  {
    id: 19,
    img: '/imgs/detail.png',
    title: 'Гироскопические стабилизаторы качки',
  },

  {
    id: 20,
    img: '/imgs/detail.png',
    title: 'Телескопические кран-балки/платформы/ трапы',
  },

  {
    id: 21,
    img: '/imgs/detail.png',
    title: 'Тендеры с водомётным двигателем',
  },

  {
    id: 22,
    img: '/imgs/detail.png',
    title: 'Холодильники/ газовые плиты/ мойки/',
  },

  {
    id: 23,
    img: '/imgs/detail.png',
    title: 'Опреснительные установки',
  },

  {
    id: 24,
    img: '/imgs/detail.png',
    title: 'Стеклоочистители',
  },
]




const Brestlers = () => {


//Pagination
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cartPerPage,] = useState(12)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      setData(Details)
      setLoading(false)
    }
    getData()
  }, [])


  const lastCartIndex = currentPage * cartPerPage
  const firstCartIndex = lastCartIndex - cartPerPage
  const currentCart = data.slice(firstCartIndex, lastCartIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)


  // sort carts
  const [activeSort, setActiveSort] = useState(false)
  const [selected, setSelected] = useState('Сортировать по деталям')

  
  const filterBestler = (catItem) => {
    const result = Details.filter((curData) => {
      return curData.title === catItem
    });
    setData(result);
  }

  return (
    <div className={styles.Brestlers}>
      <div className={styles.brestler__head}>
        <div className={styles.brestler__title}>
          Бестселлеры
        </div>
        <div className={styles.brestler__sort}>
          <div className={styles.brestler__sort__inner}>
            <div className={styles.brest__sort__btn} onClick={(e) => setActiveSort(!activeSort)}>
              {selected}
              <SortArrow />
            </div>
            {
              activeSort && (
                <div className={styles.dropdown_content}>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Подвесные бензиновые моторы')

                  }}>
                    Подвесные бензиновые моторы
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Тролинговые GPS моторы')

                  }}>
                    Тролинговые GPS моторы
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Дизель генераторы')

                  }}>
                    Дизель генераторы
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Картплоттеры')

                  }}>
                    Картплоттеры
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Картплоттеры с  NMEA /ETHERNET')

                  }}>
                    Картплоттеры с  NMEA /ETHERNET
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('МФД (дисплеи)')

                  }}>
                    МФД (дисплеи)
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('ЭКНИС')

                  }}>
                    ЭКНИС
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('РЛС (радары)')

                  }}>
                    РЛС (радары)
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('АИС')

                  }}>
                    АИС
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('GPS антенны/компасы')

                  }}>
                    GPS антенны/компасы
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Автопилоты')

                  }}>
                    Автопилоты
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Трандьюсеры (датчики)')

                  }}>
                    Трандьюсеры (датчики)
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Сетевые решения ETHERNET')

                  }}>
                    Сетевые решения ETHERNET
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Сетевые решения (NMEA 2000)')

                  }}>
                    Сетевые решения (NMEA 2000)
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Морские Радиостанции')

                  }}>
                    Морские Радиостанции
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Индикаторные дисплеи')

                  }}>
                    Индикаторные дисплеи
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Морские Системы  кондиционирования')

                  }}>
                    Морские Системы  кондиционирования
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Интерцепторы/ транцевые плиты')

                  }}>
                    Интерцепторы/ транцевые плиты
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Гироскопические стабилизаторы качки')

                  }}>
                    Гироскопические стабилизаторы качки
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Телескопические кран-балки/платформы/ трапы')

                  }}>
                    Телескопические кран-балки/платформы/ трапы
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Тендеры с водомётным двигателем')

                  }}>
                    Тендеры с водомётным двигателем
                  </div>
                  <div className={styles.dropdown_item} onClick={(e) => {
                    setSelected(e.target.textContent)
                    setActiveSort(false)
                    filterBestler('Холодильники/ газовые плиты/ мойки/')

                  }}>
                    Холодильники/ газовые плиты/ мойки/
                  </div>
                </div>
              )

            }
          </div>
        </div>
      </div>

      <div className={styles.brestler__inner}>
          <Bestler cart={currentCart} loading={loading} />
         <Pagination cartPerPage={cartPerPage} paginate={paginate} totalCarts={data.length} />
      </div>

    </div>
  )
}

export default Brestlers 
