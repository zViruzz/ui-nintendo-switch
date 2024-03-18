import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import SettingIcon from './icons/SettingIcon'
import ControllerIcon from './icons/ControllerIcon'
import PowerIcon from './icons/PowerIcon'
import GalleryIcon from './icons/GalleryIcon'
import ShoppingBagIcon from './icons/ShoppingBagIcon'
import ChatIcon from './icons/ChatIcon'
import huhSound from '../assets/huh.mp3'

function MenuHome () {
  return (
    <nav className='w-full h-full '>
      <ul className='flex  justify-center mx-auto w-[61rem] grid-rows-1 gap-5'>
        <ButtonMenu router='setting' text='Noticias'>
          <ChatIcon width={75} height={75} />
        </ButtonMenu>
        <ButtonMenu router='setting' text='Nintendo eShop'>
          <ShoppingBagIcon width={70} height={70} />
        </ButtonMenu>
        <ButtonMenu router='setting' text='Album'>
          <GalleryIcon width={75} height={75} />
        </ButtonMenu>

        <ButtonMenu router='setting' text='Controles'>
          <ControllerIcon width={83} height={83} />
        </ButtonMenu>
        <ButtonMenu router='setting' text='Configuracion de la consola'>
          <SettingIcon width={82} height={82} />
        </ButtonMenu>
        <ButtonMenu router='setting' text='Modo de espera'>
          <PowerIcon width={75} height={75} />
        </ButtonMenu>

      </ul>
    </nav>
  )
}

function ButtonMenu ({ children, router, text }: { children: ReactNode, router: string, text: string }) {
  const sound = new window.Audio(huhSound)

  return (
    <li
      onMouseDown={() => {
        sound.play()
        console.log('huh')
      }}
      className='ButtonMenu text-[#15bffd]  text-center text-[2.5rem]  relative group cursor-pointer'
    >

      <div className='bg-[#505050] w-full h-full  rounded-full grid place-content-center text-[#d9d9d9] outline-8 group-hover:outline group-hover:animate-wiggle shadow-Nbutton transition-all duration-100'>
        <Link to={router}>
          {children}
        </Link>
      </div>
      <div className='absolute left-1/2 transform -translate-x-1/2 w-auto whitespace-nowrap group-hover:opacity-100 opacity-0 transition-all text-center '>
        {text}
      </div>
    </li>
  )
}

export default MenuHome
