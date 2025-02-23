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
				'absolute w-screen h-screen bg-[#0c1720b1] z-40 flex justify-center items-center transition-all',
				hiddenMessage ? 'invisible opacity-0' : 'visible',
			)}
		>
			<div className='bg-gray-message-light dark:bg-gray-message w-[72rem] h-[35rem] rounded-lg flex flex-col relative'>
				<NintendoSwitchLogoIcon className='absolute h-[8rem] w-auto top-7 right-10 opacity-30 text-neutral-500 dark:text-white' />
				<div className='w-full h-full text-4xl px-28 pt-20'>
					<p className='font-semibold'>{t('welcom.message.welcom')}</p>
					<br />
					<p>{t('welcom.message.suggestion')}</p>
					<p className='dark:text-description text-description-light text-[35px] mt-6'>
						{t('welcom.message.note')}
					</p>
				</div>
				<div className='w-full h-36 border-t-2 dark:border-neutral-500 border-neutral-300'>
					<button
						onClick={handleClick}
						className='bg-blue-hight-focus outline-wiggle-focus focus:bg-opacity-40 hover:bg-opacity-40 bg-transparent border-0 text-secodary-light dark:text-secodary w-full h-full rounded-xs text-4xl active:bg-secodary/[.06] active:outline-0 transition-all duration-75'
						type='button'
					>
						Ok
					</button>
				</div>
			</div>
		</div>
	)
}
