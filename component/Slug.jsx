import React from 'react'

const Slug = ({title, blogdata}) => {
  const decodedTitle = decodeURIComponent(title);
    console.log(title);
    const finalTitle = decodedTitle.split("-").join(" ");
    return (
    <div>
        <h1 className='font-bold text-2xl'>{finalTitle}</h1>
        <p>{blogdata.description}</p>
    </div>
  )
}

export default Slug