import React from 'react'
import './index.scss'
import App from './App'
import * as ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>

      <App />
  </React.StrictMode>,
)
