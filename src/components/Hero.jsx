'use client';

import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Button from './design/Button';
import Video from './Video';

export default function Hero() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const bgPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <motion.section
            ref={sectionRef}
            className="h-[auto] min-h-[800px] flex flex-col items-center overflow-hidden relative text-white/70 bg-[#0E1217] px-4"
            style={{
                backgroundPositionY: bgPositionY,
            }}
            animate={{
                backgroundPositionX: 1200,
            }}
            transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 120,
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: `
      linear-gradient(to right, #0E1217, transparent 10%, transparent 90%, #0E1217),
      linear-gradient(to bottom, #0E1217, transparent 10%, transparent 90%, #0E1217)
    `
            }}></div>

            {/* Animated Circles */}
            <motion.div
                style={{
                    translateY: '-50%',
                    translateX: '-50%'
                }}
                animate={{
                    rotate: '-1turn',
                }}
                transition={{
                    repeat: Infinity,
                    duration: 100,
                    ease: 'linear',
                }}
                className="absolute h-[400px] w-[400px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
                <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2 "></div>
                <div className="absolute h-5 w-5 left-full border border-white inline-flex items-center justify-center rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
            </motion.div>

            <motion.div
                style={{
                    translateY: '-50%',
                    translateX: '-50%'
                }}
                animate={{
                    rotate: '1turn',
                }}
                transition={{
                    repeat: Infinity,
                    duration: 100,
                    ease: 'linear',
                }}
                className="absolute h-[500px] w-[500px] md:h-[700px] md:w-[700px] lg:h-[900px] lg:w-[900px] border-[2px] rounded-full border-white/20 border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
            </motion.div>

            <motion.div
                style={{
                    translateY: '-50%',
                    translateX: '-50%'
                }}
                animate={{
                    rotate: '-1turn',
                }}
                transition={{
                    repeat: Infinity,
                    duration: 100,
                    ease: 'linear',
                }}
                className="absolute h-[600px] w-[600px] md:h-[800px] md:w-[800px] lg:h-[1000px] lg:w-[1000px] rounded-full border-[3.5px] border-white/20 border-dotted top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ></motion.div>

            {/* Hero Content */}
            <div className="relative z-0 flex flex-col items-center justify-start pt-10 sm:pt-20">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-semibold tracking-tighter text-center max-w-4xl mx-auto">
                    <span className="stroke-slate-400" style={{
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.5)'
                    }}
                    > <span className='shadow-[inset_0_-0.25em_rgba(37,99,235,0.8)]'>Code to Career:</span> Explore the Journeys of Successful Tech Professionals</span><br />
                </h1>
                <p className="text-base sm:text-lg text-white/70 mt-3 sm:mt-5 text-center max-w-2xl mx-auto">
                    Discover how software engineers achieve success in the tech industry by exploring their case studies, journeys, and advice for aspiring software engineers.
                </p>
                <div className="flex justify-center mt-5">
                    <a href="#video">
                        <Button>
                            Learn More
                        </Button>
                    </a>
                </div>
            </div>

            {/* Video Section */}
            <div id='video' className="relative z-10 mt-10 w-full max-w-4xl">
                <Video />
            </div>

        </motion.section>
    );
}
