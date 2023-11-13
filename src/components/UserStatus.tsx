import WifiIcon from './icons/WifiIcon'
import BatteryIcon from './icons/BatteryIcon'
import { getDate } from '../utils/getDate'

function UserStatus () {
  return (
    <div className='flex justify-between items-center px-20'>
      <div>
        <div className='border-zinc-700 border-4 rounded-full shadow-Nbutton'>
          <img
            className='w-20 rounded-full'
            src="https://media.discordapp.net/attachments/1096563688628039680/1096563983374352446/newImage.jpeg"
            alt="User"
          />
        </div>
      </div>
      <div className='text-4xl flex items-center'>
        <span>
          {getDate()}
        </span>
        <WifiIcon width={50} height={50} className='mx-4' />
        <span className='flex items-end mr-2'>
          100<div className='text-2xl'>%</div>
        </span>
        <BatteryIcon width={55} height={55} />
      </div>
    </div>
  )
}

export default UserStatus
