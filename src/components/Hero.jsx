import React from 'react'

export default function Hero() {
    return (
        <>
            <div>
                <h1 className='mt-28 text-center font-extralight text-white font-roboto text-[25px]'>Tech MasterMind</h1>
                <h1 className="text-[60px] max-sm:text-[30px] max-md:text-[35px] text-center font-bold text-white font-roboto max-xl:px-10">
                    <span className="shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]">Code to Career:</span> Explore the Journeys
                    of Successful Tech Professionals
                </h1>
                <p className="text-[28px] max-sm:text-[15px] max-md:text-[25px] text-center font-light mt-4 sm:mt-6 md:mt-3 text-white font-roboto">
                    Discover how software engineers achieve success in the tech
                    industry by exploring their case studies, journeys, and advice for aspiring software engineers.
                </p>
            </div>

            <img class="h-[200px] sm:h-[500px] md:h-[700px] w-[200px] sm:w-[500px] md:w-[700px] m-auto"
                src="assets/img/Logo-Icon.png" alt="Logo" />

                <div class="flex gap-4 justify-center mt-8">
                    <button
                        class="py-3 px-6 border-solid border-4 border-blue-600 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md transition duration-300 max-sm:text-[15px]">
                        Read Case Studies
                    </button>
                    <button
                        class="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition duration-300 max-sm:text-[15px]">
                        Read Case Studies
                    </button>
                </div>

            </>
            )
}
