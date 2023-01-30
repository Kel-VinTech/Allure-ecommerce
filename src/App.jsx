import React from 'react'
import Footer from './components/Footer/FooterContent'
import HeroContent from './components/HeroContent'
import MainContent from './components/MainContent'
import FooterContent from './components/Footer/FooterContent'
// import { Route, Routes } from "react-router-dom"

import './scss/_reset.scss'
function App() {

  return (
    <div className='container'>
  
        <HeroContent/>
        <MainContent />
        <FooterContent />
      
    </div>
  )
}

export default App
