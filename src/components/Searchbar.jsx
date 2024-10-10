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
        <div className="mt-20 max-md:mt-24 p-5 flex justify-center items-center">
            <input
                className="max-w-[1585px] p-2 w-full rounded-lg"
                type="search"
                id="searchbar"
                value={input}
                onChange={searchStory}
                placeholder="Search..."
            />
        </div>
    );
}