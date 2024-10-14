import React, { useState, useEffect } from 'react';
import info from '../data/cardInfo.json';
import Searchbar from './Searchbar';

export default function Card() {
    const [filteredItems, setFilteredItems] = useState(info);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set the visibility state to true after the component mounts
        setIsVisible(true);
    }, []);

    return (
        <>
            <Searchbar items={info} setFilteredItems={setFilteredItems} />
            <div className="flex p-5 w-full">
                <div className="grid gap-5 m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((infomation) => (
                        <a
                            key={infomation.id}
                            href={infomation.Links}
                            className="max-w-[520px] min-h-full bg-[#27293F] justify-center items-center mb-6 shadow-lg shadow-black hover:bg-[#30324d]"
                            id={`box-${infomation.id}`}
                        >
                            <div>
                                <div id="box">
                                    <div className="max-w-full h-[200px] overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={infomation.Image}
                                            alt="Profile Image"
                                        />
                                    </div>
                                    <h1 id="blog-title" className="text-2xl text-left p-2 font-bold text-white">
                                        {infomation.Title}
                                    </h1>
                                    <p className="text-[20px] font-thin text-left p-2 text-white">
                                        {infomation.Description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
