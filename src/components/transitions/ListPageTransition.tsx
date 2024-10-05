import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function ListPageTransition({
	children,
}: { children: ReactNode }) {
	return (
		<motion.div
			className='h-full w-full'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	)
}
