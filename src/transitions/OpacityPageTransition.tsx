import { type MotionProps, motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface OpacityPageTransitionProps extends MotionProps {
	children: ReactNode
	className?: string
}

export default function OpacityPageTransition({
	children,
	className,
	...props
}: OpacityPageTransitionProps) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				ease: 'easeIn',
				duration: 0.2,
				delay: 0.18,
			}}
			{...props}
		>
			{children}
		</motion.div>
	)
}
