import imageUrlNintendoSwitch2 from '../../../../assets/NSwitch2_HWKeyvisual.jpg'
import imageUrlLuigisMansion from '../../../../assets/luigis-mansion.webp'
import imageUrlMarioKart from '../../../../assets/mario-kart-8-deluxe.webp'
import imageUrlSuperMarioBros from '../../../../assets/super-mario-bros.webp'
import imageUrlSuperMario from '../../../../assets/super-mario-odyssey.webp'
import imageUrlZelda from '../../../../assets/zelda.webp'
import { CardGameFeatured } from '../../../../components/Eshop/CardGameFeatured'
import ListPageTransition from '../../../../transitions/ListPageTransition'
import { HeaderTitle } from '../../../../components/Eshop/HeaderTitle'
import { EshopOptionsContainer } from '../../../../ui/EshopOptionsContainer'

export function Featured() {
	return (
		<ListPageTransition>
			<EshopOptionsContainer>
				<HeaderTitle title='Featured' />
				<div className='w-full mt-9 grid grid-cols-2 gap-3 grid-rows-3'>
					<CardGameFeatured
						title='Reserve your Nintendo Switch 2'
						urlImage={imageUrlNintendoSwitch2}
					/>
					<CardGameFeatured
						title='Super Mario Bros. Wonder'
						urlImage={imageUrlSuperMario}
					/>
					<CardGameFeatured title='Mario Kart' urlImage={imageUrlMarioKart} />
					<CardGameFeatured title='Super Mario Bros' urlImage={imageUrlSuperMarioBros} />
					<CardGameFeatured
						title='The Legend of Zelda Echoes of Windom'
						urlImage={imageUrlZelda}
					/>
					<CardGameFeatured title={`Luigi's Mansion`} urlImage={imageUrlLuigisMansion} />
				</div>
			</EshopOptionsContainer>
		</ListPageTransition>
	)
}
