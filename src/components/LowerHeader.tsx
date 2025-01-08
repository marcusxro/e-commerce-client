import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";


export default function LowerHeader() {
    return (
        <div className='flex gap-3 justify-between items-center p-3 bg-[#454545] text-white'>
            <div className='w-full'>
                Logos
            </div>

            <div className='flex gap-3 w-full'>
                <div className='cursor-pointer'> New</div>
                <div className='cursor-pointer'> Men</div>
                <div className='cursor-pointer'> Women</div>
                <div className='cursor-pointer'> Kids</div>
                <div className='cursor-pointer'> Sale</div>
            </div>

            <div className='flex gap-3 items-center w-full max-w-[300px]'>
                <div className='w-full relative'>
                    <div className='absolute left-[10px] top-[8px] text-[#000]'>
                        <IoSearchSharp />
                    </div>
                    <input
                        className='py-1 pl-7 text-[#000] placeholder:text-black w-full px-3 outline-none border-none bg-[#eeeeee] rounded-xl'
                        type="text" placeholder='Search' />

                </div>
                <div className='text-3xl  cursor-pointer hover:bg-[#c7c7c7] rounded-full p-1'>
                    <CiHeart />
                </div>
                <div className='text-3xl  cursor-pointer hover:bg-[#c7c7c7] rounded-full p-1'>
                    <IoBagOutline />
                </div>
            </div>
        </div>
    )
}
