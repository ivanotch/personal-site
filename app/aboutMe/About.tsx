import React from 'react'
import Tech from './Tech'

const About = () => {
  return (
    <div className=''>
      <div className='flex pl-[6rem] h-[24rem]'>
        <div className='pr-[2rem] h-[auto] relative mr-[2rem] w-[29rem]'>
          <img src='wobbly.svg' alt='wobbly' className='absolute top-[4rem]'/>
          <img src='pictureSelf.png' className='object-scale-down absolute top-[-2rem]' alt="self photo" />
        </div>
        <div className='flex flex-col self-center text-left'>
          <div className='font-main text-5xl text-[#6F5643]' >About Me</div>
          <p className='text-lg'>
            Hi, I am Ivan Babida and i have been in Web development since 2022. 
            I'm passionate in creating and designing websites with the latest technologies  
            available in the internet.
            <br />
            <br />
            Currently I'm a student in Eulogio 'Amang' Rodriguez 
            Institute of Science and Technology taking a Computer Science program.
            <br />
            <br />
            I have created several projects using programming languages such as
             python and java as well as web development tech stacks like MongoDB, Expressjs, Reactjs, and Nodejs

          </p>
          <div className='flex pt-[1.5rem]'>
            <img src="./icons/facebook.png" alt="" className='h-[auto] w-[30px] mr-[1rem]'/>
            <img src="./icons/github.png" alt="" className='h-[auto] w-[30px] mr-[1rem]'/>
            <img src="./icons/instagram.png" alt="" className='h-[auto] w-[30px]'/>
        </div>
        </div>
      </div>
      <div>
        <div className='font-main text-5xl text-center relative top-[3rem] text-[#6F5643]'>Skills</div>
        <Tech />
      </div>

    </div>
  )
}

export default About