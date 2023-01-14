import React from 'react'
import HeroContent from './components/HeroContent'
import MainContent from './components/MainContent'
import './scss/_reset.scss'
function App() {

  return (
    <div className='container'>
      <HeroContent/>
      <MainContent />
    </div>
  )
}

export default App
