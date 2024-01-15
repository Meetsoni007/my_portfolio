import React, { useState } from 'react'
import './styles/Header.css'
import './styles/Home.css'
import './styles/work.css'
import './styles/timeline.css'
import './styles/Services.css'
import './styles/Contact.css'
import './styles/Footer.css'
import './styles/Mediaquery.css'
import Header, { HeaderPhone } from './components/Header'
import Home from './components/Home'
import Work from './components/Work'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </>
  )
}

export default App
