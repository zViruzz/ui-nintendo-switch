import { AnimatePresence } from 'framer-motion'
import { cloneElement } from 'react'
import { useLocation, useOutlet } from 'react-router'

const AnimatedOutlet = (): React.JSX.Element => {
	const location = useLocation()
	const element = useOutlet()

	// const key = location.pathname.split('/')[2] || 'root'
	const excludedRoutes = ['/eshop/']
	const isExcluded = excludedRoutes.some((route) => location.pathname.startsWith(route))
	const key = isExcluded ? undefined : location.pathname.split('/')[2] || 'root'

	return (
		<AnimatePresence mode='wait' initial={true}>
			{element && cloneElement(element, { key })}
		</AnimatePresence>
	)
}

export default AnimatedOutlet
