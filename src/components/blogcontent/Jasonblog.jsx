import React from 'react'
import Jasoncard from './blogcards/Jasoncard'

export default function Jasonblog() {
    return (
        <div className='container mx-auto relative'>
            <div className='bg-black/30 border border-n-2/10 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden'>

                <Jasoncard />

                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                        From Self-Doubt to Microsoft: Learn how Jason became a software engineer at Microsoft.
                    </h1>
                    <div className='text-white text-base sm:text-lg md:text-xl space-y-4 sm:space-y-6 max-w-4xl mx-auto'>

                        <p>Jason was born in Ireland and moved to Canada when he was 8 years old. He wasn't the smartest kid in his class and wasn't a math whiz or an app builder by the age of six. He worked random jobs and wanted to land a better job, so he decided to apply to the University of Waterloo for Computer Science in 2014. Waterloo is a top engineering and computer science university in Canada.</p>

                        <p>It was obvious that Waterloo was a scary place; everyone was a lot smarter than Jason. All of them knew how to code before university, which brought down Jason's confidence. He really thought that he was going to drop out.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">First Course</h1>
                        <p>Jason's first course was "Intro to Computer Science," where he learned Racket, a functional language used for teaching recursion. Jason felt overwhelmed by the deadlines for all of his classes. After his first term, Jason told his parents to expect that he had failed at least one course, but probably more. In fact, he finished with grades in the 60s to low 70s in all of his courses, which was enough to keep him in the co-op program.</p>

                        <p>Then his imposter syndrome started to kick in, as he saw prodigy kids securing offers from companies like Google and Facebook, while he took a job at a company called Maple Leaf Foods, working in IT support, helping people fix their Windows computers.</p>

                        <p>While working there, he noticed that some basic commands were done repeatedly. So, he decided to learn Python and created a Python program that would perform these tasks, which earned him the highest rating of any previous co-op at Maple Leaf Foods.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Second Year</h1>
                        <p>This is when Jason studied object-oriented programming. He learned about inheritance, polymorphism, and all the things that make you a skilled programmer.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Worst Co-op Experience</h1>
                        <p>The summer of 2015 rolls around, and he lands a job at one of the worst companies. They always yell at him almost every day, blame him for things he never did, and keep him working past midnight on some days.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Third Year</h1>
                        <p>Jason mentioned that this is the lowest point and from here, it gets better. Jason had a little more confidence in himself since he figured out university. Instead of starting an assignment the day before the due date, he would start as soon as the assignment came out. By doing this, he had enough time to go to office hours to ask for help.</p>

                        <p>Jason would also teach in empty classrooms when he was stuck on a concept that he didn't understand.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Bad Interview</h1>
                        <p>Jason wanted to live in California, so he interviewed at Yahoo. Unfortunately, he was rejected because he couldn't solve a LeetCode problem—the zigzag problem. As a result, he didn't get the job at Yahoo.</p>

                        <p>However, in 2017, he landed a Full Stack Developer role at Toast, which was still in its startup stage. It was at Toast where he really learned how to become a software engineer. He worked on their online ordering team and essentially saved them during the pandemic. He would take a problem from idea to solution and deployment. It was there that he learned about front-end and back-end frameworks.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">This Isn't a Race</h1>
                        <p>Test your code. There were plenty of times where he had a pull request with 50-plus comments on it, or he merged his code, and he had to revert it multiple times. He was embarrassed about his skills, as if he had shown his hand and people saw he was bluffing.</p>

                        <p>At Toast, the time constraint was in his own head. But in fact, they just wanted the code to work. He was trying to prove he was a worthy hire and pump out as much productivity as he could, but he was doing sloppy work as a result.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Another Shot at Yahoo</h1>
                        <p>Jason reapplied at Yahoo, and this time, he was given an easier problem, which helped him secure a position as a Frontend Developer.</p>

                        <p>He worked alongside a colleague named Sahir and was responsible for writing all the functionality for the search bar in the revamped Yahoo Mail. Despite landing the job, Jason found himself paying $1,250 a month for the dirtiest housing, sharing the space with a few roommates, cockroaches!</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Interview at Microsoft</h1>
                        <p>Jason applied for a job and got the interview. They wanted to fly him to Seattle for the interview, but his current job didn't want him to go. Despite this, he decided to go anyway. There was a lot at stake because if he failed the interview, he would have nothing.</p>

                        <p>At the interview, most people had one internship experience, but Jason had six. This is when Jason realized that he may have been below average at Waterloo, but he was above average countrywide. The interview went well, and he landed the job at Microsoft.</p>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">His Advice: Don't Be an Elephant</h1>
                        <p>Jason once said, "Don't be an elephant." He meant that people sometimes don't realize that elephants are not tied down with a strong rope or chain but only with a small stick and a piece of rope. Although it seems like the elephant can easily pull out the stick from the ground, in reality, they can't because when they were young, they were tied up securely and learned that they weren't strong enough to escape.</p>

                        <p><i>"So know this: you won't be able to immediately pull the stick out of the ground, but you will get there. If you aren't the smartest person in the room, you're doing something right. And if you are the smartest person in the room, find a different room."</i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
