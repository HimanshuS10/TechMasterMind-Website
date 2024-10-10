import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import '../App.css'

export default function Stories() {
  return (
    <div className='min-h-screen flex flex-col dark:bg-gray-900'>
        <Navbar />
        <Card />
        <Footer />
    </div>
  )
}
