import { type ReactNode } from 'react'

interface Props {
  isHidden: boolean
  title: string
  children: ReactNode
}
export default function SelectionGrid ({ isHidden, title, children }: Props) {
  return (
    <div className={`${isHidden ? 'opacity-0 -translate-x-14' : 'opacity-100 delay-100'}  min-h-full  transition-all bg-[#353535] ease-in-out grid grid-rows-[1fr_6.4fr]  `}>
      <div className='px-12'>
        <div className='border-b-[2px] h-full flex items-center pt-6 px-[3.2rem]'>
          {title}
        </div>
      </div>
      <div className='overflow-scroll scrollbar-hide pl-[11.7%] pr-[9%] pt-[4%] max-h-full w-full grid grid-cols-6 gap-[15px] aspect-square'>
        {children}
      </div>
    </div>
  )
}
