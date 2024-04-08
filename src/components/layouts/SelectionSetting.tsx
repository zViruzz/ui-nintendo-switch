import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  tabIndex?: number
  disabled?: boolean
}

function SelectionSetting ({ children, disabled = false, tabIndex = 0, className = '' }: Props) {
  return (
    <div
      className={`${disabled ? 'text-disabled' : 'hover:bg-blueHight focus-visible:bg-blueHight outline-wiggle outline-wiggle-focus'} box-border  h-[6.7rem] w-full shrink-0  flex items-center gap-4 hover:z-10 relative rounded-[0.5px] transition-all duration-100 text-[2.5rem]  ${className} ${tabIndex === -1 ? 'px-0' : 'px-5'} `}
      tabIndex={disabled ? -1 : tabIndex }
    >
        {children}
    </div>
  )
}

export default SelectionSetting
