import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

export default async function UpperHeader() {
    const user: any = await currentUser()

    return (
        <div className='flex gap-3 justify-between items-center p-3 bg-[#eeeeee]'>
            <div>
                Logo
            </div>

            <div className='flex gap-3 items-center text-sm'>
                <div>Start Selling</div>
                <div>Help</div>
                <div>Notification</div>
                <SignedOut>
                    <Link className='text-blue-500 cursor-pointer' href='/sign-in'>
                        Sign In
                    </Link>
                    <Link className='text-blue-500 cursor-pointer' href='/sign-up'>
                        Sign Up
                    </Link>
                </SignedOut>
                <SignedIn>

                    <UserButton
                        showName />
                </SignedIn>
            </div>
        </div>
    )
}
