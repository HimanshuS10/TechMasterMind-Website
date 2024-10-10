import React, { useState, useEffect } from 'react';
import card from '../data/Herocard.json';

export default function Herocard() {
    const [filteredItems, setFilteredItems] = useState(card);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5">
                {filteredItems.map((herocard) => (
                    <div key={herocard.id} className='m-auto'>
                        <div className="flex flex-col m-auto min-h-[300px] max-w-[400px] p-6 bg-[#27293F] border border-blue-900 rounded-lg shadow">
                            <div className="flex justify-center">
                                <img src={herocard.Image} alt={herocard.Title} className="w-20 h-20 rounded-full" />
                            </div>
                            <h5 className="text-2xl font-semibold text-white mt-2">
                                {herocard.Title}
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
