import React from 'react'

const ContactMe = () => {
  return (
    <div className='h-[40vh]'>
        <div className='flex '>
            <div className='w-[6rem]'>
                <span>Contact Me</span>
                <ul>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                    <li>Email</li>
                    <li>Facebook</li>
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
    </div>
  )
}

export default ContactMe