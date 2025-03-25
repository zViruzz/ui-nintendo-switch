import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import nintendoSwitchIcon from '../../../assets/images/nintendo-switch.webp'
import Header from '../../../components/Header'
import BatteryIcon from '../../../icons/BatteryIcon'
import ControllerIcon from '../../../icons/ControllerIcon'
import OpacityPageTransition from '../../../transitions/OpacityPageTransition'

export function ControllersRoot() {
	const { t } = useTranslation()

	return (
		<OpacityPageTransition className='w-full h-full grid grid-rows-[1fr_7.5fr]'>
			<Header isPageHeight={false}>
				<ControllerIcon width={83} height={83} />
				<h2>{t('controllers.title')}</h2>{' '}
			</Header>

			<section className='w-full h-full grid grid-cols-[3fr_1.8fr]'>
				<div className='pl-[4.5%] grid grid-rows-[4.3fr_1fr] pr-[4.5%]'>
					<div className='flex flex-col justify-center items-center'>
						<div className='text-4xl flex-1 flex flex-col-reverse text-description'>
							<p className='leading-[1.9]'>{t('controllers.console-label')}</p>
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
					<div className='border-t-2 dark:border-t-gray border-t-neutral-300 flex justify-center items-center text-[35px]'>
						{t('controllers.information')}
					</div>
				</div>

				<nav className='min-h-full pr-[2.6%] bg-linear-to-t from-transparent from-5% dark:via-[#4e4e4e] via-[#f4f5f5] via-50% to-transparent to-100% text-secodary-light dark:text-secodary text-[2.6rem]'>
					<ul className='h-full w-full pl-12 pt-10 flex flex-col justify-evenly [&>li>a]:hover:background-highlight-transparent [&>li>a]:focus-visible:background-highlight-transparent [&>li>a]:outline-wiggle-focus [&>li]:w-full [&>li]:h-[7.4rem] [&>li>a]:w-full [&>li>a]:h-full [&>li>a]:flex [&>li>a]:items-center [&>li>a]:px-5'>
						<li>
							<Link to='/change-grip-or-order'>
								{t('controllers.button.change-grip-or-order')}
							</Link>
						</li>
						<li>
							<Link to='/controllers/find-controllers'>
								{t('controllers.button.find-controllers')}
							</Link>
						</li>
						<li>
							<Link to='/controllers/new-controllers'>
								{t('controllers.button.pairing-new-controllers')}
							</Link>
						</li>
						<li>
							<Link to='/'>{t('controllers.button.close')}</Link>
						</li>
					</ul>
				</nav>
			</section>
		</OpacityPageTransition>
	)
}
