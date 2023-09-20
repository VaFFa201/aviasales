/* eslint-disable indent */
import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import Header from './components/Header'
import AsideFilter from './components/AsideFilter/AsideFilter'
import CardList from './components/CardList'

import './normalize.scss'
import './style.scss'

const defaultState = {
  filterOptions: [
    { id: 0, label: 'Все', checked: false },
    { id: 1, label: 'Без пересадок', checked: false },
    { id: 2, label: '1 пересадка', checked: false },
    { id: 3, label: '2 пересадки', checked: false },
    { id: 4, label: '3 пересадки', checked: false },
  ],
  tabsOptions: [
    { id: 1, label: 'Самый дешевый', active: false },
    { id: 2, label: 'Самый быстрый', active: false },
    { id: 3, label: 'Оптимальный', active: true },
  ],
}

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HANDLE_TAB_CHANGE':
      return {
        ...state,
        tabsOptions: state.tabsOptions.map((tab) => {
          const newTab = { ...tab, active: tab.id === action.payload }
          return newTab
        }),
      }
    case 'HANDLE_CHECKBOX_CHANGE':
      return {
        ...state,
        filterOptions: state.filterOptions
          .map((option) => {
            if (option.id === action.payload) {
              return {
                ...option,
                checked: !option.checked,
              }
            }
            if (action.payload === 0) {
              return {
                ...option,
                checked: !state.filterOptions[0].checked,
              }
            }
            return option
          })
          .map((option, index, array) => {
            if (index === 0) {
              if (array.slice(1).every((item) => item.checked)) {
                return {
                  ...option,
                  checked: true,
                }
              }
              if (array.some((item) => item.checked)) {
                return {
                  ...option,
                  checked: false,
                }
              }
            }
            return option
          }),
      }
    default:
      return state
  }
}

const store = configureStore({ reducer })

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main" style={{ display: 'flex' }}>
        <Provider store={store}>
          <AsideFilter />
          <CardList />
        </Provider>
      </main>
    </div>
  )
}

export default App
