import React from 'react'
import Navbar from '../../components/Navbar'
import Blog from '../../components/Blogs/Himanshublog'
import Footer from '../../components/Footer'

export default function Himanshu() {
    return (
        <div className='min-h-screen flex flex-col dark:bg-gray-900'>
            <Navbar />
            <Blog />
            <Footer />
        </div>
    )
}
