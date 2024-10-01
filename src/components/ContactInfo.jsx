import React from 'react'

export default function Contact() {
    return (
        <div className="dark:bg-gray-900 text-white flex align-item-center justify-content-center">

            <div className="m-auto p-1 bg-[#27293F] min-h-screen mx-5 mt-32 mb-10">
                <div class="p-10 max-w-[1300px] m-auto">
                    <h1 class="text-5xl font-bold">Contact</h1>
                    <p class="text-xl mt-7 md:text-[22px] max-x-sm:text-lg">Hi there! I'm <u>Himanshu Seervi</u>, the
                        founder of Tech MasterMind. I created this
                        website with the goal of helping students like me who are interested in pursuing a
                        successful career in software development. To achieve this, my goal is conduct interviews with
                        many software engineers and tech entrepreneurs as possible, to share their
                        personal journeys and valuable advice on how others can achieve success in the field.
                    </p>
                    <p class="text-xl mt-7 md:text-[22px] max-x-sm:text-lg">If you have any questions or want to connect
                        with me, you can contact me through
                        my socials:
                    </p>
                    <ul class="list-none mt-7 md:text-[22px]">
                        <li><a href="mailto:himseervi@gmail.com" class="text-xl hover:underline max-x-sm:text-lg"><i
                            class='bx bxs-envelope'></i>
                            himseervi@gmail.com</a></li>
                        <li><a href="https://www.instagram.com/himanshu_seervi10"
                            class="text-xl hover:underline max-x-sm:text-lg" target="_blank"><i
                                class='bx bxl-instagram-alt'></i> @himanshu_seervi10</a></li>
                        <li><a href="https://x.com/Himanshu_10S" class="text-xl hover:underline max-x-sm:text-lg"
                            target="_blank"><i class='bx bxl-linkedin-square'></i> @Himanshu_10S
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/himanshu-seervi/"
                            class="text-xl hover:underline max-x-sm:text-lg" target="_blank"><i
                                class="fa fa-twitter"></i> Himanshu Seervi
                        </a></li>
                    </ul>
                    <br />
                    <h1 class="text-3xl font-bold">Feature in one of my blogs:</h1>
                    <p class="text-xl mt-7 md:text-[22px] max-x-sm:text-lg">If you're interested in sharing your journey as
                        a software engineer or
                        tech
                        entrepreneur. Free free to fill out the google form below. And I will contact you on when we can
                        have a interview.</p>
                    <p class="text-xl mt-7 md:text-[22px] max-x-sm:text-lg">All the interview will be done online via Zoom.
                        The interview is not a
                        formal interview its more like a discusion about you sharing your story.
                        questions.</p>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfEiabT-oe8Ujp9ZNtPhzNgti05XDnOwzVBIBmIuBlQE4J50Q/viewform?embedded=true"
                        height="1012" class="m-auto mt-3 w-full" frameborder="0" marginheight="0" marginwidth="0"
                        scrollwheel="false">Loading…</iframe>
                </div>
            </div>
        </div>
    )
}
