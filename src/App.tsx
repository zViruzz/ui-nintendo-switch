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

// Exec=/usr/bin/microsoft-edge-stable --enable-features=UseOzonePlatform --ozone-platform=wayland %U

// /usr/bin/flatpak run --branch=stable --arch=x86_64 --command=/app/bin/edge --file-forwarding com.microsoft.Edge @@u %U @@
// /usr/bin/flatpak run --branch=stable --arch=x86_64 --command=/app/bin/edge com.microsoft.Edge
// /usr/bin/flatpak run --branch=stable --arch=x86_64 --command=/app/bin/edge com.microsoft.Edge --inprivate
