import React from 'react'
import Video from './Video'


export default function Hero() {
    return (
        <section className='relative overflow-hidden'>
            <div className="min-h-screen bg-[#0E1217] pt-[12rem]">
                <div className='container relative'>
                    <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                        <h1 className='mb-6 text-white font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]'>
                            Code to Career: Explore the Journeys of Successful Tech Professionals
                        </h1>

                        <p className="body-1 text-white max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                            Unleash the power of AI within Brainwave. Upgrade your productivity
                            with Brainwave, the open AI chat app.
                        </p>
                    </div>
                </div>
                <Video />

            </div>
        </section>
    )
}

