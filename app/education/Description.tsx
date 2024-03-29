import React from 'react'

const Description = (schoolName: String | object | null) => {
    console.log(schoolName)
    const {name, date, course, description} = schoolName as {name: String, date: String, course: String, description: String};

  return (
    <div>
        <div className='flex flex-col'>
            <span className='font-main text-[1em] pb-[1rem] md:text-[1.5em] text-accent'>{name}</span>
            <span className='font-sub mt-[-0.6rem] mb-[0.3rem] font-[900] text-slate-800'>{date}</span>
            <span className='font-main text-[0.9em] md:text-[1.1em]'>{course}</span>
            <span className='text-[0.8em] md:text-[1em]'>{description}</span>
        </div>

    </div>
  )
}

export default Description