import React from 'react'

interface Props{
    Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
    title: string
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div className='flex max-w-fit item-center space-x-2 px-4 py-3 
    rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200 group'>
        <Icon className='h-6 w-6' />
        <p className='group-hover:text-twitter hidden md:inline-flex 
        text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow