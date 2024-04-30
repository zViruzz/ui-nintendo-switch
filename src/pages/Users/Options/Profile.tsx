import { Link } from 'react-router-dom'
import CharacterProfile from '../../../components/CharacterProfile'
import EditName from '../../../components/EditName'
import { useState } from 'react'
export function Profile () {
  const [isHiddenEditName, setIsHiddenEditName] = useState(true)

  return (
    <div className='flex gap-[6.7rem] flex-col'>

      <EditName isHidden={isHiddenEditName} setIsHidden={setIsHiddenEditName} />

      <div className='h-[20.5rem] flex gap-12 '>
        <div
          tabIndex={0}
          className='shrink-0 outline-[#15bffd] hover:outline outline-8 hover:animate-wiggle outline-offset-4 '
        >
          <Link to='/edit-icon'>
            <CharacterProfile className='w-full h-full' />
          </Link>
        </div>

        <div className='w-full h-full grid grid-rows-[2fr_3fr_1fr] pt-2 '>
          <div
            className='text-5xl border-t-[1px] border-gray flex justify-between items-center px-5'
            onClick={() => { setIsHiddenEditName(false) }}
          >
            <h1>Profile</h1>
            <div className='w-5 h-5 bg-slate-600'></div>
          </div>
          <div className='border-t-[1px] border-gray flex justify-between items-center px-5'>
            <p>Sin conexión</p>
            <div className='w-5 h-5 bg-slate-600'></div>
          </div>
          <div className='text-2xl border-t-[1px] border-gray flex justify-between items-center px-5'>
            <p>Clave de amigo: SW-3742-4567-4367-2344</p>
          </div>
        </div>
      </div>

      <div className='bg-black'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-3'>
            <div className={'bg-description h-[65%] w-[8px]'} />
            <h3>Play Activity</h3>
          </div>
          <div className='bg-description h-8 w-8'>
          </div>
        </div>
      </div>
    </div>
  )
}
