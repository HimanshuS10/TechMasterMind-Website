import React, { useState } from 'react';
import info from '../data/cardInfo.json';
import Searchbar from './Searchbar';

export default function Card() {
    const [filteredItems, setFilteredItems] = useState(info);

    return (
        <>
            <Searchbar items={info} setFilteredItems={setFilteredItems} />
            <div className="flex p-5 w-full">
                <div className="grid gap-5 m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((infomation) => (
                        <a
                            key={infomation.id}
                            href={infomation.Links}
                            className="max-w-[520px] min-h-full bg-[#27293F] justify-center items-center mb-6 hover:shadow-[0px_0px_20px_#0085FF] transition-all duration-[400ms]"
                            id={`box-${infomation.id}`}
                        >
                            <div className="box">
                                <div id="box">
                                    <div className="max-w-[520px] h-[200px] overflow-hidden">
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