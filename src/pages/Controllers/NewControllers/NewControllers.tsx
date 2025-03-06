import { Link } from 'react-router-dom'
import controllers from '../../../assets/images/nintendo-swith-gray-icon-none-left.webp'
import controllersGrayLeft from '../../../assets/images/controllers-left-gray.webp'
import ArrowDown from '../../../icons/ArrowDown'
import { useTranslation } from 'react-i18next'
import OpacityPageTransition from '../../../transitions/OpacityPageTransition'

export default function NewControllers() {
	const { t } = useTranslation()

	return (
		<OpacityPageTransition className='px-[3%] py-[4.9%] grid grid-rows-[2fr_5fr_1fr] w-full h-full'>
			<div className='text-center'>
				<p className='text-3xl md:text-4xl lg:text-5xl '>
					{t('controllers.new-controllers.title')}
				</p>
				<p className='text-[3.4rem] md:text-3xl lg:text-4xl text-center pt-[1%] text-description'>
					{t('controllers.new-controllers.description')}
				</p>
			</div>

			<div className='justify-center items-center flex relative'>
				<ArrowDown className='w-[4.5rem] h-[4.5rem] absolute top-[1rem] right-[22.5rem] animate-[arrowInitial_2s_infinite_ease-in-out] ' />

				<img
					src={controllersGrayLeft}
					alt='controllers'
					className='w-[44.5rem] absolute inset-0 m-auto animate-[moveUpDown_2s_infinite_ease-in-out]'
				/>
				<img src={controllers} alt='controllers' className='w-[44.5rem]' />
			</div>

			<div className='text-2xl md:text-3xl lg:text-4xl flex flex-col items-center justify-center gap-5'>
				<Link
					className='border-[3px] dark:border-white border-neutral-600 w-[44.2%] h-[6.6rem] flex justify-center items-center rounded-lg outline-offset-[-3px] background-highlight outline-wiggle-focus'
					to='/controllers'
				>
					{t('controllers.new-controllers.button-1')}
				</Link>

				<Link
					className='border-[3px] dark:border-white border-neutral-600 w-[33.5%] h-[5.4rem] flex justify-center items-center rounded-lg outline-offset-[-3px] background-highlight outline-wiggle-focus'
					to='/controllers/new-controllers-detail'
				>
					{t('controllers.new-controllers.button-2')}
				</Link>
			</div>
		</OpacityPageTransition>
	)
}
