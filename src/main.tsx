import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Error from './pages/Error.tsx'
import Home from './pages/Home.tsx'
import App from './App.tsx'
import './index.css'
import Setting from './pages/Setting/Setting.tsx'
import ScreenBrightness from './pages/Setting/options/ScreenBrightness.tsx'
import AirplaneMode from './pages/Setting/options/AirplaneMode.tsx'
import HealthSecurity from './pages/Setting/options/HealthSecurity.tsx'
import Bluetooth from './pages/Setting/options/Bluetooth.tsx'
import LockScreen from './pages/Setting/options/LockScreen.tsx'
import ParentalControl from './pages/Setting/options/ParentalControl.tsx'
import Internet from './pages/Setting/options/Internet.tsx'
import DataManagement from './pages/Setting/options/DataManagement.tsx'
import SettingUser from './pages/Setting/options/SettingUser.tsx'
import Users from './pages/Users/Users.tsx'
import Profile from './pages/Users/Options/Profile.tsx'
import FriendList from './pages/Users/Options/FriendList.tsx'
import Trending from './pages/Users/Options/Trending.tsx'
import OnlinePlayInvites from './pages/Users/Options/OnlinePlayInvites.tsx'
import FriendSuggestions from './pages/Users/Options/FriendSuggestions.tsx'
import AddFriends from './pages/Users/Options/AddFriends.tsx'
import UserSettings from './pages/Users/Options/UserSettings.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import EditIconLayout from './pages/EditIcon/Layout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/edit-icon',
        element: <EditIconLayout />
      },
      {
        path: '/users',
        element: <Users />,
        children: [
          {
            path: '/users/profile',
            element: <Profile />
          },
          {
            path: '/users/friend-list',
            element: <FriendList />
          },
          {
            path: '/users/trending',
            element: <Trending />
          },
          {
            path: '/users/online-play-invites',
            element: <OnlinePlayInvites />
          },
          {
            path: '/users/friend-suggestions',
            element: <FriendSuggestions />
          },
          {
            path: '/users/add-friends',
            element: <AddFriends />
          },
          {
            path: '/users/user-settings',
            element: <UserSettings />
          }
        ]
      },
      {
        path: '/setting',
        element: <Setting />,
        children: [
          {
            path: '/setting/health-security',
            element: <HealthSecurity />
          },
          {
            path: '/setting/airplane-Mode',
            element: <AirplaneMode />
          },
          {
            path: '/setting/screen-brightness',
            element: <ScreenBrightness />
          },
          {
            path: '/setting/bluetooth',
            element: <Bluetooth />
          },
          {
            path: '/setting/lock-screen',
            element: <LockScreen />
          },
          {
            path: '/setting/parental-control',
            element: <ParentalControl />
          },
          {
            path: '/setting/internet',
            element: <Internet />
          },
          {
            path: '/setting/data-management',
            element: <DataManagement />
          },
          {
            path: '/setting/setting-user',
            element: <SettingUser />
          },
          {
            path: '/setting/mii',
            element: <HealthSecurity />
          },
          {
            path: '/setting/amiibo',
            element: <HealthSecurity />
          },
          {
            path: '/setting/theme',
            element: <HealthSecurity />
          },
          {
            path: '/setting/notifications',
            element: <HealthSecurity />
          },
          {
            path: '/setting/standby-mode',
            element: <HealthSecurity />
          },
          {
            path: '/setting/controls-sensors',
            element: <HealthSecurity />
          },
          {
            path: '/setting/tv-settings',
            element: <HealthSecurity />
          },
          {
            path: '/setting/system',
            element: <HealthSecurity />
          }
        ]
      }
    ]
  }
])

// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
