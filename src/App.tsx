import './global.css'
import '@fontsource/roboto'
import { AnimatePresence } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import CardMessage from './components/CardMessage/CardMessage'
import Footer from './components/Footer'
import WelcomeMmessage from './components/WelcomeMmessage'
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
