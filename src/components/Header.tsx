import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

function Header ({ children, className = '' }: Props) {
  return (
    <header className={`${className} col-span-2 px-[2.6%] flex justify-between flex-col`}>
      <div className='flex items-center text-[3rem] w-full h-full px-[3rem] gap-4 border-b-2 '>
        {children}
      </div>
    </header>
  )
}

export default Header
