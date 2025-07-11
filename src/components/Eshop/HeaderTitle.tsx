import { Link } from 'react-router'
import CharacterProfile from '../CharacterProfile'

export const HeaderTitle = ({ title }: { title: string }) => {
	return (
		<div className='flex w-full justify-between items-center'>
			<h1>{title}</h1>
			<Link to='' className='rounded flex gap-3 items-center outline-wiggle-focus'>
				<CharacterProfile className='w-20 h-20 rounded-full' />
			</Link>
		</div>
	)
}
