import React from 'react';
import card from '../data/Hero.json';

export default function Herocard() {
    return (
        <div className="flex flex-col items-center gap-8 p-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 max-w-4xl mx-auto leading-tight">
                See exactly how other software engineers were able to achieve success in the Tech Industry.
            </h1>
            {card.map((item, index) => (
                <div
                    id={`herocard-${index}`}
                    key={item.id}
                    className="w-full max-w-4xl bg-transparent border-[2px] border-white/15 rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out opacity-100 translate-y-0 hover:shadow-[0_8px_15px_rgba(0,0,0,0.2),0_0_20px_5px_rgba(59,130,246,0.5),0_0_30px_10px_rgba(93,53,183,0.3)] hover:scale-105"
                >
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Left Section with Image */}
                        <div className="md:min-w-[250px] md:max-w-[250px] flex justify-center md:justify-start h-full">
                            <img
                                src={item.Image}
                                alt={item.Title}
                                className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-cover object-center rounded-xl m-4 md:my-auto md:ml-4"
                            />
                        </div>

                        {/* Right Section with Content */}
                        <div className="flex flex-col p-10">
                            <h2 className="text-xl md:text-2xl font-bold tracking-wide mb-4 text-white">{item.Title}</h2>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <i className="bx bx-check text-blue-500 mr-2"></i>
                                    <span className="text-white/80">{item.Point1}</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="bx bx-check text-blue-500 mr-2"></i>
                                    <span className="text-white/80">{item.Point2}</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="bx bx-check text-blue-500 mr-2"></i>
                                    <span className="text-white/80">{item.Point3}</span>
                                </li>
                                <li className="flex items-center pt-4">
                                    <a
                                        href={item.Links}
                                        className="font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300 shadow-[inset_0_-0.15em_rgba(37,99,235,0.8)]"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Read More &#8594;
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

