import './global.css'
import '@fontsource/roboto'
import { useEffect } from 'react'
import AnimatedOutlet from './components/AnimatedOutlet'
import { BrightnessLayout } from './components/BrightnessLayout'
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
						<BrightnessLayout>
							<div className='h-screen grid grid-rows-[90%_10%]'>
								<main>
									<OptionsMenu />
									<WelcomeMessage />
									<CardMessage />

									<AnimatedOutlet />
								</main>
								<Footer />
							</div>
						</BrightnessLayout>
					</OptionsMenuProvider>
				</CardMessageProvider>
			</ControllerProvider>
		</>
	)
}

export default App
