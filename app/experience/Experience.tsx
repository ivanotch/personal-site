import React from 'react'
import Jobs from '../constants/experience';

const Experience = () => {
  return (
    <div className='h-[95vh]'>
      <div className='w-[50%] m-[auto] pt-[12rem]'>
        <div className='text-center text-3xl md:text-5xl font-main pb-[4rem] text-[#6F5643]'><span>Work</span> Experience</div>
        <div>
          {Jobs.map(job => (
            <div key={job.Heading}>
              <div className='text-xl font-sub font-extrabold text-orange-700 pb-[0.8rem]'>{job.Heading}</div>
              <div className='border-4 border-transparent border-l-accent p-[0.6rem]'>
                <div className='text-[17px] font-[600]'>{job.position}</div>
                <div className='mt-[0.5rem] text-[15px] text-stone-600'>{job.responsibility}</div>
                <ul className='flex'>
                  {job.tags.map((tag) => (
                    <li className='py-[4px] mt-[0.5rem] mr-[0.5rem] px-[15px] bg-amber-600 w-[auto] text-[13px] rounded-full' key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience