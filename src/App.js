import React from 'react'

import { Brand, CTA, Navbar } from './components'
import { Blog, Feature, Footer, Header, Possibility, possibility, WhatGPT3 } from './conatiners'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      

    </div>
  )
}

export default App