import { useState } from 'react'
import Nabar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ServiceCard from './components/ServiceCard.jsx'
import Service from './components/Service.jsx'
import Footer from './components/Footer.jsx'
import FAQ from './components/FAQ.jsx'

function App() {

  return (
    <>
   <Nabar/>
    <Hero/>
    <Service/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default App
