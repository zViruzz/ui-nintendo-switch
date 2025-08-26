import '@fontsource/roboto/500.css'
import { Link } from 'react-router'
import BatteryIcon from '../icons/BatteryIcon'
import WifiIcon from '../icons/WifiIcon'
import { useAppSelector } from '../redux/hooks'
import { getDate } from '../utils/getDate'
import CharacterProfile from './CharacterProfile'

function UserStatus() {
	const user = useAppSelector((state) => state.user)

	return (
		<div className='flex justify-between items-center px-13 lg:px-24'>
			<div className='group relative'>
				<Link
					to='users/profile'
					className='group-focus-within:outline-wiggle-focus group-focus-within:block group-focus-within:rounded-full group-hover:outline-wiggle-focus group-hover:block group-hover:rounded-full group-hover:animate-wiggle transition-all duration-100'
				>
					<CharacterProfile className='border-neutral-100 dark:border-zinc-700 rounded-full shadow-Nbutton border-2 w-[2.5rem] lg:w-[5.8rem] lg:border-4' />
				</Link>
				<div className='text-font-highlight-light dark:text-font-highlight text-[1.3rem] absolute left-[-40px] w-auto whitespace-nowrap group-focus-within:opacity-100 group-hover:opacity-100 opacity-0 transition-all text-center lg:text-[2.5rem]'>
					Pagina de {user.username}
				</div>
			</div>
			<div className='text-[1.3rem] flex items-center font-medium lg:text-[2.35rem] '>
				<span>{getDate()}</span>
				<WifiIcon className='mx-3 w-7 h-7 lg:w-[3.6rem] lg:h-[3.6rem] lg:mx-4' />
				<span className='flex items-end mr-2'>
					100<div className='text-sm leading-relaxed lg:text-[1.6rem]'>%</div>
				</span>
				<BatteryIcon className='mx-1 w-7 h-7 lg:w-[3.6rem] lg:h-[3.6rem] lg:mx-2' />
			</div>
		</div>
	)
}

export default UserStatus
