import { type ReactNode, useState } from 'react'
import SelectionSetting from './SelectionSetting'

interface Props {
  children: ReactNode
  className?: string
}

function SelectionSwitch ({ children, className }: Props) {
  const [value, setValue] = useState(false)
  const handleClick = () => {
    setValue(!value)
  }

  return (
    <>
      <SelectionSetting className={className}>
        <button
          className='bg-transparent border-transparent flex justify-between items-center w-full h-full p-0'
          onClick={handleClick}
        >
          <div>
            {children}
          </div>
          <div className={`text-[2.2rem] ${value ? 'text-inherit' : 'text-[#9e9e9e]'}`}>
            {value ? 'Si' : 'No'}
          </div>
        </button>
      </SelectionSetting >

    </>
  )
}

export default SelectionSwitch
