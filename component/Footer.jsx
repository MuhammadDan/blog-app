import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Description */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-purple-600">YourBlog</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Where ideas meet innovation. Dive into a world of insightful articles written by passionate thinkers and industry experts.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-gray-500 hover:text-purple-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5">Explore</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition">All Articles</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Topics</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Authors</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Podcasts</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5">Legal</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Licenses</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-5">Stay Updated</h3>
            <form className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white font-medium py-4 rounded-lg hover:bg-gray-900 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-36 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2025 ByteCode. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer