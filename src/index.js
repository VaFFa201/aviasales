import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import store from './store/store'
import ConnectionBoundary from './components/ConnectionBoundary/ConnectionBoundary'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ConnectionBoundary>
      <App />
    </ConnectionBoundary>
  </Provider>
)
