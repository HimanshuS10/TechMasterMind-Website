import React, { useState } from 'react';

export default function Searchbar({ items, setFilteredItems }) {
    const [input, setInput] = useState('');

    const searchStory = (event) => {
        const inputValue = event.target.value.toLowerCase();
        setInput(inputValue);

        const filteredItems = items.filter((item) => {
            const title = item.Title.toLowerCase();
            const description = item.Description.toLowerCase();
            return title.includes(inputValue) || description.includes(inputValue);
        });

        setFilteredItems(filteredItems);
    };

    return (
        <div className="py-6 top-0 z-50">
            <div className="container">
                    <input
                        className="p-2 rounded-lg bg-white text-black"
                        type="search"
                        id="searchbar"
                        value={input}
                        onChange={searchStory}
                        placeholder="Search..."
                    />
            </div>
        </div>
    );
}
