import React from 'react'
import Herocard from './Herocard'
import Image from '../assets/LandingPageImg.png'
import Sharestory from '../pages/Contact'

export default function Hero() {
    return (
        <>
            <div className="dark:bg-gray-900 flex items-center justify-center min-h-screen">
                <div className="m-auto p-1 min-h-screen mx-5 max-w-[1300px]">
                    <div>
                        <h1 className='mt-28 text-center font-extralight text-white font-roboto text-[25px]'>Tech MasterMind</h1>
                        <h1 className="text-[60px] px-44 max-xl:px-40 max-xl:text-[55px] max-mxl:px-28 max-mxl:text-[50px] max-mlg:px-12 max-mlg:text-[40px] max-mid:px-6 max-mid:text-[36px] max-phone:px-4 max-phone:text-[30px] text-center font-bold text-white font-roboto">
                            <span className="shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]">Code to Career:</span> Explore the Journeys of Successful Tech Professionals
                        </h1>
                        <p className="text-[28px] px-44 max-xl:px-40 max-xl:text-[26px] max-mxl:px-20 max-mxl:text-[24px] max-mlg:px-16 max-mlg:text-[22px] max-mid:px-8 max-mid:text-[20px] max-phone:px-4 max-phone:text-[18px] text-center font-light mt-4 sm:mt-6 md:mt-3 text-white font-roboto">
                            Discover how software engineers achieve success in the tech industry by exploring their case studies, journeys, and advice for aspiring software engineers.
                        </p>
                    </div>

                    <img className='mt-5 m-auto min-w-screen p-3 w-[700px]' src={Image} alt="" />

                    <h1 className='text-[40px] px-44 max-xl:px-40 max-mxl:px-24 max-mxl:text-[37px] max-mlg:px-20 max-mlg:text-[30px] max-mid:px-4 max-mid:text-[26px] max-phone:px-2 max-phone:text-[22px] text-center font-bold text-white font-roboto'>
                        See exactly how other software engineers were able to achieve success in the Tech Industry.
                    </h1>

                    <Herocard />

                    <div className='mt-9 m-auto'>
                        <h1 className='text-[28px] px-44 max-xl:px-40 max-xl:text-[26px] max-mxl:px-20 max-mxl:text-[24px] max-mlg:px-16 max-mlg:text-[22px] max-mid:px-8 max-mid:text-[20px] max-phone:px-4 max-phone:text-[18px] text-center font-bold sm:mt-6 md:mt-3 text-white font-roboto'>
                            Working in Tech? Techpreneur?
                        </h1>

                        <p className='text-[28px] px-44 max-xl:px-40 max-xl:text-[26px] max-mxl:px-20 max-mxl:text-[24px] max-mlg:px-16 max-mlg:text-[22px] max-mid:px-8 max-mid:text-[20px] max-phone:px-4 max-phone:text-[18px] text-center font-light mt-4 sm:mt-6 md:mt-3 text-white font-roboto'>
                            Share your story with us.
                        </p>

                        <div className='m-auto text-center mt-5'>
                            <a href="../contact" className='h-100px w-100px bg-transparent p-2 borde-solid border-2 border-blue-500 text-white hover:bg-blue-500 duration-1000'>Share Story</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
