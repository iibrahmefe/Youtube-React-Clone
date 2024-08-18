import React from 'react'
import { BiLogoYoutube } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";


export default function Logo() {
  return (
    <div className='flex gap-4 bg-[#0f0f0f] items-center flex-shrink-0 '>
      <div className='max-w-[40px] max-h-[40px] h-full w-full flex items-center p-2'>
        <CiMenuBurger className='text-[18px]' />
      </div>
      <div className='relative   flex '>
        <BiLogoYoutube className='text-red-500 text-[30px]' />
        <span className='text-lg text-white font-bold  '>YouTube</span>
        <span className='absolute -top-1 -right-4 text-[#aaaaaa] text-[11px]'>TR</span>
      </div>
    </div>
  )
}

