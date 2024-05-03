"use client"

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect"

export default function UpcomingWebinars() {

    const webinarDetails = [
        {
            title: "The Rhythm of Jazz: Exploring Improvisation",
            description: "Discover the spontaneous creativity of jazz improvisation. Join us as we delve into the rhythmic complexities and harmonic innovations that define this unique musical genre.",
            slug: "rhythm-of-jazz-exploring-improvisation"
          },
          {
            title: "Classical Masterpieces: Unraveling the Symphony",
            description: "Embark on a journey through the grandeur of classical music. Explore the masterpieces of renowned composers and unravel the intricate symphonic structures that have stood the test of time.",
            slug: "classical-masterpieces-unraveling-the-symphony"
          },
          {
            title: "Rock Revolution: Evolution of Guitar",
            description: "Trace the evolution of rock music through the iconic instrument of the guitar. From blues roots to modern rock solos, uncover the techniques and innovations that shaped the rock revolution.",
            slug: "rock-revolution-evolution-of-guitar"
          },
          {
            title: "Hip Hop Chronicles: From the Bronx to the Mainstream",
            description: "Dive into the cultural phenomenon of hip hop music. Explore its origins in the streets of the Bronx and its journey to becoming a global force of artistic expression and social commentary.",
            slug: "hip-hop-chronicles-from-the-bronx-to-the-mainstream"
          },
          {
            title: "Hip Hop Chronicles: From the Bronx to the Mainstream",
            description: "Dive into the cultural phenomenon of hip hop music. Explore its origins in the streets of the Bronx and its journey to becoming a global force of artistic expression and social commentary.",
            slug: "hip-hop-chronicles-from-the-bronx-to-the-mainstream"
          },
          {
            title: "Rock Revolution: Evolution of Guitar",
            description: "Trace the evolution of rock music through the iconic instrument of the guitar. From blues roots to modern rock solos, uncover the techniques and innovations that shaped the rock revolution.",
            slug: "rock-revolution-evolution-of-guitar"
          },
    ]


  return (
    <>
        <div className="p-4 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>
                <div className="m-10">
                    <HoverEffect items={webinarDetails.map(items => (
                        {
                            title: items.title,
                            description: items.description,
                            link: items.slug
                        }
                    ))} />
                </div>
                <div className="m-10 text-center">
                    <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-600 bg-white hover:bg-gray-100 transition duration-200">
                        View All Webinars
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

