import React from 'react'
import Footer from './components/FooterContent'
import HeroContent from './components/HeroContent'
import MainContent from './components/MainContent'
import FooterContent from './components/FooterContent'

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
