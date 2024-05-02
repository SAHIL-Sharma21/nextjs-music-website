"use client"

import React from "react"
import {StickyScroll} from './ui/sticky-scroll-reveal'

const musicSchoolContent = [
    {
        title: "Vocal Training",
        description: "Unleash your singing potential with our vocal training sessions led by experienced vocal coaches. Whether you're a beginner or seeking to refine your skills, our tailored lessons will help you achieve your goals."
    },
    {
        title: "Music Theory Workshops",
        description: "Deepen your understanding of music with our comprehensive music theory workshops. Explore fundamental concepts such as harmony, rhythm, notation, and more, and enhance your ability to read, write, and compose music."
    },
    {
        title: "Ensemble Performances",
        description: "Experience the joy of making music together in our ensemble performances. Join our diverse musical ensembles, including bands, orchestras, and choirs, and collaborate with fellow musicians to create memorable performances."
    },
    {
        title: "Music Production Courses",
        description: "Unlock the world of music production with our specialized courses. Learn essential techniques for recording, mixing, and mastering music, and gain hands-on experience with industry-standard software and equipment."
    },
    {
        title: "Music Appreciation Lectures",
        description: "Expand your musical horizons with our engaging music appreciation lectures. Discover the rich history and cultural significance of various musical genres, composers, and movements, and deepen your appreciation for the art of music."
    }
];

export default function WhyChooseUs() {
  return (
    <>
        <div>
            <StickyScroll content={musicSchoolContent} />
        </div>
    </>
  )
}
