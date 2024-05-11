import { Link } from 'react-router-dom'
import CharacterProfile from '../../../components/CharacterProfile'
import EditName from '../../../components/EditName'
import { useState } from 'react'
import { useAppSelector } from '../../../redux/hooks'
import { game } from '../../../static/game'

export function Profile () {
  const [isHiddenEditName, setIsHiddenEditName] = useState(true)
  const { username } = useAppSelector((state) => state.user)

  return (
    <div className='flex gap-[6.7rem] flex-col'>

      <EditName isHidden={isHiddenEditName} setIsHidden={setIsHiddenEditName} />

      <div className='h-[20.5rem] flex gap-12 '>
        <Link
          // tabIndex={-1}
          // id='LOLXD'
          className='shrink-0  outline-wiggle-focus outline-8 outline-offset-4 '
          to='/edit-icon'
        >
          <CharacterProfile className='w-full h-full' />
        </Link>

        <div className='w-full h-full grid grid-rows-[2fr_3fr_1fr] pt-2 '>
          <button
            className='bg-transparent bg-blue-hight-focus border-none outline-wiggle-focus text-5xl border-t-[1px] border-gray flex justify-between items-center px-5'
            onClick={() => { setIsHiddenEditName(false) }}
          >
            <h1>{username}</h1>
            <div className='w-5 h-5 bg-slate-600'></div>
          </button>
          <div className='border-t-[1px] border-gray flex justify-between items-center px-5'>
            <p>Sin conexión</p>
            <div className='w-5 h-5 bg-slate-600'></div>
          </div>
          <div className='text-2xl border-t-[1px] border-gray flex justify-between items-center px-5'>
            <p>Clave de amigo: SW-3742-4567-4367-2344</p>
          </div>
        </div>
      </div>

      <div>

        <div className='flex justify-between mb-2'>
          <div className='flex items-center gap-3'>
            <div className={'bg-description h-[65%] w-[8px]'} />
            <h3>Play Activity</h3>
          </div>
          <div className='bg-description h-8 w-8'>
          </div>
        </div>

        {/* -----------------------} */}
        <div className='flex flex-col [&>div]:p-5   divide-y divide-gray border-t-gray border-solid border-t-[1px]'>

          {game.slice(0, 3).map(({ id, urlImage, name }) => (
            <div
              key={id}
              className='flex gap-4 items-center'
            >
              <img src={urlImage} className='w-32 h-32' />
              <div className='flex flex-col gap-5'>
                <h4 className='text-4xl'>{name}</h4>
                <p className='text-3xl text-description'>Tiempo jugado 5 o mas</p>
              </div>
            </div>

          ))}
        </div>
        {/* -----------------------} */}

      </div>
    </div>
  )
}
