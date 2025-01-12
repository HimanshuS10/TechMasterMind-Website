import React from 'react'
import { Instagram, Twitter, Mail, Youtube } from 'lucide-react';

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
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">What is Tech MasterMind?</h1>
            <p>At Tech MasterMind, we conduct interviews with successful software engineers, delving into the insights and experiences that fueled their success. These compelling stories are designed to inspire aspiring software engineers like myself, offering not only motivation but also practical, specific advice to help navigate the path in the tech industry.</p>

            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Meet the Founder:</h1>
            <p>Hi there! My name is Himanshu Seervi and I am the founder of Tech MasterMind.</p>
            <p>Learn more about me <a href='/stories/Himanshu'> <u className='text-blue-500'>here</u>.</a></p>

            <div className="flex gap-4">
              <p>My Socials: </p>
              <a href="https://www.instagram.com/himanshu_seervi10/" className="text-white/70 hover:text-white transition" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="mailto:himseervi@gmail.com" className="text-white/70 hover:text-white transition" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

