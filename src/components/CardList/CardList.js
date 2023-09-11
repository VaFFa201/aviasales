import React from 'react'

import Card from '../Card'
import Tabs from '../Tabs'

import styles from './CardList.module.scss'

function CardList() {
  return (
    <div className={styles['result-wrapper']}>
      <Tabs />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <button type="button" className={styles['load-btn']}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

export default CardList
