import React from 'react'

const NavBar = () => {
  return (
    <div className='h-[4rem] w-[100%] justify-between flex items-center'>
        <div className='text-3xl font-semibold'>
            Ivan<span className='text-accent'>otch.</span>
        </div>
        <div>
            <ul className='flex'>
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