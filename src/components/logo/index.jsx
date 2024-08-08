import React from 'react'
import { BiLogoYoutube } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
export default function Logo() {
  return (
    <div className='flex gap-4 items-center flex-shrink-0 '>
      <div className='max-w-[40px] max-h-[40px] h-full w-full flex items-center p-2'>
        <CiMenuBurger className='text-[18px]' />
      </div>
      <BiLogoYoutube className='text-red-500 text-[30px]' />
      <div className='relative max-w-[90px]  '>
        <span className='text-lg text-white font-bold  '>YouTube</span>
        <span className='absolute -top-px -right-3 opacity-35 text-xs'>TR</span>
      </div>
    </div>
  )
}

