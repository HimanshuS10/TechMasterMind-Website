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
                    <svg width="50" height="50" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="496" y="790" width="445" height="87" transform="rotate(-90 496 790)" fill="white" />
                        <rect x="1010" y="707" width="954" height="87" transform="rotate(180 1010 707)" fill="white" />
                        <rect x="124" y="292" width="858" height="87" fill="white" />
                        <mask id="path-4-outside-1_88_85" maskUnits="userSpaceOnUse" x="1" y="242" width="1078" height="657" fill="black">
                            <rect fill="white" x="1" y="242" width="1078" height="657" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M130 292H51V707H130V405.859L538.03 827.782L539.909 825.964L541.789 827.782L949.818 405.859V707H1028.82V292H949.818V292.219L539.909 716.085L130 292.219V292Z" />
                        </mask>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M130 292H51V707H130V405.859L538.03 827.782L539.909 825.964L541.789 827.782L949.818 405.859V707H1028.82V292H949.818V292.219L539.909 716.085L130 292.219V292Z" fill="white" />
                        <path d="M51 292V242H1V292H51ZM130 292H180V242H130V292ZM51 707H1V757H51V707ZM130 707V757H180V707H130ZM130 405.859L165.942 371.101L80 282.232V405.859H130ZM538.03 827.782L502.087 862.54L536.846 898.483L572.788 863.724L538.03 827.782ZM539.909 825.964L574.668 790.022L539.909 756.408L505.151 790.022L539.909 825.964ZM541.789 827.782L507.03 863.724L542.972 898.483L577.731 862.54L541.789 827.782ZM949.818 405.859H999.818V282.232L913.876 371.101L949.818 405.859ZM949.818 707H899.818V757H949.818V707ZM1028.82 707V757H1078.82V707H1028.82ZM1028.82 292H1078.82V242H1028.82V292ZM949.818 292V242H899.818V292H949.818ZM949.818 292.219L985.76 326.977L999.818 312.441V292.219H949.818ZM539.909 716.085L503.967 750.843L539.909 788.009L575.851 750.843L539.909 716.085ZM130 292.219H80V312.441L94.0579 326.977L130 292.219ZM51 342H130V242H51V342ZM101 707V292H1V707H101ZM130 657H51V757H130V657ZM80 405.859V707H180V405.859H80ZM573.972 793.023L165.942 371.101L94.0579 440.618L502.087 862.54L573.972 793.023ZM505.151 790.022L503.271 791.84L572.788 863.724L574.668 861.906L505.151 790.022ZM505.151 861.906L507.03 863.724L576.547 791.84L574.668 790.022L505.151 861.906ZM577.731 862.54L985.76 440.618L913.876 371.101L505.847 793.023L577.731 862.54ZM999.818 707V405.859H899.818V707H999.818ZM1028.82 657H949.818V757H1028.82V657ZM978.818 292V707H1078.82V292H978.818ZM949.818 342H1028.82V242H949.818V342ZM999.818 292.219V292H899.818V292.219H999.818ZM913.876 257.46L503.967 681.326L575.851 750.843L985.76 326.977L913.876 257.46ZM94.0579 326.977L503.967 750.843L575.851 681.326L165.942 257.46L94.0579 326.977ZM80 292V292.219H180V292H80Z" fill="#111827" mask="url(#path-4-outside-1_88_85)" />
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
                <div className="hidden text-xl w-full md:block md:w-auto font-coding" id="navbar-default">
                    <ul
                        className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="../"
                                className="font-light block py-2 px-3 text-white relative group ">
                                <span>Home</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
                            </a>
                        </li>
                        <li>
                            <a href="../stories/Himanshu"
                                className="font-light block py-2 px-3 text-white relative group ">
                                <span>About</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
                            </a>
                        </li>
                        <li>
                            <a href="../stories"
                                className="font-light block py-2 px-3 text-white relative group ">
                                <span>Stories</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
                            </a>
                        </li>
                        <li>
                            <a href="../contact"
                                className="font-light block py-2 px-3 text-white relative group ">
                                <span>Contact</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full h-1 bg-[#ccc]">
                <div className="h-1 w-0 bg-blue-600" id="myBar"></div>
            </div>
        </nav>
    );
}
