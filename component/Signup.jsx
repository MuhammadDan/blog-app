'use client'
import {  Button, Card, Form, Input } from 'antd'
import { Lock, Mail, Plus, User } from 'lucide-react'
import React from 'react'

const Signup = () => {
  const signup = (values)=>{
    console.log(values)
  }
  return (
    <div className='flex bg-gray-100 h-screen justify-center items-center'>
        <Card hoverable className='w-full max-w-md bg-white shadow-lg'>
          <div className='flex justify-center mb-8'>
          <h1 className='bg-slate-800 text-xl text-white px-8 py-2 rounded-full font-semibold'>Register</h1>
          </div>
          <Form onFinish={signup}>
            <Form.Item label="" name="fullname" rules={[{required: true}]}>
              <Input size='large' placeholder='Username' className='pl-4 pr-12 py-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-gray-500 focus:ring-0'/>
              <User className='absolute right-3 top-3 h-5 w-5 text-gray-400'/>
            </Form.Item>
            <Form.Item label="" name="email" rules={[{required: true}]}>
              <Input size='large' placeholder='Email' className='pl-4 pr-12 py-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-gray-500 focus:ring-0'/>
              <Mail className='absolute right-3 top-3 h-5 w-5 text-gray-400'/>
            </Form.Item>
            <Form.Item label="" name="password" rules={[{required: true}]}>
              <Input size='large' type='password' placeholder='Password' className='pl-4 pr-12 py-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-gray-500 focus:ring-0'/>
              <Lock className='absolute right-3 top-3 h-5 w-5 text-gray-400'/>
            </Form.Item>
            <Form.Item>
              <Button className='w-full bg-slate-800 text-white py-3 rounded-full flex items-center justify-center gap-2 mt-8'>Signup
                <Plus className='h-4 w-4'/>
              </Button> 
              {/* // button antdsign ka nahi hai */}
            </Form.Item>
          </Form>
        </Card>
    </div>
    // error
  )
}

export default Signup