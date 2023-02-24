import React from 'react'
import{
 Footer
} from "../src/components";
import {
  Home,
  AboutUs
} from "../src/pages"
import { Route, Routes} from "react-router-dom"
import './scss/_reset.scss'

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<AboutUs />}/>
      </Routes>
        <Footer />
    </div>
  )
}

export default App
