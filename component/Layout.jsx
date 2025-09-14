'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const menus = [
  {
    label: 'Home',
    href: '/',
  },
   {
    label: 'Article',
    href: '/article',
  },
   {
    label: 'About',
    href: '/about',
  },
  // {
  //   label: 'Login',
  //   href: '/login',
  //   button: false
  // },
  // {
  //   label: 'Signup',
  //   href: '/signup',
  //   button: true
  // },
  {
    label: 'Dashboard',
    href: '/Dashboard',
  },
]

const Layout = ({children}) => {
    const pathname = usePathname()
    console.log(pathname)

    const blacklist = [
      '/login',
      '/signup',
      '/admin'
    ]
    
const isBlacklist = blacklist.includes(pathname)

if(isBlacklist)
  return(
<div>
  {children}
</div>
)
  return (
    <>
     <nav className="px-[7%] bg-white shadow-lg sticky top-0 left-0 w-full py-6 flex justify-between items-center">
          <Link href="/" className="text-left text-2xl font-bold">AlgoAlchemy</Link>
          <div className="flex gap-5 justify-center flex-1 items-center">
          {
            menus.map((item,index)=>(
              <Link key={index} href={item.href} className={`px-3 ${pathname == item.href ? "text-violet-600 font-medium" : "text-black font-normal"}`}>{item.label}</Link>
            ))
          }
          </div>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Search" className="border px-3 py-1 rounded-md" />
            <Link href="/login">Login</Link>
            <Link
             href="/signup"
             className="bg-violet-600 px-4 py-2 rounded text-white"
             >Signup</Link>

          </div>
        </nav>
         <section className="px-[5%] py-[10%]">{children}</section>
         <footer className="bg-gray-200 h-[450px] flex items-center justify-center text-3xl">my Footer</footer>
</>
  )
}

export default Layout