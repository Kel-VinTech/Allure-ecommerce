import React from 'react'
import { Provider } from 'react-redux';
import App from './App'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from "../src/redux/store"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ToastContainer
      theme="dark"
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseOnHover={false}
      />

      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
