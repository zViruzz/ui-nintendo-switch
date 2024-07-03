import FaceIcon from '../../../components/icons/FaceIcon'
import TrendingView from '../../../components/layouts/TrendingView'
import ListPageTransition from '../../../components/transitions/ListPageTransition'
import TrendingItem from '../../../components/TrendingItem'
import { TrendingProvider } from '../../../context/trending'
import { game } from '../../../static/game'

export const trendingList = [
  { ...game[1] },
  { ...game[3] },
  { ...game[4] }
]

export function Trending () {
  return (
    <ListPageTransition>
      <TrendingProvider>
        <div>
          <div className='mb-10'>
            <p><FaceIcon className='inline w-9 h-9' /> Check out what games are trending with your friends!</p>
          </div>

          <div className="grid grid-cols-res h-full gap-5">
            {
              trendingList.map(game => (
                <TrendingItem
                  key={game.id}
                  id={game.id}
                  title={game.name}
                  url={game.urlImage}
                />
              ))
            }
          </div>

          <TrendingView />
        </div>
      </TrendingProvider>
    </ListPageTransition>
  )
}
