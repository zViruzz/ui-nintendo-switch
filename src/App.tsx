import { Outlet } from 'react-router'
import Footer from './components/Footer'

export default function App() {
	return (
		<>
			<div className='h-screen grid grid-rows-[90%_10%]'>
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	)
}
