import { motion } from 'framer-motion'
import Footer from '../../components/Footer'

import { useOptionsMenuContext } from '../../context/optionsMenu'
import CheckIcon from '../../icons/CheckIcon'
import SelectionSetting from '../../ui/SelectionSetting'
import Header from '../Header'

export default function OptionsMenu() {
	const { listOptions, onToggleHidden, activeOption } = useOptionsMenuContext()

	if (listOptions.isHidden === true) {
		return null
	}

	return (
		<motion.section
			className='absolute top-0 left-0 w-full h-screen z-50 grid grid-rows-[90%_10%]'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.12 }}
		>
			<div className='grid grid-rows-[3fr_5fr]'>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div className='bg-[#0c1720b1]' onClick={() => onToggleHidden(true)} />

				<div className='bg-neutral-700 grid grid-rows-[1fr_4fr] grid-cols-1'>
					<Header title={listOptions.title} />
					<div className='flex justify-center flex-col px-[20%]'>
						{listOptions.options.map((option) => {
							return (
								<SelectionSetting
									onClick={() => activeOption(listOptions.options.indexOf(option))}
									key={typeof option === 'object' ? option.label : option}
									className='border-b first:border-t border-description flex justify-between'
								>
									<span> {typeof option === 'object' ? option.label : option}</span>

									{typeof option === 'object' && option.isOn && (
										<span>
											<CheckIcon />
										</span>
									)}
								</SelectionSetting>
							)
						})}
					</div>
				</div>
			</div>
			<Footer className='bg-neutral-700' />
		</motion.section>
	)
}
