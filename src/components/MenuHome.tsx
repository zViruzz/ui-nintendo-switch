import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import SettingIcon from './icons/SettingIcon'
import ControllerIcon from './icons/ControllerIcon'
import PowerIcon from './icons/PowerIcon'
import GalleryIcon from './icons/GalleryIcon'
import ShoppingBagIcon from './icons/ShoppingBagIcon'
import ChatIcon from './icons/ChatIcon'

function MenuHome () {
  function ButtonMenu ({ children, router, text }: { children: ReactNode, router: string, text: string }) {
    return (
      <li
        className='grid justify-center text-[#15bffd] text-center text-4xl h-48 relative group'
      >
        <div className='bg-[#505050] rounded-full w-32 h-32 grid place-content-center text-[#d9d9d9] outline-8 outline-[#15bffd] group-hover:outline  group-hover:animate-wiggle shadow-Nbutton  transition-all duration-100'>
          <Link to={router}>
            {children}
          </Link>
        </div>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto whitespace-nowrap group-hover:opacity-100 opacity-0 transition-all text-center '>
          {text}
        </div>
      </li>
    )
  }

  return (
    <nav className='grid w-full h-full place-content-center'>
      <ul className='grid grid-cols-6 mx-auto w-[61rem] grid-rows-1'>
        <ButtonMenu router='setting' text='Noticias'>
          <ChatIcon width={65} height={65} />
        </ButtonMenu>
        <ButtonMenu router='setting' text='Nintendo eShop'>
          <ShoppingBagIcon width={60} height={60} />
        </ButtonMenu>
        <ButtonMenu router='setting' text='Album'>
          <GalleryIcon width={65} height={65} />
        </ButtonMenu>

        <ButtonMenu router='setting' text='Controles'>
          <ControllerIcon width={70} height={70} />
        </ButtonMenu>
        <ButtonMenu router='setting' text='Configuracion de la consola'>
          <SettingIcon width={60} height={60} />
        </ButtonMenu>
        <ButtonMenu router='setting' text='Modo de espera'>
          <PowerIcon width={65} height={65} />
        </ButtonMenu>

      </ul>
    </nav>
  )
}

export default MenuHome
