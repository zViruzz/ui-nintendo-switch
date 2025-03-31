import { AnimatePresence } from 'framer-motion'
import { cloneElement } from 'react'
import { useLocation, useOutlet } from 'react-router'

const AnimatedOutlet = (): React.JSX.Element => {
	const location = useLocation()
	const element = useOutlet()

	const key = location.pathname.split('/')[2] || 'root'
	// const key = location.pathname

	// console.log('-----------------')
	// console.log("🚀 ~ location.pathname.split('/')[2]:", location.pathname.split('/')[2])
	// console.log('🚀 ~ location.pathname.:', location.pathname)
	// console.log('🚀 ~ key:', key)
	// console.log('-----------------')

	return (
		<AnimatePresence mode='wait' initial={true}>
			{element && cloneElement(element, { key })}
		</AnimatePresence>
	)
}

export default AnimatedOutlet
