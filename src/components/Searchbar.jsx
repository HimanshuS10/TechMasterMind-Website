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
        <div className="pb-6 top-0 z-50">
            <input
                className="p-2 min-w-full max-w-md rounded-lg bg-white text-black "
                type="search"
                id="searchbar"
                value={input}
                onChange={searchStory}
                placeholder="Search..."
            />
        </div>
    );
}
