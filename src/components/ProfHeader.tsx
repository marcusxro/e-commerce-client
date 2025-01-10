import React from 'react'

export default function ProfHeader() {
    return (
    <div className="flex items-center justify-center py-4">
            <ul className='flex flex-row items-center justify-center gap-3 font-semibold text-lg'>
                <li><a href="/profile"></a>Profile</li>
                <li><a href="/inbox"></a>Inbox</li>
                <li><a href="/orders"></a>Orders</li>
                <li><a href="/favorites"></a>Favorites</li>
                <li><a href="/settings"></a>Settings</li>
            </ul>
    </div>
    )
}