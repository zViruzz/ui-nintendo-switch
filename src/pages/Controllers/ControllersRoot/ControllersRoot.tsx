import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import ControllerIcon from '../../../components/icons/ControllerIcon'
import nintendoSwitchIcon from '../../../assets/images/nintendo-switch.webp'
import BatteryIcon from '../../../components/icons/BatteryIcon'

export function ControllersRoot () {
  return (
    <>
      <Header>
        <ControllerIcon width={83} height={83} />
        <h2>Controllers</h2>
      </Header>

      <div className='pl-12 grid grid-rows-[1fr_9.7rem] pr-11'>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-4xl flex-1 flex flex-col-reverse text-description'>
            <p className='py-5'>Console</p>
          </div>
          <img
            className='w-[38%]'
            src={nintendoSwitchIcon}
            alt="Nintendo Switch Icon"
          />
          <div className='flex-1 text-[52px]'>
            <div className='pt-3 flex gap-16'>
              <BatteryIcon />
              <BatteryIcon />
              <BatteryIcon />
            </div>
          </div>
        </div>
        <div className='border-t border-t-gray flex justify-center items-center text-[35px]'>
          No other controllers are connected.
        </div>
      </div>

      <nav className='min-h-full pr-12 bg-gradient-to-t from-transparent from-5% via-[#4e4e4e] via-50% to-transparent to-100% text-secodary text-[2.6rem]'>
        <ul className='h-full w-full pl-12 pt-10 flex flex-col justify-evenly hover:[&>li>a]:bg-[#252d328a] focus-visible:[&>li>a]:bg-[#252d328a] [&>li>a]:outline-wiggle-focus [&>li]:w-full [&>li]:h-[7.4rem] [&>li>a]:w-full [&>li>a]:h-full [&>li>a]:flex [&>li>a]:items-center [&>li>a]:px-5'>
          <li>
            <Link to='/controllers'>
              Change Grid/Order
            </Link>
          </li>
          <li>
            <Link to='/controllers/find-controllers'>
              Find Controllers
            </Link>
          </li>
          <li>
            <Link to='/controllers/new-controllers'>
              Pairing New Controllers
            </Link>
          </li>
          <li>
            <Link to='/'>
              Close
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
