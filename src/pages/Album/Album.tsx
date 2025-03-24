import { AnimatePresence, motion } from 'framer-motion'
import { type MouseEvent, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import imagePreview1 from '../../assets/gallery/image-preview1.webp'
import imagePreview2 from '../../assets/gallery/image-preview2.webp'
import imagePreview3 from '../../assets/gallery/image-preview3.webp'
import imagePreview4 from '../../assets/gallery/image-preview4.webp'
import imagePreview5 from '../../assets/gallery/image-preview5.webp'
import imagePreview6 from '../../assets/gallery/image-preview6.webp'
import Header from '../../components/Header'
import useControllers from '../../hooks/useControllers'
import GalleryIcon from '../../icons/GalleryIcon'
import OpacityPageTransition from '../../transitions/OpacityPageTransition'

interface ButtonPosition {
	x: number
	y: number
	width: number
	height: number
}

export default function Album() {
	const [isHiddenGallery, setIsHiddenGallery] = useState(false)
	const [selectIndex, setSelectIndex] = useState(0)
	const [buttonPosition, setButtonPosition] = useState<ButtonPosition | null>(null)

	useControllers({
		settingButtonA: {
			text: 'controller.buttonA.ok',
		},
		settingButtonB: {
			text: 'controller.buttonB.back',
			route: -1,
		},
		settingButtonX: {
			text: 'Delete',
		},
		settingButtonY: {
			text: 'Filter',
		},
	})

	const imagesGallery = [
		{
			name: 'image-preview1.jpg',
			url: imagePreview1,
		},
		{
			name: 'image-preview2.jpg',
			url: imagePreview2,
		},
		{
			name: 'image-preview3.jpg',
			url: imagePreview3,
		},
		{
			name: 'image-preview4.jpg',
			url: imagePreview4,
		},
		{
			name: 'image-preview5.jpg',
			url: imagePreview5,
		},
		{
			name: 'image-preview6.jpg',
			url: imagePreview6,
		},
	]

	const handleClick = (index: number, e: MouseEvent<HTMLButtonElement>): void => {
		setSelectIndex(index)

		const rect = e.currentTarget.getBoundingClientRect()
		setButtonPosition({
			x: rect.left,
			y: rect.top,
			width: rect.width,
			height: rect.height,
		})

		setIsHiddenGallery(true)
	}

	const handleClose = () => {
		setIsHiddenGallery(false)
	}

	return (
		<OpacityPageTransition className='w-full h-full pt-5 grid grid-rows-[auto_7.5fr]'>
			<Header>
				<GalleryIcon className='w-20 h-20 text-white' />
				<h2>Album</h2>
				<div className='w-full justify-end flex'>
					<p>All Screenshots and Videos (79)</p>
				</div>
			</Header>

			<section className='w-screen px-[6.8%] pt-[1.5%] gap-2 grid grid-cols-5 grid-rows-4'>
				{imagesGallery.map((item, index) => (
					<button
						key={item.name}
						type='button'
						onClick={(e) => handleClick(index, e)}
						className='outline-wiggle-focus relative'
					>
						<img alt={item.name} src={item.url} className='w-full h-full object-cover' />
						<div className='active:bg-secodary/20 z-10 w-full h-full absolute top-0 left-0' />
					</button>
				))}
			</section>

			<AnimatePresence>
				{isHiddenGallery && buttonPosition && (
					<motion.div
						className='fixed inset-0 z-30 bg-black/30 backdrop-blur-xs flex items-center justify-center'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<motion.div
							initial={{
								position: 'fixed',
								top: buttonPosition.y,
								left: buttonPosition.x,
								width: buttonPosition.width,
								height: buttonPosition.height,
							}}
							animate={{
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
							}}
							exit={{
								top: buttonPosition.y,
								left: buttonPosition.x,
								width: buttonPosition.width,
								height: buttonPosition.height,
								opacity: 0,
							}}
							transition={{
								ease: 'easeInOut',
								duration: 0.3,
							}}
						>
							<Swiper
								slidesPerView={1}
								initialSlide={selectIndex}
								className='w-full h-full'
								onSlideChange={(swiper) => {
									setSelectIndex(swiper.activeIndex)
								}}
							>
								{imagesGallery.map((item) => (
									<SwiperSlide
										key={item.name}
										className='w-full h-full flex items-center justify-center'
										onClick={handleClose}
									>
										<img
											src={item.url}
											alt={item.name}
											className='w-full h-full object-contain'
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</OpacityPageTransition>
	)
}
