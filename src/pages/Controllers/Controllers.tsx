import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useControllerContext } from '../../context/controller'

export default function Controllers() {
	const { controllerButtonB } = useControllerContext()

	useEffect(() => {
		controllerButtonB({
			text: 'controller.buttonB.back',
			route: '/',
			action: () => {
				console.log('back')
			},
		})
	}, [])

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, delay: 0.5 }}
		>
			<div className='absolute w-screen h-screen p-[3%] bg-[#0c1720b1] backdrop-blur-md transition-all'>
				<div className='bg-gray-message w-full h-full rounded-xl'>
					<Outlet />
				</div>
			</div>
		</motion.div>
	)
}
