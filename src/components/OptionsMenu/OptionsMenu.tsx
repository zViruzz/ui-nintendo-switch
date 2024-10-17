import { motion } from 'framer-motion'
import Footer from '../../components/Footer'

import { useOptionsMenuContext } from '../../context/optionsMenu'
import Header from '../Header'

export default function OptionsMenu() {
	const { listOptions, onToggleHidden } = useOptionsMenuContext()

	if (listOptions.isHidden === true) {
		return <></>
	}

	return (
		<motion.section
			className='absolute top-0 left-0 w-full h-screen z-50 grid grid-rows-[90%_10%] transition-all'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.12 }}
		>
			<div className=' grid grid-rows-[3fr_4fr]'>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className='bg-[#0c1720b1]'
					onClick={() => onToggleHidden(true)}
				/>

				<div className='bg-neutral-700'>
					<Header title='Display play activity to:' />
					{listOptions.options.map((option) => {
						return (
							<div
								key={option.label}
								className='w-full  flex justify-center items-center'
							>
								{option.label}
							</div>
						)
					})}
				</div>
			</div>
			<Footer className='bg-neutral-700' />
		</motion.section>
	)
}
