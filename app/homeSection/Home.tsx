import React from 'react'

const HomePage = () => {
  return (
    <div className='relative h-[70vh] pl-[2rem] lg:h-[100vh] flex lg:pl-[6rem] items-center mt-[1rem]'>
        <div className='absolute top-[1rem] sm:left-[5rem] lg:top-[8rem] grid grid-cols-1 w-[70%] translate-x-5 duration-1000 animate-slideInLeft  '>
            <div>
                <span className='text-accent text-md font-medium md:text-lg'>Hi, I'm</span>
                <br/>
                <span className=' md:mb-4 text-2xl md:text-5xl md:font-medium font-main'>Charlz Ivan John Babida</span>
                <br />
                <span className='md:pb-8 text-xl md:text-3xl font-sub'>A Full Stack Web Developer, Web Designer, Student, Programmer</span>
            </div>
            <div className='text-md md:text-2xl font-subSub text-slate-800'>A Filipino college student currently studying in the field of computer science and working as a Freelance computer programmer and Web developer</div>
            <div className='pt-[2rem]'>Need a Hand?</div>
            <div className='mt-3'><button className="w-[8rem] btn btn-outline btn-accent">Contact Me</button></div>
        </div>
    </div>
  )
}

export default HomePage