import { Outlet } from 'react-router-dom'
import SettingIcon from '../../components/icons/SettingIcon'
import OptionList from '../../components/OptionsList'
import { options } from '../../static/settingOptions'

function Setting () {
  return (
    <div className="grid grid-rows-[6rem_1fr] grid-cols-[38.3rem_1fr] h-full w-full pt-8">
      <header className="col-span-2 px-12 flex justify-between flex-col gap-1">
        <div className='flex items-center text-[3rem] w-full h-full px-[2.5rem] gap-4'>
          <SettingIcon width={95} height={95} />
          <h2>Configuracion de la consola</h2>
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

export default Setting
