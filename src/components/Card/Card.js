import React from 'react'

import styles from './Card.module.scss'

function Card({ price = 13000 }) {
  function separateThousands(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__price}>{`${separateThousands(price)} P`}</div>
        <img className={styles.card__logo} src="./S7 Logo.png" alt="logo" />
      </div>
      <div className={styles.card__content}>
        <div className={`${styles.card__row} ${styles.row}`}>
          <div className={styles.card__col}>
            <div className={styles.col__header}>MOW – HKT</div>
            <div className={styles.col__info}>10:45 – 08:00</div>
          </div>
          <div className={styles.card__col}>
            <div className={styles.col__header}>В пути</div>
            <div className={styles.col__info}>21ч 15м</div>
          </div>
          <div className={styles.card__col}>
            <div className={styles.col__header}>2 пересадки</div>
            <div className={styles.col__info}>HKG, JNB</div>
          </div>
        </div>
        <div className={`${styles.card__row} ${styles.row}`}>
          <div className={styles.card__col}>
            <div className={styles.col__header}>MOW – HKT</div>
            <div className={styles.col__info}>11:20 – 00:50</div>
          </div>
          <div className={styles.card__col}>
            <div className={styles.col__header}>В пути</div>
            <div className={styles.col__info}>13ч 30м</div>
          </div>
          <div className={styles.card__col}>
            <div className={styles.col__header}>1 пересадка</div>
            <div className={styles.col__info}>HKG</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
