import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
import Pfp from '../../../assets/Jason-Profile.jpg'


export default function Jasoncard() {
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
                        <h1 className="text-white text-2xl font-semibold">Jason Goodison</h1>
                        <p className="text-white/70 text-sm mb-4">Founder of SuperCall</p>
                        <motion.a
                            href="#Jasonblog"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black font-semibold py-2 px-4 rounded-lg inline-block"
                        >
                            Learn More
                        </motion.a>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4" id='Jasonblog'>
                    <p className="text-white/70 text-sm max-w-md">
                        Meet Jason Goodison, the founder of a software company called SuperCall. Learn how Jason became a software engineer despite struggling with coding, and having worked for Yahoo, Toast, and Microsoft before becoming an techpreneur.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/jasongoodison/" className="text-white/70 hover:text-white transition" aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/jasonlevigoodison/" className="text-white/70 hover:text-white transition" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://x.com/GoodisonJason" className="text-white/70 hover:text-white transition" aria-label="Twitter/X">
                            <Twitter size={24} />
                        </a>
                        <a href="https://www.youtube.com/@JasonGoodison" className="text-white/70 hover:text-white transition" aria-label="YouTube">
                            <Youtube size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
