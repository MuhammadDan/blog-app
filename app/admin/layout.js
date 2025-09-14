import React from 'react'
import AdminLayout from '@/component/AdminLayout'
const Layout = ({children}) => {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  )
}

export default Layout