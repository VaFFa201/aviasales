import React, { useId } from 'react'
import { connect } from 'react-redux'

import Card from '../Card'
import Tabs from '../Tabs'

import styles from './CardList.module.scss'

function CardList({ data }) {
  const cards = data.map((item, index) => {
    if (index > 15) return

    const id = useId()
    const key = `${id}-${index}`
    const { price, carrier, segments } = item

    return <Card key={key} price={price} carrier={carrier} segments={segments} />
  })

  return (
    <div className={styles['result-wrapper']}>
      <Tabs />

      {cards}

      {cards.length ? (
        <button type="button" className={styles['load-btn']}>
          Показать еще 5 билетов!
        </button>
      ) : null}
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
  error: state.error,
})

export default connect(mapStateToProps)(CardList)
