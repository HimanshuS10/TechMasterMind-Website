import React from 'react'
import { Instagram, Twitter, Mail, Youtube, UserRoundIcon as UserRoundPen, MessageSquare, PencilRuler } from 'lucide-react'

export default function ContactContent() {
    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
            <div className='bg-black/30 border border-n-2/10 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden'>
                {/* Gradient shapes */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-4 sm:mb-6 lg:mb-8 max-w-4xl mx-auto leading-tight">
                        <span className='shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]'>Contact Us</span>
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6 lg:mt-8">
                        {/* Give us feedback Card */}
                        <div className="bg-white/10 border border-white/20 rounded-lg overflow-hidden flex flex-col">
                            <div className="p-3 sm:p-4 bg-white/5">
                                <h2 className="text-lg sm:text-xl font-semibold text-white flex items-center">
                                    <PencilRuler className="mr-2 w-5 h-5 sm:w-6 sm:h-6" /> Give us feedback
                                </h2>
                            </div>
                            <div className="p-3 sm:p-4 flex flex-col flex-grow">
                                <p className="text-white text-sm sm:text-base mb-4">
                                    Your feedback is valuable! I would love to hear your suggestions on how to improve this app or if you encounter any issues or bugs on the website.
                                </p>
                                <div className="mt-auto">
                                    <a
                                        href="mailto:himseervi@gmail.com"
                                        className="block w-full text-center bg-white hover:bg-white/70 text-black font-bold py-2 px-4 rounded transition duration-300 text-sm sm:text-base"
                                        target='_blank'
                                    >
                                        himseervi@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Feature On Tech MasterMind Card */}
                        <div className="bg-white/10 border border-white/20 rounded-lg overflow-hidden flex flex-col">
                            <div className="p-3 sm:p-4 bg-white/5">
                                <h2 className="text-lg sm:text-xl font-semibold text-white flex items-center">
                                    <UserRoundPen className="mr-2 w-5 h-5 sm:w-6 sm:h-6" /> Feature On Tech MasterMind
                                </h2>
                            </div>
                            <div className="p-3 sm:p-4 flex flex-col flex-grow">
                                <p className="text-white text-sm sm:text-base mb-4">
                                    We would love to hear your story! Please contact us.
                                </p>
                                <div className="mt-auto">
                                    <a
                                        href="https://forms.gle/t8Tis17TSLH6VPAc6"
                                        className="block w-full text-center bg-white hover:bg-white/70 text-black font-bold py-2 px-4 rounded transition duration-300 text-sm sm:text-base"
                                        target='_blank'
                                    >
                                        Google Forms
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Himanshu Card */}
                        <div className="bg-white/10 border border-white/20 rounded-lg overflow-hidden flex flex-col">
                            <div className="p-3 sm:p-4 bg-white/5">
                                <h2 className="text-lg sm:text-xl font-semibold text-white flex items-center">
                                    <MessageSquare className="mr-2 w-5 h-5 sm:w-6 sm:h-6" /> Contact Himanshu
                                </h2>
                            </div>
                            <div className="p-3 sm:p-4 flex flex-col flex-grow">
                                <p className="text-white text-sm sm:text-base mb-4">
                                    If you would like to contact me for business-related matters or just want to connect, please feel free to reach out to me.
                                </p>
                                <div className="mt-auto">
                                    <div className="flex gap-4 mb-1">
                                        <a href="https://www.instagram.com/himanshu_seervi10/" className="text-white/70 hover:text-white transition" aria-label="Instagram" target='_blank'>
                                            <Instagram size={30} />
                                        </a>
                                        <a href="https://x.com/HimanshuSeervi_" className="text-white/70 hover:text-white transition" aria-label="Twitter" target='_blank'>
                                            <Twitter size={30} />
                                        </a>
                                        <a href="mailto:himseervi@gmail.com" className="text-white/70 hover:text-white transition" aria-label="Email" target='_blank'>
                                            <Mail size={30} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

