import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Details from './Details/Details'
import Footer from './Footer/Footer'
import About from './About'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Products from './Products'
import Categories from "./Categories"



function App() {
  return (
    <div>
<Navbar />
<div>
  <Hero />
  <Details/>
  <Footer/> 
  <BrowserRouter>
  <Routes>
    <Route path="/about" element={<About/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/categories" element={<Categories/>} />
  </Routes>
  </BrowserRouter>
</div>
    </div>
  )
}

export default App
