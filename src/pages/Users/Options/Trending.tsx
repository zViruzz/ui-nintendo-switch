import TrendingItem from '../../../components/TrendingItem'
import { TrendingProvider } from '../../../context/trending'
import FaceIcon from '../../../icons/FaceIcon'
import { game } from '../../../static/game'
import ListPageTransition from '../../../transitions/ListPageTransition'
import TrendingView from '../../../ui/TrendingView'

export const trendingList = [
	{ ...game[1] },
	{ ...game[3] },
	{ ...game[4] },
]

export function Trending() {
	return (
		<ListPageTransition>
			<TrendingProvider>
				<div>
					<div className='mb-10'>
						<p>
							<FaceIcon className='inline w-9 h-9' /> Check out what
							games are trending with your friends!
						</p>
					</div>

					<div className='grid grid-cols-res h-full gap-5'>
						{trendingList.map((game) => (
							<TrendingItem
								key={game.id}
								id={game.id}
								title={game.name}
								url={game.urlImage}
							/>
						))}
					</div>

					<TrendingView />
				</div>
			</TrendingProvider>
		</ListPageTransition>
	)
}
