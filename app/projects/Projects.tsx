import Link from 'next/link'
import React from 'react'

const Projects = () => {

  const tags = ['All', 'Web Development', 'Programming Projects', 'Fun Games']

  return (
    <div className='h-[100vh] pl-[6rem] pr-[8rem]'>
      <div className='flex flex-col items-center'>
        <div className='font-main text-[3rem] text-[#6F5643]'>Projects</div>
        <div className='flex justify-evenly text-center h-[2rem] rounded-full border-2 border-black w-[60%] border-solid'>
          {tags.map((tag, index) => (
            <Link className='p-[2px]' href={""} key={index}>{tag}</Link>
          ))}
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Projects