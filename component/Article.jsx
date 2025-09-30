'use client'
import { Card } from 'antd';
import Link from 'next/link';
import React from 'react'

const Article = ({bldata}) => {
  console.log("component mai data",bldata);
  
  return (
        <div className='flex flex-col gap-8'>
          {
            bldata.map((item, index)=>(
              <div key={index}>
              <Link key={index} href={`/article/${item.title.split(" ").join("-")}`}>
              <Card hoverable>
                <h1 className='capitalize text-2xl font-semibold'>{item.title}</h1>
              </Card>
              </Link>
              </div>
            ))
          }
        </div>
  )
}

export default Article