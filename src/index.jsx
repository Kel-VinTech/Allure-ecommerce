import React from 'react'
import { Provider } from 'react-redux';
import App from './App'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from "../src/redux/store"



const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
