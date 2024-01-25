'use client'
import React, {useState} from 'react'

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const genericHamburgerLine = 'h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300';

  return (
    <div className='h-[4rem] flex items-center justify-between'>
        <div className='pl-[1rem] text-3xl font-semibold'>
            Ivan<span className='text-accent'>otch.</span>
        </div>
        <button className='absolute right-[1rem] lg:hidden flex flex-col h-12 w-12 border-2 border-black rounded items-center group'
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100": "opacity-50 group-hover:opacity-100"}`}></div>
          <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}></div>
          <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`}></div>
        </button>
        <div>
            <ul className='hidden lg:flex'>
                <li className='px-4'><a href="">Home</a></li>
                <li className='px-4'><a href="">About Me</a></li>
                <li className='px-4'><a href="">Experience</a></li>
                <li className='px-4'><a href="">Education</a></li>
                <li className='px-4'><a href="">Projects</a></li>
                <li className='px-4'><a href="">Contact Me</a></li>
                
            </ul>
        </div>
    </div>
  )
}

export default NavBar