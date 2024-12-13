import React from 'react'
import Herocard from './Herocard'
import Image from '../assets/LandingPageImg.png'
import Newsletter from './Newsletter'
import Sharestory from './Sharestory'

(function () {
    if (window.beehiiv && window.beehiiv.showRecommendations) {
        window.beehiiv.showRecommendations();
    }
})();

export default function Hero() {
    return (
        <div className="min-h-screen">
            <div className='dark:bg-gray-900 pb-10 flex flex-col items-center justify-center max-w-full min-h-full rounded-bl-[80px] rounded-br-[80px]'>
                <div className='m-auto p-1 min-h-full max-w-screen-xl'>

                    <h1 className="mt-32 px-10 text-left text-[60px] max-xl:text-[55px] max-mxl:text-[45px] max-mlg:text-[40px] max-mid:text-[36px] max-phone:text-[30px] font-bold text-white font-coding">
                        <span className="shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]">Code to Career:</span> Explore the Journeys of Successful Tech Professionals
                    </h1>

                    <p className="mt-5 font-extralight px-10 mr-[15em] text-left text-[28px] max-xl:text-[26px] max-mxl:text-[24px] max-mlg:text-[26px] max-mlg:m-0 max-mid:text-[24px] max-phone:text-[18px] text-white font-coding">
                        Discover how software engineers achieve success in the tech industry by exploring their case studies, journeys, and advice for aspiring software engineers.
                    </p>

                    <div className='mt-8 px-10 text-left text-[28px] max-xl:text-[26px] max-mxl:text-[24px] max-mlg:text-[40px] max-mid:text-[36px] max-phone:text-[18px] text-white font-coding button-container'>
                        <a href="/stories">
                            <button
                                className="bg-white z-0 text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group" type="button">
                                <div className="bg-blue-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px" className="rotate-180">
                                        <path
                                            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                                            fill="#000000"
                                        ></path>
                                        <path
                                            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                                            fill="#000000"
                                        ></path>
                                    </svg>
                                </div>
                                <p className="font-normal translate-x-4">Learn More</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full mt-12 px-4 sm:px-6 lg:px-8">
                <h1 className='text-[30px] max-xl:text-[32px] max-xl:px-80 max-mxl:text-[30px] max-mxl:px-48 max-mid:text-[25px] max-mid:p-0 max-mlg:text-[30px] max-mlg:px-[22px] max-phone:text-[23px] max-phone:p-0 font-bold text-center text-gray-900 font-roboto mb-8'>
                    <span className="inline-block relative">
                        <span className="shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]">
                            <span className="relative z-0">
                                See exactly how other software engineers were able to achieve success in the Tech Industry.
                            </span>
                        </span>
                    </span>
                </h1>
                <Herocard />
                <br />
            </div>

            {/* <div className="flex justify-center mt-8">
                <div className="max-w-screen-sm w-full">
                    <Newsletter />
                </div>
            </div> */}
        </div>
    )
}
