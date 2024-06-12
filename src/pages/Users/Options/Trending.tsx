import FaceIcon from '../../../components/icons/FaceIcon'
import TrendingView from '../../../components/layouts/TrendingView'
import TrendingItem from '../../../components/TrendingItem'
import { TrendingProvider } from '../../../context/trending'
import { game } from '../../../static/game'

export function Trending () {
  return (
    <TrendingProvider>
      <div>
        <div className='mb-10'>
          <p><FaceIcon className='inline w-9 h-9' /> Check out what games are trending with your friends!</p>
        </div>

        <div className="grid grid-cols-res h-full gap-5">

        {
          game.map(game => (
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
  )
}
