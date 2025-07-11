'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../components/Button'

export default function Home() {
    const router = useRouter()
    return (
        <main
            className='min-h-screen flex flex-col items-center justify-center px-4'
            style={{ background: 'var(--dark-bg)' }}
        >
            <h1 className='text-4xl md:text-5xl font-bold mb-4 text-white text-center'>
                intervals
            </h1>
            <p className='text-lg md:text-xl text-white mb-8 max-w-xl text-center'>
                a web app + discord bot that helps you track how you are using
                your time. get pinged every x minutes, reply with what you did,
                and check the web app for smart insights on your time.
            </p>
            <Button type='button' onClick={() => router.push('/dashboard')}>
                get started
            </Button>
        </main>
    )
}
