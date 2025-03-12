import { useState, type ReactNode } from 'react'
// import huhSound from '../assets/huh.mp3'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
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
					<GalleryIcon className='text-[#1ba3ff]' width={75} height={75} />
				</ButtonMenu>

				<ButtonMenu router='controllers' text={t('home.menu.controllers')}>
					<ControllerIcon width={83} height={83} />
				</ButtonMenu>
				<ButtonMenu router='setting/airplane-mode' text={t('home.menu.settings')}>
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
	const [isAnimating, setIsAnimating] = useState(false)
	const navigate = useNavigate()

	const handleFocus = () => {
		controllerButtonA({
			text: 'controller.buttonA.ok',
			route: router,
			action: () => {
				console.log('huh')
			},
		})
	}
	const handleClick = () => {
		setIsAnimating(true)

		setTimeout(() => {
			navigate(router)
		}, 300)
	}

	return (
		<motion.li
			onMouseDown={() => {
				// sound.play()
				console.log('huh')
			}}
			className='ButtonMenu group text-font-highlight-light dark:text-font-highlight text-center text-[2.5rem] relative rounded-full '
		>
			<button
				type='button'
				className='flex outline-8 outline-none group-hover:outline-solid group-focus-within:outline-solid group-hover:animate-wiggle group-focus-within:animate-wiggle bg-[#fefffe] dark:bg-[#505050] text-[#717a7a] dark:text-[#d9d9d9] w-full h-full rounded-full shadow-Nbutton transition-all cursor-pointer'
				onFocus={handleFocus}
				onClick={handleClick}
			>
				<motion.span
					className='h-full w-full flex justify-center items-center rounded-full'
					tabIndex={-1}
					animate={
						isAnimating
							? {
									outline: [
										'solid 1px rgb(255,255,255,0.7)',
										'solid 22px rgb(255,255,255,0)',
									],
									backgroundColor: 'rgba(255, 255, 255, 0.15)',
									rotate: [20, -20, 0],
									x: [0, -4, 4, -4, 4, 0],
									y: [0, -2, 2, -2, 2, 0],
								}
							: {}
					}
					transition={{
						duration: 0.2,
						when: 'beforeChildren',
					}}
				>
					{children}
				</motion.span>
			</button>

			{/* <div className='bg-[#fefffe] dark:bg-[#505050] text-[#717a7a] dark:text-[#d9d9d9] w-full h-full rounded-full grid place-content-center group-hover:outline-8 group-focus-within:outline-8 group-hover:animate-wiggle group-focus-within:animate-wiggle shadow-Nbutton transition-all duration-100'> */}
			{/* 	<Link */}
			{/* 		onFocus={handleFocus} */}
			{/* 		className='h-full w-full rounded-full group-focus-within:outline-hidden' */}
			{/* 		to={router} */}
			{/* 	> */}
			{/* 		{children} */}
			{/* 	</Link> */}
			{/* </div> */}
			<p className='absolute translate-y-2 left-1/2 transform -translate-x-1/2 w-auto whitespace-nowrap group-hover:opacity-100 group-focus-within:opacity-100 opacity-0 transition-all text-center '>
				{text}
			</p>
		</motion.li>
	)
}

export default MenuHome
