import React, { useState, useEffect, useRef } from 'react';
import card from '../data/Herocard.json';

export default function Herocard() {
    const [filteredItems] = useState(card);
    const [inView, setInView] = useState([]);

    const observer = useRef();

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView((prev) => [...prev, entry.target.id]);
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the card is in view
            }
        );

        // Observe each card
        filteredItems.forEach((_, index) => {
            const cardElement = document.getElementById(`herocard-${index}`);
            if (cardElement) {
                observer.current.observe(cardElement);
            }
        });

        return () => {
            // Clean up the observer when the component is unmounted
            observer.current.disconnect();
        };
    }, [filteredItems]);

    return (
        <div className="flex flex-col items-center gap-8 p-4">
            {filteredItems.map((herocard, index) => (
                <div
                    id={`herocard-${index}`}
                    key={herocard.id}
                    className={`w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
                        inView.includes(`herocard-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Left Section with Image */}
                        <div className="min-w-[250px]">
                            <img
                                src={herocard.Image}
                                alt={herocard.Title}
                                className="w-[250px] h-[250px] object-cover object-center max-lmid:rounded-full max-lmid:h-[150px] max-lmid:w-[150px] max-lmid:m-auto max-lmid:mt-5"
                            />
                        </div>

                        {/* Right Section with Content */}
                        <div className="flex flex-col p-6">
                            <div className="w-full justify-center items-center">
                                <h2 className="text-2xl font-bold tracking-wide mb-4">{herocard.Title}</h2>
                            </div>
                            <ul>
                                <li className="flex items-center">
                                    <i className="bx bx-check text-blue-500 mr-2"></i>
                                    <span>{herocard.Point1}</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="bx bx-check text-blue-500 mr-2"></i>
                                    <span>{herocard.Point2}</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="bx bx-check text-blue-500 mr-2"></i>
                                    <span>{herocard.Point3}</span>
                                </li>
                                <br />
                                <li className="flex items-center">
                                    <a href={herocard.Links} className='font-bold text-blue-500 shadow-[inset_0_-0.15em_rgba(37,99,235,0.8)]'>
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
