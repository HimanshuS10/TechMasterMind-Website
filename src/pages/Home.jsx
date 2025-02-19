import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Herocard from '../components/Herocard'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className='bg-[#0E1217]'>
            <Header />
            <Hero />
            <Herocard />
            <Footer />
        </div>
    )
}
