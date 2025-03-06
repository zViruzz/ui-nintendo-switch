import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useControllerContext } from '../../context/controller'
import OpacityPageTransition from '../../transitions/OpacityPageTransition'

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
		<OpacityPageTransition>
			<div className='absolute w-screen h-screen p-[3%] bg-[#0c1720b1] backdrop-blur-md transition-all'>
				<div className='bg-gray-message-light dark:bg-gray-message w-full h-full rounded-xl'>
					<Outlet />
				</div>
			</div>
		</OpacityPageTransition>
	)
}
