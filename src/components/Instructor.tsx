'use client'

import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"

export default function Instructor() {

    const instructors = [
        {
            id: 1,
            name: "John Smith",
            designation: "Music Director",
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            name: "Emily Davis",
            designation: "Lead Vocal Coach",
            image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 3,
            name: "Michael Johnson",
            designation: "Michael Johnson",
            image: 'https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 4,
            name: "Sophia Lee",
            designation: "Piano Tutor",
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 5,
            name: "David Brown",
            designation: "Drum Instructor",
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 6,
            name: "Rachel Miller",
            designation: "Music Theory Specialist",
            image: 'https://plus.unsplash.com/premium_photo-1664541336816-2a2987114ca4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ]

  return (
    <>
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professional who will guide your muscial journey.</p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={instructors} />
                </div>
            </WavyBackground>
        </div>
    </>
  )
}

