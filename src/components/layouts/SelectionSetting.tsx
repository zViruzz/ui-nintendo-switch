import { type ReactNode } from 'react'

function SelectionSetting ({ children }: { children: ReactNode }) {
  return (
    <div
      className='hover:bg-[#1f2227] box-border px-3  h-[6.7rem] w-full shrink-0  flex items-center gap-4 hover:outline outline-[6px] outline-[#78f0f5] group hover:z-10 relative rounded-[0.5px] transition-all duration-100 hover:animate-wiggle text-[2.5rem] '
      tabIndex={0}
    >
      <div className='group-hover:text-[#00ffc9] group-focus:text-[#00ffc9] flex justify-between w-full'>
        {children}
      </div>
    </div>
  )
}

export default SelectionSetting
