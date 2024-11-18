import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-white mt-auto shadow dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
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

                            <span className="self-center mb-1 font-coding text-[25px] whitespace-nowrap dark:text-white inline-block">
                                Tech MasterMind
                            </span>
                        </a>
                        <ul
                            className="flex flex-wrap items-center mb-6 text-sm font-medium dark:text-white sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="../stories/Himanshu" className="hover:underline me-4 md:me-6 font-coding">About</a>
                            </li>
                            <li>
                                <a href="../stories" className="hover:underline me-4 md:me-6 font-coding">Stories</a>
                            </li>
                            <li>
                                <a href="../contact" className="hover:underline font-coding">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm dark:text-white sm:text-center dark:text-gray-400">© 2024 <a className="">Tech
                        MasterMind</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}
