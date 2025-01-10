import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Storiespage from '../components/Storiespage'
import Blogcard from '../components/Blogcard'

export default function Stories() {
  return (
    <>
      <div className='bg-[#0E1217]'>
        <Header />
        <Blogcard />
        <Footer />
      </div>
    </>
  )
}
