import { Link } from 'react-router'
import cn from '../../utils/cn'

interface Props {
	discount?: number
	price: number
	urlImage: string
	dayRemaining?: number
	rank?: number
}

export function CardGame({ price, discount, urlImage, dayRemaining, rank }: Props) {
	const discountPrice = discount ? price * (1 - discount / 100) : price
	const discountPriceFormatted = Math.floor(discountPrice * 100) / 100

	return (
		<Link
			to=''
			className='w-full bg-white grid grid-rows-[10fr_auto] shadow outline-wiggle-focus relative'
		>
			{rank && (
				<div className='absolute bg-white top-2 left-2 z-10 h-[15%] flex justify-center items-center aspect-square text-[2.1rem]'>
					{rank}
				</div>
			)}
			<div className='relative'>
				<img className='object-cover w-full h-full' src={urlImage} alt={urlImage} />
				{discount && (
					<div className='absolute bottom-0 bg-red-500 text-white text-xl px-2 py-1'>
						{discount}% OFF
					</div>
				)}
			</div>
			<div className='text-right pb-2 pt-5 pr-4 relative h-23 flex flex-col justify-end'>
				{discount && (
					<div className='flex w-full justify-end'>
						<p className='text-xl text-neutral-400 relative'>
							<span className='text-sm text-neutral-400 align-text-top'>$ </span>
							{price}
							<div className='h-[2px] w-full absolute bg-neutral-400 top-3 left-0' />
						</p>
					</div>
				)}
				<p className='text-3xl'>
					<span className='text-sm text-neutral-800 align-text-top'>$ </span>
					{discountPriceFormatted}
				</p>

				{dayRemaining && (
					<p
						className={cn(
							'absolute bottom-2 left-3 text-lg text-neutral-400',
							dayRemaining <= 2 && 'text-red-500',
						)}
					>
						{dayRemaining} days remaining
					</p>
				)}
			</div>
		</Link>
	)
}
