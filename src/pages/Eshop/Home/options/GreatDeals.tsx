import { CardGameRecent } from '../../../../components/Eshop/CardGameRecent'
import { HeaderTitle } from '../../../../components/Eshop/HeaderTitle'
import ListPageTransition from '../../../../transitions/ListPageTransition'
import { EshopOptionsContainer } from '../../../../ui/EshopOptionsContainer'
import imageUrlNintendoSwitch2 from '../../../../assets/NSwitch2_HWKeyvisual.jpg'

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
					<CardGameRecent price='48,74' urlImage={imageUrlNintendoSwitch2} />
					<CardGameRecent price='48,74' urlImage={imageUrlNintendoSwitch2} />
					<CardGameRecent price='48,74' urlImage={imageUrlNintendoSwitch2} />
					<CardGameRecent price='48,74' urlImage={imageUrlNintendoSwitch2} />
					<CardGameRecent price='48,74' urlImage={imageUrlNintendoSwitch2} />
					<CardGameRecent price='48,74' urlImage={imageUrlNintendoSwitch2} />
				</div>
			</EshopOptionsContainer>
		</ListPageTransition>
	)
}
