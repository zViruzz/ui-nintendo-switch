import { useAppSelector } from '../../redux/hooks'
import { Outlet } from 'react-router-dom'
import OptionList from '../../components/OptionsList'
import marioProfile from '../../assets/ns-mario-profile.jpg'

const options = [
  { name: 'Perfil', path: '/profile' },
  { name: 'line', path: '' },
  { name: 'Lista de amigos', path: '/friend-list' },
  { name: 'Tendencias', path: '/trending' },
  { name: 'Invitaciones para jugar en linea', path: '/online-play-invites' },
  { name: 'Sugerencias de amistad', path: '/friend-suggestions' },
  { name: 'Añadir amigo', path: '/add-friends' },
  { name: 'line', path: '' },
  { name: 'Ajustes de usuario', path: '/user-settings' }
]

function Users () {
  const user = useAppSelector((state) => state.user)
  return (
    <div className="grid grid-rows-[1fr_7.5fr]   grid-cols-[38.3rem_1fr] h-full w-full pt-5">
      <header className="col-span-2 px-12 flex justify-between flex-col">
        <div className='flex items-center text-[3rem] w-full h-full px-[3rem] gap-4'>
          <img
            className='w-20 h-20 rounded-full'
            src={marioProfile}
            alt="profile"
          />
          <h2>Pagina de {user.username}</h2>
        </div>
        <div className='w-full h-[1px] bg-[#ffffff] shrink-0' />
      </header>
      <nav className="pl-24 min-h-full  bg-gradient-to-t from-transparent from-5% via-[#323232] via-50% to-transparent to-100%">
        <OptionList options={options} />
      </nav>
      <section className='pr-12 overflow-auto scrollbar-hide '>
        <div className='px-[5.75rem] py-[4.2rem] text-4xl text-[2.1rem] leading-normal'>
          <Outlet />
        </div>
      </section>
    </div>
  )
}

export default Users
