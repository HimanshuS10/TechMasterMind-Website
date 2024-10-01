import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Main() {
  return (
    <div className='min-h-screen flex flex-col dark:bg-gray-900'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}
