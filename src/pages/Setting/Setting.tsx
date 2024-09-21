import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import SettingIcon from '../../components/icons/SettingIcon'
import OptionList from '../../components/OptionsList'
import { useEffect } from 'react'
import { useControllerContext } from '../../context/controller'
import { useTranslation } from 'react-i18next'
import Header from '../../components/Header'

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
      className='grid grid-rows-[1fr_7.5fr] grid-cols-[1fr_2.12fr] h-full w-full pt-[1.1%]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >

      <Header>
        <SettingIcon className='xl:w-[79px] xl:h-[79px] w-[59px] h-[59px]' />
        <h2 className='xl:text-5xl lg:text-4xl md:text-4xl text-3xl'>Configuracion de la consola</h2>
      </Header>

      <nav className="pl-24 min-h-full bg-gradient-to-t from-transparent from-5% via-[#323232] via-50% to-transparent to-100%">
        <OptionList options={options} />
      </nav>

      <section className='pr-12 overflow-auto scrollbar-hide'>
        <div
          tabIndex={-1}
          className='section-focus focus:outline-none px-[5.75rem] py-[4.2rem] text-[2.1rem] leading-normal'
        >
          <Outlet />
        </div>
      </section>
    </motion.div>

  )
}

export default Setting
