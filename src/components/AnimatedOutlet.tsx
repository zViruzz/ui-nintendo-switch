import { AnimatePresence } from 'framer-motion'
import { cloneElement } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

const AnimatedOutlet = (): React.JSX.Element => {
	const location = useLocation()
	const element = useOutlet()

	const key = location.pathname.split('/')[1] || 'root'

	return (
		<AnimatePresence mode='wait' initial={true}>
			{element && cloneElement(element, { key })}
		</AnimatePresence>
	)
}

export default AnimatedOutlet
