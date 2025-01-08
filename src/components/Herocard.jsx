import React from 'react';
import card from '../data/Hero.json';

export default function Herocard() {
    return (
        <div className="flex flex-col items-center gap-8 p-4">
            {card.map((item, index) => (
                <div
                    id={`herocard-${index}`}
                    key={item.id}
                    className="w-full max-w-4xl bg-transparent border-[2px] border-blue-900 rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out opacity-100 translate-y-0 hover:shadow-[0_8px_15px_rgba(0,0,0,0.2),0_0_20px_5px_rgba(59,130,246,0.5),0_0_30px_10px_rgba(93,53,183,0.3)] hover:scale-105"
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Left Section with Image */}
                        <div className="min-w-[250px]">
                            <img
                                src={item.Image}
                                alt={item.Title}
                                className="w-[250px] h-[250px] object-cover object-center rounded-xl max-lmid:h-[150px] max-lmid:w-[150px] max-lmid:m-auto max-lmid:mt-5"
                            />
                        </div>

                        {/* Right Section with Content */}
                        <div className="flex flex-col p-6">
                            <h2 className="text-2xl font-bold tracking-wide mb-4">{item.Title}</h2>
                            <ul>
                                <li className="flex items-center">
                                    <i className="bx bx-check text-blue-500 mr-2"></i>
                                    <span>{item.Point1}</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="bx bx-check text-blue-500 mr-2"></i>
                                    <span>{item.Point2}</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="bx bx-check text-blue-500 mr-2"></i>
                                    <span>{item.Point3}</span>
                                </li>
                                <br />
                                <li className="flex items-center">
                                    <a
                                        href={item.Links}
                                        className="font-bold text-blue-500 shadow-[inset_0_-0.15em_rgba(37,99,235,0.8)]"
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
