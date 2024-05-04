'use client'

import { BackgroundBeams } from "@/components/ui/background-beams"
import { FormEvent, useState } from "react"

export default function Page() {

    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Data`, {email, message});
        // console.log(`data: email: ${email} message: ${message}`)
        setEmail('');
        setMessage('');
    }

  return (
    <>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
            <BackgroundBeams />
            <div className="max-w-2xl mx-auto p-4 relative z-10">
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">We&apos;re here to help with any questions about our courses,
                programs, or events. Reach out and let us know how we can assist you
                in your musical journey.</p>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <input 
                    type="email" 
                    placeholder="Enter your email" 
                    name="Email" 
                    required
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                     />
                    <textarea 
                    name="message" 
                    placeholder="Enter your message"  
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                    cols={30} rows={10} />
                    <button type="submit"
                    className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >Send message</button>
                </form>
            </div>
        </div>
    </>
  )
}

