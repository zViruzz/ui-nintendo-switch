import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Header ({ children }: Props) {
  return (
    <header className="col-span-2 px-12 flex justify-between flex-col">
      <div className='flex items-center text-[3rem] w-full h-full px-[3rem] gap-4'>
        {children}
      </div>
      <div className='w-full h-[1px] bg-[#ffffff] shrink-0' />
    </header>
  )
}

export default Header
