'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Mail, Youtube } from 'lucide-react'
import Pfp from '../../../assets/HimanshuS.png'

export default function Himanshucard() {
    return (
        <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border border-white/15 p-6 rounded-xl mx-auto bg-black/30 backdrop-blur-md">
                <div className="flex flex-col md:flex-row items-start gap-6 mb-6 md:mb-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden">
                        <img
                            src={Pfp}
                            alt="Image of Himanshu Seervi"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-white text-2xl font-semibold">Himanshu Seervi</h1>
                        <p className="text-white/70 text-sm mb-4">Founder of Tech MasterMind</p>
                        <motion.a
                            href="#Himanshublog"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black font-semibold py-2 px-4 rounded-lg inline-block"
                        >
                            Learn More
                        </motion.a>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4" id='Himanshublog'>
                    <p className="text-white/70 text-sm max-w-md">
                        Hi there! My name is Himanshu Seervi, and I am the founder of Tech MasterMind. On this page, I'll share what Tech MasterMind is all about and tell you a bit more about myself.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/himanshu_seervi10/" className="text-white/70 hover:text-white transition" aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="https://x.com/HimanshuSeervi_" className="text-white/70 hover:text-white transition" aria-label="Twitter">
                            <Twitter size={24} />
                        </a>
                        <a href="mailto:himseervi@gmail.com" className="text-white/70 hover:text-white transition" aria-label="Email">
                            <Mail size={24} />
                        </a>
                        {/* <a href="#" className="text-white/70 hover:text-white transition" aria-label="YouTube">
                            <Youtube size={24} />
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

