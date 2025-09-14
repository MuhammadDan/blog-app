'use client'
import { Button, Form, Input } from 'antd'
import React from 'react'

const AdminRoute = () => {
  const createBlog = (values)=>{
    console.log(values);
  }
  return (
    <div>
      <h1 className='text-4xl font-bold mb-8'>New blog</h1>
      <Form layout='vertical' onFinish={createBlog}>
        <Form.Item label="Title" name="title" rulles={[{required: true}]}>
          <Input size='large' placeholder='Enter blog title here'/>
        </Form.Item>

        <Form.Item label="Description" name="Description" rules={[{required: true}]}>
          <Input.TextArea size='large' placeholder='Enter Description' rows={10} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Create blog</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AdminRoute 