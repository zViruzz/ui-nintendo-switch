import WifiIcon from './icons/WifiIcon'
import BatteryIcon from './icons/BatteryIcon'
import { getDate } from '../utils/getDate'
import profileMario from '../assets/ns-mario-profile.jpg'

function UserStatus () {
  return (
    <div className='flex justify-between items-center px-24'>
      <div>
        <div className='border-zinc-700 border-4 rounded-full shadow-Nbutton'>
          <img
            className='w-[5.3rem] rounded-full'
            src={profileMario}
            alt="User"
          />
        </div>
      </div>
      <div className='text-[2.35rem] flex items-center font-medium'>
        <span>
          {getDate()}
        </span>
        <WifiIcon width={58} height={58} className='mx-4' />
        <span className='flex items-end mr-2'>
          100<div className='text-[1.6rem] leading-relaxed'>%</div>
        </span>
        <BatteryIcon width={59} height={59} />
      </div>
    </div>
  )
}

export default UserStatus
