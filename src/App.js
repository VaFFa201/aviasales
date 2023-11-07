/* eslint-disable indent */
import React, { useEffect } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { connect } from 'react-redux'

import Header from './components/Header'
import AsideFilter from './components/AsideFilter/AsideFilter'
import CardList from './components/CardList'
import ErrorModal from './components/ErrorModal'
import * as fetchActions from './actions/fetchActions'

import './normalize.scss'
import './style.scss'

// import { fetchDataFirst } from './actions/fetchActions';

function App({ errorModalOn, fetchDataFirst }) {
  useEffect(() => {
    fetchDataFirst()
  }, [])

  return (
    <div className="App">
      <Header />
      <main className="main" style={{ display: 'flex' }}>
        {errorModalOn ? <ErrorModal /> : null}
        <AsideFilter />
        <CardList />
      </main>
    </div>
  )
}

const mapStateToProps = (state) => ({
  errorModalOn: state.errorModalOn,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(fetchActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
