export default function Home() {
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
            <button
                className='bg-[--purple-3] hover:bg-[--purple-4] text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-200 outline-none focus:ring-2 focus:ring-[--purple-2] focus:ring-offset-2 focus:ring-offset-[--dark-bg]'
                type='button'
            >
                get started
            </button>
        </main>
    )
}
