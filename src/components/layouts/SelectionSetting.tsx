import { type ElementType, type HTMLAttributes, type ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  children: ReactNode
  className?: string
  to?: string
  tabIndex?: number
  disabled?: boolean
}

function SelectionSetting ({ as: Component = 'div', children, disabled = false, tabIndex = 0, className = '', ...otherProps }: Props) {
  return (
    <Component
      className={`${disabled ? 'text-disabled' : 'hover:bg-blueHight focus-visible:bg-blueHight outline-wiggle outline-wiggle-focus'} box-border  h-[6.7rem] w-full shrink-0  flex items-center gap-4 hover:z-10 relative rounded-[0.5px] transition-all duration-100 text-[2.5rem]  ${className} ${tabIndex === -1 ? 'px-0' : 'px-5'} `}
      tabIndex={disabled ? -1 : tabIndex }
      {...otherProps}
    >
        {children}
    </Component>
  )
}

export default SelectionSetting
