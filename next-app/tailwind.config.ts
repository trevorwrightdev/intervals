import type { Config } from 'tailwindcss'

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                darkBg: '#1A1A1D',
                purple1: '#371b58',
                purple2: '#4c3575',
                purple3: '#5b4b8a',
                purple4: '#7858a6',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config
