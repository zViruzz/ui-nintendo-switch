import 'swiper/css'
import 'swiper/css/free-mode'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { game } from '../static/game'

function ViewGame() {
	return (
		<div className='flex'>
			<Swiper
				className='w-screen overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide snap-x px-[8.5%] pt-[0.6%]'
				wrapperClass='pl-[8.5%]'
				spaceBetween={20}
				slidesPerView={4}
				freeMode={true}
				modules={[FreeMode]}
			>
				{game.map(({ name, id, urlImage }) => (
					<SwiperSlide
						key={id}
						className='grow-0 shrink-0 box-border relative group snap-star scroll-ml-5 focus-visible:outline-0 '
						tabIndex={0}
					>
						<div className='h-16'>
							<div className='absolute top-0 leading-none left-1/2 transform -translate-x-1/2 w-auto whitespace-nowrap group-focus:opacity-100 group-hover:opacity-100 opacity-0 transition-all text-center text-[#15bffd] text-[2.5rem]'>
								{name}
							</div>
						</div>
						<div className='flex outline-offset-4 outline-0 outline-[#15bffd] group-focus:outline-8 group-hover:outline-8 group-hover:animate-wiggle group-focus:animate-wiggle shadow-Nbutton transition-all duration-100'>
							{/* <div className='flex outline-offset-4 outline-0 outline-[#15bffd] group-focus:outline-8 group-hover:outline-8 group-hover:animate-wiggle group-focus:animate-wiggle shadow-Nbutton transition-all duration-100 2xl:w-[385px] 2xl:h-[385px] xl:w-[340px] xl:h-[340px] w-[300px] h-[300px]'> */}
							<img src={urlImage} className='object-cover w-full h-full' alt={name} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default ViewGame
