import React from 'react'

export default function Contactcontet() {
    return (
        <div className='container mx-auto relative'>
            <div className='bg-black/30 border border-n-2/10 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden'>
                {/* Gradient shapes */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center sm:text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                        <span className='shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]'>Building Tech MasterMind:</span> My Journey and Vision
                    </h1>
                    <div className='text-white text-base sm:text-lg md:text-xl space-y-4 sm:space-y-6 max-w-4xl mx-auto'>
                        <p>Hi Hi there! I'm Himanshu Seervi, the founder of Tech MasterMind. I created this website with the goal of helping students like me who are interested in pursuing a successful career in software engineering. To achieve this, my goal is conduct interviews with many software engineers and tech entrepreneurs as possible, to share their personal journeys and valuable advice on how others can achieve success in this field.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
