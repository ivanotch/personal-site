import React from 'react'
import Card from './Card';
import projects from './../constants/projects';

interface tag {
  tagName: string;
}


const Cards: React.FC<tag> = ({tagName}) => {
    
  return (
    <div className='mb-[4rem] mt-[4rem] flex flex-wrap justify-evenly'>
      {projects.map((project, index) => (
        tagName === "All" ? <Card key={index} image={project.image} title={project.title} description={project.description} tags={project.tags} /> : project.tags.includes(tagName) ? <Card key={index} image={project.image} title={project.title} description={project.description} tags={project.tags} /> : null
      ))}
    </div>
    // <Card />
    // <div>{tagName}</div>
  )
}

export default Cards