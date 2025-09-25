'use client'
import { Card } from 'antd';
import React from 'react'

const Home = ({bldata}) => {
  console.log("component mai data",bldata);
  
  return (
        <div className='w-8/12 mx-auto space-y-8 '>
          {
            bldata.map((item, index)=>(
              <div key={index}>
              <Card hoverable>
                <h1 className='capitalize text-2xl font-semibold'>{item.title}</h1>
              </Card>
              </div>
            ))
          }
        </div>
  )
}

export default Home