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
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="50" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g /></defs><g fill="#ffffff" fillOpacity="1"><g transform="translate(62.699216, 300.718391)"><g><path d="M 216.046875 -221.15625 C 217.304688 -221.15625 218.921875 -220.660156 220.890625 -219.671875 C 222.859375 -218.691406 223.84375 -216.144531 223.84375 -212.03125 L 223.84375 -203.4375 L 203.171875 -203.4375 L 203.171875 -191.09375 C 203.171875 -186.625 202.1875 -183.894531 200.21875 -182.90625 C 198.25 -181.925781 196.640625 -181.4375 195.390625 -181.4375 L 126.40625 -181.4375 L 126.40625 -173.375 L 180.625 -173.375 L 180.625 -166.9375 L 131.78125 -166.9375 L 131.78125 -129.09375 L 154.0625 -129.09375 L 154.0625 -109.5 L 136.078125 -109.5 L 136.078125 -79.984375 L 157.015625 -79.984375 L 157.015625 -73.53125 L 131.78125 -73.53125 L 131.78125 -54.21875 L 157.015625 -54.21875 L 157.015625 -34.890625 L 140.90625 -34.890625 L 148.953125 -34.890625 L 148.953125 -15.828125 L 155.9375 -15.828125 L 155.9375 -9.125 C 155.9375 -5.007812 154.953125 -2.457031 152.984375 -1.46875 C 151.015625 -0.488281 149.492188 0 148.421875 0 L 123.453125 0 C 122.378906 0 120.859375 -0.488281 118.890625 -1.46875 C 116.921875 -2.457031 115.9375 -5.007812 115.9375 -9.125 L 115.9375 -15.828125 L 92.59375 -15.828125 L 92.59375 -34.890625 L 107.359375 -34.890625 L 107.359375 -54.21875 L 91.796875 -54.21875 L 91.796875 -73.53125 L 107.359375 -73.53125 L 107.359375 -79.984375 L 96.078125 -79.984375 L 96.078125 -109.5 L 107.359375 -109.5 L 107.359375 -129.09375 L 91.796875 -129.09375 L 91.796875 -166.9375 L 115.9375 -166.9375 L 115.9375 -173.375 L 86.6875 -173.375 L 86.6875 -181.4375 L 17.71875 -181.4375 C 16.457031 -181.4375 14.84375 -181.925781 12.875 -182.90625 C 10.914062 -183.894531 9.9375 -186.625 9.9375 -191.09375 L 9.9375 -203.4375 L 30.59375 -203.4375 L 30.59375 -212.03125 C 30.59375 -216.144531 31.578125 -218.691406 33.546875 -219.671875 C 35.515625 -220.660156 37.125 -221.15625 38.375 -221.15625 Z M 188.40625 -146.546875 L 188.40625 -153.515625 L 149.5 -153.515625 L 149.5 -146.546875 Z M 80.515625 -163.453125 L 80.515625 -166.9375 L 30.59375 -166.9375 L 30.59375 -163.453125 Z M 80.515625 -163.453125 " /></g></g></g></svg>
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
