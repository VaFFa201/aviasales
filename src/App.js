/* eslint-disable indent */
import React, { useEffect } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { connect } from 'react-redux'

import Header from './components/Header'
import AsideFilter from './components/AsideFilter/AsideFilter'
import CardList from './components/CardList'
import * as fetchActions from './actions/fetchActions'

import './normalize.scss'
import './style.scss'

function App({ fetchDataFirst, fetchDataNext, searchId }) {
  useEffect(() => {
    fetchDataFirst()
    fetchDataNext(searchId)
  }, [])

  return (
    <div className="App">
      <Header />
      <main className="main" style={{ display: 'flex' }}>
        <AsideFilter />
        <CardList />
      </main>
    </div>
  )
}

const mapStateToProps = (state) => ({
  searchId: state.searchId,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(fetchActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
