import { Link, Outlet } from 'react-router'
import FooterEshop from '../../components/FooterEshop'
import useControllers from '../../hooks/useControllers'
import OpacityPageTransition from '../../transitions/OpacityPageTransition'

export default function Eshop() {
	const options = [
		{
			name: 'Featured',
			path: '/featured',
		},
		{
			name: 'Reacent Releases',
			path: '/recent-releases',
		},
		{
			name: 'Great Deals',
			path: '/screen-brightness',
		},
		{ name: 'Best Sellers', path: '/bluetooth' },
		{ name: 'Coming Soon', path: '/lock-screen' },
		{
			name: 'Nintendo Switch Online',
			path: '/parental-control',
		},
		{ name: 'Enter Code', path: '/internet' },
	]

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

	return (
		<OpacityPageTransition className='w-full h-full grid grid-rows-[100%] text-5xl bg-white'>
			<div className='w-full h-full grid grid-cols-[1.6fr_3fr]'>
				<nav className='bg-orange-400 text-white text-4xl font-thin grid grid-rows-[6fr_10.5%] pt-[7%]'>
					<ul className='grid grid-rows-[repeat(8,1fr)]'>
						<li className='h-full w-full'>
							<Link
								to='/eshop/search'
								className='flex items-center h-full w-full outline-wiggle-focus hover:bg-[#FEA840] focus-visible:bg-[#FEA840] pl-[19%]'
							>
								Search
							</Link>
						</li>
						{options.map((item, index) => (
							<li className='h-full w-full' key={`${item.name}${index}`}>
								<Link
									to={`/eshop${item.path}`}
									className='flex items-center h-full w-full outline-wiggle-focus hover:bg-[#FEA840] focus-visible:bg-[#FEA840] pl-[19%]'
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className='text-black'>
					<Outlet />
				</div>
			</div>
			<FooterEshop />
		</OpacityPageTransition>
	)
}
