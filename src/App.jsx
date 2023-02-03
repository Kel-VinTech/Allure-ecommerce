import React from 'react'
import{
Footer
} from "./components";
import { Route, Routes,BrowserRouter } from "react-router-dom"
import './scss/_reset.scss'

function App() {

  return (
    <div className='container'>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
