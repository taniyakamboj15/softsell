import React from 'react'
import Header from '../Components/Header'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const AppLayout = () => {
  return (
    <div><Header />
    <Home />
    <About />
    <Contact/>
    <Footer/>
     </div>
  )
}

export default AppLayout