import React from 'react'
import Navbar from '../../components/Navbar'
import Blog from '../../components/Blogs/Brianblog'
import Footer from '../../components/Footer'

export default function Brian() {
    return (
        <div className='min-h-screen flex flex-col dark:bg-gray-900'>
            <Navbar />
            <Blog />
            <Footer />
        </div>
    )
}
