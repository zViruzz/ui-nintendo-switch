import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import SettingIcon from '../../components/icons/SettingIcon'
import OptionList from '../../components/OptionsList'
import { useEffect } from 'react'
import { useControllerContext } from '../../context/controller'
import { useTranslation } from 'react-i18next'

function Setting () {
  const { controllerButtonB } = useControllerContext()
  const { t } = useTranslation()

  const options = [
    { name: t('setting.options.health-security'), path: '/health-security' },
    { name: 'line', path: '' },
    { name: t('setting.options.airplane-mode'), path: '/airplane-mode' },
    { name: t('setting.options.screen-brighness'), path: '/screen-brightness' },
    { name: t('setting.options.bluetooth'), path: '/bluetooth' },
    { name: t('setting.options.lock-screen'), path: '/lock-screen' },
    { name: 'line', path: '' },
    { name: t('setting.options.parental-control'), path: '/parental-control' },
    { name: t('setting.options.internet'), path: '/internet' },
    { name: t('setting.options.data-management'), path: '/data-management' },
    { name: t('setting.options.setting-user'), path: '/setting-user' },
    { name: t('setting.options.mii'), path: '/mii' },
    { name: t('setting.options.amiibo'), path: '/amiibo' },
    { name: 'line', path: '' },
    { name: t('setting.options.theme'), path: '/theme' },
    { name: t('setting.options.notifications'), path: '/notifications' },
    { name: t('setting.options.standby-mode'), path: '/standby-mode' },
    { name: 'line', path: '' },
    { name: t('setting.options.controls-sensors'), path: '/controls-sensors' },
    { name: t('setting.options.tv-settings'), path: '/tv-settings' },
    { name: t('setting.options.system'), path: '/system' }
  ]

  useEffect(() => {
    controllerButtonB({
      text: 'controller.buttonB.back',
      route: '/'
    })
  }, [])

  return (
    <motion.div
      className='grid grid-rows-[1fr_7.5fr] grid-cols-[38.3rem_1fr] h-full w-full pt-5'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >

      <header className="col-span-2 px-12 flex justify-between flex-col">
        <div className='flex items-center text-[3rem] w-full h-full px-[3rem] gap-4'>
          <SettingIcon width={79} height={79} />
          <h2>Configuracion de la consola</h2>
        </div>
        <div className='w-full h-[1px] bg-[#ffffff] shrink-0' />
      </header>
      <nav className="pl-24 min-h-full  bg-gradient-to-t from-transparent from-5% via-[#323232] via-50% to-transparent to-100%">
        <OptionList options={options} />
      </nav>

      <section className='pr-12 overflow-auto scrollbar-hide '>
          <div
          tabIndex={-1}
          className='section-focus focus:outline-none px-[5.75rem] py-[4.2rem] text-4xl text-[2.1rem] leading-normal'
        >
          <Outlet />
          </div>
      </section>
    </motion.div>

  )
}

export default Setting
