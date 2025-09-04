import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import NintendoSwitchLogoIcon from '../icons/NintendoSwitchLogoIcon'
import cn from '../utils/cn'

export default function WelcomeMessage() {
	const firstTime = window.localStorage.getItem('firstTime') !== null
	const [hiddenMessage, setHiddenMessage] = useState(firstTime)
	const { t } = useTranslation()

	useEffect(() => {
		if (window.localStorage.getItem('firstTime') === null) {
			window.localStorage.setItem('firstTime', 'false')
		}
	}, [])

	const handleClick = () => {
		setHiddenMessage(true)
	}

	return (
		<div
			className={cn(
				'absolute w-screen h-screen bg-[#0c1720b1] z-40 flex justify-center items-center transition-all text-xl lg:text-4xl',
				hiddenMessage ? 'invisible opacity-0' : 'visible',
			)}
		>
			<div className='bg-gray-message-light dark:bg-gray-message w-[50rem] h-[20rem] rounded-lg flex flex-col relative lg:w-[72rem] lg:h-[35rem] '>
				<NintendoSwitchLogoIcon className='absolute h-[5rem] w-auto top-5 right-7 opacity-30 text-neutral-500 dark:text-white lg:top-7 lg:right-10 lg:h-[8rem]' />
				<div className='w-full h-full text-xl px-18 pt-13 lg:px-28 lg:pt-20 lg:text-4xl'>
					<p className='font-semibold'>{t('welcom.message.welcom')}</p>
					<br />
					<p>{t('welcom.message.suggestion')}</p>
					<p className='dark:text-description text-description-light text-[15px] mt-6 lg:text-[35px]'>
						{t('welcom.message.note')}
					</p>
				</div>
				<div className='w-full h-18 border-t-2 dark:border-neutral-600 border-neutral-300 lg:h-36'>
					<button
						onClick={handleClick}
						className='background-highlight-transparent outline-wiggle-focus border-0 text-secodary-light dark:text-secodary w-full h-full rounded-xs active:bg-secodary/[.06] active:outline-0 transition-all duration-75'
						type='button'
					>
						Ok
					</button>
				</div>
			</div>
		</div>
	)
}
