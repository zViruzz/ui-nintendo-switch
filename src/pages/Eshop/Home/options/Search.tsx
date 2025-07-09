import { Link } from 'react-router'
import ListPageTransition from '../../../../transitions/ListPageTransition'
import CharacterProfile from '../../../../components/CharacterProfile'
import LensIcon from '../../../../icons/LensIcon'

export function Search() {
	return (
		<ListPageTransition>
			<main className='w-full h-full px-[6.5%] py-20 pb-40 flex flex-col items-center'>
				<div className='flex w-full justify-between'>
					<h1>Featured</h1>
					<Link
						to='profile'
						className='rounded flex gap-3 items-center outline-wiggle-focus'
					>
						<CharacterProfile className='w-20 h-20 rounded-full' />
					</Link>
				</div>

				<div className='flex w-[43rem]'>
					<form className='flex flex-col w-full'>
						<label htmlFor='Search' className='text-3xl text-description py-5'>
							Search by Keyword
						</label>
						<div className='relative'>
							<input
								className='w-full h-20 rounded-t-lg border-red-500 bg-transparent px-5 pl-16 text-4xl border-b-4 outline-hidden'
								type='text'
								placeholder='Enter keyword'
							/>
							<LensIcon className='text-red-500 absolute left-2 top-4 text-4xl' />
						</div>
					</form>
				</div>

				<div className='w-[43rem] mt-15'>
					<div>
						<p className='text-3xl text-description py-5'>Browse by Filter</p>
					</div>
					<div className='grid grid-cols-2 grid-rows-2 gap-3 text-[2.4rem] text-center'>
						<Link
							to='/genre'
							className='border-3 border-red-500 rounded-sm h-28  text-red-500 grid place-content-center'
						>
							Genre
						</Link>
						<Link
							to='/genre'
							className='border-3 border-red-500 rounded-sm h-28  text-red-500 grid place-content-center'
						>
							Price Range
						</Link>
						<Link
							to='/genre'
							className='border-3 border-red-500 rounded-sm h-28  text-red-500 grid place-content-center'
						>
							Games with Demos
						</Link>
						<Link
							to='/genre'
							className='border-3 border-red-500 rounded-sm h-28  text-red-500 grid place-content-center'
						>
							Dowloadable Content
						</Link>
					</div>

					<div className='flex justify-end text-3xl text-description py-5'>
						<p>Other Search Filter</p>
					</div>
				</div>
			</main>
		</ListPageTransition>
	)
}
