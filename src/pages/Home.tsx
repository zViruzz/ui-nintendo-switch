import { motion } from 'framer-motion'
import MenuHome from '../components/MenuHome'
import UserStatus from '../components/UserStatus'
import ViewGame from '../components/ViewGame'
import useControllers from '../hooks/useControllers'

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
			<motion.section
				// className='grid grid-rows-[1fr_3fr_1.15fr] h-full w-full'
				className='grid grid-rows-[1fr_3fr_1.85fr] h-screen w-screen '
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<UserStatus />
				<ViewGame />
				<MenuHome />
			</motion.section>
		</>
	)
}

export default Home
