import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex gap-3 justify-between items-center p-5'>
      <div>
        Kraph
      </div>
      <div className='flex gap-3 items-center'>

        <div>
          Notification
        </div>

<div>
  Help
</div>
        <SignedIn>

          <Link href='/dashboard'>
            Dashboard
          </Link>
          <Link href='/logout'>
            Logout
          </Link>
        </SignedIn>
        <SignedOut>
          <Link href='/sign-in'>
            Sign in
          </Link>
          <Link href='/sign-up'>
            Sign up
          </Link>
        </SignedOut>
      </div>
    </div>
  )
}
