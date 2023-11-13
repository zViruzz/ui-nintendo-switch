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
import ScreenBrightness from './pages/Setting/ScreenBrightness.tsx'

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
            path: '/setting/airplane-Mode',
            element: <div>modo avion lol</div>
          },
          {
            path: '/setting/screen-brightness',
            element: <ScreenBrightness />
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
