import { useState } from 'react'
import Line from '../Line'
import SelectionSetting from './SelectionSetting'

function SelectionSwitch ({ name }: { name: string }) {
  const [value, setValue] = useState(false)
  const handleClick = () => {
    setValue(!value)
  }

  return (
    <>
      <Line />
      <SelectionSetting>
        <button
          className='bg-transparent border-transparent flex justify-between items-center w-full h-full p-0'
          onClick={handleClick}
        >
          <div>
            {name}
          </div>
          <div className={`text-[2.2rem] ${value ? 'text-inherit' : 'text-[#9e9e9e]'}`}>
            {value ? 'Si' : 'No'}
          </div>
        </button>
      </SelectionSetting >
      <Line />
    </>
  )
}

export default SelectionSwitch
