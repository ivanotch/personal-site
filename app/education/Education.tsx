'use client'

import React from 'react'
import Schools from "../constants/education";
import Description from './Description';
import { useState } from 'react';

const Education = () => {

    const [clicked, setClicked] = useState<null | string | object>('Arellano University');

    function handleClick (buttonName: String) {
        setClicked(buttonName)
    }

  return (
    <div className='h-[90vh]'>
        <div className='flex w-[80%] mx-[auto] pt-[5rem] '>
            <div className='w-[40%]'>
                <div className='font-main text-[2.6rem] relative  text-[#6F5643]'>EDUCATION</div>
                <div className='pt-[1rem]'>
                    {Schools.map((school) => (
                        <div onClick={() => handleClick(school.name)} key={school.name} className='cursor-pointer hover:text-accent p-[0.5rem] text-[15px] mb-[10px] hover:underline'>
                            {school.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className='pt-[79.4px] pl-[1rem]'>
                {Schools.map((school, index) => (
                    school.name === clicked ? <Description key={index} {...school} /> : null
                ))}
            </div>
        </div>
    </div>
  )
}

export default Education