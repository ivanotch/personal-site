import React from 'react'

const HomePage = () => {
  return (
    <div className='h-[100vh] flex pl-[6rem] items-center mt-[-3.5rem]'>
        <div className='grid grid-cols-1 w-[70%] translate-x-5 duration-1000 animate-slideInLeft  '>
            <div>
                <span className='text-accent font-medium text-lg'>Hi, I'm</span>
                <br/>
                <span className=' mb-4 text-5xl font-medium font-main'>Charlz Ivan John Babida</span>
                <br />
                <span className='pb-8 text-3xl font-sub'>A Full Stack Web Developer, Web Designer, Student, Programmer</span>
            </div>
            <div className='text-xl font-subSub text-slate-800'>A Filipino college student currently studying in the field of computer science and working as a Freelance computer programmer and Web developer</div>
            <div className='pt-[2rem]'>Need a Hand?</div>
            <div className='mt-3'><button className="w-[8rem] btn btn-outline btn-accent">Contact Me</button></div>
        </div>
    </div>
  )
}

export default HomePage