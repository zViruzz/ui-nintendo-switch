import { CardGame } from '../../../../components/Eshop/CardGame'
import { HeaderTitle } from '../../../../components/Eshop/HeaderTitle'
import ListPageTransition from '../../../../transitions/ListPageTransition'
import { EshopOptionsContainer } from '../../../../ui/EshopOptionsContainer'
import imageUrlLuigisMansion from '../../../../assets/luigis-mansion.webp'
import imageUrlMarioKart from '../../../../assets/mario-kart-8-deluxe.webp'
import imageUrlSuperMarioBros from '../../../../assets/super-mario-bros.webp'
import imageUrlSuperMario from '../../../../assets/super-mario-odyssey.webp'
import imageUrlXenoblade from '../../../../assets/xenoblade-chronicles-x.webp'
import imageUrlZelda from '../../../../assets/zelda.webp'

export function GreatDeals() {
	return (
		<ListPageTransition>
			<EshopOptionsContainer>
				<HeaderTitle title='Recent Realeases' />
				<div className=''>
					<p className='text-neutral-400 text-2xl py-8'>
						See the product information page for sale details.
					</p>
					<div className=' flex justify-between  items-center'>
						<span className='text-neutral-400 text-3xl'>
							Items: <span className='pl-5'>2215</span>
						</span>
						<button
							type='button'
							className='border-red-500 border-2 rounded-sm px-4 py-4 text-3xl text-red-500 flex items-center gap-2 outline-wiggle-focus focus:text-white focus:bg-red-500'
						>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									aria-hidden='true'
									transform='rotate(180)'
									width='0.9em'
									height='0.9em'
								>
									<circle cx='12' cy='12' r='10' fill='' />
									<path
										d='M12 8V12M12 12L8 16M12 12L16 16'
										stroke='currentColor'
										strokeWidth='2'
									/>
								</svg>
							</span>
							Filter
						</button>
					</div>
				</div>

				<div className='w-full mt-6 grid grid-cols-3 gap-3'>
					<CardGame
						price={59.99}
						discount={50}
						urlImage={imageUrlLuigisMansion}
						dayRemaining={2}
					/>
					<CardGame
						price={59.99}
						discount={50}
						urlImage={imageUrlMarioKart}
						dayRemaining={7}
					/>
					<CardGame
						price={59.99}
						discount={25}
						urlImage={imageUrlSuperMario}
						dayRemaining={4}
					/>
					<CardGame
						price={69.99}
						discount={20}
						urlImage={imageUrlZelda}
						dayRemaining={10}
					/>
					<CardGame
						price={69.99}
						discount={10}
						urlImage={imageUrlSuperMarioBros}
						dayRemaining={3}
					/>
					<CardGame
						price={49.99}
						discount={15}
						urlImage={imageUrlXenoblade}
						dayRemaining={5}
					/>
				</div>
			</EshopOptionsContainer>
		</ListPageTransition>
	)
}
