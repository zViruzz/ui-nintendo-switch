import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router'
import FooterEshop from '../../components/FooterEshop'
import useControllers from '../../hooks/useControllers'
import OpacityPageTransition from '../../transitions/OpacityPageTransition'

export default function Eshop() {
	const options = [
		{ name: 'Featured', path: '/featured' },
		{ name: 'Reacent Releases', path: '/recent-releases' },
		{ name: 'Great Deals', path: '/great-deals' },
		{ name: 'Best Sellers', path: '/best-sellers' },
		{ name: 'Coming Soon', path: '/coming-soon' },
		{ name: 'Nintendo Switch Online', path: '/nintendo-switch-online' },
		{ name: 'Enter Code', path: '/enter-code' },
	]

	const [isFocusPage, setIsFocusPage] = useState(false)
	const location = useLocation()
	const pathParent = `/${location.pathname.split('/')[1]}`
	const navigate = useNavigate()

	useControllers({
		settingButtonA: {
			text: 'controller.buttonA.ok',
		},
		settingButtonB: {
			text: 'controller.buttonB.back',
			route: '/',
		},
		settingButtonY: {
			text: 'controllers.button.close',
		},
	})

	const handleFocusLink = (path: string) => {
		navigate(`${pathParent}${path}`)
	}

	const handleClick = () => {
		console.log('blur')
		setIsFocusPage(true)
	}

	const transitionConfig = {
		type: 'spring',
		ease: 'easeInOut',
		duration: 0.4,
		bounce: 0,
	}

	return (
		<OpacityPageTransition className='w-full h-full grid grid-rows-[100%] text-5xl bg-neutral-100'>
			<motion.div className='w-full h-full relative flex' transition={transitionConfig}>
				<motion.div
					animate={{ width: isFocusPage ? '7.2vw' : '51vw' }}
					transition={transitionConfig}
				/>
				<motion.nav
					className='bg-orange-400 text-white text-4xl font-thin grid grid-rows-[6fr_10.5%] pt-[3%] pb-2 absolute h-full w-[33vw]'
					onClick={() => setIsFocusPage(false)}
					animate={{ x: isFocusPage ? '-80%' : 0 }}
					transition={transitionConfig}
				>
					<ul className='grid grid-rows-[repeat(8,1fr)]'>
						<li className='h-full w-full'>
							<Link
								to='/eshop/search'
								onFocus={() => {
									handleFocusLink('/search')
								}}
								className='flex items-center h-full w-full outline-wiggle-focus hover:bg-[#FEA840] focus-visible:bg-[#FEA840] pl-[19%]'
							>
								Search/Browse
							</Link>
						</li>
						{options.map((item, index) => (
							<li className='h-full w-full' key={`${item.name}${index}`}>
								<Link
									to={`/eshop${item.path}`}
									className='flex items-center h-full w-full outline-wiggle-focus hover:bg-[#FEA840] focus-visible:bg-[#FEA840] pl-[19%]'
									onFocus={() => {
										handleFocusLink(item.path)
									}}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</motion.nav>
				<motion.div className='text-black h-full w-full' onClick={handleClick}>
					<Outlet />
				</motion.div>
			</motion.div>
			<FooterEshop />
		</OpacityPageTransition>
	)
}
