import React from 'react'

interface tag {
    tagName: string | null;
}


const Cards: React.FC<tag> = ({tagName}) => {
    
  return (
    <div>{tagName}</div>
  )
}

export default Cards