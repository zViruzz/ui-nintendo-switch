import { useState } from 'react'
import { HeaderTitle } from '../../../../components/Eshop/HeaderTitle'
import ListPageTransition from '../../../../transitions/ListPageTransition'
import { EshopOptionsContainer } from '../../../../ui/EshopOptionsContainer'
import { CardGame } from '../../../../components/Eshop/CardGame'
import cn from '../../../../utils/cn'
import imageUrlMarioKart from '../../../../assets/mario-kart-8-deluxe.webp'
import imageUrlLuigisMansion from '../../../../assets/luigis-mansion.webp'
import imageUrlSuperMarioBros from '../../../../assets/super-mario-bros.webp'
import imageUrlSuperMario from '../../../../assets/super-mario-odyssey.webp'
import imageUrlXenoblade from '../../../../assets/xenoblade-chronicles-x.webp'
import imageUrlZelda from '../../../../assets/zelda.webp'

export function BestSellers() {
	const [tabValue, setTabValue] = useState<'all-games' | 'download-only'>('all-games')

	return (
		<ListPageTransition>
			<EshopOptionsContainer>
				<HeaderTitle title='Best Sellers' />
				<div className='grid grid-cols-[auto_1fr_1fr_auto] items-center pt-9'>
					<div className='flex justify-center px-5'>
						<span className='border-3 text-2xl text-neutral-400 border-neutral-400 h-9 w-10 text-center rounded-tl-xl font-semibold '>
							L
						</span>
					</div>
					<button
						type='button'
						className={cn(
							'border-b-3 text-center text-3xl py-4',
							tabValue === 'all-games'
								? 'border-red-600 text-red-600 focus-within:outline-none'
								: 'border-neutral-300 text-neutral-400',
						)}
						onClick={() => {
							setTabValue('all-games')
						}}
					>
						All Games
					</button>
					<button
						type='button'
						className={cn(
							'border-b-3 text-center text-3xl py-4',
							tabValue === 'download-only'
								? 'border-red-600 text-red-600 focus-within:outline-none'
								: 'border-neutral-300 text-neutral-400',
						)}
						onClick={() => {
							setTabValue('download-only')
						}}
					>
						Download Only Games
					</button>
					<div className='flex justify-center'>
						<span className='border-3 text-2xl text-neutral-400 border-neutral-400 h-9 w-10 text-center rounded-tr-xl font-semibold '>
							R
						</span>
					</div>
				</div>

				<div className='w-full mt-6 grid grid-cols-3 gap-3'>
					<CardGame rank={1} price={59.99} urlImage={imageUrlSuperMario} />
					<CardGame rank={2} price={59.99} urlImage={imageUrlMarioKart} />
					<CardGame rank={3} price={59.99} urlImage={imageUrlSuperMarioBros} />
					<CardGame rank={4} price={59.99} urlImage={imageUrlZelda} />
					<CardGame rank={5} price={59.99} urlImage={imageUrlLuigisMansion} />
					<CardGame rank={6} price={59.99} urlImage={imageUrlXenoblade} />
				</div>
			</EshopOptionsContainer>
		</ListPageTransition>
	)
}
