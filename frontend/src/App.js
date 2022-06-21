import React from 'react'
import {Routes, Route} from 'react-router-dom'
import{
  Navigation, 
  Welcome, 
  Transactions, 
  Loader,
  Footer,
  Scanner
} from './components'

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className="gradient-bg-welcome">
        <Navigation />
        <Welcome />
      </div>
      <Scanner />
      <Transactions />
      <Footer />

    </div>
  )
}

export default App