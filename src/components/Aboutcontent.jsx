import React from 'react'

export default function AboutContent() {
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
            <p>At daily.dev, we believe that developers are the architects of tomorrow. As the world evolves, so do the demands and expectations placed upon those who shape the digital landscape. We exist to empower developers with the tools, knowledge, and community they need to stay ahead of the curve and build the future.</p>
            <p>We are living in an extraordinary time. The future of development is being reshaped by forces that will change the way we think about coding, creativity, and problem-solving. As AI lowers the barriers to entry, we are seeing an unprecedented influx of new developers from all corners of the world. These new creators will not be defined by traditional technical skills alone. Instead, impact, creativity, and knowledge will take center stage.</p>
            <p>daily.dev is more than just a platform; it's a community where developers from diverse backgrounds come together to share, grow, and push the boundaries of what's possible. We offer a complete experience that combines cutting-edge content, meaningful connections, and opportunities for personal and professional growth.</p>
            <p>The developer of tomorrow will need more than just technical know-how. As the landscape evolves, they will need guidance, support, and a thriving community to help them navigate their careers. At daily.dev, we are building the future with that vision in mind—a place where developers can shape their identities, expand their influence, and find the opportunities that align with their goals.</p>
            <p>We understand that today's developers need more than fragmented solutions. That's why we've created a platform that brings everything together under one roof. By offering an ecosystem where knowledge, community, and opportunity converge, we are empowering developers to lead the charge into the future.</p>
            <p>What drives us is the belief that every developer should have the chance to reach their full potential. We are motivated by the vision of a world where their work has a lasting impact and where they are recognized for the real value they bring.</p>
            <p>This is our mission: to build the future for those who are building the future.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

