'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export default function Footer() {

  const handleEmailClick = () => {
    window.location.href = 'mailto:orgamixteam@gmail.com'; // Triggers email client with the provided email
};
  
  const router = useRouter();

  const navToHome = () => {
    router.push('/');
  }
  return (
    <div className='h-auto  flex flex-col gap-5 bg-[#151515] items-center text-white border-t-[1px] border-t-[#535353] p-5 overflow-auto'>

            <div className='flex justify-between gap-5 mx-auto max-w-[1180px] w-full'>
                <div className='flex items-center gap-4'>
                    <div className='w-[30px] h-[30px] cursor-pointer'>
                        <img
                            className='w-full h-full object-cover'
                            src="" alt="" />
                    </div>
                    <div className='text-[#888]'>
                        © 2024 :3. All Rights Reserved.
                    </div>
                </div>

                <div>
                    :3
                </div>
            </div>

            <div className='w-full mx-auto  max-w-[1180px]  gap-5 justify-between flex items-start md:items-center mt-5 '>
                <div className='flex gap-3'>
                    <div
                        onClick={() => { window.open('https://github.com/marcusxro') }}

                        className='text-[#888] cursor-pointer hover:text-[#fff]'>
                        <FaInstagram />
                    </div>
                    <div

                        onClick={() => { window.open('https://www.facebook.com/marcuss09') }}

                        className='text-[#888] cursor-pointer hover:text-[#fff]'>
                        <FaFacebookF />
                    </div>
                    <div
                        onClick={handleEmailClick}
                        className='text-[#888] cursor-pointer hover:text-[#fff]'>
                        <FaXTwitter />
                    </div>
                    <div
                        onClick={handleEmailClick}
                        className='text-[#888] cursor-pointer hover:text-[#fff]'>
                        <FaLinkedin />
                    </div>
                </div>
                <div className='flex gap-3 text-[#888] items-end md:items-center flex-col md:flex-row'>
                    <div className='text-sm'>Philippines ●</div>
                    <div
                        onClick={() => { navToHome() }}
                        className='cursor-pointer text-sm'>Home</div>
                    <div
                        onClick={() => { navToHome() }}
                        className='cursor-pointer text-sm'>Documentation</div>
                    <div
                        onClick={() => { navToHome() }}
                        className='cursor-pointer text-sm'>About</div>
                    <div
                        onClick={() => { navToHome() }}
                        className='cursor-pointer text-sm'>Contact</div>
                </div>
            </div>
        </div>
  )
}
