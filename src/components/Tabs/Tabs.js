import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as tabActions from '../../actions/tabActions'

import styles from './Tabs.module.scss'

function Tabs({ tabs, activeTabId, handleTabChange }) {
  const options = tabs.map((option) => {
    const { id, label } = option
    const classes =
      id === activeTabId ? `${styles.tabs__option} ${styles['tabs__option--active']}` : styles.tabs__option

    return (
      <button
        type="button"
        key={id}
        className={classes}
        onClick={() => {
          handleTabChange(id)
        }}
      >
        {label}
      </button>
    )
  })

  return <nav className={styles.tabs}>{options}</nav>
}

const mapStateToProps = (state) => {
  return {
    tabs: state.tabsOptions,
    activeTabId: state.activeTabId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(tabActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
