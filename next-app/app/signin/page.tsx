'use client'

import { DiscordLogoIcon } from '@phosphor-icons/react'
import { Button } from '@/components/Button'
import { createClient } from '@/lib/supabase/client'
import { getBaseUrl } from '@/lib/utils'

export default function SignIn() {
    console.log(getBaseUrl() + '/auth/callback')
    const handleSignIn = async () => {
        const supabase = createClient()
        await supabase.auth.signInWithOAuth({
            provider: 'discord',
            options: {
                redirectTo: `${getBaseUrl()}/auth/callback`,
            },
        })
    }

    return (
        <main
            className='min-h-screen flex flex-col items-center justify-center px-4'
            style={{ background: 'var(--dark-bg)' }}
        >
            <Button onClick={handleSignIn} className='flex items-center gap-4'>
                <DiscordLogoIcon size={32} weight='fill' />
                sign in with discord
            </Button>
        </main>
    )
}
