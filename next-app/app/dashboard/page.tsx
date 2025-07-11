import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/signin')
    }
    return (
        <div className='flex-1 w-full flex flex-col items-center justify-center pt-12'>
            <h1 className='font-bold text-3xl'>dashboard</h1>
        </div>
    )
}
