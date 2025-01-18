import React from 'react';
import Playbtn from '../assets/Playbtn.svg';
import Image from '../assets/placeholder.png';
import HeroImg from '../assets/HeroImg.png';
import Display from '../assets/DisplayImg.svg';

export default function Video() {

    return (
        <div className="container relative flex flex-col items-center bg-black p-6 mb-20 rounded-lg shadow-2xl shadow-blue-500 mt-24 max-md:mt-10 mx-auto max-w-4xl">
            {/* Play Button */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10">
                <a href="https://youtu.be/H0NrEse1gh4" target="_blank">
                    <img
                        src={Playbtn}
                        alt="Play Button"
                        className="h-40 w-40 max-md:h-20 max-md:mt-10 hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                </a>
            </div>

            {/* Embedded Video */}
            <div className="w-full aspect-w-16 aspect-h-9">
                <picture className="grid w-full aspect-video grid-rows-picture mx-auto">
                    {/* Image */}
                    <img
                        src={Display}
                        alt="Mouse"
                        className="w-full h-full object-cover clip-img mx-auto text-center"
                    />
                </picture>
            </div>
        </div>
    );
}

