import './global.css'
import '@fontsource/roboto'
import { useEffect } from 'react'
import AnimatedOutlet from './components/AnimatedOutlet'
import { BrightnessLayout } from './components/BrightnessLayout'
import CardMessage from './components/CardMessage/CardMessage'
import OptionsMenu from './components/OptionsMenu/OptionsMenu'
import WelcomeMessage from './components/WelcomeMessage'
import { CardMessageProvider } from './context/cardMessage'
import { ControllerProvider } from './context/controller'
import { OptionsMenuProvider } from './context/optionsMenu'
import { useThemeContext } from './context/theme'

function Dashboard() {
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
						<BrightnessLayout>
							<OptionsMenu />
							<WelcomeMessage />
							<CardMessage />

							<AnimatedOutlet />
						</BrightnessLayout>
					</OptionsMenuProvider>
				</CardMessageProvider>
			</ControllerProvider>
		</>
	)
}

export default Dashboard
