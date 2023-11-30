import React from 'react'

const Description = (schoolName: String | object | null) => {
    console.log(schoolName)
    const {name, date, course, description} = schoolName as {name: String, date: String, course: String, description: String};

  return (
    <div>
        <div className='flex flex-col'>
            <span>{name}</span>
            <span>{date}</span>
            <span>{course}</span>
            <span>{description}</span>
        </div>

    </div>
  )
}

export default Description