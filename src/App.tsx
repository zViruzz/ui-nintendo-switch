import './global.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { ControllerProvider } from './context/controller'
import { useTranslation } from 'react-i18next'

function App () {
  const { t } = useTranslation()

  return (
    <>
      <ControllerProvider>
        <main>
          <div className='absolute w-screen h-screen bg-[#0000008a]  z-40 grid place-content-center'>
            <div className='bg-neutral-600 w-96 h-60 rounded-2xl'>
              <h2>Nintendo Switch UI</h2>
              <p>{t('start.message.description')}</p>
            </div>
          </div>
          <Outlet />
        </main>
        <Footer />
      </ControllerProvider>
    </>
  )
}

export default App
