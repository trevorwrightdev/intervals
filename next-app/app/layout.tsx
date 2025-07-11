import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { getBaseUrl } from '@/lib/utils'

export const metadata: Metadata = {
    metadataBase: new URL(getBaseUrl()),
    title: 'Next.js and Supabase Starter Kit',
    description: 'The fastest way to build apps with Next.js and Supabase',
}

const ibmPlexMono = IBM_Plex_Mono({
    variable: '--font-ibm-plex-mono',
    display: 'swap',
    subsets: ['latin'],
    weight: ['400', '700'],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={`${ibmPlexMono.className} antialiased`}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
