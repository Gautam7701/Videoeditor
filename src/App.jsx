import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Showreel from './Components/Showreel'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Hero/>
    <Showreel/>
    <About/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
