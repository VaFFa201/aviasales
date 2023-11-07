/* eslint-disable no-unused-vars */
/* eslint-disable indent */

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Card from '../Card'
import Tabs from '../Tabs'
import Loader from '../Loader'
import * as pageActions from '../../actions/pageActions'

import styles from './CardList.module.scss'

function CardList({ dataFirst, cardCount, handleCardCountChange, activeTabId, loading, activeFilters }) {
  let dataToShow

  const getTotalDuration = (ticket) =>
    ticket.segments.reduce((totalDuration, segment) => totalDuration + segment.duration, 0)

  const getStopsLength = (ticket) => {
    if (ticket.segments[0].stops.length === ticket.segments[1].stops.length) {
      return ticket.segments[0].stops.length
    }
    return -1
  }

  switch (activeTabId) {
    case 1: {
      dataToShow = dataFirst.concat().sort((a, b) => a.price - b.price)
      break
    }
    case 2: {
      dataToShow = dataFirst.concat().sort((a, b) => getTotalDuration(a) - getTotalDuration(b))
      break
    }
    case 3: {
      dataToShow = dataFirst
      break
    }
    default: {
      dataToShow = dataFirst
    }
  }

  const filteredData = dataToShow.filter((ticket) => {
    if (activeFilters.length === 5) return true

    const stopsLength = getStopsLength(ticket)
    // if(activeFilters.includes(stopsLength)) return true
    // return false
    // if()

    return activeFilters.includes(stopsLength)
  })

  const cards = filteredData.map((item, index) => {
    if (index >= cardCount) return

    const { price, carrier, segments } = item
    const key = `${index}${price}${carrier}`

    return <Card key={key} price={price} carrier={carrier} segments={segments} />
  })

  return (
    <div className={styles['result-wrapper']}>
      <Tabs />

      {loading ? <Loader /> : null}

      {cards}

      {cards.length ? (
        <button
          type="button"
          className={styles['load-btn']}
          onClick={() => {
            handleCardCountChange(5)
          }}
        >
          Показать еще 5 билетов!
        </button>
      ) : (
        <div className={styles['warning-text']}>
          Фильтры не выбраны, либо результатов по выбранным фильтрам не обнаружено
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  dataFirst: state.dataFirst,
  error: state.error,
  cardCount: state.cardCount,
  activeTabId: state.activeTabId,
  activeFilters: state.activeFilters,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(pageActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
