import { Link } from 'react-router'
import OpacityPageTransition from '../../../transitions/OpacityPageTransition'

export default function NewControllersDetail() {
	return (
		<OpacityPageTransition className='px-[8.2%] py-[4%] grid grid-rows-[4fr_1.1fr] w-full h-full'>
			<div className='w-full h-full grid grid-rows-[1.6fr_2fr] gap-5'>
				<div className='bg-primary-light dark:bg-primary rounded-md grid grid-cols-[2fr_1fr] '>
					<div className='p-[4%]'>
						<p className='text-4xl'>Paring controllers with a USB connector</p>
						<p className='text-[2.1rem] mt-5'>
							Connect to the console using a USB charging cable
						</p>
					</div>
					<div>image</div>
				</div>

				<div className='bg-primary-light dark:bg-primary rounded-md grid grid-cols-[2fr_1fr] '>
					<div className='p-[4%] '>
						<p className='text-4xl'>Paring controllers with a USB connector</p>
						<p className='text-[2.1rem] mt-5'>
							Connect to the console using a USB charging cable
						</p>
					</div>
					<div>image</div>
				</div>
			</div>

			<div className='text-2xl md:text-3xl lg:text-4xl flex flex-col items-center justify-end gap-5'>
				<Link
					className='border-[3px] dark:border-white border-neutral-600 w-[60%] h-[6.6rem] flex justify-center items-center rounded-lg outline-offset-[-3px] background-highlight outline-wiggle-focus'
					to='/app/controllers'
				>
					Done
				</Link>
			</div>
		</OpacityPageTransition>
	)
}
