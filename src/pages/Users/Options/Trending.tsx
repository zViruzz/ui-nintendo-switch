import pokemonUnite from '../../../assets/images/pokemon-unite.webp'
import gameThumbnail from '../../../assets/images/vivi.jpg'
import FaceIcon from '../../../components/icons/FaceIcon'
import TrendingView from '../../../components/layouts/TrendingView'
import TrendingItem from '../../../components/TrendingItem'
import { TrendingProvider } from '../../../context/trending'

export function Trending () {
  return (
    <TrendingProvider>
      <div>
        <div className='mb-10'>
          <p><FaceIcon className='inline w-9 h-9' /> Check out what games are trending with your friends!</p>
        </div>

        <div className="grid grid-cols-res h-full gap-5">
          <TrendingItem
            url={pokemonUnite}
            title='The Legend of Zelda: Breath of the Wild'
            label='Played by 1 friend'
          />
          <TrendingItem
            url={gameThumbnail}
            title='Title game'
            label='Played by 1 friend'
          />
          <TrendingItem
            url={gameThumbnail}
            title='Title game'
            label='Played by 1 friend'
          />
          <TrendingItem
            url={gameThumbnail}
            title='Title game'
            label='Played by 1 friend'
          />
        </div>

        <TrendingView />
      </div>
    </TrendingProvider>
  )
}
