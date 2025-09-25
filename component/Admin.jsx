'use client'
import { Button, Card, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import axios from 'axios'
import useSWR, { mutate } from 'swr'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const fetcher = async (url) =>{
    try {
      const {data} = await axios.get(url)
      return data
    } catch (err) {
      throw new Error(err)
      
    }
}

const AdminComponent = () => {
  const [curentEditId, setCurrentEditId] = useState(null);
  const [form] = Form.useForm()
  const {data} = useSWR('/api/blog', fetcher)
  console.log("Data from SWR:", data); // Debugging line to check fetched data
  
  const createBlog = async (values)=>{
    try {
         console.log("Submitting values:", values); // Add this to debug
        const {data} = await axios.post('/api/blog', values, {headers: {'Content-Type': 'application/json'}});  
        console.log("Response: ", data); 
        mutate('/api/blog')    
        message.success('Blog created successfully!');
        form.resetFields() 
    } catch (err) {
      console.error("Error:", err);
        message.error(err.response.data.message || err.message)
    }
  }

  const deleteBlog = async (id)=>{
    try {
      await axios.delete(`/api/blog/${id}`)
      mutate('/api/blog')
    } catch (err) {
      message.error(err.message)
    }
  }

  const updateBlog = (item) =>{
    form.setFieldsValue(item)
    setCurrentEditId(item._id)
  }

  const saveBlog = async (values) =>{
    try {
      await axios.put(`/api/blog/${curentEditId}`, values, {'Content-Type' : 'application/json'})
      mutate('/api/blog')
      form.resetFields()
      setCurrentEditId(null)
    } catch (err) {
      message.error(err.message)
    }
  }


  return (
    <div className='grid grid-cols-12 gap-12'>
    <div className='col-span-7'>
    <h1 className='text-4xl font-bold mb-8'>New blog</h1>
      <Form layout='vertical' onFinish={curentEditId ? saveBlog : createBlog} form={form}>
        <Form.Item label="Title" name="title" rulles={[{required: true}]}>
          <Input size='large' placeholder='Enter blog title here'/>
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[{required: true}]}>
          <Input.TextArea size='large' placeholder='Enter Description' rows={10} />
        </Form.Item>
        {
          curentEditId ? (
             <Form.Item>
          <Button type="primary" htmlType="submit" danger>Save</Button>
        </Form.Item>
          ) : (
              <Form.Item>
          <Button type="primary" htmlType="submit">Create blog</Button>
        </Form.Item>
          )
        }

      </Form>
    </div>
    <div className='col-span-5 space-y-6'>
       {
        data && data.map((item, index)=>(
          <div key={index}>
          <Card hoverable
          actions={[
            <EditOutlined  key="edit" onClick={()=>updateBlog(item)}/>,
            <DeleteOutlined  key="delete" onClick={()=>deleteBlog(item._id)}/> // (item._id yai mongodb ka id ead kar raha hai)
          ]}>
            <h1 className='text-2xl capitalize font-bold'>{item.title}</h1>
            <p className='text-gray-500 text-lg'>{item.description.slice(0,100)}</p>
          </Card>
          </div>
        ))
       }
    </div>
      
    </div>
  )
}

export default AdminComponent 