import React from 'react'
import{
NavBar,
 Footer,
 BlogContent
} from "../src/components";

import {
  Home,
  AboutUs,
  Product
} from "../src/pages"
import { Route, Routes} from "react-router-dom"
import './scss/_reset.scss'

function App() {

  return (
    <div className='container'>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog' element={<BlogContent />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/about' element={<AboutUs />}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App
