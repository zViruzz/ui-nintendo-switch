import '@fontsource/roboto/500.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'
import { getDate } from '../utils/getDate'
import CharacterProfile from './CharacterProfile'
import BatteryIcon from './icons/BatteryIcon'
import WifiIcon from './icons/WifiIcon'

function UserStatus() {
	const user = useAppSelector((state) => state.user)

	return (
		<div className='flex justify-between items-center px-24'>
			<div className='group relative'>
				<Link
					to='users/profile'
					className='group-focus-within:outline-wiggle-focus group-focus-within:block group-focus-within:rounded-full group-hover:outline-wiggle-focus group-hover:block group-hover:rounded-full group-hover:outline group-hover:animate-wiggle'
				>
					<CharacterProfile className='border-zinc-700 border-4 rounded-full shadow-Nbutton w-[6.3rem]' />
				</Link>
				<div className='text-[#15bffd] text-[2.5rem] absolute left-[-40px] w-auto whitespace-nowrap group-focus-within:opacity-100 group-hover:opacity-100 opacity-0 transition-all text-center '>
					Pagina de {user.username}
				</div>
			</div>
			<div className='text-[2.35rem] flex items-center font-medium'>
				<span>{getDate()}</span>
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
