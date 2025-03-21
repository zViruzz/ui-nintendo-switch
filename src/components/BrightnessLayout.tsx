import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useAppSelector } from '../redux/hooks'

export function BrightnessLayout({ children }: { children: ReactNode }) {
	const { brightness } = useAppSelector((state) => state.setting)

	const darkOverlayOpacity = brightness.value <= 50 ? (50 - brightness.value) / 70 : 0
	const brightOverlayOpacity = brightness.value > 50 ? (brightness.value - 50) / 100 : 0

	return (
		<div className='w-full h-screen relative'>
			{children}
			<motion.div
				className='absolute w-screen h-screen bg-black top-0 left-0 z-50 pointer-events-none'
				animate={{ opacity: darkOverlayOpacity }}
				transition={{ duration: 0.3 }}
			/>
			<motion.div
				className='absolute w-screen h-screen bg-white top-0 left-0 z-50 pointer-events-none blend-screen'
				style={{ mixBlendMode: 'screen' }}
				animate={{ opacity: brightOverlayOpacity }}
				transition={{ duration: 0.3 }}
			/>
		</div>
	)
}
