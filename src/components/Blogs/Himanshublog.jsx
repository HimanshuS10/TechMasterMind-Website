import React from 'react'
import Pfp from '../../assets/HimanshuS.png'
import StarterStory from '../../assets/StarterStory.png'
import Stats from '../../assets/Stats.png'

export default function Himanshublog() {
    return (
        <div className="dark:bg-gray-900 text-[#DCDCDD] flex align-item-center justify-content-center m-auto">

            <div className="m-auto p-1 bg-[#27293F] min-h-screen mx-5 mt-32 mb-10">

                <div className="p-5 z-0">
                    <div
                        className="mt-5 max-w-[650px] bg-[#2d2f34] rounded-2xl m-auto flex flex-col md:flex-row drop-shadow-2xl overflow-hidden">
                        <div className="w-full md:w-[300px] h-[300px]">
                            <img src={Pfp} className="w-full h-full object-cover"
                                alt="Image of Himanshu Seervi" />
                        </div>
                        <div className="text-white flex flex-col justify-center space-y-3 p-5 w-full md:w-6/12">
                            <h1 className="text-2xl font-bold">Himanshu Seervi</h1>
                            <h2 className="text-xl">Founder of <a href="" className="text-blue-400 hover:underline">Tech
                                MasterMind</a></h2>
                            <p className="text-base text-gray-300">
                                Hi there! My name is Himanshu Seervi, and I am the founder of Tech MasterMind. On this page, I’ll share what Tech MasterMind is all about and tell you a bit more about myself.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="max-w-[900px] m-auto" />

                <div className="px-10 max-w-[1300px] leading-7 mt-5 md:px-52 sm:px-10 max-phone:px-5">
                    <h1 className="text-4xl font-bold max-mid:text-3xl max-phone:text-2xl max-phone:my-0">Building <a href=""
                        className="shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]">Tech MasterMind</a>, My Journey and Vision
                    </h1>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        Hi there! I am Himanshu Seervi, the founder of <span className="shadow-[inset_0_-0.15em_rgba(37,99,235,0.8)]"> Tech MasterMind</span>. I
                        am a 2nd year broke univeristy student studying software engineering at University of Guelph.
                    </p>

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        As we all know, the <span className="shadow-[inset_0_-0.15em_rgba(37,99,235,0.8)]">job market</span> for software engineering and tech in general has been bad after COVID-19.
                    </p>

                    <img className='h-80 m-auto' src={Stats} alt="" />

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        This is impacting many people—students and full time workers. Personally, I feel stressed about whether I will be able to secure a full-time job after graduation.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        So I started working on some side project to get ahead but as soon as I opened VSCode <span className="shadow-[inset_0_-0.15em_rgba(37,99,235,0.8)]">I had no idea what to build</span>. I didn't want to build a basic program like Weather App, or a Calculator.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                    <span className="shadow-[inset_0_-0.15em_rgba(37,99,235,0.8)]">I just wish someone could provide step-by-step guidance on what I can do or build to succeed in this industry.</span>
                    </p>

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        Then this problom sparkles an idea in my head, what if I build something where I can create a platform that provides the guidance I was seeking?
                    </p>

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        A platform where all the <span className="shadow-[inset_0_-0.15em_rgba(37,99,235,0.8)]">aspiring software engineers and technopreneurs</span> can learn directly from the journeys and experiences of the successful people in this field.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        This is how Tech MasterMind was born—a unique platform inspired by the concept of <span className="shadow-[inset_0_-0.15em_rgba(37,99,235,0.8)]">Starter Story</span> but tailored specifically for the tech industry.
                    </p>


                    <hr />
                    <br />
                    <img className='h-80 m-auto' src={StarterStory} alt="" />

                    <p className="my-7 text-center text-lg md:text-[22px] max-sm:text-base">
                        <i>Starter Story is a website where Pat Walls, the founder, interviews successful entrepreneurs and shares their journeys.</i>
                    </p>

                    <hr />

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        So Tech MasterMind is an online platform where I will interview various technopreneurs and software engineers. I will ask them about their journeys and how they achieved success in this field.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        I will then compile those interviews into <span className="shadow-[inset_0_-0.15em_rgba(37,99,235,0.8)]">"success story blogs"</span> so that aspiring software engineers and technopreneurs can learn from their experiences and implement their advices.
                    </p>


                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        Thanks for reading!
                    </p>




                </div>
            </div>
        </div>
    )
}
