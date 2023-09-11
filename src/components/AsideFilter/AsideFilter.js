import React from 'react'

import styles from './AsideFilter.module.scss'

function AsideFilter() {
  return (
    <aside className={styles.filter}>
      <div className={styles.filter__container}>
        <h3 className={styles.filter__title}>Количество пересадок</h3>
        <div className={styles.filter__options}>
          <label className={styles.filter__option} htmlFor="all">
            <input type="checkbox" name="all" id="all" />
            <span className={styles['custom-checkbox']} />
            Все
          </label>

          <label className={styles.filter__option} htmlFor="no-transfer">
            <input type="checkbox" name="all" id="no-transfer" />
            <span className={styles['custom-checkbox']} />
            Без пересадок
          </label>

          <label className={styles.filter__option} htmlFor="one-transfer">
            <input type="checkbox" name="all" id="one-transfer" />
            <span className={styles['custom-checkbox']} />1 пересадка
          </label>

          <label className={styles.filter__option} htmlFor="two-transfers">
            <input type="checkbox" name="all" id="two-transfers" />
            <span className={styles['custom-checkbox']} />2 пересадки
          </label>

          <label className={styles.filter__option} htmlFor="three-transfers">
            <input type="checkbox" name="three-transfers" id="three-transfers" />
            <span className={styles['custom-checkbox']} />3 пересадки
          </label>
        </div>
      </div>
    </aside>
  )
}

export default AsideFilter
