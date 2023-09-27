import React from 'react'
import { addMinutes, format } from 'date-fns'

import styles from './Card.module.scss'

function Card({ price, carrier, segments }) {
  const [firstRow, secondRow] = segments

  function separateThousands(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  function getTransfersString(transfers) {
    if (transfers === 0) {
      return 'Без пересадок'
    }
    if (transfers === 1) {
      return '1 пересадка'
    }
    if (transfers > 1 && transfers < 5) {
      return `${transfers} пересадки`
    }
    return `${transfers} пересадок`
  }

  function getTimeRange(dateString, duration) {
    const date = new Date(dateString)
    const start = format(date, 'HH:mm')
    const end = addMinutes(date, duration)
    const range = `${start} – ${format(end, 'HH:mm')}`
    return range
  }

  function getDuration(duration) {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60

    const durationString = hours ? `${hours}ч ${minutes}м` : `${minutes}м`

    return durationString
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__price}>{`${separateThousands(price)} P`}</div>
        <img className={styles.card__logo} src={`https://pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      </div>
      <div className={styles.card__content}>
        <div className={`${styles.card__row} ${styles.row}`}>
          <div className={styles.card__col}>
            <div className={styles.col__header}>{`${firstRow.origin} – ${firstRow.destination}`}</div>
            <div className={styles.col__info}>{getTimeRange(firstRow.date, firstRow.duration)}</div>
          </div>
          <div className={styles.card__col}>
            <div className={styles.col__header}>В пути</div>
            <div className={styles.col__info}>{getDuration(firstRow.duration)}</div>
          </div>
          <div className={styles.card__col}>
            <div className={styles.col__header}>{getTransfersString(firstRow.stops.length)}</div>
            <div className={styles.col__info}>{firstRow.stops.length ? firstRow.stops.join(', ') : '--'}</div>
          </div>
        </div>
        <div className={`${styles.card__row} ${styles.row}`}>
          <div className={styles.card__col}>
            <div className={styles.col__header}>{`${secondRow.origin} – ${secondRow.destination}`}</div>
            <div className={styles.col__info}>{getTimeRange(secondRow.date, secondRow.duration)}</div>
          </div>
          <div className={styles.card__col}>
            <div className={styles.col__header}>В пути</div>
            <div className={styles.col__info}>{getDuration(secondRow.duration)}</div>
          </div>
          <div className={styles.card__col}>
            <div className={styles.col__header}>{getTransfersString(secondRow.stops.length)}</div>
            <div className={styles.col__info}>{secondRow.stops.length ? secondRow.stops.join(', ') : '--'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
