import { Link } from 'react-router-dom'
import nintendoSwitchIcon from '../../../assets/images/nintendo-switch.webp'
import Header from '../../../components/Header'
import BatteryIcon from '../../../icons/BatteryIcon'
import ControllerIcon from '../../../icons/ControllerIcon'

export function ControllersRoot() {
	return (
		<div className='w-full h-full grid grid-rows-[1fr_7.5fr] grid-cols-[3fr_1.8fr]'>
			<Header>
				<ControllerIcon width={83} height={83} />
				<h2>Controllers</h2>
			</Header>

			<div className='pl-[4.5%] grid grid-rows-[4.3fr_1fr] pr-[4.5%]'>
				<div className='flex flex-col justify-center items-center'>
					<div className='text-4xl flex-1 flex flex-col-reverse text-description'>
						<p className='leading-[1.9]'>Console</p>
					</div>
					<img
						className='w-[38%]'
						src={nintendoSwitchIcon}
						alt='Nintendo Switch Icon'
					/>
					<div className='flex-1 text-[52px] w-full'>
						<div className='pt-3 flex gap-[7%] w-full justify-center'>
							<BatteryIcon />
							<BatteryIcon />
							<BatteryIcon />
						</div>
					</div>
				</div>
				<div className='border-t border-t-gray flex justify-center items-center text-[35px]'>
					No other controllers are connected.
				</div>
			</div>

			<nav className='min-h-full pr-[2.6%] bg-gradient-to-t from-transparent from-5% via-[#4e4e4e] via-50% to-transparent to-100% text-secodary text-[2.6rem]'>
				<ul className='h-full w-full pl-12 pt-10 flex flex-col justify-evenly hover:[&>li>a]:bg-[#252d328a] focus-visible:[&>li>a]:bg-[#252d328a] [&>li>a]:outline-wiggle-focus [&>li]:w-full [&>li]:h-[7.4rem] [&>li>a]:w-full [&>li>a]:h-full [&>li>a]:flex [&>li>a]:items-center [&>li>a]:px-5'>
					<li>
						<Link to='/change-grip-or-order'>Change Grid/Order</Link>
					</li>
					<li>
						<Link to='/controllers/find-controllers'>
							Find Controllers
						</Link>
					</li>
					<li>
						<Link to='/controllers/new-controllers'>
							Pairing New Controllers
						</Link>
					</li>
					<li>
						<Link to='/'>Close</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
