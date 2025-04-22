import { createBrowserRouter } from 'react-router'
import App from './App.tsx'
import Dashboard from './Dashboard.tsx'
import RedirecApp from './RedirecApp.tsx'
import {
	Album,
	BlockedUserList,
	ChangeGripOrOrder,
	Controllers,
	EditIcon,
	Eshop,
	FindControllers,
	FriendSettings,
	NewControllers,
	NewControllersDetail,
	News,
	PlayActivitySettings,
	Setting,
	Users,
} from './pages'
import { ControllersRoot } from './pages/Controllers/ControllersRoot/ControllersRoot.tsx'
import ErrorMessage from './pages/ErrorMessage.tsx'
import { EshopHome } from './pages/Eshop/Home/EshopHome.tsx'
import { BestSellers } from './pages/Eshop/Home/options/BestSellers.tsx'
import { ComingSoon } from './pages/Eshop/Home/options/ComingSoon.tsx'
import { EnterCode } from './pages/Eshop/Home/options/EnterCode.tsx'
import { Featured } from './pages/Eshop/Home/options/Featured.tsx'
import { GreatDeals } from './pages/Eshop/Home/options/GreatDeals.tsx'
import { NintendoSwitchOnline } from './pages/Eshop/Home/options/NintendoSwitchOnline.tsx'
import { RecentRealeases } from './pages/Eshop/Home/options/RecentReleases.tsx'
import { Search } from './pages/Eshop/Home/options/Search.tsx'
import LoadingEshop from './pages/Eshop/Loading.tsx'
import Home from './pages/Home.tsx'
import {
	AirplaneMode,
	Amiibo,
	Bluetooth,
	DataManagement,
	HealthSecurity,
	Internet,
	LockScreen,
	Mii,
	Notifications,
	ParentalControl,
	ScreenBrightness,
	SettingUser,
	SleepMode,
	Theme,
} from './pages/Setting/options'
import System from './pages/Setting/options/System.tsx'
import {
	AddFriends,
	FriendList,
	FriendSuggestions,
	OnlinePlayInvites,
	Profile,
	Trending,
	UserSettings,
} from './pages/Users/Options'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
		errorElement: <ErrorMessage />,
		children: [
			{
				path: '/',
				element: <RedirecApp />,
			},
			{
				path: '/app',
				element: <App />,
				children: [
					{
						path: '/app',
						element: <Home />,
					},

					{
						path: 'album',
						element: <Album />,
					},
					{
						path: 'change-grip-or-order',
						element: <ChangeGripOrOrder />,
					},
					{
						path: 'edit-icon',
						element: <EditIcon />,
					},
					{
						path: 'friend-settings',
						element: <FriendSettings />,
					},
					{
						path: 'blocked-user-list',
						element: <BlockedUserList />,
					},

					{
						path: 'play-activity-settings',
						element: <PlayActivitySettings />,
					},
					{
						path: 'controllers',
						element: <Controllers />,
						children: [
							{
								path: '/app/controllers',
								element: <ControllersRoot />,
							},
							{
								path: 'find-controllers',
								element: <FindControllers />,
							},
							{
								path: 'new-controllers',
								element: <NewControllers />,
							},
							{
								path: 'new-controllers-detail',
								element: <NewControllersDetail />,
							},
						],
					},
					{
						path: 'users',
						element: <Users />,
						children: [
							{
								path: 'profile',
								element: <Profile />,
							},
							{
								path: 'friend-list',
								element: <FriendList />,
							},
							{
								path: 'trending',
								element: <Trending />,
							},
							{
								path: 'online-play-invites',
								element: <OnlinePlayInvites />,
							},
							{
								path: 'friend-suggestions',
								element: <FriendSuggestions />,
							},
							{
								path: 'add-friends',
								element: <AddFriends />,
							},
							{
								path: 'user-settings',
								element: <UserSettings />,
							},
						],
					},
					{
						path: 'setting',
						element: <Setting />,
						children: [
							{
								path: 'health-security',
								element: <HealthSecurity />,
							},
							{
								path: 'airplane-Mode',
								element: <AirplaneMode />,
							},
							{
								path: 'screen-brightness',
								element: <ScreenBrightness />,
							},
							{
								path: 'bluetooth',
								element: <Bluetooth />,
							},
							{
								path: 'lock-screen',
								element: <LockScreen />,
							},
							{
								path: 'parental-control',
								element: <ParentalControl />,
							},
							{
								path: 'internet',
								element: <Internet />,
							},
							{
								path: 'data-management',
								element: <DataManagement />,
							},
							{
								path: 'setting-user',
								element: <SettingUser />,
							},
							{
								path: 'mii',
								element: <Mii />,
							},
							{
								path: 'amiibo',
								element: <Amiibo />,
							},
							{
								path: 'theme',
								element: <Theme />,
							},
							{
								path: 'notifications',
								element: <Notifications />,
							},
							{
								path: 'sleep-mode',
								element: <SleepMode />,
							},
							{
								path: 'controls-sensors',
								element: <HealthSecurity />,
							},
							{
								path: 'tv-settings',
								element: <HealthSecurity />,
							},
							{
								path: 'system',
								element: <System />,
							},
						],
					},
				],
			},
			{
				path: '/news',
				element: <News />,
			},
			{
				path: '/eshop',
				element: (
					<LoadingEshop>
						<Eshop />
					</LoadingEshop>
				),
				children: [
					{
						path: 'home',
						element: <EshopHome />,
						children: [
							{
								path: 'search',
								element: <Search />,
							},
							{
								path: 'featured',
								element: <Featured />,
							},
							{
								path: 'recent-releases',
								element: <RecentRealeases />,
							},
							{
								path: 'great-deals',
								element: <GreatDeals />,
							},
							{
								path: 'best-sellers',
								element: <BestSellers />,
							},
							{
								path: 'coming-soon',
								element: <ComingSoon />,
							},
							{
								path: 'nintendo-switch-online',
								element: <NintendoSwitchOnline />,
							},
							{
								path: 'enter-code',
								element: <EnterCode />,
							},
						],
					},
				],
			},
		],
	},
])
