import imageUrlLuigisMansion from '../../../../assets/luigis-mansion.webp'
import imageUrlMarioKart from '../../../../assets/mario-kart-8-deluxe.webp'
import imageUrlSuperMarioBros from '../../../../assets/super-mario-bros.webp'
import imageUrlSuperMario from '../../../../assets/super-mario-odyssey.webp'
import imageUrlZelda from '../../../../assets/zelda.webp'
import ListPageTransition from '../../../../transitions/ListPageTransition'
import { HeaderTitle } from '../../../../components/Eshop/HeaderTitle'
import { EshopOptionsContainer } from '../../../../ui/EshopOptionsContainer'
import { CardGame } from '../../../../components/Eshop/CardGame'

export function RecentRealeases() {
	return (
		<ListPageTransition>
			<EshopOptionsContainer>
				<HeaderTitle title='Recent Realeases' />
				<div className='w-full mt-9 grid grid-cols-3 gap-3 grid-rows-3'>
					<CardGame price={69.99} urlImage={imageUrlSuperMario} />
					<CardGame price={59.99} urlImage={imageUrlMarioKart} />
					<CardGame price={69.99} urlImage={imageUrlSuperMarioBros} />
					<CardGame price={69.99} urlImage={imageUrlZelda} />
					<CardGame price={49.99} urlImage={imageUrlLuigisMansion} />
				</div>
			</EshopOptionsContainer>
		</ListPageTransition>
	)
}
