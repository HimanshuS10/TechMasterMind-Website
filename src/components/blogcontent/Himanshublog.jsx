import React from 'react'
import Himanshucard from './blogcards/Himanshucard'

export default function Himanshublog() {
    return (
        <div className='container mx-auto relative'>
            <div className='bg-black/30 border border-n-2/10 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden'>

                < Himanshucard />


                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center sm:text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                        <span className='shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]'>Building Tech MasterMind:</span> My Journey and Vision
                    </h1>
                    <div className='text-white text-base sm:text-lg md:text-xl space-y-4 sm:space-y-6 max-w-4xl mx-auto'>
                        <p>Hi there! I am Himanshu Seervi, the founder of Tech MasterMind. I am a 2nd year broke univeristy student studying software engineering at University of Guelph.</p>
                        <p>As we all know, the job market for software engineering and tech in general has been bad after COVID-19.

                        </p>
                        <p>This is impacting many people—students and full time workers. Personally, I feel stressed about whether I will be able to secure a full-time job after graduation.

                        </p>
                        <p>So I started working on some side project to get ahead but as soon as I opened VSCode I had no idea what to build. I didn't want to build a basic program like Weather App, or a Calculator.

                        </p>

                        <p>I just wish someone could provide step-by-step guidance on what I can do or build to succeed in this industry.

                        </p>

                        <p>Then this problom sparkles an idea in my head, what if I build something where I can create a platform that provides the guidance I was seeking?

                        </p>
                        <p>A platform where all the aspiring software engineers and technopreneurs can learn directly from the journeys and experiences of the successful people in this field.

                        </p>
                        <p>This is how Tech MasterMind was born—a unique platform inspired by the concept of Starter Story but tailored specifically for the tech industry.

                        </p>
                        <p>So Tech MasterMind is an online platform where I will interview various technopreneurs and software engineers. I will ask them about their journeys and how they achieved success in this field.

                        </p>

                        <p>I will then compile those interviews into "success story blogs" so that aspiring software engineers and technopreneurs can learn from their experiences and implement their advices.</p>
                        <p>Thanks for reading!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
