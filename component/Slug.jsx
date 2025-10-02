import React from 'react'

const Slug = ({title}) => {
  const decodedTitle = decodeURIComponent(title);
    console.log(title);
    const finalTitle = decodedTitle.split("-").join(" ");
    return (
    <div>
        <h1>{finalTitle}</h1>
    </div>
  )
}

export default Slug