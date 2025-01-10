import React from 'react'
import Briancard from './blogcards/Briancard'

export default function Brianblog() {
    return (
        <div className='container mx-auto relative'>
            <div className='bg-black/30 border border-n-2/10 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden'>

                <Briancard />


                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                        Here's How Brian Became a Full Stack Engineer Without a Degree.
                    </h1>
                    <div className='text-white text-base sm:text-lg md:text-xl space-y-4 sm:space-y-6 max-w-4xl mx-auto'>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                            <span className='shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]'>Early Age</span>
                        </h1>
                        <p>From a young age, Brian always had a keen interest in technology. His fascination with computers and the Internet began in childhood when he spent countless hours exploring new and exciting developments online.</p>
                        <p>This natural curiosity eventually led him toward the field of computer science, setting the foundation for his future career as a full-stack engineer.</p>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                            <span className='shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]'>Education</span>
                        </h1>
                        <p>Like many in his field, Brian did not follow the traditional educational path. He chose not to attend boot camps and doesn't hold a college degree.</p>
                        <p>Instead, he spent three years at university, where he immersed himself in various aspects of technology and coding. However, an irresistible job opportunity arose, prompting him to leave university early to take it.</p>
                        <p>His perspective on formal education is nuanced. While he didn't complete his degree, he acknowledges the significant value that university resources can provide. These experiences, from job fairs and networking events to the invaluable guidance of professors, were instrumental in his early career. He secured his first paid coding job through university connections, teaching kids at a summer coding boot camp.</p>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                            <span className='shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]'>Personal Projects</span>
                        </h1>
                        <p>One of Brian's key strategies for success has been his dedication to personal projects. These projects have allowed him to gain hands-on experience and demonstrate his skills to potential employers.</p>
                        <p>His work with Python packages like Pandas and Numpy, in particular, helped him stand out in job interviews. Additionally, Brian found great enjoyment in participating in hackathons. These events honed his technical skills and enhanced his teamwork and soft skills.</p>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                            <span className='shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]'>Challenges</span>
                        </h1>
                        <p>Like many developers, Brian faced his share of challenges. Imposter syndrome was a significant hurdle, especially early in his career.</p>
                        <p>The fast-paced nature of the tech industry and the vast amount of knowledge required can be daunting. Brian tackled these feelings by exercising patience, steadily gaining domain knowledge, and building confidence in his existing skills.</p>
                        <p>Over time, he learned to trust in his abilities and recognize the value he brought to his roles.</p>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                            <span className='shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]'>Advice for Newcomers</span>
                        </h1>
                        <p>1. Find Your Passion: Identify what sparks your curiosity within software engineering. Whether it's design, artificial intelligence, cryptocurrencies, or another niche, follow what intrigues you.</p>
                        <p>2. Consistent Practice: Start coding every day, even if it's just for 15-20 minutes. This consistent practice accumulates over time, leading to significant progress.</p>
                        <p>3. Explore Different Fields: The software engineering field has many applications and specializations. Exploring various areas can help you find your specific interests and strengths.</p>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                            <span className='shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]'>Online Resources</span>
                        </h1>


                        <ul className="my-7 text-lg md:text-[22px] max-sm:text-base">
                            <li><a className="underline decoration-blue-500" href="https://sololearn.com"
                                target="_blank">SoloLearn</a></li>
                            <li><a className="underline decoration-blue-500" href="https://freecodecamp.org"
                                target="_blank">FreeCodeCamp</a></li>
                            <li><a className="underline decoration-blue-500" href="https://w3schools.com"
                                target="_blank">W3Schools</a></li>
                            <li><a className="underline decoration-blue-500" href="https://codeacademy.com"
                                target="_blank">Codecademy</a></li>
                            <li><a className="underline decoration-blue-500" href="https://hackerrank.com"
                                target="_blank">HackerRank</a></li>
                            <li><a className="underline decoration-blue-500" href="https://leetcode.com"
                                target="_blank">LeetCode</a></li>
                        </ul>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
                            <span className='shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]'>Conclusion</span>
                        </h1>
                        <p>Brian's journey to becoming a full-stack engineer at Hines is a testament to the power of curiosity, persistence, and continuous learning.</p>
                        <p>His story inspires aspiring software engineers and demonstrates that unconventional paths can lead to successful and fulfilling careers in technology.</p>
                        <p>Thank You for reading!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
