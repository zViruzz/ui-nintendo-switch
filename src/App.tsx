import './global.css'
import '@fontsource/roboto'
import { useEffect } from 'react'
import AnimatedOutlet from './components/AnimatedOutlet'
import CardMessage from './components/CardMessage/CardMessage'
import Footer from './components/Footer'
import OptionsMenu from './components/OptionsMenu/OptionsMenu'
import WelcomeMessage from './components/WelcomeMessage'
import { CardMessageProvider } from './context/cardMessage'
import { ControllerProvider } from './context/controller'
import { OptionsMenuProvider } from './context/optionsMenu'
import { useThemeContext } from './context/theme'

function App() {
	const { theme } = useThemeContext()

	useEffect(() => {
		localStorage.theme = theme
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<>
			<ControllerProvider>
				<CardMessageProvider>
					<OptionsMenuProvider>
						<main>
							<OptionsMenu />
							<WelcomeMessage />
							<CardMessage />

							<AnimatedOutlet />
						</main>
						<Footer />
					</OptionsMenuProvider>
				</CardMessageProvider>
			</ControllerProvider>
		</>
	)
}

export default App
