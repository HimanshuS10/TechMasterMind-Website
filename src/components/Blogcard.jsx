import React, { useState } from 'react';
import Searchbar from './Searchbar';
import info from '../data/cardInfo.json';

export default function Blogcard() {
    const [filteredItems, setFilteredItems] = useState(info);

    return (
        <div className="container mx-auto">
            <Searchbar items={info} setFilteredItems={setFilteredItems} />
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((information) => (
                    <a
                        key={information.id}
                        href={information.Links}
                        className="bg-[#27293F] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                        id={`box-${information.id}`}
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={information.Image}
                                alt={information.Title}
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-white mb-2">
                                {information.Title}
                            </h2>
                            <p className="text-sm text-white/70">
                                {information.Description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div >
    );
}

