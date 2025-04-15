import { AnimatePresence, motion } from 'framer-motion'
import { type ReactNode, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import EshopIcon from '../../icons/EshopLogo'
import OpacityPageTransition from '../../transitions/OpacityPageTransition'

export default function Loading({ children }: { children: ReactNode }) {
	const location = useLocation()
	const [isLoading, setIsLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		if (location.pathname === '/eshop') {
			navigate('/eshop/featured', { replace: true })
		}
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 2500)

		return () => clearTimeout(timer)
	}, [])

	return (
		<AnimatePresence mode='wait'>
			{isLoading === true ? (
				<OpacityPageTransition className='w-full h-full'>
					<div className='text-4xl absolute right-20 bottom-13 z-20'>
						<EshopIcon />
					</div>
					<div className='w-full h-full grid grid-cols-1 grid-rows-6 bg-[#fe7f06]'>
						{[0, 1, 2, 3, 4, 5].map((row) => (
							<div key={row} className='flex relative'>
								{['#fe8e09', '#FF9E08', '#FEA71B', '#fe7f06'].map((color, index) => (
									<motion.div
										key={`${row}-${color}`}
										className={`h-full absolute top-0 ${
											index % 2 === 0 ? 'left-0' : 'right-0'
										}`}
										style={{ backgroundColor: color }}
										initial={{ width: '0%' }}
										animate={{ width: '100%' }}
										transition={{
											duration: 1.0,
											ease: [0.21, 0.0, 0.58, 1.0],
											delay: 0.4 + 0.8 * index + row * 0.1,
										}}
									/>
								))}
							</div>
						))}
					</div>
				</OpacityPageTransition>
			) : (
				<motion.div
					key='content'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className='w-full h-full'
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	)
}
