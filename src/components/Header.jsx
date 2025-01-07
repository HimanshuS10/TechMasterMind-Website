import React from 'react';
import Logo from '../assets/logo.svg';

const Navbar = () => {
    return (
        <header className="py-4 sticky top-0 z-50">
            <div className="container">
                <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl mx-auto bg-black/30 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
                            <img src={Logo} alt="Logo" className="h-8 w-8" />
                        </div>
                        <h1 className="text-white font-semibold">Tech MasterMind</h1>
                    </div>
                    <div className="hidden md:block mr-6">
                        <nav className="flex gap-8 text-sm">
                            <a href="#about" className="text-white/70 hover:text-white hover:underline transition">Home</a>
                            <a href="#experience" className="text-white/70 hover:text-white hover:underline transition">About</a>
                            <a href="#project" className="text-white/70 hover:text-white hover:underline transition">Stories</a>
                            <a href="#contact" className="text-white/70 hover:text-white hover:underline transition">Contact</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
