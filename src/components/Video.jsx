import React from 'react';
import Playbtn from '../assets/PlayBtn.svg';
import Image from '../assets/placeholder.png';

export default function Video() {


    function playVideo(e) {
        console.log("Playing Video");
    };


    return (
        <div className="container relative flex flex-col items-center bg-black p-4 rounded-lg shadow-2xl shadow-blue-500 mt-20 z-[-10]">
            {/* Play Button */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 " >
                <a href="" onClick={playVideo}>


                    <img
                        src={Playbtn}

                        alt="Play Button"
                        className="h-32 w-32 hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                </a>
            </div>

            {/* Video Title */}
            <h2 className="text-lg font-semibold mb-2 text-gray-700 mt-10">
                Inspiring Video: How Great Minds Think
            </h2>

            {/* Embedded Video */}
            <div className="w-full aspect-w-16 aspect-h-9">
                <picture className="grid w-[400px] aspect-[4/3] grid-rows-picture mx-auto">

                    {/* Image */}
                    <img
                        src={Image}
                        alt="Mouse"
                        className="grid-area-[2/1/4/2] w-full h-full object-cover clip-img mx-auto text-center"
                    />

                    {/* Caption */}
                    {/* <figcaption className="grid-area-[1/1/2/2] justify-self-end min-w-[50%] min-h-[calc(var(--cs)*2+var(--bs))] grid place-items-center text-center bg-red-500 text-white clip-path-[polygon(var(--cs) 0,100% 0,100% 100%,0 100%,0 var(--cs))]">
                        Mouse
                    </figcaption> */}
                </picture>
            </div>

            {/* Video Description */}
            <p className="text-sm text-gray-500 mt-2">
                Watch this inspiring video to gain insights into successful thinking strategies.
            </p>
        </div>
    );
}
