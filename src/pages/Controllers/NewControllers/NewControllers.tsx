import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NewControllers() {
	return (
		<motion.div
			className='px-[8.2%] py-[4.4%] grid grid-rows-[1fr_4fr_1.1fr] w-full h-full'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, delay: 0.3 }}
		>
			<div className='text-center'>
				<p className='text-3xl md:text-4xl lg:text-5xl '>
					You can pair controllers at any time by attaching them to the console
				</p>
				<p className='text-2xl md:text-3xl lg:text-4xl text-center pt-[1%] text-description'>
					Once paired, you can use the controllers even then they aren't attached to the
					console.
				</p>
			</div>

			<div className='justify-center items-center flex'>
				<div className='bg-[#767676] w-[60%] h-[70%] rounded-xl'> </div>
			</div>

			<div className='text-2xl md:text-3xl lg:text-4xl flex flex-col items-center justify-center gap-5'>
				<Link
					className='border-[3px] border-white w-[60%] h-[6.6rem] flex justify-center items-center rounded-lg outline-offset-[-3px] outline-wiggle-focus bg-blue-hight-focus-transparent'
					to='/controllers'
				>
					Back
				</Link>

				<Link
					className='border-[3px] border-white w-[45%] h-[5.8rem] flex justify-center items-center rounded-lg outline-offset-[-3px] outline-wiggle-focus bg-blue-hight-focus-transparent'
					to='/controllers'
				>
					View Other Pairing Methods
				</Link>
			</div>
		</motion.div>
	)
}
