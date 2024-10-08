import type { ReactNode } from 'react'
// import huhSound from '../assets/huh.mp3'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useControllerContext } from '../context/controller'
import ControllerIcon from '../icons/ControllerIcon'
import GalleryIcon from '../icons/GalleryIcon'
import NewsIcon from '../icons/NewsIcon'
import PowerIcon from '../icons/PowerIcon'
import SettingIcon from '../icons/SettingIcon'
import ShoppingBagIcon from '../icons/ShoppingBagIcon'

function MenuHome() {
	const { t } = useTranslation()

	return (
		<nav className='w-full h-full'>
			<ul className='flex justify-center w-full gap-[1.7%]'>
				{/* <ButtonMenu router='news' text={t('home.menu.news')}>
          <NewsIcon width={75} height={75} />
        </ButtonMenu> */}
				<ButtonMenu router='news' text={t('home.menu.news')}>
					<NewsIcon width={75} height={75} />
				</ButtonMenu>
				<ButtonMenu router='eshop' text={t('home.menu.eshop')}>
					<ShoppingBagIcon width={70} height={70} />
				</ButtonMenu>
				<ButtonMenu router='album' text={t('home.menu.album')}>
					<GalleryIcon width={75} height={75} />
				</ButtonMenu>

				<ButtonMenu
					router='controllers'
					text={t('home.menu.controllers')}
				>
					<ControllerIcon width={83} height={83} />
				</ButtonMenu>
				<ButtonMenu
					router='setting/airplane-mode'
					text={t('home.menu.settings')}
				>
					<SettingIcon width={82} height={82} />
				</ButtonMenu>
				<ButtonMenu router='setting' text={t('home.menu.sleep-mode')}>
					<PowerIcon width={75} height={75} />
				</ButtonMenu>
			</ul>
		</nav>
	)
}

function ButtonMenu({
	children,
	router,
	text,
}: { children: ReactNode; router: string; text: string }) {
	// const sound = new window.Audio(huhSound)
	const { controllerButtonA } = useControllerContext()

	const handleFocus = () => {
		controllerButtonA({
			text: 'controller.buttonA.ok',
			route: router,
			action: () => {
				console.log('huh')
			},
		})
	}

	return (
		<li
			onMouseDown={() => {
				// sound.play()
				console.log('huh')
			}}
			className='ButtonMenu text-[#15bffd]  text-center text-[2.5rem]  relative group cursor-pointer'
		>
			<div className='bg-[#505050] w-full h-full rounded-full grid place-content-center text-[#d9d9d9] outline-8 group-hover:outline group-focus-within:outline group-hover:animate-wiggle group-focus-within:animate-wiggle shadow-Nbutton transition-all duration-100'>
				<Link
					onFocus={handleFocus}
					className='h-full w-full rounded-full group-focus-within:outline-none'
					to={router}
				>
					{children}
				</Link>
			</div>
			<div className='absolute left-1/2 transform -translate-x-1/2 w-auto whitespace-nowrap group-hover:opacity-100 group-focus-within:opacity-100 opacity-0 transition-all text-center '>
				{text}
			</div>
		</li>
	)
}

export default MenuHome
