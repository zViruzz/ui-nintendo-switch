import MenuHome from '../components/MenuHome'
import UserStatus from '../components/UserStatus'
import ViewGame from '../components/ViewGame'
import useControllers from '../hooks/useControllers'
import OpacityPageTransition from '../transitions/OpacityPageTransition'

function Home() {
	useControllers({
		settingButtonA: {
			text: 'controller.buttonA.ok',
		},
		settingButtonB: {
			text: 'controller.buttonB.back',
		},
	})

	return (
		<>
			<OpacityPageTransition className='grid grid-rows-[1fr_3fr_1.85fr] h-screen w-screen '>
				<UserStatus />
				<ViewGame />
				<MenuHome />
			</OpacityPageTransition>
		</>
	)
}

export default Home
