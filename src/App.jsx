import React from 'react'
import{
 Footer
} from "./components/Footer";
import { Route, Routes,BrowserRouter } from "react-router-dom"
import './scss/_reset.scss'

function App() {

  return (
    <div className='container'>
        <Footer />
    </div>
  )
}

export default App
