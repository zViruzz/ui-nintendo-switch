import { useState } from 'react'
import SelectionSetting from '../../../components/layouts/SelectionSetting'
import BrightnessIcon from '../../../components/icons/BrightnessIcon'

function ScreenBrightness () {
  const [isAutoBrightness, setIsAutoBrightness] = useState(false)
  const handleClick = () => {
    setIsAutoBrightness(!isAutoBrightness)
  }

  return (
    <div className=" h-full w-full flex flex-col">
      <div>
        <div className='w-full h-[1px] bg-[#ffffff34] shrink-0' />
        <SelectionSetting>
          <button
            className='bg-transparent border-transparent flex justify-between items-center w-full h-full'
            onClick={handleClick}
          >
            <div>
              Brillo automatico
            </div>
            <div className={`text-[2.2rem] ${isAutoBrightness ? 'text-inherit' : 'text-[#9e9e9e]'}`}>
              {isAutoBrightness ? 'Si' : 'No'}
            </div>
          </button>
        </SelectionSetting>
        <div className='w-full h-[1px] bg-[#ffffff34] shrink-0 ' />
      </div>

      <div
        className='box-border p-5 h-[6.9rem] w-full shrink-0  flex items-center gap-12 group hover:z-10 relative rounded-[0.5px]  '
        tabIndex={0}
      >
        <BrightnessIcon width={60} height={60}/>
        <input type="range" className="w-full webkit-slider-thumb out-of-range:border-green-500" />
      </div>

      <div className='px-14 py-6'>
        <ul className='text-[1.83rem] list-image-checkmark text-[#8c8c8c] leading-snug'>
          <li>
            El brillo tambien se puede ajustar mediante la configuracion de acceso rapido  (manten oprimido<span className="after:content-home pl-[0.40rem]"></span>).
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ScreenBrightness
