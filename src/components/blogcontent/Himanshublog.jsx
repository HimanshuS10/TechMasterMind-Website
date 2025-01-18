import React from 'react'
import Himanshucard from './blogcards/Himanshucard'
import Jobmarket from '../../assets/blogimg/Himanshu/Jobmarket.png'
import StarterStory from '../../assets/blogimg/Himanshu/StarterStory.png'

export default function Himanshublog() {
    return (
        <div className='container mx-auto relative'>
            <div className='bg-black/30 border border-n-2/10 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden'>

                < Himanshucard />


                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center sm:text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                        <span className='shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]'>Building Tech MasterMind:</span> 
                    </h1>
                    <div className='text-white text-base sm:text-lg md:text-xl space-y-4 sm:space-y-6 max-w-4xl mx-auto'>
                        <p>Hi there! My name is Himanshu Seervi, and I am the founder of Tech MasterMind. I am currently a second-year university student studying software engineering at the University of Guelph.</p>
                        <p>As we all know, the job market for software engineering and tech, in general, has been really bad after COVID-19. And its even more saturated than before making it very compettive.</p>

                        <img src={Jobmarket} className='max-h-80 mx-auto' alt="Job market of software engineering states" />

                        <p>This is impacting many people—students, making them stress whether they can secure a full-time position after graduation. Even I, as a software engineering student, feel incredibly overwhelmed and stressed about my future in this program.</p>
                        <p>I started working on a side project to get ahead and differentiate myself from others, but as soon as I opened VS Code, I had no idea what I wanted to build. I definitely didn’t want to create something basic like a weather app or a calculator. I wanted to build a software that would genuinely have an impact in the world.</p>

                        <p>I wish someone could provide a step-by-step blueprint on what I can do, build, or learn to succeed in this industry. Honestly, there is so much information available online that it's difficult to determine which sources are useful.</p>


                        <p>Then this problom sparkles an idea in my head, what if I build something where I can create a platform that provides the guidance I was seeking?</p>

                        <p>A website where all the aspiring software engineers and technopreneurs can learn directly from the journeys and experiences of the successful people in this field.</p>

                        <p>This is how Tech MasterMind was born—a unique platform inspired by the concept of Starter Story but tailored specifically for the tech industry.</p>

                        <hr />

                        <img src={StarterStory} className='max-h-80 mx-auto' alt="Job market of software engineering states" />

                        <div className='text-center px-3'>
                            <p><i>Starter Story is a website where Pat Walls, the founder, interviews successful entrepreneurs and shares their journeys.</i></p>
                        </div>

                        <hr />

                        <p>Tech MasterMind is an online platform where I will interview various technopreneurs and software engineers. I will ask them about their journeys and how they achieved success in their fields.</p>

                        <p>I will compile these interviews into "success story blogs" to help aspiring software engineers and technopreneurs learn from their experiences and implement their advice.</p>

                        <p>Thanks for reading!</p>

                        <hr />

                        <div className='max-md:text-center'>
                            <p className='mb-2'>Quick Links:</p>
                            <div className='flex flex-col gap-2'>
                                <a className='underline decoration-blue-500' href="/about">Learn More About Tech MasterMind.</a>
                                <a className='underline decoration-blue-500' href="/stories">Read Stories.</a>
                                <a className='underline decoration-blue-500' href="/contact">Submit your story.</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    )
}
