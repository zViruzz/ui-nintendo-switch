import imageUrlLuigisMansion from '../../../../assets/luigis-mansion.webp'
import imageUrlXenobladeChroniclesX from '../../../../assets/xenoblade-chronicles-x.webp'
import imageUrlMarioKart from '../../../../assets/mario-kart-8-deluxe.webp'
import imageUrlSuperMarioBros from '../../../../assets/super-mario-bros.webp'
import imageUrlSuperMario from '../../../../assets/super-mario-odyssey.webp'
import imageUrlZelda from '../../../../assets/zelda.webp'
import ListPageTransition from '../../../../transitions/ListPageTransition'
import { HeaderTitle } from '../../../../components/Eshop/HeaderTitle'
import { EshopOptionsContainer } from '../../../../ui/EshopOptionsContainer'
import { CardGame } from '../../../../components/Eshop/CardGame'

export function ComingSoon() {
	return (
		<ListPageTransition>
			<EshopOptionsContainer>
				<HeaderTitle title='Coming Soon' />
				<div className='w-full mt-9 grid grid-cols-3 gap-3 grid-rows-3'>
					<CardGame price={69.99} urlImage={imageUrlSuperMario} />
					<CardGame price={59.99} urlImage={imageUrlMarioKart} />
					<CardGame price={69.99} urlImage={imageUrlSuperMarioBros} />
					<CardGame price={69.99} urlImage={imageUrlZelda} />
					<CardGame price={49.99} urlImage={imageUrlLuigisMansion} />
					<CardGame price={49.99} urlImage={imageUrlXenobladeChroniclesX} />
				</div>
			</EshopOptionsContainer>
		</ListPageTransition>
	)
}

// function CardGameComingSoon({ urlImage }: { urlImage: string }) {
// 	return (
// 		<Link
// 			to=''
// 			className='w-full bg-white grid grid-rows-[10fr_auto] shadow outline-wiggle-focus relative'
// 		>
// 			<div className='relative'>
// 				<img className='object-cover w-full h-full' src={urlImage} alt={urlImage} />
// 				{discount && (
// 					<div className='absolute bottom-0 bg-red-500 text-white text-xl px-2 py-1'>
// 						{discount}% OFF
// 					</div>
// 				)}
// 			</div>
// 			<div className='text-right pb-2 pt-5 pr-4 relative h-23 flex flex-col justify-end'>
// 				{discount && (
// 					<div className='flex w-full justify-end'>
// 						<p className='text-xl text-neutral-400 relative'>
// 							<span className='text-sm text-neutral-400 align-text-top'>$ </span>
// 							{price}
// 							<div className='h-[2px] w-full absolute bg-neutral-400 top-3 left-0' />
// 						</p>
// 					</div>
// 				)}
// 				<p className='text-3xl'>
// 					<span className='text-sm text-neutral-800 align-text-top'>$ </span>
// 					{discountPriceFormatted}
// 				</p>

// 				{dayRemaining && (
// 					<p
// 						className={cn(
// 							'absolute bottom-2 left-3 text-lg text-neutral-400',
// 							dayRemaining <= 2 && 'text-red-500',
// 						)}
// 					>
// 						{dayRemaining} days remaining
// 					</p>
// 				)}
// 			</div>
// 		</Link>
// 	)
// }
