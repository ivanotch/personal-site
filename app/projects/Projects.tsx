'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Cards from './Cards'

const Projects: React.FC = () => {

  const tags = ['All', 'Web Development', 'Programming Projects', 'Fun Games']

  const [clickedTag, setClickedTag] = useState<string >("All")

  const handleClick = (tag: string) => {
    setClickedTag(tag)
  }

  return (
    <div className='pl-[6rem] pr-[8rem]'>
      <div className='flex flex-col items-center'>
        <div className='font-main text-[3rem] text-[#6F5643]'>Projects</div>
        <div className='flex justify-evenly text-center h-[2rem] rounded-full border-2 border-black w-[60%] border-solid'>
          {tags.map((tag, index) => (
            <div className='p-[2px]' key={index} onClick={() => handleClick(tag)}>{tag}</div>
          ))}
        </div>
      </div>
      <div>
        <Cards tagName={clickedTag} />
      </div>
    </div>
  )
}

export default Projects