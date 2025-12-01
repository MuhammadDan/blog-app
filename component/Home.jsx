'use client'
import { Card } from 'antd';
import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white items-center justify-center">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left space-y-8">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Explore the World<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              Through Words
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-purple-200 leading-relaxed">
            Discover insightful articles, thought-provoking stories, and expert perspectives on technology, lifestyle and innovation
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-black hover:text-white transition shadow-lg">
              Start Reading
            </button>
            <button className="px-8 py-4 border-2 border-white font-semibold rounded-full hover:bg-black hover:bg-opacity-10 transition">
              Explore Topics
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 text-center lg:text-left">
            <div>
              <div className="text-4xl font-bold">1k+</div>
              <div className="text-purple-300">Published articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="text-purple-300">Expert Writers</div>
            </div>
            <div>
              <div className="text-4xl font-bold">10M</div>
              <div className="text-purple-300">Monthly Readers</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl  shadow-2xl">
            <img
              src="https://recap.codesupply.co/recap/wp-content/uploads/sites/2/2025/08/demo-image-0042-1024x576.webp"
              alt="Person reading on laptop with coffee"
              className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Decorative floating elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-600 opacity-30 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
