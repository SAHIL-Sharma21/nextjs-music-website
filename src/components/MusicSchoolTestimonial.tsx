"use client"

import React from 'react'
import {InfiniteMovingCards} from './ui/infinite-moving-cards'


interface Testimonial {
    quote: string
    name: string,
    title:  string,
}

const musicSchoolTestimonial: Testimonial[] = [
    {
        quote: "Studying piano at the music academy has been an incredible journey for me. The instructors are not only highly skilled but also passionate about teaching. Their personalized approach has helped me progress rapidly and develop a deeper appreciation for music.",
        name: "Emily Parker",
        title: "Piano Student",
    },
    {
        quote: "I've always wanted to learn to play the guitar, and I'm so glad I chose this music academy. The lessons are well-structured, and the instructors are patient and encouraging. Thanks to their guidance, I've made significant progress and gained confidence in my abilities.",
        name: "John Smith",
        title: "Guitar Student",
    },
    {
        quote: "Enrolling in vocal lessons at the music academy was one of the best decisions I've ever made. The instructors have helped me discover my voice and overcome my insecurities. Their support and expertise have enabled me to pursue my passion for singing with confidence.",
        name: "Sophia Johnson",
        title: "Voice Student",
    },
    {
        quote: "As a parent, I couldn't be happier with the music academy. Not only have my children learned to play instruments, but they've also developed important life skills like discipline and perseverance. The academy's nurturing environment and dedicated instructors have made all the difference.",
        name: "Michael Brown",
        title: "Parent of a Student",
    },
    {
        quote: "Attending workshops and performances at the music academy has been an enriching experience for me. The events are thoughtfully curated, and the talent showcased is truly inspiring. It's a testament to the academy's commitment to fostering a vibrant musical community.",
        name: "Olivia Lee",
        title: "Music Enthusiast",
    },
    {
        quote: "Learning drums at the music academy has been a blast! The instructors are not only skilled musicians but also great mentors. They make learning fun and challenging at the same time. I've gained valuable skills and made lifelong friends through the academy's vibrant drumming community.",
        name: "David Rodriguez",
        title: "Drum Student",
    },
    {
        quote: "Studying music theory at the academy has deepened my understanding and appreciation of music. The instructors are knowledgeable and passionate, and they make complex concepts easy to understand. I've gained valuable insights that have enriched my musical journey.",
        name: "Emma White",
        title: "Music Theory Student",
    },
    {
        quote: "The composition classes at the music academy have been a revelation for me. The instructors provide constructive feedback and encourage experimentation, allowing me to explore my creativity freely. I've grown tremendously as a composer thanks to their guidance and support.",
        name: "Daniel Taylor",
        title: "Composition Student",
    },
    {
        quote: "Learning to play the flute at the music academy has been a fulfilling experience. The instructors are patient and supportive, and they provide individualized attention to each student. I've improved my technique and performance skills significantly since joining the academy.",
        name: "Sophie Clark",
        title: "Flute Student",
    },
    {
        quote: "Studying bass guitar at the music academy has been an exciting journey. The instructors are not only talented musicians but also great mentors. They've helped me develop a strong foundation in bass playing and inspired me to explore new styles and techniques.",
        name: "Benjamin Turner",
        title: "Bass Guitar Student",
    }
]


export default function MusicSchoolTestimonial() {
  return (
    <>
        <div className='h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
            <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear our harmony: Voices of Success</h2>
            <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-6xl'>
                    <InfiniteMovingCards items={musicSchoolTestimonial} direction='right' speed='slow' />
                </div>
            </div>
        </div>
    </>
  )
}

