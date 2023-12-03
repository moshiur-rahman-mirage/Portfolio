import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'

const Hireme = () => {
  return (
    <div className='fixed left-4 
    bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
                <CircularText className={"fill-dark animate-spin-slow"}/>
                <Link href="mailto:moshiur.mirage@gmail.com" className='flex items-center justify-center absolute border-2
                bg-dark text-light border-dark shadow-md rounded-full hover:bg-light hover:text-dark 
                w-20 h-20 font-semibold
                '>
                    Hire Me
                </Link>
        </div>
    </div>
  )
}

export default Hireme