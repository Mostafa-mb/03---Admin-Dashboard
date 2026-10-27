import React from 'react'
import SidebarHeader from './components/SidebarHeader'

function Sidebar() {
  return (
    <aside className='w-[272px] relative z-10 bg-white h-screen sticky top-0 border-l border-gray-200 p-6'>
        <SidebarHeader></SidebarHeader>
    </aside>
  )
}

export default Sidebar