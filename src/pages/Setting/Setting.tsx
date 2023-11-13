import { Outlet } from 'react-router-dom'
import SettingIcon from '../../components/icons/SettingIcon'
import OptionList from '../../components/OptionsList'
import { options } from '../../static/settingOptions'

function Setting () {
  return (
    <div className="grid grid-rows-[6rem_1fr] grid-cols-[1fr_2fr] h-full w-full pt-4">
      <header className="col-span-2 px-12 flex justify-between flex-col divide-y divide-zinc-300 ">
        <div className='flex items-center text-4xl w-full h-full px-10 gap-4'>
          <SettingIcon width={55} height={55} />
          <h2>Configuracion de la consola</h2>
        </div>
        <div></div>
      </header>
      <nav className="pl-20 min-h-full  bg-gradient-to-t from-transparent from-5% via-[#323232] via-50% to-transparent to-100%">
        <OptionList options={options} />
      </nav>
      <section className='px-16 py-14 text-4xl'>
        <Outlet />
      </section>
    </div>
  )
}

export default Setting
