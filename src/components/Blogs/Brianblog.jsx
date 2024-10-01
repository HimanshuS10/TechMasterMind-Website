import React from 'react'
import Pfp from '../../assets/BrianR.jpg'

export default function Brianblog() {
    return (
        <div class="dark:bg-gray-900 text-white flex align-item-center justify-content-center m-auto">

            <div class="m-auto p-1 bg-[#27293F] min-h-screen mx-5 mt-32 mb-10">

                <div class="p-5 z-0">
                    <div
                        class="mt-5 max-w-[650px] bg-[#2d2f34] rounded-2xl m-auto flex flex-col md:flex-row drop-shadow-2xl overflow-hidden">
                        <div class="w-full md:w-[300px] h-[300px]">
                            <img src={Pfp} class="w-full h-full object-cover" alt="Brian Ruiz" />
                        </div>
                        <div class="text-white flex flex-col justify-center space-y-3 p-5 w-full md:w-6/12">
                            <h1 class="text-2xl font-bold">Brian Ruiz</h1>
                            <h2 class="text-xl">Full Stack Engineer at <a href="https://www.hines.com/" target="_blank"
                                class="text-blue-400 hover:underline">Hines</a></h2>
                            <p class="text-base text-gray-300">
                                Discover how Brian Ruiz became a Full Stack Engineer at Hines without a college degree.
                                Through self-taught skills, hands-on projects, and valuable university experiences, he built
                                a successful career in technology.
                            </p>
                        </div>
                    </div>
                </div>

                <hr class="max-w-[900px] m-auto" />

                <div class="px-10 max-w-[1300px] leading-7 mt-5 md:px-20 sm:px-10">
                    <h1 class="mt-7 text-4xl font-bold max-x-sm:text-2xl">Here's How Brian Became a <span
                        class="shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]">Full Stack Engineer</span> Without a
                        Degree.</h1>


                    <h1 class="mt-7 text-4xl font-bold max-x-sm:text-2xl">Early Age</h1>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">From a young age, Brian always had a keen
                        interest in
                        technology. His fascination with computers and the Internet began in childhood when he spent
                        countless hours exploring new and exciting developments online.</p>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">This natural curiosity eventually led him toward
                        the field of
                        computer science, setting the foundation for his future career as a full-stack engineer.</p>

                    <h1 class="mt-7 text-4xl font-bold max-x-sm:text-2xl">Education</h1>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">Like many in his field, Brian did not follow the
                        traditional
                        educational path. He chose not to attend boot camps and doesn't hold a college degree.</p>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">Instead, he spent three years at university,
                        where he immersed
                        himself in various aspects of technology and coding. However, an irresistible job opportunity arose,
                        prompting him to leave university early to take it.</p>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">His perspective on formal education is nuanced.
                        While he didn't
                        complete his degree, he acknowledges the significant value that university resources can provide.
                        These experiences, from job fairs and networking events to the invaluable guidance of professors,
                        were instrumental in his early career. He secured his first paid coding job through university
                        connections, teaching kids at a summer coding boot camp.</p>

                    <h1 class="mt-7 text-4xl font-bold max-x-sm:text-2xl">Personal Projects</h1>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">One of Brian's key strategies for success has
                        been his
                        dedication to personal projects. These projects have allowed him to gain hands-on experience and
                        demonstrate his skills to potential employers.</p>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">His work with Python packages like Pandas and
                        Numpy, in
                        particular, helped him stand out in job interviews. Additionally, Brian found great enjoyment in
                        participating in hackathons. These events honed his technical skills and enhanced his teamwork and
                        soft skills.</p>

                    <h1 class="mt-7 text-4xl font-bold  max-x-sm:text-2xl">Challenges</h1>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">Like many developers, Brian faced his share of
                        challenges.
                        Imposter syndrome was a significant hurdle, especially early in his career.</p>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">The fast-paced nature of the tech industry and
                        the vast amount
                        of knowledge required can be daunting. Brian tackled these feelings by exercising patience, steadily
                        gaining domain knowledge, and building confidence in his existing skills.</p>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">Over time, he learned to trust in his abilities
                        and recognize
                        the value he brought to his roles.</p>

                    <h1 class="mt7 text-4xl font-bold max-x-sm:text-2xl">Advice for Newcomers</h1>
                    <ul class="my-7 text-lg md:text-[22px] max-sm:text-base">
                        <li><strong>1. Find Your Passion:</strong> Identify what sparks your curiosity within software
                            engineering. Whether it's design, artificial intelligence, cryptocurrencies, or another niche,
                            follow what intrigues you.</li>
                        <br />
                        <li><strong>2. Consistent Practice:</strong> Start coding every day, even if it's just for 15-20
                            minutes. This consistent practice accumulates over time, leading to significant progress.</li>
                        <br />
                        <li><strong>3. Explore Different Fields:</strong> The software engineering field has many
                            applications and specializations. Exploring various areas can help you find your specific
                            interests and strengths.</li>
                    </ul>

                    <h1 class="mt-7 text-4xl font-bold max-x-sm:text-2xl">Online Resources</h1>
                    <ul class="my-7 text-lg md:text-[22px] max-sm:text-base">
                        <li><a class="underline decoration-blue-500" href="https://sololearn.com"
                            target="_blank">SoloLearn</a></li>
                        <li><a class="underline decoration-blue-500" href="https://freecodecamp.org"
                            target="_blank">FreeCodeCamp</a></li>
                        <li><a class="underline decoration-blue-500" href="https://w3schools.com"
                            target="_blank">W3Schools</a></li>
                        <li><a class="underline decoration-blue-500" href="https://codeacademy.com"
                            target="_blank">Codecademy</a></li>
                        <li><a class="underline decoration-blue-500" href="https://hackerrank.com"
                            target="_blank">HackerRank</a></li>
                        <li><a class="underline decoration-blue-500" href="https://leetcode.com"
                            target="_blank">LeetCode</a></li>
                    </ul>

                    <h1 class="mt-7 text-4xl font-bold max-x-sm:text-2xl">Conclusion</h1>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">Brian's journey to becoming a full-stack
                        engineer at Hines is a
                        testament to the power of curiosity, persistence, and continuous learning.</p>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">His story inspires aspiring software engineers
                        and demonstrates
                        that unconventional paths can lead to successful and fulfilling careers in technology.</p>
                    <p class="my-7 text-lg md:text-[22px] max-sm:text-base">Thank You for reading!</p>

                </div>
            </div>
        </div>


    )
}
