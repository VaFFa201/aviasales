import React from 'react'

import Header from './components/Header'
import AsideFilter from './components/AsideFilter/AsideFilter'
import CardList from './components/CardList'

import './normalize.scss'
import './style.scss'

function App() {
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

export default App
