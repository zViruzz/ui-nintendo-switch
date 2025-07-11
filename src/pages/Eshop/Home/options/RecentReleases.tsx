import ListPageTransition from '../../../../transitions/ListPageTransition'
import { CardGameRecent } from '../../../../components/Eshop/CardGameRecent'

import imageUrlLuigisMansion from '../../../../assets/luigis-mansion.webp'
import imageUrlMarioKart from '../../../../assets/mario-kart-8-deluxe.webp'
import imageUrlSuperMarioBros from '../../../../assets/super-mario-bros.webp'
import imageUrlSuperMario from '../../../../assets/super-mario-odyssey.webp'
import imageUrlZelda from '../../../../assets/zelda.webp'
import { HeaderTitle } from '../../../../components/Eshop/HeaderTitle'
import { EshopOptionsContainer } from '../../../../ui/EshopOptionsContainer'

export function RecentRealeases() {
	return (
		<ListPageTransition>
			<EshopOptionsContainer>
				<HeaderTitle title='Recent Realeases' />
				<div className='w-full mt-9 grid grid-cols-3 gap-3 grid-rows-3'>
					<CardGameRecent price='69.99' urlImage={imageUrlSuperMario} />
					<CardGameRecent price='59.99' urlImage={imageUrlMarioKart} />
					<CardGameRecent price='69.99' urlImage={imageUrlSuperMarioBros} />
					<CardGameRecent price='69.99' urlImage={imageUrlZelda} />
					<CardGameRecent price='49.99' urlImage={imageUrlLuigisMansion} />
				</div>
			</EshopOptionsContainer>
		</ListPageTransition>
	)
}
