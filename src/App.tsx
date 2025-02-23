import './global.css'
import '@fontsource/roboto'
import { AnimatePresence } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import CardMessage from './components/CardMessage/CardMessage'
import Footer from './components/Footer'
import OptionsMenu from './components/OptionsMenu/OptionsMenu'
import WelcomeMessage from './components/WelcomeMessage'
import { CardMessageProvider } from './context/cardMessage'
import { ControllerProvider } from './context/controller'
import { OptionsMenuProvider } from './context/optionsMenu'
import { useThemeContext } from './context/theme'
import { useEffect } from 'react'

function App() {
	const { theme } = useThemeContext()

	useEffect(() => {
		localStorage.theme = theme
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<>
			<AnimatePresence>
				<ControllerProvider>
					<CardMessageProvider>
						<OptionsMenuProvider>
							<main>
								<OptionsMenu />
								<WelcomeMessage />
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
