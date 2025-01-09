import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.svg';
import BurgerIcon from './BurgerIcon';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="py-6 sticky top-0 z-50">
            <div className="container">
                <div className="flex md:py-5 justify-between items-center border border-white/15 p-2.5 rounded-xl mx-auto bg-black/30 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <a href="/" className="flex items-center gap-4">
                            <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
                                <img src={Logo} alt="Logo" width={32} height={32} />
                            </div>
                            <h1 className="text-white font-semibold">Tech MasterMind</h1>
                        </a>
                    </div>
                    <div className="hidden md:block mr-6">
                        <nav className="flex gap-8 text-sm">
                            <a href="/" className="text-white/70 hover:text-white hover:underline transition">Home</a>
                            <a href="/about" className="text-white/70 hover:text-white hover:underline transition">About</a>
                            <a href="/stories" className="text-white/70 hover:text-white hover:underline transition">Stories</a>
                            <a href="/contact" className="text-white/70 hover:text-white hover:underline transition">Contact</a>
                        </nav>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <BurgerIcon isOpen={isOpen} />
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 right-0 mt-[-20px] bg-black/50 backdrop-blur-md rounded-md m-5 border border-white/15"
                    >
                        <nav className="flex flex-col items-center py-4 ">
                            <a href="/" className="text-white/70 hover:text-white py-2 px-4 w-full text-center" onClick={toggleMenu}>Home</a>
                            <a href="/about" className="text-white/70 hover:text-white py-2 px-4 w-full text-center" onClick={toggleMenu}>About</a>
                            <a href="/stories" className="text-white/70 hover:text-white py-2 px-4 w-full text-center" onClick={toggleMenu}>Stories</a>
                            <a href="/contact" className="text-white/70 hover:text-white py-2 px-4 w-full text-center" onClick={toggleMenu}>Contact</a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
