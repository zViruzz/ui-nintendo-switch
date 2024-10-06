import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ErrorMessage from './pages/ErrorMessage.tsx'
import Home from './pages/Home.tsx'
import {
	AirplaneMode,
	Bluetooth,
	DataManagement,
	HealthSecurity,
	Internet,
	LockScreen,
	ParentalControl,
	ScreenBrightness,
	SettingUser,
} from './pages/Setting/options'
import {
	AddFriends,
	FriendList,
	FriendSuggestions,
	OnlinePlayInvites,
	Profile,
	Trending,
	UserSettings,
} from './pages/Users/Options'
import './index.css'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
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
	News,
	PlayActivitySettings,
	Setting,
	Users,
} from './pages'
import { ControllersRoot } from './pages/Controllers/ControllersRoot/ControllersRoot.tsx'
import { store } from './redux/store.ts'

import './i18n.ts'
import { Suspense } from 'react'
import System from './pages/Setting/options/System.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorMessage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/edit-icon',
				element: <EditIcon />,
			},
			{
				path: '/users/user-settings/friend-settings',
				element: <FriendSettings />,
			},
			{
				path: '/users/user-settings/blocked-user-list',
				element: <BlockedUserList />,
			},
			{
				path: '/play-activity-settings',
				element: <PlayActivitySettings />,
			},
			{
				path: '/news',
				element: <News />,
			},
			{
				path: '/eshop',
				element: <Eshop />,
			},
			{
				path: '/album',
				element: <Album />,
			},
			{
				path: '/change-grip-or-order',
				element: <ChangeGripOrOrder />,
			},
			{
				path: '/controllers',
				element: <Controllers />,
				children: [
					{
						path: '/controllers',
						element: <ControllersRoot />,
					},
					{
						path: '/controllers/find-controllers',
						element: <FindControllers />,
					},
					{
						path: '/controllers/new-controllers',
						element: <NewControllers />,
					},
				],
			},
			{
				path: '/users',
				element: <Users />,
				children: [
					{
						path: '/users/profile',
						element: <Profile />,
					},
					{
						path: '/users/friend-list',
						element: <FriendList />,
					},
					{
						path: '/users/trending',
						element: <Trending />,
					},
					{
						path: '/users/online-play-invites',
						element: <OnlinePlayInvites />,
					},
					{
						path: '/users/friend-suggestions',
						element: <FriendSuggestions />,
					},
					{
						path: '/users/add-friends',
						element: <AddFriends />,
					},
					{
						path: '/users/user-settings',
						element: <UserSettings />,
					},
				],
			},
			{
				path: '/setting',
				element: <Setting />,
				children: [
					{
						path: '/setting/health-security',
						element: <HealthSecurity />,
					},
					{
						path: '/setting/airplane-Mode',
						element: <AirplaneMode />,
					},
					{
						path: '/setting/screen-brightness',
						element: <ScreenBrightness />,
					},
					{
						path: '/setting/bluetooth',
						element: <Bluetooth />,
					},
					{
						path: '/setting/lock-screen',
						element: <LockScreen />,
					},
					{
						path: '/setting/parental-control',
						element: <ParentalControl />,
					},
					{
						path: '/setting/internet',
						element: <Internet />,
					},
					{
						path: '/setting/data-management',
						element: <DataManagement />,
					},
					{
						path: '/setting/setting-user',
						element: <SettingUser />,
					},
					{
						path: '/setting/mii',
						element: <HealthSecurity />,
					},
					{
						path: '/setting/amiibo',
						element: <HealthSecurity />,
					},
					{
						path: '/setting/theme',
						element: <HealthSecurity />,
					},
					{
						path: '/setting/notifications',
						element: <HealthSecurity />,
					},
					{
						path: '/setting/standby-mode',
						element: <HealthSecurity />,
					},
					{
						path: '/setting/controls-sensors',
						element: <HealthSecurity />,
					},
					{
						path: '/setting/tv-settings',
						element: <HealthSecurity />,
					},
					{
						path: '/setting/system',
						element: <System />,
					},
				],
			},
		],
	},
])

const persistor = persistStore(store)

// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
).render(
	<PersistGate persistor={persistor}>
		<Provider store={store}>
			<Suspense fallback='loading'>
				<RouterProvider router={router} />
			</Suspense>
		</Provider>
	</PersistGate>,
)
