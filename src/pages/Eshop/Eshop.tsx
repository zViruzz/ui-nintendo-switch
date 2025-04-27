import { Outlet } from 'react-router'
import FooterEshop from '../../components/FooterEshop'
import useControllers from '../../hooks/useControllers'
import OpacityPageTransition from '../../transitions/OpacityPageTransition'

export default function Eshop() {
	useControllers({
		settingButtonA: {
			text: 'controller.buttonA.ok',
		},
		settingButtonB: {
			text: 'controller.buttonB.back',
			route: '/app',
		},
		settingButtonY: {
			text: 'controllers.button.close',
		},
	})

	return (
		<OpacityPageTransition className='w-full h-full text-5xl bg-neutral-100'>
			<Outlet />
			<FooterEshop />
		</OpacityPageTransition>
	)
}
