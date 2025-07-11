import { Link } from 'react-router'
import ListPageTransition from '../../../../transitions/ListPageTransition'
import CharacterProfile from '../../../../components/CharacterProfile'
import LensIcon from '../../../../icons/LensIcon'
import ArrowThisRightIcon from '../../../../icons/ArrowThinRight'

export function Search() {
	return (
		<ListPageTransition>
			<main className='w-full h-full px-[6.5%] py-20 flex flex-col items-center overflow-auto'>
				<div className='flex w-full justify-between'>
					<h1>Search/Browse</h1>
					<Link to='profile' className='rounded items-center outline-wiggle-focus'>
						<CharacterProfile className='w-20 h-20 rounded-full' />
					</Link>
				</div>

				<div className='flex w-[43rem] mt-12'>
					<form className='flex flex-col w-full'>
						<label htmlFor='Search' className='text-3xl text-description py-5'>
							Search by Keyword
						</label>
						<div className='relative'>
							<input
								className='w-full h-23 rounded-t-xs border-red-500 bg-transparent px-5 pl-16 text-4xl border-b-4 outline-wiggle-focus'
								type='text'
								placeholder='Enter keyword'
							/>
							<LensIcon className='text-red-500 absolute left-2 top-4 text-4xl' />
						</div>
					</form>
				</div>

				<div className='w-[43rem] mt-18'>
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

					<div className='flex justify-end text-3xl text-description py-5 items-center gap-3'>
						<p>Other Search Filter</p>
						<span className='bg-red-500 rounded-full h-6 w-6 flex items-center justify-center '>
							<ArrowThisRightIcon className='text-white h-3 w-3' />
						</span>
					</div>
				</div>
			</main>
		</ListPageTransition>
	)
}
