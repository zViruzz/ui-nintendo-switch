import { Link } from 'react-router'
import imageUrlNintendoSwitch2 from '../../../../assets/NSwitch2_HWKeyvisual.jpg'
import imageUrlLuigisMansion from '../../../../assets/luigis-mansion.webp'
import imageUrlMarioKart from '../../../../assets/mario-kart-8-deluxe.webp'
import imageUrlSuperMarioBros from '../../../../assets/super-mario-bros.webp'
import imageUrlSuperMario from '../../../../assets/super-mario-odyssey.webp'
import imageUrlZelda from '../../../../assets/zelda.webp'
import { CardGameFeatured } from '../../../../components/CardGameFeatured'
import CharacterProfile from '../../../../components/CharacterProfile'
import ArrowThisRightIcon from '../../../../icons/ArrowThinRight'
import ListPageTransition from '../../../../transitions/ListPageTransition'

export function Featured() {
	return (
		<ListPageTransition>
			<main className='w-full h-full px-[6.5%] py-20 pb-40 overflow-auto'>
				<div className='flex w-full justify-between'>
					<h1>Featured</h1>
					<Link
						to='profile'
						className='rounded flex gap-3 items-center outline-wiggle-focus'
					>
						<CharacterProfile className='w-20 h-20 rounded-full' />
						<ArrowThisRightIcon className='w-8 h-8 text-red-500' />
					</Link>
				</div>
				<div className='w-full mt-5 grid grid-cols-2 gap-3 grid-rows-3'>
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
			</main>
		</ListPageTransition>
	)
}
