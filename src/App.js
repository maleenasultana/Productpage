import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Details from './Details/Details'
import Footer from './Footer/Footer'

function App() {
  return (
    <div>
<Navbar />
<div>
  <Hero />
  <Details/>
  <Footer/>
</div>
    </div>
  )
}

export default App
