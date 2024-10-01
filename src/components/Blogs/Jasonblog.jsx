import React from 'react'
import Pfp from '../../assets/Jason-Profile.jpg'

export default function Jasonblog() {
    return (
        <div class="dark:bg-gray-900 text-white flex align-item-center justify-content-center m-auto">
            <div class="m-auto p-1 bg-[#27293F] min-h-screen mx-5 mt-32 mb-10">

                <div className="p-5 z-0">
                    <div
                        className="mt-5 max-w-[650px] bg-[#2d2f34] rounded-2xl m-auto flex flex-col md:flex-row drop-shadow-2xl overflow-hidden">
                        <div className="w-full md:w-[300px] h-[300px]">
                            <img src={Pfp} className="w-full h-full object-cover"
                                alt="Jason Goodison" />
                        </div>
                        <div className="text-white flex flex-col justify-center space-y-3 p-5 w-full md:w-6/12">
                            <h1 className="text-2xl font-bold">Jason Goodison</h1>
                            <h2 className="text-xl">Founder of <a href="https://pairai.com/" target="_blank"
                                className="text-blue-400 hover:underline">Pair AI</a></h2>
                            <p className="text-base text-gray-300">
                                Meet Jason Goodison, the founder of a software company called Pair AI. Learn how Jason
                                became a software engineer despite struggling with coding, and having worked for Yahoo,
                                Toast, and Microsoft before becoming an techpreneur.
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="max-w-[900px] m-auto" />

                <div class="px-10 max-w-[1300px] leading-7 mt-5 md:px-20 sm:px-10">
                    <h1 className="text-4xl font-bold max-x-sm:text-2xl"><a href=""
                        className="shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]">From Self-Doubt to Microsoft:</a>
                        Learn how Jason became a software engineer at Microsoft.
                    </h1>

                    <h1 className="mt-7 text-4xl font-bold max-x-sm:text-2xl">Early Stage:</h1>

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Jason was born in Ireland and moved to Canada
                        when he was 8 years old. He wasn't the smartest kid in his class and wasn't a math whiz or an app
                        builder by the age of six. He worked random jobs and wanted to land a better job, so he decided to
                        apply to the <a className="underline decoration-blue-500" href="https://uwaterloo.ca/"
                            target="_blank">University of Waterloo</a> for Computer Science in 2014. Waterloo is a top
                        engineering and
                        computer science university in Canada.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">It was obvious that Waterloo was a scary place;
                        everyone was a lot smarter than Jason. All of them knew how to code before university, which brought
                        down Jason's confidence. He really thought that he was going to drop out.
                    </p>

                    <h1 className="mt-7 text-4xl font-bold max-x-sm:text-2xl">First Course:</h1>

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        Jason's first course was "Intro to Computer Science," where he learned <a
                            className="underline decoration-blue-500" href="https://racket-lang.org/"
                            target="_blank">Racket</a>, a functional language
                        used for teaching recursion. Jason felt overwhelmed by the deadlines for all of his classes. After
                        his first term, Jason told his parents to expect that he had failed at least one course, but
                        probably more. In fact, he finished with grades in the 60s to low 70s in all of his courses, which
                        was enough to keep him in the <a className="underline decoration-blue-500"
                            href="https://uwaterloo.ca/future-students/co-op" target="_blank">co-op program</a>.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        Then his imposter syndrome started to kick in, as he saw prodigy kids securing offers from companies
                        like Google and Facebook, while he took a job at a company called Maple Leaf Foods, working in IT
                        support, helping people fix their Windows computers.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        While working there, he noticed that some basic commands were done repeatedly. So, he decided to
                        learn Python and created a Python program that would perform these tasks, which earned him the
                        highest rating of any previous co-op at <a className="underline decoration-blue-500"
                            href="https://www.mapleleaffoods.com/" target="_blank">Maple Leaf Foods.</a>
                    </p>

                    <h1 className="mt-7 text-4xl font-bold max-x-sm:text-2xl">Second Year:</h1>

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">
                        This is when Jason studied object-oriented programming. He learned about inheritance, polymorphism,
                        and all the things that make you a skilled programmer.
                    </p>

                    <h1 className="mt-7 text-4xl font-bold max-x-sm:text-2xl">Worst Co-op Experience:</h1>


                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">The summer of 2015 rolls around, and he lands a
                        job at one of the worst companies. They always yell at him almost every day, blame him for things he
                        never did, and keep him working past midnight on some days.
                    </p>


                    <h1 className="mt-7 text-4xl font-bold max-x-sm:text-2xl">Third Year:</h1>


                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Jason mentioned that this is the lowest point
                        and from here, it gets better. Jason had a little more confidence in himself since he figured out
                        university. Instead of starting an assignment the day before the due date, he would start as soon as
                        the assignment came out. By doing this, he had enough time to go to office hours to ask for help.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Jason would also teach an empty classrooms when he
                        was stuck on a concept that he didn't understand.
                    </p>

                    <h1 className="mt-7 text-4xl font-bold max-x-sm:text-2xl">Bad Interview:</h1>


                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Jason wanted to live in California, so he
                        interviewed at Yahoo. Unfortunately, he was rejected because he couldn't solve a <a
                            className="underline decoration-blue-500"
                            href="https://leetcode.com/problems/zigzag-conversion/description/" target="_blank">LeetCode
                            problem—the zigzag problem.</a> As a result, he didn't get the job at Yahoo.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">However, in 2017, he landed a Full Stack
                        Developer role at <a className="underline decoration-blue-500" href="https://pos.toasttab.com/ca/"
                            target="_blank">Toast</a>, which was still in its startup stage. It was at Toast where he really
                        learned how to become a software engineer. He worked on their online ordering team and essentially
                        saved them during the pandemic. He would take a problem from idea to solution and deployment. It was
                        there that he learned about front-end and back-end frameworks.
                    </p>

                    <h1 className="mt-7 text-4xl font-bold max-x-sm:text-2xl">This isn't a race:</h1>


                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Test your code. There were plenty of times where
                        he had a pull request with 50-plus comments on it, or he merged his code, and he had to revert it
                        multiple times. He was embarrassed about his skills, as if he had shown his hand and people saw he
                        was bluffing.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">At Toast, the time constraint was in his own
                        head. But in fact, they just wanted the code to work. He was trying to prove he was a worthy hire
                        and pump out as much productivity as he could, but he was doing sloppy work as a result.
                    </p>

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">He often missed details in the spec, or he
                        didn't fully test his code. When his boss pointed that out to him and it resulted in him doing much
                        better work overall. If it wasn't for Toast, he probably would have quit, but to his surprise, they
                        also gave him the highest rating.
                    </p>

                    <h1 className="mt-7 text-4xl font-bold max-x-sm:text-2xl">Another Shot at Yahoo:</h1>


                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Jason reapplied at Yahoo, and this time, he was
                        given an easier problem, which helped him secure a position as a Frontend Developer.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">He worked alongside a colleague named Sahir and
                        was responsible for writing all the functionality for the search bar in the revamped Yahoo Mail.
                        Despite landing the job, Jason found himself paying $1,250 a month for the dirtiest housing, sharing
                        the space with a few roommates, cockroaches!
                    </p>

                    <h1 className="mt-7 text-4xl font-bold max-x-sm:text-2xl">Research Before Asking Questions:</h1>


                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">There were many times when he asked unnecessary
                        questions. Most of the tasks you need to do are already documented in your company's wiki.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">After Yahoo, he had one last internship. Jason
                        also wanted to travel the world, so he went back to Toast, but to their Dublin office. He was one
                        year away from graduating and one day he got a text message from Sahir from Yahoo. He said, <i>"I
                            just got a full-time job offer at Microsoft."</i>
                    </p>

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Jason always thought that he wasn't smart enough
                        for Microsoft. But he worked with Sahir—he's a smart guy, but he had the same job as Jason. <i>"So
                            if
                            he can get that job, surely I can get it too, right?"</i>
                    </p>

                    <h1 className="mt-7 text-4xl font-bold max-x-sm:text-2xl">Interview at Microsoft:</h1>


                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Jason applied for a job and got the interview.
                        They wanted to fly him to Seattle for the interview, but his current job didn't want him to go.
                        Despite this, he decided to go anyway. There was a lot at stake because if he failed the interview,
                        he would have nothing.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">At the interview, most people had one internship
                        experience, but Jason had six. This is when Jason realized that he may have been below average at
                        Waterloo, but he was above average countrywide. The interview went well, and he landed the job at
                        Microsoft.
                    </p>

                    <h1 className="mt-7 text-4xl font-bold max-x-sm:text-2xl">His advice: Don't be an elephant:</h1>


                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">Jason once said, <i>"Don't be an elephant."</i>
                        He
                        meant that people sometimes don't realize that elephants are not tied down with a strong rope or
                        chain but only with a small stick and a piece of rope. Although it seems like the elephant can
                        easily pull out the stick from the ground, in reality, they can't because when they were young, they
                        were tied up securely and learned that they weren't strong enough to escape.
                    </p>
                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base">In Jason's case, he was limiting his beliefs by
                        thinking that he wasn't good enough to work at Microsoft. However, if it wasn't for Sahir, Jason
                        would never have applied.
                    </p>

                    <p className="my-7 text-lg md:text-[22px] max-sm:text-base"><i>"So know this: you won't be able to
                        immediately
                        pull the stick out of the ground, but you will get there. If you aren't the smartest person in
                        the
                        room, you're doing something right. And if you are the smartest person in the room, find a
                        different
                        room."</i>
                    </p>

                    <br />
                    <hr className="max-w-[900px] m-auto" />

                    <p className="text-center my-7 text-lg md:text-[22px] max-sm:text-base">Watch Jason's Video About His Journey
                    </p>

                    <iframe className="m-auto mt-4 mb-4 max-w-[560px]"
                        src="https://www.youtube.com/embed/fehAgOqTR44?si=xw_jBiqOvGIJxjTl&amp;controls=0"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>
            </div>
        </div>

    )
}
