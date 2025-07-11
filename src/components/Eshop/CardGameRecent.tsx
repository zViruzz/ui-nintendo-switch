import { Link } from 'react-router'

export function CardGameRecent({ price, urlImage }: { price: string; urlImage: string }) {
	return (
		<Link
			to=''
			className='w-full bg-white grid grid-rows-[10fr_auto] shadow outline-wiggle-focus'
		>
			<img className='object-cover w-full h-full' src={urlImage} alt={urlImage} />
			<div className='text-3xl px-3 py-1 text-right pb-2 pt-7 pr-4'>
				<p>
					<span className='text-sm text-neutral-800 align-text-top'>$ </span>
					{price}
				</p>
			</div>
		</Link>
	)
}
