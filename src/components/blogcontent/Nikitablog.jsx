import React from 'react';
import Nikitacard from './blogcards/Nikitacard';

export default function Nikitablog() {
    return (
        <div className='container mx-auto relative'>
            <div className='bg-black/30 border border-n-2/10 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden'>

                <Nikitacard />

                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center sm:text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                        Learning to Code to Becoming a Salesforce Developer
                    </h1>
                    <div className='text-white text-base sm:text-lg md:text-xl space-y-4 sm:space-y-6 max-w-4xl mx-auto'>
                        <p>Hi, I’m Nikita Verkhoshintcev, and here’s how I became a self-taught developer.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Early Stage</h1>
                        <p>My journey began with an idea for an iPhone app, but I didn’t know how to code. A friend introduced me to Treehouse, where I immersed myself in learning programming, dedicating up to 12 hours a day. After a few months, I hit a plateau and took a break.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Learning Web Design</h1>
                        <p>When I resumed, I focused on web design, learning HTML, CSS, and design concepts. JavaScript was challenging, especially with layout issues like floats, but a friend helped me out. He also recommended learning Git and MVC for job prospects.</p>

                        <p>By May/June 2015, I was taking Front-End Development and Full Stack JavaScript courses on Treehouse.</p>

                        <p>I explored freelancing, read extensively, and learned about WordPress development to give clients control over their websites.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Freelancing</h1>
                        <p>In August 2015, I started freelancing. My initial challenge was finding clients. Offering my services for free to gain experience led me to my first client—a local goldsmith-designer.</p>

                        <p>This project helped me gain practical experience with WordPress and WooCommerce.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Personal Projects</h1>
                        <p>Next, I tackled AngularJS, creating a single-page application (Magic Spoiler.io). I faced issues like integrating the Disqus plugin and making the site SEO-friendly, but it was a great learning experience.</p>

                        <p>I joined UpWork, landed my first paid job designing and building a WordPress site from scratch, and completed MEAN stack courses through Code School.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Current Stage and My Advice</h1>
                        <p>Currently, I’m a Salesforce Developer/Solution Architect at DigitalFlask.</p>

                        <p>For those starting out, there are many free resources available, such as Treehouse, Code School, and FreeCodeCamp. My advice: practice a lot, build your own projects, and create a portfolio. Good luck!</p>

                        <p>Thank you for reading!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
