import React from 'react'

import styles from './Tabs.module.scss'

function Tabs() {
  return (
    <nav className={styles.tabs}>
      <div className={styles.tabs__option}>Самый дешевый</div>
      <div className={`${styles.tabs__option} ${styles['tabs__option--active']}`}>Самый быстрый</div>
      <div className={styles.tabs__option}>Оптимальный</div>
    </nav>
  )
}

export default Tabs
