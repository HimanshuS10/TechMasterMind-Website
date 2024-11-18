// Note the about page is not working please check the code and fix it.

// Deploy date: 2024-11-17

import React from 'react'
import Himanshu from '../assets/HimanshuS.png'

export default function Newsletter() {
    return (
        <>
            <div className="relative m-auto max-w-[920px] mb-10 bg-white shadow-lg p-5">

                <h1 className='text-[22px] sm:text-[26px] lg:text-[35px] font-bold text-center dark:text-black font-roboto max-w-[500px] m-auto'>
                    Find out what it takes to be successful in the Tech Industry.
                </h1>

                <br />

                <hr />

                <br />

                <div
                    class="shadow-lg flex gap-2 border-2 border-black items-center p-2 hover:shadow-xl duration-300 group delay-200 rounded-md"
                >
                    <svg
                        class="group-hover:rotate-[360deg] duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                    >
                        <path
                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        ></path>
                        <path d="M22 6l-10 7L2 6"></path>
                    </svg>
                    <input
                        type="email"
                        name="text"
                        className="flex-1 focus:outline-none text-black"
                        placeholder="Email"
                    />

                </div>
                <button
                    type="submit"
                    className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                    Subscribe
                </button>

            </div>
        </>
    )
}
