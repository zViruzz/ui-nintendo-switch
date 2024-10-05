import './global.css'
import '@fontsource/roboto'
import { AnimatePresence } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import WelcomeMmessage from './components/WelcomeMmessage'
import { ControllerProvider } from './context/controller'

function App() {
	return (
		<>
			<AnimatePresence>
				<ControllerProvider>
					<main>
						<WelcomeMmessage />
						<Outlet />
					</main>
					<Footer />
				</ControllerProvider>
			</AnimatePresence>
		</>
	)
}

export default App
