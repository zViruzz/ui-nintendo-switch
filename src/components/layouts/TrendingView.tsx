import { useEffect } from 'react'
import profileUser from '../../assets/images/vivi.jpg'
import { useControllerContext } from '../../context/controller'
import { useTrendingContext } from '../../context/trending'
import { trendingList } from '../../pages/Users/Options'
import Footer from '../Footer'
import ArrowIcon from '../icons/ArrowIcon'

export default function TrendingView() {
	const { controllerButtonB, controllerButtonA } =
		useControllerContext()
	const {
		selectionTrending,
		isHiddenMenu,
		setIsHiddenMenu,
		selectItem: { id, title, url },
	} = useTrendingContext()

	useEffect(() => {
		if (isHiddenMenu) {
			console.log('first hidden')
			controllerButtonB({
				text: 'controller.buttonB.back',
				route: '/',
			})

			return
		}

		controllerButtonB({
			text: 'controller.buttonB.back',
			action: () => {
				setIsHiddenMenu(true)
			},
		})

		controllerButtonA({
			text: 'controller.buttonA.ok',
		})
	}, [isHiddenMenu])

	const handleClickPrev = () => {
		const index = trendingList.findIndex((item) => item.id === id)
		const nub = index - 1
		if (nub < 0) return
		const {
			id: newId,
			name: newTitle,
			urlImage: newUrl,
		} = trendingList[nub]
		selectionTrending({ id: newId, title: newTitle, url: newUrl })
	}

	const handleClickNext = () => {
		const index = trendingList.findIndex((item) => item.id === id)
		const nub = index + 1
		if (nub >= trendingList.length) return
		const {
			id: newId,
			name: newTitle,
			urlImage: newUrl,
		} = trendingList[nub]
		selectionTrending({ id: newId, title: newTitle, url: newUrl })
	}

	return (
		<section
			id={title}
			className={`${isHiddenMenu ? 'invisible' : 'visible'} absolute top-0 h-screen w-screen left-0 flex`}
		>
			<div className='flex items-center justify-center basis-[9.4rem] bg-[#11192094] backdrop-blur-2xl'>
				<button
					onClick={handleClickPrev}
					className='rounded-full bg-transparent border-none p-7 active:bg-secodary/20 transition-colors'
					type='button'
				>
					<ArrowIcon className='w-[3.7rem] h-[3.7rem]' />
				</button>
			</div>

			<div className='bg-[#484848] grow grid grid-rows-[8fr_1fr]'>
				<div
					className='mt-20 px-[8.7rem] TransitionOpacitySlide'
					key={id}
				>
					<div className='flex gap-12'>
						<img
							className='w-[24rem] h-[24rem]'
							src={url}
							alt={title}
						/>
						<div className=' w-full flex flex-col'>
							<h2 className='text-5xl grow mt-[6.5rem] px-10'>
								{title}
							</h2>
							<button
								id={id}
								className='w-full h-[6.5rem] bg-[#515151] outline-wiggle-focus shadow-button'
								type='button'
								onClick={() => {
									console.log('asdasdasdasdasd')
								}}
							>
								Start
							</button>
						</div>
					</div>

					<div className='mt-14'>
						<div className='flex justify-between mb-2'>
							<div className='flex items-center gap-3'>
								<div className={'bg-description h-[65%] w-[8px]'} />
								<h3>Friends whohave played this game</h3>
							</div>
						</div>

						<div className='mt-10'>
							<div className='flex gap-5 px-16'>
								<img
									className='w-20 h-20 rounded-full'
									src={profileUser}
									alt='profile user friend'
								/>
								<div>
									<h3>Mr beast</h3>
									<p className='text-neutral-400 text-2xl'>
										Played for 5 hours or more
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>

			<div className='flex items-center justify-center basis-[9.4rem] bg-[#11192094] backdrop-blur-2xl'>
				<button
					onClick={handleClickNext}
					className='rounded-full bg-transparent border-none p-7 active:bg-secodary/20 transition-colors rotate-180'
					type='button'
				>
					<ArrowIcon className='w-[3.7rem] h-[3.7rem]' />
				</button>
			</div>
		</section>
	)
}
