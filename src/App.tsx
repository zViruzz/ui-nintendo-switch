import './global.css'
import '@fontsource/roboto'
import { AnimatePresence } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import CardMessage from './components/CardMessage/CardMessage'
import Footer from './components/Footer'
import OptionsMenu from './components/OptionsMenu/OptionsMenu'
import WelcomeMmessage from './components/WelcomeMmessage'
import { CardMessageProvider } from './context/cardMessage'
import { ControllerProvider } from './context/controller'
import { OptionsMenuProvider } from './context/optionsMenu'

function App() {
	return (
		<>
			<AnimatePresence>
				<ControllerProvider>
					<CardMessageProvider>
						<OptionsMenuProvider>
							<main>
								<OptionsMenu />
								<WelcomeMmessage />
								<CardMessage />
								<Outlet />
							</main>
							<Footer />
						</OptionsMenuProvider>
					</CardMessageProvider>
				</ControllerProvider>
			</AnimatePresence>
		</>
	)
}

export default App
