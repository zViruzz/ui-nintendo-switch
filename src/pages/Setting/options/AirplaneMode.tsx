import { useState } from 'react'
import SelectionSetting from '../../../components/layouts/SelectionSetting'

function AirplaneMode () {
  const [isAirplaneMode, setIsAirplaneMode] = useState(false)
  const handleClick = () => {
    setIsAirplaneMode(!isAirplaneMode)
  }

  return (
    <div className=" h-full w-full flex flex-col">

      <div className='w-full h-[1px] bg-[#ffffff34] shrink-0' />
      <SelectionSetting>
        <button
          className='bg-transparent border-transparent flex justify-between items-center w-full h-full'
          onClick={handleClick}
          >
          <div>
            Modo avion
          </div>
          <div className={`text-[2.2rem] ${isAirplaneMode ? 'text-inherit' : 'text-[#9e9e9e]'}`}>
            {isAirplaneMode ? 'Si' : 'No'}
          </div>
        </button>
      </SelectionSetting>
      <div className='w-full h-[1px] bg-[#ffffff34] shrink-0 ' />

      <div className='py-3 pl-6 text-[1.83rem] text-[#8c8c8c] leading-snug'>
        <p>Todas las comunicaciones inalamnricas, como Wi-Fi o Bluetooth, se desactivarán.</p>
        <p>Si la consola tiene el modo avión activado, ciertos tipos de comunicacion inalambrica pueden habilitarse manualmente.</p>
        <ul className='list-image-checkmark pl-7 py-6'>
          <li>
            También podrás cambiar estos ajustes mediante la configuración de acceso rápido (manten oprimido<span className="after:content-home pl-[0.40rem]"></span>).
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AirplaneMode
