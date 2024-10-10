import React from 'react'

export default function Contact() {
    return (
        <div className="dark:bg-gray-900 text-[#DCDCDD] flex items-center justify-center min-h-screen">

            <div className="m-auto p-1 bg-[#27293F] min-h-screen mx-5 mt-32 mb-10">
                <div className="p-10 max-w-[1300px]">
                    <h1 className="text-5xl font-bold">Contact</h1>
                    <p className="text-xl mt-7 md:text-[22px] max-x-sm:text-lg">Hi there! I'm <u>Himanshu Seervi</u>, the
                        founder of Tech MasterMind. I created this
                        website with the goal of helping students like me who are interested in pursuing a
                        successful career in software development. To achieve this, my goal is conduct interviews with
                        many software engineers and tech entrepreneurs as possible, to share their
                        personal journeys and valuable advice on how others can achieve success in the field.
                    </p>
                    <p className="text-xl mt-7 md:text-[22px] max-x-sm:text-lg">If you have any questions or want to connect
                        with me, you can contact me through
                        my socials:
                    </p>
                    <ul className="list-none mt-7 md:text-[22px]">
                        <li><a href="mailto:himseervi@gmail.com" className="text-xl hover:underline max-x-sm:text-lg"><i
                            className='bx bxs-envelope'></i> himseervi@gmail.com</a></li>
                        <li><a href="https://www.instagram.com/himanshu_seervi10"
                            className="text-xl hover:underline max-x-sm:text-lg" target="_blank"><i
                            className='bx bxl-instagram-alt'></i> @himanshu_seervi10</a></li>
                        <li><a href="https://x.com/Himanshu_10S" className="text-xl hover:underline max-x-sm:text-lg"
                            target="_blank"><i className='bx bxl-twitter'></i> @Himanshu_10S
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/himanshu-seervi/"
                            className="text-xl hover:underline max-x-sm:text-lg" target="_blank"><i className='bx bxl-linkedin-square'></i> Himanshu Seervi
                        </a></li>
                    </ul>
                    <br />
                    <h1 className="text-3xl font-bold">Feature in one of my blogs:</h1>
                    <p className="text-xl mt-7 md:text-[22px] max-x-sm:text-lg">If you're interested in sharing your journey as
                        a software engineer or
                        tech
                        entrepreneur. Free free to fill out the google form below. And I will contact you on when we can
                        have a interview.</p>
                    <p className="text-xl mt-7 md:text-[22px] max-x-sm:text-lg">All the interview will be done online via Zoom.
                        The interview is not a
                        formal interview its more like a discusion about you sharing your story.
                        questions.</p>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfEiabT-oe8Ujp9ZNtPhzNgti05XDnOwzVBIBmIuBlQE4J50Q/viewform?embedded=true"
                        height="1012" className="m-auto mt-3 w-full" frameborder="0" marginheight="0" marginwidth="0"
                        scrollwheel="false">Loading…</iframe>
                </div>
            </div>
        </div>
    )
}
