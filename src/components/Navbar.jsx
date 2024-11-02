import React, { useEffect } from 'react';
import '../App.css';

export default function Navbar() {
    useEffect(() => {
        // Function to update the progress bar on scroll
        function updateProgressBar() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";
        }

        // Set the scroll event listener
        window.addEventListener('scroll', updateProgressBar);

        // Function to handle menu toggle
        function handleMenuToggle() {
            const toggleButton = document.querySelector('[data-collapse-toggle]');
            const menu = document.getElementById(toggleButton.getAttribute('data-collapse-toggle'));

            toggleButton.addEventListener('click', () => {
                const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
                toggleButton.setAttribute('aria-expanded', !expanded);
                menu.classList.toggle('hidden');
            });
        }

        // Initialize menu toggle
        handleMenuToggle();

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener('scroll', updateProgressBar);
        };
    }, []);

    return (
        <nav className="fixed w-full bg-white border-gray-200 dark:bg-gray-900 z-10">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="../" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg width="50" height="50" viewBox="0 0 911 911" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M143.426 283H423.426L415.426 325H298.926L237.426 643H189.426L250.926 325H135.426L143.426 283ZM476.418 283H516.418L604.418 481L588.418 479L750.418 283H790.418L720.418 643H672.418L728.418 353L744.418 355L607.418 519H569.418L496.418 355L510.418 353L454.418 643H406.418L476.418 283Z" fill="white" />
                        <circle cx="455.5" cy="455.5" r="435.5" stroke="white" stroke-width="40" />
                        <line x1="147" y1="283.5" x2="62" y2="283.5" stroke="white" />
                        <line x1="147" y1="324.5" x2="54" y2="324.5" stroke="white" />
                        <rect x="57" y="284" width="87" height="40" fill="white" />
                        <line x1="863" y1="601.5" x2="724" y2="601.5" stroke="white" />
                        <line x1="863" y1="642.5" x2="717" y2="642.5" stroke="white" />
                        <rect x="717" y="602" width="141" height="40" fill="white" />
                    </svg>

                </a>

                <button data-collapse-toggle="navbar-default" type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden text-xl w-full md:block md:w-auto" id="navbar-default">
                    <ul
                        className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="../"
                                className="block py-2 px-3 text-white rounded hover:bg-blue-600 duration-200">Home</a>
                        </li>
                        <li>
                            <a href="../stories/Himanshu"
                                className="block py-2 px-3 text-white rounded hover:bg-blue-600 duration-200">About</a>
                        </li>
                        <li>
                            <a href="../stories"
                                className="block py-2 px-3 text-white rounded hover:bg-blue-600 duration-200">Stories</a>
                        </li>
                        <li>
                            <a href="../contact"
                                className="block py-2 px-3 text-white rounded hover:bg-blue-600 duration-200">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full h-2 bg-[#ccc]">
                <div className="h-2 w-0 bg-blue-600" id="myBar"></div>
            </div>
        </nav>
    );
}
