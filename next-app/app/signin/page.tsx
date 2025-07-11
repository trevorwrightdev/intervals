'use client'

import { DiscordLogoIcon } from '@phosphor-icons/react'
import { Button } from '../../components/Button'
import { createClient } from '../../lib/supabase/client'

export default function SignIn() {
    const handleSignIn = async () => {
        const supabase = createClient()
        await supabase.auth.signInWithOAuth({ provider: 'discord' })
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
