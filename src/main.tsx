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
            element: <HealthSecurity />
          },
          {
            path: '/setting/parental-control',
            element: <HealthSecurity />
          },
          {
            path: '/setting/internet',
            element: <HealthSecurity />
          },
          {
            path: '/setting/data-management',
            element: <HealthSecurity />
          },
          {
            path: '/setting/setting-user',
            element: <HealthSecurity />
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
