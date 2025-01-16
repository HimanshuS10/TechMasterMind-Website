'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../src/assets/Logo.svg';
import { Instagram, Twitter, Mail, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-6 mt-auto">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border border-white/15 md:p-6 max-md:p-3 rounded-xl mx-auto bg-black/30 backdrop-blur-md">
                    <div className="flex flex-col items-start gap-4 mb-4 md:mb-0">
                        <div className="flex items-center gap-4">
                            <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
                                <img src={Logo} alt="Logo" width={32} height={32} />
                            </div>
                            <div>
                                <h2 className="text-white font-semibold">Tech MasterMind</h2>
                                <p className="text-white/70 text-sm">Your Guide to Success in the Tech Industry</p>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black font-semibold py-2 px-4 rounded-lg"
                        >
                            <a href="/stories">
                                Start Reading
                            </a>
                        </motion.button>
                    </div>



                    <div className="flex flex-col items-end gap-4">
                        <nav>
                            <ul className="flex flex-wrap justify-end gap-4 text-sm">
                                <li><a href="#home" className="text-white/70 hover:text-white hover:underline transition">Home</a></li>
                                <li><a href="#about" className="text-white/70 hover:text-white hover:underline transition">About</a></li>
                                <li><a href="#stories" className="text-white/70 hover:text-white hover:underline transition">Stories</a></li>
                                <li><a href="#contact" className="text-white/70 hover:text-white hover:underline transition">Contact</a></li>
                            </ul>
                        </nav>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/himanshu_seervi10/" className="text-white/70 hover:text-white transition" aria-label="Instagram">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-white/70 hover:text-white transition" aria-label="Twitter">
                                <Twitter size={24} />
                            </a>
                            <a href="mailto:himseervi@gmail.com" className="text-white/70 hover:text-white transition" aria-label="Email">
                                <Mail size={24} />
                            </a>
                            <a href="https://www.instagram.com/himanshu_seervi10/" className="text-white/70 hover:text-white transition" aria-label="YouTube">
                                <Youtube size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="text-white/50 text-sm">© 2025 Tech MasterMind. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

