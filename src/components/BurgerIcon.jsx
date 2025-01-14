import React from 'react';

const BurgerIcon = ({ isOpen }) => (
    <svg
        className="w-6 h-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
        ) : (
            <>
                <path d="M4 6h16" />
                <path d="M8 12h12" />
                <path d="M4 18h16" />
            </>
        )}
    </svg>
);

export default BurgerIcon;

