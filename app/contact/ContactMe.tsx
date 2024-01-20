import React from 'react'

const ContactMe = () => {
  return (
    <div className='h-[40vh] px-[3rem]'>
        <div className='flex justify-center'>
            <div className='pr-[2rem]'>
                <span className='text-lg'>Contact <span className='text-accent'>Information</span></span>
                <ul className=''>
                    <li className='flex pt-[0.5rem]'><img src="./icons/linkedin.png" alt="" className='h-[auto] w-[30px] mr-[1rem]'/>LinkedIn</li>
                    <li className='flex pt-[0.5rem]'><img src="./icons/github.png" alt="" className='h-[auto] w-[30px] mr-[1rem]'/>GitHub</li>
                    <li className='flex pt-[0.5rem]'><img src="./icons/envelopes.png" alt="" className='h-[auto] w-[30px] mr-[1rem]'/> Email</li>
                    <li className='flex pt-[0.5rem]'><img src="./icons/facebook.png" alt="" className='h-[auto] w-[30px] mr-[1rem]'/>Facebook</li>
                </ul>
            </div>
            <div className='flex flex-col w-[30rem]'>
                <div className='mb-[10px] flex w-[28rem]'>
                    <input type='text' placeholder='Name' className=" input input-bordered input-accent input-md w-full max-w-xs mr-[10px]"/>
                    <input type='text' placeholder='Email' className="input input-bordered input-accent input-md w-full max-w-xs"/>
                </div>
                <input type='text' placeholder='Subject' className="mb-[10px] input input-bordered input-accent input-md w-full max-w-md"/>
                <textarea className="mb-[10px] textarea textarea-accent max-w-md w-full" placeholder="Message..."></textarea>
                <button className="w-[8rem] btn bg-accent hover:bg-transparent outline-accent ">Contact Me</button>
            </div>
        </div>
        <div className='flex items-center flex-col pt-[1rem]'>
            <img src="./icons/hat.png" alt="" className='h-[auto] w-[25px] mr-[1rem]'/>
            <span className='text-slate-500 pb-[1rem] text-sm'>Created By Ivanotch. 2024</span>
        </div>
    </div>
  )
}

export default ContactMe