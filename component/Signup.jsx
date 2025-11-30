"use client";
import { FacebookFilled, FacebookOutlined, GoogleOutlined, TwitterCircleFilled, TwitterOutlined } from "@ant-design/icons";
import { Form, Input, message } from "antd";
import { Lock, Mail, Plus, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Signup = () => {
  const [form] = Form.useForm();

  const signupvalue = async (values) => {
    try {
      // Yahan apna signup API call karein
      console.log("Signup values:", values);
      message.success("Signup successful!");
    } catch (err) {
      message.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-500 to-blue-400 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Register
        </h1>

        <Form form={form} className="space-y-6" onFinish={signupvalue}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Full name required" }]}
          >
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                </div>
                <Input
                  size="large"
                  placeholder="Type your name"
                  className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:border-purple-500 outline-none transition-colors text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Email required" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                </div>
                <Input
                  size="large"
                  type="email"
                  placeholder="Type your email"
                  className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:border-purple-500 outline-none transition-colors text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Password required" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                </div>
                <Input.Password
                  size="large"
                  placeholder="Type your password"
                  className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:border-purple-500 outline-none transition-colors text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                </div>
                <Input.Password
                  size="large"
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:border-purple-500 outline-none transition-colors text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
          </Form.Item>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          >
            SIGNUP
            <Plus size={20} />
          </button>
        </Form>

        <div className="mt-8">
          <p className="text-center text-sm text-gray-500 mb-4">
            Or Sign Up Using
          </p>
          <div className="flex justify-center space-x-4">
            <button className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
            <button className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">Already have an account?</p>
          <Link
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;