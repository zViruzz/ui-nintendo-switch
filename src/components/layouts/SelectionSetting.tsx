import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

function SelectionSetting ({ children, className = '' }: Props) {
  return (
    <div
      className={`hover:bg-blueHight box-border px-5 h-[6.7rem] w-full shrink-0  flex items-center gap-4 outline-wiggle hover:z-10 relative rounded-[0.5px] transition-all duration-100 text-[2.5rem] focus:text-secodary ${className}`}
      tabIndex={0}
    >
        {children}
    </div>
  )
}

export default SelectionSetting
