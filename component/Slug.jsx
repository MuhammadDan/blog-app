import React from 'react'

const Slug = ({title}) => {
    console.log(title);
    return (
    <div>
        <h1>{title.split("-").join(" ")}</h1>
    </div>
  )
}

export default Slug