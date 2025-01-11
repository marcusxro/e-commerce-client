import React from 'react'

export default function ProfHeader() {
    return (
        <div className="flex items-center justify-center py-4">
            <ul className='flex flex-row items-center justify-center gap-3 font-semibold text-lg cursor-pointer text-black'>
                <li><a href="/member/profile" className='hover:underline'>Profile</a></li>
                <li><a href="/member/inbox" className='hover:underline'>Inbox</a></li>
                <li><a href="/member/orders" className='hover:underline'>Orders</a></li>
                <li><a href="/member/favorites" className='hover:underline'>Favorites</a></li>
                <li><a href="/member/settings" className='hover:underline'>Settings</a></li>
            </ul>
        </div>
    )
}