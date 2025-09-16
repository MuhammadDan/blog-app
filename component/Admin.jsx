'use client'
import { Button, Card, Form, Input, message } from 'antd'
import React from 'react'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = async (url) =>{
    try {
      const {data} = await axios.get(url)
      return data
    } catch (err) {
      throw new Error(err)
      
    }
}
// fecher function kai anderr yai url ('/api/blog') by default pass hojyega async (url) mai
// ab reurn data karo gai to apko iswalai data mai miljyga (const {data} = useSWR('/api/blog', fetcher))
const AdminComponent = () => {
  const {data} = useSWR('/api/blog', fetcher)
  console.log("Data from SWR:", data); // Debugging line to check fetched data
  
  const createBlog = async (values)=>{
    try {
         console.log("Submitting values:", values); // Add this to debug
        const {data} = await axios.post('/api/blog', values, {headers: {'Content-Type': 'application/json'}});  
        console.log("Response: ", data); 
        message.success('Blog created successfully!');     
    } catch (err) {
      console.error("Error:", err);
        message.error(err.response.data.message || err.message)
    }
  }


  return (
    <div className='grid grid-cols-12 gap-12'>
    <div className='col-span-7'>
    <h1 className='text-4xl font-bold mb-8'>New blog</h1>
      <Form layout='vertical' onFinish={createBlog}>
        <Form.Item label="Title" name="title" rulles={[{required: true}]}>
          <Input size='large' placeholder='Enter blog title here'/>
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[{required: true}]}>
          <Input.TextArea size='large' placeholder='Enter Description' rows={10} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Create blog</Button>
        </Form.Item>
      </Form>
    </div>
    <div className='col-span-5 space-y-6'>
       {
        data && data.map((item, index)=>(
          <Card key={index}>
            <h1 className='text-2xl capitalize font-bold'>{item.title}</h1>
            <p className='text-gray-500 text-lg'>{item.description}</p>
          </Card>
        ))
       }
    </div>
      
    </div>
  )
}

export default AdminComponent 