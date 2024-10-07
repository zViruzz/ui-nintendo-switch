import './global.css'
import '@fontsource/roboto'
import { AnimatePresence } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import WelcomeMmessage from './components/WelcomeMmessage'
import CardMessage from './components/layouts/CardMessage'
import { CardMessageProvider } from './context/cardMessage'
import { ControllerProvider } from './context/controller'

function App() {
	return (
		<>
			<AnimatePresence>
				<ControllerProvider>
					<CardMessageProvider>
						<main>
							<WelcomeMmessage />
							<CardMessage />
							<Outlet />
						</main>
						<Footer />
					</CardMessageProvider>
				</ControllerProvider>
			</AnimatePresence>
		</>
	)
}

export default App
