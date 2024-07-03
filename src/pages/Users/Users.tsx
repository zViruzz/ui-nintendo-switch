import { useAppSelector } from '../../redux/hooks'
import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import OptionList from '../../components/OptionsList'
import Header from '../../components/Header'
import CharacterProfile from '../../components/CharacterProfile'
import { useEffect } from 'react'
import { useControllerContext } from '../../context/controller'
import { useTranslation } from 'react-i18next'

function Users () {
  const { controllerButtonB, controllerButtonA } = useControllerContext()
  const { t } = useTranslation()

  const options = [
    { name: t('users.options.profile'), path: '/profile' },
    { name: 'line', path: '' },
    { name: t('users.options.friend-list'), path: '/friend-list' },
    { name: t('users.options.trending'), path: '/trending' },
    { name: t('users.options.online-play-invites'), path: '/online-play-invites' },
    { name: t('users.options.friend-suggestions'), path: '/friend-suggestions' },
    { name: t('users.options.add-friends'), path: '/add-friends' },
    { name: 'line', path: '' },
    { name: t('users.options.user-settings'), path: '/user-settings' }
  ]

  useEffect(() => {
    controllerButtonB({
      text: 'controller.buttonB.back',
      route: '/'
    })
    controllerButtonA({
      text: 'controller.buttonA.ok'
    })
  }, [])

  const user = useAppSelector((state) => state.user)
  return (
    <motion.section
      className='grid grid-rows-[1fr_7.5fr] grid-cols-[38.3rem_1fr] h-full w-full pt-5'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >

      {/* <div className="grid grid-rows-[1fr_7.5fr] grid-cols-[38.3rem_1fr] h-full w-full pt-5"> */}
        <Header>
          <CharacterProfile className='w-20 h-20 rounded-full' />
          <h2>Pagina de {user.username}</h2>
        </Header>

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
      {/* </div> */}
    </motion.section>
  )
}

export default Users
