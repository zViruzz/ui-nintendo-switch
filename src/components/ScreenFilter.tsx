import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useAppSelector } from '../redux/hooks'

export function ScreenFilter({ children }: { children: ReactNode }) {
	const { filter } = useAppSelector((state) => state.settings)

	return (
		<div className='w-screen h-screen relative'>
			{children}
			<motion.div
				className={`absolute w-screen h-screen top-0 left-0 z-50 pointer-events-none backdrop-${filter.toLowerCase()}`}
				transition={{ duration: 0.3 }}
			/>
		</div>
	)
}
