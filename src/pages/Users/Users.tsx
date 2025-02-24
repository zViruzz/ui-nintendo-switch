import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import CharacterProfile from '../../components/CharacterProfile'
import Header from '../../components/Header'
import OptionList from '../../components/OptionsList'
import useControllers from '../../hooks/useControllers'
import { useAppSelector } from '../../redux/hooks'

function Users() {
	const { t } = useTranslation()

	const options = [
		{ name: t('users.options.profile'), path: '/profile' },
		{ name: 'line', path: '' },
		{ name: t('users.options.friend-list'), path: '/friend-list' },
		{ name: t('users.options.trending'), path: '/trending' },
		{
			name: t('users.options.online-play-invites'),
			path: '/online-play-invites',
		},
		{
			name: t('users.options.friend-suggestions'),
			path: '/friend-suggestions',
		},
		{ name: t('users.options.add-friends'), path: '/add-friends' },
		{ name: 'line', path: '' },
		{
			name: t('users.options.user-settings'),
			path: '/user-settings',
		},
	]

	useControllers({
		settingButtonA: {
			text: 'controller.buttonA.ok',
		},
		settingButtonB: {
			text: 'controller.buttonB.back',
			route: -1,
		},
	})

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
			<Header title={`Pagina de ${user.username}`}>
				<CharacterProfile className='w-20 h-20 rounded-full' />
				{/* <h2>Pagina de {user.username}</h2> */}
			</Header>

			<nav className='pl-24 min-h-full  bg-linear-to-t from-transparent from-5% dark:via-[#323232] via-[#f0f0f0] via-50% to-transparent to-100%'>
				<OptionList options={options} />
			</nav>

			<section className='pr-12 overflow-auto scrollbar-hide '>
				<div
					tabIndex={-1}
					className='section-focus focus:outline-hidden px-[5.75rem] py-[4.2rem] text-4xl text-[2.1rem] leading-normal'
				>
					<Outlet />
				</div>
			</section>
			{/* </div> */}
		</motion.section>
	)
}

export default Users
