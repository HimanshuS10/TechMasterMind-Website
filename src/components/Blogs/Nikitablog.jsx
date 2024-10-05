import React from 'react'
import Pfp from '../../assets/NikitaV.jpg'

export default function Nikitablog() {
    return (
        <div class="dark:bg-gray-900 text-[#DCDCDD] flex align-item-center justify-content-center m-auto">

            <div className="m-auto p-1 bg-[#27293F] min-h-screen mx-5 mt-32 mb-10">

                <div className="p-5 z-0">
                    <div
                        className="mt-5 max-w-[650px] bg-[#2d2f34] rounded-2xl m-auto flex flex-col md:flex-row drop-shadow-2xl overflow-hidden">
                        <div className="w-full md:w-[300px] h-[300px]">
                            <img src={Pfp} className="w-full h-full object-cover"
                                alt="Nikita Verkhoshintcev" />
                        </div>
                        <div className="text-white flex flex-col justify-center space-y-3 p-5 w-full md:w-6/12">
                            <h1 className="text-2xl font-bold">Nikita Verkhoshintcev</h1>
                            <h2 className="text-xl">Salesforce Consultant at <br /><a href="https://www.digitalflask.com/"
                                className="text-blue-400 hover:underline">Digital Flask</a></h2>
                            <p className="text-base text-gray-300">
                                Nikita Verkhoshintcev's journey from a novice coder to a Salesforce Developer and Solution
                                Architect. It covers his experiences with learning to code and much more, and also offers
                                practical advice for aspiring developers.
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="max-w-[900px] m-auto" />

                <div className="px-10 max-w-[1300px] leading-7 mt-5 md:px-52 sm:px-10 max-phone:px-5">
                    <h1 className="mt-7 text-4xl font-bold max-x-sm:text-2xl">Learning to Code to Becoming a <a href="#"
                        className="shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]">Salesforce
                        Developer.</a></h1>

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Hi, I’m Nikita Verkhoshintcev, and here’s
                        how I became a self-taught developer.</p>

                    <h1 className="mt-7 text-4xl font-bold max-mid:text-3xl max-phone:text-2xl max-phone:my-0">Early Stage</h1>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">My journey began with an idea for an iPhone
                        app, but I didn’t know how to code. A friend introduced me to <a href="https://teamtreehouse.com/"
                            target="_blank" className="underline decoration-blue-500">Treehouse</a>, where I immersed myself in
                        learning programming, dedicating up to 12 hours a day. After a few months, I hit a plateau and
                        took a break.</p>

                    <h1 className="mt-7 text-4xl font-bold max-mid:text-3xl max-phone:text-2xl max-phone:my-0">Learning Web Design</h1>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">When I resumed, I focused on web design,
                        learning HTML, CSS, and design concepts. JavaScript was challenging, especially with layout
                        issues like floats, but a friend helped me out. He also recommended learning Git and MVC for job
                        prospects.</p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">By May/June 2015, I was taking Front-End
                        Development and Full Stack JavaScript courses on Treehouse.</p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">I explored freelancing, read extensively,
                        and learned about WordPress development to give clients control over their websites.</p>

                    <h1 className="mt-7 text-4xl font-bold max-mid:text-3xl max-phone:text-2xl max-phone:my-0">Freelancing</h1>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">In August 2015, I started freelancing. My
                        initial challenge was finding clients. Offering my services for free to gain experience led me
                        to my first client—a local goldsmith-designer.</p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">This project helped me gain practical
                        experience with WordPress and WooCommerce.</p>

                    <h1 className="mt-7 text-4xl font-bold max-mid:text-3xl max-phone:text-2xl max-phone:my-0">Personal Projects</h1>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Next, I tackled AngularJS, creating a
                        single-page application (Magic Spoiler.io). I faced issues like integrating the Disqus plugin
                        and making the site SEO-friendly, but it was a great learning experience.</p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">I joined <a href="https://www.upwork.com/"
                        target="_blank" className="underline decoration-blue-500">UpWork</a>, landed my first paid job
                        designing and building a WordPress site
                        from scratch, and completed MEAN stack courses through Code School.</p>

                    <h1 className="mt-7 text-4xl font-bold max-mid:text-3xl max-phone:text-2xl max-phone:my-0">Current Stage and My Advice</h1>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Currently, I’m a Salesforce
                        Developer/Solution Architect at DigitalFlask.</p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">For those starting out, there are many free
                        resources available, such as <a href="https://teamtreehouse.com/" target="_blank"
                            className="underline decoration-blue-500">Treehouse</a>,
                        <a href="https://www.codeschool.co/" target="_blank" className="underline decoration-blue-500">Code
                            School</a>, and <a href="https://www.freecodecamp.org/" target="_blank"
                                className="underline decoration-blue-500">FreeCodeCamp.</a> My advice: practice a
                        lot, build your own projects, and create a portfolio. Good luck!
                    </p>

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Thank You for reading!</p>

                </div>
            </div>
        </div>
    )
}
