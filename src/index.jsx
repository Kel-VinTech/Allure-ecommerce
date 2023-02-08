import React from 'react'
import App from './App'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
