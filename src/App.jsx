import React from 'react'
import{
NavBar,
 Footer
} from "../src/components";

import ProductDetails from "./components/ProductDetails";


import {
  Home,
  Cart,
  AboutUs,
  Products,
  Checkout
} from "../src/pages"
import { Route, Routes} from "react-router-dom"
import './scss/_reset.scss'

function App() {

  return (
    <div className='container'>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product' element={<Products />}/>
          <Route path='product/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
            <Route path='checkout' element={<Checkout/>} />
          <Route path='/about' element={<AboutUs />}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App
